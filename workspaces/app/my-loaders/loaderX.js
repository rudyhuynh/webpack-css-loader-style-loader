const loaderX = function loaderX(content) {
  console.log("loaderX() start");

  return content;
};

loaderX.pitch = function pitch() {
  console.log("loaderX.pitch() start");
};

module.exports = loaderX;
