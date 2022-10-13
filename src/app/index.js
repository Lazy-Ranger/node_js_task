const express = require("express");
const { APP_CONFIG } = require("../config");
const { join } = require("path");
const morgan = require("morgan");

class ExpressApp {
  constructor() {
    this.app = express();
  }
  async start() {
    /**
     * Template
     */

    this.app.set("view engine", "ejs");
    this.app.set("views", join(__dirname, "../views"));
    this.app.use(express.static(join(__dirname, "../public")));
    /**
     * Pre middlewares
     */

    this.app.use(morgan(APP_CONFIG.LOGGER));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));

    this.app.get("/", (req, res) => {
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
