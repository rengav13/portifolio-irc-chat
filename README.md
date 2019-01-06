
<h2>Introduction</h2>
An IRC client developed in react to study multi-protocol and scalable applications. The architecture consist of a web page, 
a server, a message broker, and a proxy to IRC servers. The server and the proxy are decoupled by a message broker developed 
with RabbitMQ. Besides that, there are lots of protocol through the system. The web client send requests to the server by 
HTTP protocol, and it receives asynchronous messages via WebSocket. The communication between the server and the proxy is 
made by AMQP protocol by mean of RabbitMQ. The server produce messages and store it in the queue, then the proxy consume 
the messages, the same occurs in the other direction. Lastly, the proxy communicate with the IRC servers by IRC protocol.

<h3>Requirements</h3>

To run this project the follow packages are required:
- [node](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [rabbitMQ](https://www.rabbitmq.com/)

<h2>How to Install</h2>

To install the application run the command:
   
````
     npm install
````

Then, to execute the project run:

````
     npm start
````

To verify if the RabbitMQ is online, you should run the command:

````
    rabbitmqctl status
````

<h2>References</h2>

[Getting Started with npm](https://www.npmjs.com/package/npm/tutorial)<br/>
[Installing Node.js on macOS](https://nodesource.com/blog/installing-nodejs-tutorial-mac-os-x/)<br/>
[Installing Node.js on Windows](https://nodesource.com/blog/installing-nodejs-tutorial-windows/)<br/>
[Install Node.js via package manager](https://nodejs.org/en/download/package-manager/)<br/>
[Install rabbitMQ on Windows](https://www.rabbitmq.com/install-windows.html)<br/>
[Install rabbitMQ on MacOS ](https://www.rabbitmq.com/install-homebrew.html)<br/>
[Install rabbitMQ on Debian](https://www.rabbitmq.com/install-debian.html)<br/>
