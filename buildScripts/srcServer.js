import express from "express";
import { join } from "path";
import webpack from "webpack";
import config from "../webpack.config.dev";
import open from "open";
/* eslint-disable no-console */
const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(
  require("webpack-dev-middleware")(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  })
);

app.get("/", function(req, res) {
  res.sendFile(join(__dirname, `../src/index.html`));
});

app.get("/users", function(req, res) {
  res.json([
    { id: 1, firstName: "Bob", lastName: "Smith", email: "bob@gmail.com" },
    { id: 2, firstName: "Hemmy", lastName: "Bastawi", email: "hemmy@gmail.com" }
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
