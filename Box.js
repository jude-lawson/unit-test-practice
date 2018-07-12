function Box(height = 100, width = 100) {
  this.height = height,
  this.width = width
}

Box.prototype.area = function() {
  return this.height * this.width;
}

module.exports = Box;
