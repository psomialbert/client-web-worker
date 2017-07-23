const jackrabbit = require('jackrabbit');
const uuidv1 = require('uuid/v1');
const rabbitUrl = process.env.CLOUDAMQP_URL;
const rpc_queue = 'rpc_queue';

class App {
  constructor() {
    this.rabbit = jackrabbit(rabbitUrl);
    this.exchange = this.rabbit.default();
    this.queue = this.exchange.queue({
      name: rpc_queue,
      prefetch: 1,
      durable: false
    });
  }

  startListening() {
    this.queue.consume((data, reply) => {
      setTimeout(() => {
        reply(data.data + ' and back!');
      }, 1);
    });
    return this;
  }

  sendData(data) {
    return new Promise((resolve, reject) => {
      var id = uuidv1();
      this.exchange.publish(
        { id, data },
        {
          key: rpc_queue,
          reply: modifiedData => {
            resolve(modifiedData);
          }
        }
      );
    });
  }
}

module.exports = App;
