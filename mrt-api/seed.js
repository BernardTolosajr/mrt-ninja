var app = require('./server'),
    async = require('async'),
    mongoose = require('mongoose'),
    Station = require('./test/factory/station'),
    Line = require('./test/factory/line');

for (var i in mongoose.connection.collections) {
  mongoose.connection.collections[i].remove(function(err, remove){});
}

var Line = mongoose.model('Line');
var mrt =  new Line({name: 'MRT', bound: 'South'});
var mrtNorth =  new Line({name: 'MRT', bound: 'North'});

var a = function(cb) {
  Station.create({name: 'North Avenue', line: mrt._id}, function(err, station) {
    if (err) { console.log(err); }
    mrt.stations.push(station);
    mrt.save(function(err, result) {
      if (err) { console.log(err); }
      console.log('save', station);
      cb(null, station.name);
    });
  });
}

var b = function(cb) {
  Station.create({name: 'Quezon Avenue', line: mrt._id}, function(err, station) {
    if (err) { console.log(err); }
    mrt.stations.push(station);
    mrt.save(function(err, result) {
      if (err) { console.log(err); }
      console.log('save', station);
      cb(null, station.name);
    });
  });
}

var c = function(cb) {
  Station.create({name: 'GMA Kamuning', line: mrt._id}, function(err, station) {
    if (err) { console.log(err); }
    mrt.stations.push(station);
    mrt.save(function(err, result) {
      if (err) { console.log(err); }
      console.log('save', station);
      cb(null, station.name);
    });
  });
}

var d = function(cb) {
  Station.create({name: 'Cubao', line: mrt._id}, function(err, station) {
    if (err) { console.log(err); }
    mrt.stations.push(station);
    mrt.save(function(err, result) {
      if (err) { console.log(err); }
      console.log('save', station);
      cb(null, station.name);
    });
  });
}

var e = function(cb) {
  Station.create({name: 'Santolan - Anapolis', line: mrt._id}, function(err, station) {
    if (err) { console.log(err); }
    mrt.stations.push(station);
    mrt.save(function(err, result) {
      if (err) { console.log(err); }
      console.log('save', station);
      cb(null, station.name);
    });
  });
}

var f = function(cb) {
  Station.create({name: 'Ortigas', line: mrt._id}, function(err, station) {
    if (err) { console.log(err); }
    mrt.stations.push(station);
    mrt.save(function(err, result) {
      if (err) { console.log(err); }
      console.log('save', station);
      cb(null, station.name);
    });
  });
}

var g = function(cb) {
  Station.create({name: 'Shaw Boulevard', line: mrt._id}, function(err, station) {
    if (err) { console.log(err); }
    mrt.stations.push(station);
    mrt.save(function(err, result) {
      if (err) { console.log(err); }
      console.log('save', station);
      cb(null, station.name);
    });
  });
}

var h = function(cb) {
  Station.create({name: 'Boni Avenue', line: mrt._id}, function(err, station) {
    if (err) { console.log(err); }
    mrt.stations.push(station);
    mrt.save(function(err, result) {
      if (err) { console.log(err); }
      console.log('save', station);
      cb(null, station.name);
    });
  });
}

var i = function(cb) {
  Station.create({name: 'Guadalupe', line: mrt._id}, function(err, station) {
    if (err) { console.log(err); }
    mrt.stations.push(station);
    mrt.save(function(err, result) {
      if (err) { console.log(err); }
      console.log('save', station);
      cb(null, station.name);
    });
  });
}

var j = function(cb) {
  Station.create({name: 'Buendia', line: mrt._id}, function(err, station) {
    if (err) { console.log(err); }
    mrt.stations.push(station);
    mrt.save(function(err, result) {
      if (err) { console.log(err); }
      console.log('save', station);
      cb(null, station.name);
    });
  });
}
var k = function(cb) {
  Station.create({name: 'Ayala', line: mrt._id}, function(err, station) {
    if (err) { console.log(err); }
    mrt.stations.push(station);
    mrt.save(function(err, result) {
      if (err) { console.log(err); }
      console.log('save', station);
      cb(null, station.name);
    });
  });
}
var l = function(cb) {
  Station.create({name: 'Magallanes', line: mrt._id}, function(err, station) {
    if (err) { console.log(err); }
    mrt.stations.push(station);
    mrt.save(function(err, result) {
      if (err) { console.log(err); }
      console.log('save', station);
      cb(null, station.name);
    });
  });
}

var m = function(cb) {
  Station.create({name: 'Taft Avenue', line: mrt._id}, function(err, station) {
    if (err) { console.log(err); }
    mrt.stations.push(station);
    mrt.save(function(err, result) {
      if (err) { console.log(err); }
      console.log('save', station);
      cb(null, station.name);
    });
  });
}

async.series([a, b, c, d, e, f, g, h, i, j, k, l, m] , function(err, results) {
  if (err) { console.log(err); }
  console.log(results);
});


