const { join } = require("path");
function kmtslFooter() {
  return {
    image: join(__dirname, "../../../../../public/images/kmtslFooter.jpg"),
    width: 340,
    height: 75,
  };
}

module.exports = {
  kmtslFooter,
};
