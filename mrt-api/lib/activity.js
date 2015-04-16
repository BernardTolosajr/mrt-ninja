var redis = require("redis");

//TODO move this to config
if (process.env.NODE_ENV === 'production') {
  client = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_IP);
} else {
  client = redis.createClient();
}

var activity = function() {
  var activity = {};

  activity.post = function(stationId, incidentId, done) {
    var key = 'activity:station:' + stationId;
    client.multi()
      .lpush(key, incidentId)
      .expire(key, 300)
      .exec(function(err, replies) {
        if (err) { done(err, null); }
        done(err, replies);
      });
  };

  activity.posts = function(key, done) {
    var key = 'activity:station:' + key;
    client.lrange(key, 0, -1, function(err, replies) {
      if (err) { done(err, null); }
      done(err, replies);
    });
  };

  activity.add = function(key, incidentId, done) {
    var key = 'activity:line:' + key;
    client.multi()
    .sadd(key, incidentId)
    .exec(function(err, reply) {
      if (err) { done(err, null); }
      done(null, reply);
    });
  };

  activity.incidentCount = function(key, done) {
    var key = 'activity:line:' + key;
    client.scard(key, function(err, reply) {
      if (err) { done(err, null); }
      done(null, reply);
    });
  };

  activity.track = function(line, id, timestamp, done) {
    var key = 'activity:incident:' + line;
    client.zadd(key, timestamp, id, function(err, reply) {
      if (err) { done(err, null); }
      done(null, reply);
    });
  };

  activity.active = function(key, ago, done) {
    var key = 'activity:incident:' + key;
    client.zrangebyscore(key, ago, 'inf',
        function(err, reply)   {
      if (err) { done(err, null); }
      done(null, reply);
    });
  };

  return activity;
};

module.exports = activity();
