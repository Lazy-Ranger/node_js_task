const express = require("express");
const { APP_CONFIG } = require("../config");
const morgan = require("morgan");
const { APP_ROUTER } = require("./router");

class ExpressApp {
  constructor() {
    this.app = express();
  }
  async start() {
    /**
     * Pre middlewares
     */

    this.app.use(morgan(APP_CONFIG.LOGGER));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));

    /**
     * App Routes
     */
    this.app.use(APP_ROUTER);

    this.app.listen(APP_CONFIG.PORT, () => {
      console.log(`App is listining at ${APP_CONFIG.PORT}`);
    });
  }
}

module.exports = {
  ExpressApp,
};
