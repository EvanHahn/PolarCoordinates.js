var Polar = require('..');
var assert = require('assert');

describe('toCartesian', function() {

  var pi = Math.PI;
  var twopi = Math.PI * 2;

  it('converts r = 0 correctly with two arguments', function() {
    for (var t = 0; t < twopi; t += (pi / 10)) {
      assert.deepEqual(Polar.toCartesian(0, t), { x: 0, y: 0 });
    }
  });

  it('converts r = 0 correctly with object argument', function() {
    for (var t = 0; t < twopi; t += (pi / 10)) {
      assert.deepEqual(Polar.toCartesian({ r: 0, t: t }), { x: 0, y: 0 });
    }
  });

  it('converts r = 1 correctly with two arguments', function() {
    assert.deepEqual(Polar.toCartesian(1, 0), { x: 1, y: 0 });
    assert.deepEqual(Polar.toCartesian(1, pi / 2), { x: 0, y: 1 });
    assert.deepEqual(Polar.toCartesian(1, pi), { x: -1, y: 0 });
    assert.deepEqual(Polar.toCartesian(1, 3 * pi / 2), { x: 0, y: -1 });
  });

});
