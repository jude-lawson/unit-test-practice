const chai = require('chai');
const assert = chai.assert;
const Box = require('../Box.js')

describe('Box', () => {
  it('should return true', () => {
    assert(true);
  });

  it('should have a default height and width', () => {
    let box = new Box();

    assert.equal(box.height, 100);
    assert.equal(box.width, 100);
  });

  it('should take a height and a width as arguments', () => {
    let box = new Box(50, 40);

    assert.equal(box.height, 50);
    assert.equal(box.width, 40);
  });


  
});
