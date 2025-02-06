const EventEmitter=require('events')
const event=new EventEmitter()      // Instance of a class

// registration of an event
event.on('data',()=>{
    console.log("Event Created")
})

// emit the event
event.emit('data')