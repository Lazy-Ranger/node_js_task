const express = require("express");
const { APP_CONFIG } = require("../config");
const { join } = require("path");

class ExpressApp {
  constructor() {
    this.app = express();
  }
  async start() {
    /**
     * Templates
     */

    this.app.set("view engine", "ejs");
    this.app.set("views", join(__dirname, "../views"));
    this.app.use(express.static(join(__dirname, "../public")));
    /**
     * _Pre middlewares
     */
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));

    this.app.get("/", (req, res) => {
      // doc.html("index");
      res.render("index");
    });

    this.app.listen(APP_CONFIG.PORT, () => {
      console.log(`App is listining at ${APP_CONFIG.PORT}`);
    });
  }
}

module.exports = {
  ExpressApp,
};