//NORTH
var a1 = function(cb) {
  Station.create({name: 'North Avenue', line: mrtNorth._id}, function(err, station) {
    if (err) { console.log(err); }
    mrtNorth.stations.push(station);
    mrtNorth.save(function(err, result) {
      if (err) { console.log(err); }
      console.log('save', station);
      cb(null, station.name);
    });
  });
}

var b1 = function(cb) {
  Station.create({name: 'Quezon Avenue', line: mrtNorth._id}, function(err, station) {
    if (err) { console.log(err); }
    mrtNorth.stations.push(station);
    mrtNorth.save(function(err, result) {
      if (err) { console.log(err); }
      console.log('save', station);
      cb(null, station.name);
    });
  });
}

var c1 = function(cb) {
  Station.create({name: 'GMA Kamuning', line: mrtNorth._id}, function(err, station) {
    if (err) { console.log(err); }
    mrtNorth.stations.push(station);
    mrtNorth.save(function(err, result) {
      if (err) { console.log(err); }
      console.log('save', station);
      cb(null, station.name);
    });
  });
}

var d1 = function(cb) {
  Station.create({name: 'Cubao', line: mrtNorth._id}, function(err, station) {
    if (err) { console.log(err); }
    mrtNorth.stations.push(station);
    mrtNorth.save(function(err, result) {
      if (err) { console.log(err); }
      console.log('save', station);
      cb(null, station.name);
    });
  });
}

var e1 = function(cb) {
  Station.create({name: 'Santolan - Anapolis', line: mrtNorth._id}, function(err, station) {
    if (err) { console.log(err); }
      mrtNorth.stations.push(station);
      mrtNorth.save(function(err, result) {
        if (err) { console.log(err); }
        console.log('save', station);
        cb(null, station.name);
      });
  });
}

var f1 = function(cb) {
  Station.create({name: 'Ortigas', line: mrtNorth._id}, function(err, station) {
    if (err) { console.log(err); }
      mrtNorth.stations.push(station);
      mrtNorth.save(function(err, result) {
        if (err) { console.log(err); }
        console.log('save', station);
        cb(null, station.name);
      });
  });
}

var g1 = function(cb) {
  Station.create({name: 'Shaw Boulevard', line: mrtNorth._id}, function(err, station) {
    if (err) { console.log(err); }
    mrtNorth.stations.push(station);
    mrtNorth.save(function(err, result) {
      if (err) { console.log(err); }
      console.log('save', station);
      cb(null, station.name);
    });
  });
}

var h1 = function(cb) {
  Station.create({name: 'Boni Avenue', line: mrtNorth._id}, function(err, station) {
    if (err) { console.log(err); }
    mrtNorth.stations.push(station);
    mrtNorth.save(function(err, result) {
      if (err) { console.log(err); }
      console.log('save', station);
      cb(null, station.name);
    });
  });
}

var i1 = function(cb) {
  Station.create({name: 'Guadalupe', line: mrtNorth._id}, function(err, station) {
    if (err) { console.log(err); }
    mrtNorth.stations.push(station);
    mrtNorth.save(function(err, result) {
      if (err) { console.log(err); }
      console.log('save', station);
      cb(null, station.name);
    });
  });
}

var j1 = function(cb) {
  Station.create({name: 'Buendia', line: mrtNorth._id}, function(err, station) {
    if (err) { console.log(err); }
    mrtNorth.stations.push(station);
    mrtNorth.save(function(err, result) {
      if (err) { console.log(err); }
      console.log('save', station);
      cb(null, station.name);
    });
  });
}
var k1 = function(cb) {
  Station.create({name: 'Ayala', line: mrtNorth._id}, function(err, station) {
    if (err) { console.log(err); }
    mrtNorth.stations.push(station);
    mrtNorth.save(function(err, result) {
      if (err) { console.log(err); }
      console.log('save', station);
      cb(null, station.name);
    });
  });
}
var l1 = function(cb) {
  Station.create({name: 'Magallanes', line: mrtNorth._id}, function(err, station) {
    if (err) { console.log(err); }
    mrtNorth.stations.push(station);
    mrtNorth.save(function(err, result) {
      if (err) { console.log(err); }
      console.log('save', station);
      cb(null, station.name);
    });
  });
}

var m1 = function(cb) {
  Station.create({name: 'Taft Avenue', line: mrtNorth._id}, function(err, station) {
    if (err) { console.log(err); }
    mrtNorth.stations.push(station);
    mrtNorth.save(function(err, result) {
      if (err) { console.log(err); }
      console.log('save', station);
      cb(null, station.name);
    });
  });
}

async.series([a1, b1, c1, d1, e1, f1, g1, h1, i1, j1, k1, l1, m1] , function(err, results) {
  if (err) { console.log(err); }
  console.log(results);
});

