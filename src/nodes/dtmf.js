var {appendVerb} = require('./libs')

module.exports = function(RED) {
  function dtmf(config) {
    RED.nodes.createNode(this, config);
    var node = this;
    node.on('input', function(msg) {
      appendVerb(msg,  {
        verb: 'dtmf',
        dtmf: config.dtmf,
        duration: parseInt(config.duration)
      });
      node.send(msg);
    });
  }
  RED.nodes.registerType('dtmf', dtmf);
}