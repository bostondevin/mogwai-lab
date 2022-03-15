import Gun from "gun/gun";
import "gun/sea.js";
import "gun/lib/webrtc.js";
import "gun/lib/not.js";
import "gun/lib/path.js";
import "gun/lib/load.js";
import { nanoid } from "nanoid";

export const gunStore = Gun({
  peers: ["https://mogwai-water.herokuapp.com/gun"],
  uuid: () => {
    return nanoid(11);
  },
});
