const EventEmitter = require('events');

class CustomEvent extends EventEmitter {

}

const ce = new CustomEvent();

ce.on('test', () => {
    console.log('this is a test!');
});

setInterval(() => {
    // 触发事件函数
    ce.emit('test');
}, 500);
