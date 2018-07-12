const chai = require('chai');
const assert = chai.assert;
const Box = require('../Box.js')

describe('Box', () => {
  let box;

  beforeEach(() => {
    box = new Box(30, 40);
  });

  it('should return true', () => {
    assert(true);
  });

  it('should have a default height and width', () => {
    let box = new Box();

    assert.equal(box.height, 100);
    assert.equal(box.width, 100);
  });

  it('should take a height and a width as arguments', () => {
    assert.equal(box.height, 30);
    assert.equal(box.width, 40);
  });

  it('should calculate its area', () => {
    assert.equal(box.area(), 1200);
  });
});
