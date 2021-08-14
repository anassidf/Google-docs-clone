const io = require('socket.io')(3001, {
	cors: { origin: '*' },
	methods: ['GET', 'POST'],
});

io.on('connection', (socket) => {
	console.log('server connected');

	socket.on('send-documentID', async (documentID) => {
		socket.join(documentID);
		let defaultValue = '';
		socket.emit('documentID-back', defaultValue);

		socket.on('send-delta', (delta) => {
			socket.broadcast.to(documentID).emit('changes', delta);
		});
	});

	//

	socket.on('disconnect', () => {
		console.log('server disconnected');
	});
});
