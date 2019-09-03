const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const socketIO = require('socket.io');
const http = require('http');

const Message = require('./models/message');


const app = express();

const server = http.Server (app);
const io = socketIO(server);

app.use(cors ());

io.on ('connection', (socket) => {
   socket.on ('message', async (msg) => {
       let message = new Message (msg);
       message = await message.save();

       socket.broadcast.emit ('message', message);
       socket.emit ('message', message);
   })
});

mongoose.connect('mongodb://localhost/messages', {useNewUrlParser: true});


app.get('/messages/:id', async(req, res) => {
    const message = await Message.findById(req.params.id);
    res.json (message);
});

app.get('/messages', (req, res) => {
    Message.find().then ((messages) => {
        res.json (messages);
    })
});

server.listen(3000, () => {
   console.log('Listening at port 3000')

});

