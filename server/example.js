var base = require("websocket-base");

base.run({
  port: 81,
  authenticate: function(connection, register) {
    // fake an api call to another world
    setTimeout(function() {
      // create a fake user
      var user = {
        id: 1,
        name: "Manix"
      }

      register(connection, user);
    }, 2500);
  }
});
