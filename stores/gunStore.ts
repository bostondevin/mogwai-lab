import Gun from "gun/gun";
import { nanoid } from "nanoid";

const PUBLIC_AREA = "public";

const now = () => {
  const now = new Date();
  return now.getTime();
};

const getPeers = () => {
  if (process.env.NODE_ENV === "development") {
    return ["http://localhost:8765/gun"];
  } else {
    return ["http://localhost:8765/gun"];
  }
};

export const gun = Gun({
  peers: getPeers(),
  uuid: () => {
    const newId = nanoid(11);
    return newId;
  },
});

const customStore = (ref, methods = {}) => {
  let store = {};
  const subscribers = [];

  ref.on(function (data, key) {
    if (ref._.get === key) {
      store = data;
    } else if (!data) {
      delete store[key];
    } else {
      store[key] = data;
    }
    for (let i = 0; i < subscribers.length; i += 1) {
      subscribers[i](store);
    }
  });

  function subscribe(subscriber) {
    subscribers.push(subscriber);
    subscriber(store);
    return () => {
      const index = subscribers.indexOf(subscriber);
      if (index !== -1) {
        subscribers.splice(index, 1);
      }
      if (!subscribers.length) {
        ref.off();
      }
    };
  }

  return { ...methods, subscribe };
};

/*
const PUBLIC_USERS = "users",
  publicSpace = gun.get(PUBLIC_AREA);

const handleLogin = (u, n, cb) => {
  if (n.err) {
    cb(n);
  } else {
    gunUser.put(u, (d) => {
      publicSpace
        .get(PUBLIC_USERS)
        .get(n.alias)
        .set(u, () => {
          cb(n, u);
        });
    });
  }
};

const findPath = (id, store) => {
  if (id) {
    const pathParts = id.split("/");
    const root = pathParts.shift();

    const pathLength = pathParts.length;
    if (pathLength === 0) {
      return store;
    } else {
      return store.path(pathParts);
    }
  } else {
    return store;
  }
};

const authorize = (callback) => {
  gunUser.once((d) => {
    if (d._ && "#" in d._) {
      callback(d.alias);
    } else {
      console.error("UNAUTHORIZED ACCESS");
    }
  });
};

const getUser = (alias) => {
  return publicSpace.get("users").get(alias);
};

const recursiveCopy = (id, items, store, nStore) => {
  if (items) {
    items.forEach((item, i) => {
      //if (item.props.children) recursiveCopy(id, item.props.children, store, nStore);
      let newNodeObj = { ...item, order: i };
      delete newNodeObj.id;

      findPath(item.id, store).put(newNodeObj, (ack) => {
        if (ack.ok) {
          console.log("SAVED:::");
          console.log(newNodeObj);
          nStore.update(newNodeObj);
        }
      });
    });
  }
};

const common = {
  create: (id, data, callback, store) => {
    authorize((alias) => {
      const userRef = getUser(alias);
      findPath(id, publicSpace)
        .put(data, callback)
        .get("createdBy")
        .put(userRef, callback);
    });
  },
  read: (id, store) => findPath(id, store),
  save: (id, data, store, nStore) => {
    findPath(id, store).put(null, () => {
      recursiveCopy(id, data, store, nStore);
    });
    // nStore.delete(id);
    // findPath(id, store).put(null);
  },
  delete: (id, callback, store) => {
    //authorize((alias) => {
    findPath(id, store).put(null, callback);
    //});
  },
  update: (id, data, callback, store) => {
    //authorize((alias) => {
    findPath(id, store).put(data, callback);
    //});
  },
  upload: (id, data, callback, store) => {
    authorize((alias) => {
      console.log("implement upload!!!");
      // findPath(id, store).put(data, callback);
    });
  },
  assert: (statement, lang, callback) => {
    authorize((alias) => {
      //const userRef = getUser(alias);

      let predicateId;

      if ("id" in statement.predicate) {
        predicateId = statement.predicate.id;
      } else {
        predicateId = PUBLIC_AREA + "/predicates/" + nanoid(11);
        findPath(predicateId, publicSpace)
          .get("label")
          .get(lang)
          .put(statement.predicate.label);
      }

      const pObj = findPath(statement.subject.id, publicSpace).get(
        predicateId.replaceAll(predicateId, "/", ":")
      );

      if ("id" in statement.object) {
        const objectId = findPath(statement.object.id, publicSpace);
        pObj.put(objectId, callback);
      } else {
        const newId = nanoid(11);
        pObj
          .get(newId)
          .get("label")
          .get(lang)
          .put(statement.object.label, callback);
      }
    });
  },
};

export const publicStore = customStore(publicSpace.map(), {
  createWithLabel: (id, lang, label, callback) => {
    authorize((alias) => {
      const userRef = getUser(alias);
      findPath(id, publicSpace)
        .get("label")
        .get(lang)
        .put(label)
        .back()
        .get("createdBy")
        .set(userRef, callback);
    });
  },
  create: (id, data, callback) =>
    common.create(id, data, callback, publicSpace),
  assert: (statement, lang, callback) =>
    common.assert(statement, lang, callback),
  read: (id) => common.read(id, publicSpace),
  save: (id, data, nStore) => common.save(id, data, publicSpace, nStore),
  update: (id, data, callback) =>
    common.update(id, data, callback, publicSpace),
  upload: (id, data, callback) =>
    common.upload(id, data, callback, publicSpace),
  delete: (id, callback) => common.delete(id, callback, publicSpace),
});

export const privateStore = customStore(gunUser.map(), {
  createPredicate: (to, from, callback) => {
    gunUser.once((d) => {});
  },
  assert: (statement, lang, callback) =>
    common.assert(statement, lang, callback),
  create: (id, data, callback) => common.create(id, data, callback, gunUser),
  read: (id) => common.read(id, gunUser),
  save: (id, data, nStore) => common.save(id, data, gunUser, nStore),
  update: (id, data, callback) => common.update(id, data, callback, gunUser),
  upload: (id, data, callback) => common.upload(id, data, callback, gunUser),
  delete: (id, callback) => common.delete(id, callback, gunUser),
  deleteUser: (alias, password, cb) => {
    gunUser.delete(alias, password, (n) => {
      if (n.err) {
        cb(n);
      } else {
        cb(n);
      }
    });
  },
  createUser: (alias, password, cb) => {
    gunUser.create(alias, password, (n) => {
      handleLogin(
        {
          lastLoginAt: now(),
          isLoggedIn: true,
          alias,
        },
        n,
        cb
      );
    });
  },
  login: (alias, password, cb) => {
    gunUser.auth(alias, password, (n) => {
      handleLogin(
        {
          lastLoginAt: now(),
          isLoggedIn: true,
          alias,
        },
        n,
        cb
      );
    });
  },
  logout: (cb) => {
    gunUser.once((n) => {
      if (n) {
        publicSpace
          .get(PUBLIC_USERS)
          .get(n.alias)
          .put({
            lastLogoutAt: now(),
            isLoggedIn: false,
          })
          .once(() => {
            gunUser.leave().once(() => {
              cb({ ok: true });
            });
          });
      }
    });
  },
});

*/
