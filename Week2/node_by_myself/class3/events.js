const EventEmitter = require ('events')

const emitter = new EventEmitter()

emitter.on('order-pizza',(size , topping)=>{
    console.log(`Order recieved! Baking a ${size} pizza with ${topping} toppings`);
})
emitter.on('order-pizza',(size)=>{
    if(size === 'large'){
        console.log('Complimentry drinks');
    }
})

emitter.emit('order-pizza' , 'large' , 'mushroooms')