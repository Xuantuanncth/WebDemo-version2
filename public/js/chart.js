const socket = io();
socket.emit('join', { data: "hello" }, (error) => {
    console.log("===========> error")
})