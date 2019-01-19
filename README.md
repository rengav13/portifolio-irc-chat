
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

### Setting up the environment

* RabbitMQ
* Application

#### RabbitMQ

To be able to run the application, it's required to set up RabbitMQ.

* At first, download the RabbitMQ and install it. Its binary file can be found [here](https://www.rabbitmq.com/download.html). 
* Then, add the `sbin` folder to the environment path.
* Finally, run `rabbitmqctl status` to verify if the installation succeed.

#### Applcation

To install the application run the command:
   
````
     npm install
````

Then, to install the proxy dependencies run:

````
     cd amqp-irc
     npm install
````

Then, to execute the project run:

````
     npm start
     cd amqp-irc
     npm start
````

## External libraries

* [React: A JavaScript library for building user interfaces](https://reactjs.org)
* [Redux: A predictable state container for JavaScript apps.](https://redux.js.org)

## References

[Getting Started with npm](https://www.npmjs.com/package/npm/tutorial)<br/>
[Installing Node.js on macOS](https://nodesource.com/blog/installing-nodejs-tutorial-mac-os-x/)<br/>
[Installing Node.js on Windows](https://nodesource.com/blog/installing-nodejs-tutorial-windows/)<br/>
[Install Node.js via package manager](https://nodejs.org/en/download/package-manager/)<br/>
[Install rabbitMQ on Windows](https://www.rabbitmq.com/install-windows.html)<br/>
[Install rabbitMQ on MacOS ](https://www.rabbitmq.com/install-homebrew.html)<br/>
[Install rabbitMQ on Debian](https://www.rabbitmq.com/install-debian.html)<br/>


## References to analyse

[Complete Firebase Authentication React Tutorial](https://www.robinwieruch.de/complete-firebase-authentication-react-tutorial/#react-firebase)