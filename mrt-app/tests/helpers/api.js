import Pretender from 'pretender';

var stations = [{
      _id: 1,
      name: 'Ayala',
      line: 1
      },{
      _id: 2,
      name: 'Magallanes',
      line: 1
      },{
      _id: 3,
      name: 'Taft',
      line: 1
    }
];

var lines = [
  {
    _id: 1,
    name: 'MRT',
    bound: 'South',
    stations: [1, 2, 3]
  }
];

var api = function() {
  var server = new Pretender(function() {
    this.get('/lines/:id/incidents', function(request) {
      return [200, {"Content-Type": "application/json"}, JSON.stringify({incidents: []})];
    });

    this.get('/lines', function(request) {
      return [200, {"Content-Type": "application/json"}, JSON.stringify({lines: lines})];
    });

    this.get('/stations/:id', function(request) {
      var station = {
        _id: 1,
        name: 'Ayala'
      };
      return [200, {"Content-Type": "application/json"}, JSON.stringify({station: station})];
    });

    this.post('/incidents', function(request) {
      var param = JSON.parse(request.requestBody);

      if (param.incident.station === undefined) {
        return [422, {"Content-Type": "application/json"},
          JSON.stringify({incident: null})];
      }

      var incident = {
        _id: 1,
        type: param.incident.type,
        station: param.incident.station,
        message: param.incident.message
      };

      return [200, {"Content-Type": "application/json"},
        JSON.stringify({incident: incident})];
    });

    this.get('/stations', function(request) {
      return [200, {"Content-Type": "application/json"}, JSON.stringify({stations: stations})];
    });

    this.post('/incidents/:id/upvotes', function(request) {
      var incident = {
        _id: 1,
        type: 'Delayed',
        station: 1,
        votes: 1
      };

      return [200, {"Content-Type": "application/json"}, JSON.stringify({votes: 1})];
    });

  });

  server.unhandledRequest = function(verb, path, request) {
    console.log('opps unhandledRequest', path + ' ' + verb);
  };

  return server;
};

export default api;
