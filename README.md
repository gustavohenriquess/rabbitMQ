# rabbitMQ

First rabbitMQ application

## Documentation

- [RabbitMQ "Hello World!"](https://www.rabbitmq.com/tutorials/tutorial-one-javascript.html)
- [RabbitMQ "Work Queues!"](https://www.rabbitmq.com/tutorials/tutorial-two-javascript.html)
- [RabbitMQ "Publish/Subscribe!"](https://www.rabbitmq.com/tutorials/tutorial-three-javascript.html)
- [RabbitMQ "Routing!"](https://www.rabbitmq.com/tutorials/tutorial-four-javascript.html)
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

## RabbitMQ: Publish/Subscribe!

- [x] Working

to send a message:

```
node sampleSrc/publishSubscribe/emit_log.js Mensagem ...
```

to receive a message:

```
node sampleSrc/publishSubscribe/receive_logs.js
```

## RabbitMQ: Routing!!

- [x] Working

to send a message:

```
node sampleSrc/routing/emit_log_direct.js info "Run. Run. Or it will explode."
```

to receive a message:

```
node sampleSrc/routing/receive_logs_direct.js info
```
