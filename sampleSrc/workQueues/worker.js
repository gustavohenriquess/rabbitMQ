var amqp = require("amqplib/callback_api");

amqp.connect("amqp://localhost", function (error, connection) {
  if (error) {
    throw error;
  }

  connection.createChannel(function (error, channel) {
    if (error) {
      throw error;
    }

    var queue = "task_queue";

    channel.assertQueue(queue, {
      durable: true,
    });

    channel.prefetch(1); // Faz a mensagem ser enviada apenas para quem está livre.
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

    channel.consume(
      queue,
      function (msg) {
        var secs = msg.content.toString().split(".").length - 1;

        console.log(" [x] Received %s", msg.content.toString());
        setTimeout(function () {
          console.log(" [x] Done");
          channel.ack(msg); // Confirmação de mensagem manual
        }, secs * 1000);
      },
      {
        noAck: false, // Confirmação de mensagem manual = (false)
      }
    );
  });
});
