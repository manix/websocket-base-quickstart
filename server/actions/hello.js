module.exports = function(connection, message) {
  connection.send(new this.Message("hi", "Hello!"));
}
