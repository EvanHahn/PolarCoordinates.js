var Polar = require('..');
var assert = require('assert');

describe('toCartesian', function() {

  var twopi = Math.PI * 2;

  it('converts r = 0 correctly with two arguments', function() {
    for (var t = 0; t < twopi; t += (Math.PI / 10)) {
      assert.deepEqual(Polar.toCartesian(0, t), { x: 0, y: 0 });
    }
  });

  it('converts r = 0 correctly with object argument', function() {
    for (var t = 0; t < twopi; t += (Math.PI / 10)) {
      assert.deepEqual(Polar.toCartesian({ r: 0, t: t }), { x: 0, y: 0 });
    }
  });

});
