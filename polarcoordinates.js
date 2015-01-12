(function() {

// public

function Polar() {
  this.center = parseCartesian(arguments);
}

Polar.prototype.toCartesian = function toCartesian() {
  var input = parsePolar(arguments);
  return {
    x: (input.r * Math.cos(input.t)) + this.center.x,
    y: (input.r * Math.sin(input.t)) + this.center.y
  };
};

var statics = ['toCartesian'];
var defaultPolar = new Polar({ x: 0, y: 0 });
for (var i = 0; i < statics.length; i ++) {
  var method = statics[i];
  Polar[method] = function() {
    return defaultPolar[method].apply(defaultPolar, arguments);
  };
}

module.exports = Polar;

// private

function parseCartesian(args) {
  if (args.length === 1) {
    return args[0];
  } else {
    return { x: args[0], y: args[1] };
  }
}

function parsePolar(args) {
  if (args.length === 1) {
    return args[0];
  } else {
    return { r: args[0], t: args[1] };
  }
}

})();
