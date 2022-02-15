# rabbitMQ

First rabbitMQ application

## Documentation

- [RabbitMQ "Hello World!"](https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html)
- [RabbitMQ "Work Queues!"](https://www.rabbitmq.com/tutorials/tutorial-two-javascript.html)
- [RabbitMQ "Docker](https://www.rabbitmq.com/download.html)

## Generic Commands

to start RabbitMQ Server:

```
rabbitmq:start
```

to stop RabbitMQ Server:

```
rabbitmq:stop
```

on root Folder to install dependencies:

```
yarn install
```

## RabbitMQ: Hello World!

- [x] Working

#### how to execute!

to send a message:

```
node sampleSrc/send.js
```

to receive a message:

```
node sampleSrc/receive.js
```

## RabbitMQ: Work Queues!

- [x] Working

to send a message:

```
node sampleSrc/workQueues/newTask.js Mensagem ...
```

to receive a message:

```
node sampleSrc/workQueues/worker.js
```

## RabbitMQ: Work Queues!

- [x] Working

to send a message:

```
node sampleSrc/publishSubscribe/emit_log.js Mensagem ...
```

to receive a message:

```
node sampleSrc/publishSubscribe/receive_logs.js
```
