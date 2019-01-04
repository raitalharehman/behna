module.exports = function behna(string) {
    if (typeof string !== "string") throw new TypeError("Behna wants a string!");
    return string.replace(/\s/g, "");
  };