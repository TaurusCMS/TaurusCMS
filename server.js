// This is a slightly altered version of the sample code from the Hapi homepage, but we should be able to get the gist from this code sample how to spin up a simple Hapi site.
'use strict';

const Hapi = require('hapi');

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
	host: 'localhost',
	port: 8000
});

// Add the route
server.route({
	method: 'GET',
	path:'/',
	handler: function (request, reply) {

		return reply('Hello world!');
	}
});

// Start the server
server.start((err) => {

	if (err) {
		throw err;
	}
	console.log('Server running at:', server.info.uri);
});