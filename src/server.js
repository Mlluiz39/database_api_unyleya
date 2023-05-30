const app = require("./app");

const port = process.env.PORT || "3000";

const server = app.listen(port, () => {
  if (process.env.NODE_ENV === "dev" || "dev") {
    console.log(`Listening to requests on http://localhost:${port}/products`);
  }else if (process.env.NODE_ENV === "start" || "start:dev") {
    console.log(`Listening to requests on https://api-uny.fly.dev/`);
  }
});

process.on("SIGINT", () => {
  server.close();
  console.log("Process terminated");
});