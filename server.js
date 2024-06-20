const app = require("express")();
require("dotenv").config();
const server = require("http").createServer(app);

const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:3000",
    },
});

io.on("connection", (socket) => {
    console.log("socket is connected");
    socket.on("chat", (payload) => {
        console.log(payload);
        socket.broadcast.emit("chat", payload);
    });
});

server.listen(process.env.PORT, () => {
    console.log("server listen on port 5000");
});
