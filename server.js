// process.env.AWS_ACCESS_KEY

const Hapi = require("hapi");
const Gun = require("gun");

const server = new Hapi.Server({
  port: 8765,
  host: "localhost",
});

async function runtime() {
  new Gun({
    web: server.listener,
  });

  await server.start();
  console.log("Server running at:", server.info.uri);
}

runtime();
