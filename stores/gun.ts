import Gun from "gun/gun";
import "gun/sea.js";
import "gun/lib/webrtc.js";
import "gun/lib/not.js";
import "gun/lib/path.js";
import "gun/lib/load.js";
import { nanoid } from "nanoid";

// http://localhost:8765/gun
// https://mogwai.herokuapp.com/gun
export const gunStore = Gun({
  peers: ["http://localhost:8765/gun"],
  uuid: () => {
    return nanoid(11);
  },
});
