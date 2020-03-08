const Leap = require('leapjs');

const options = { enableGestures: true };

Leap.loop(options, frame => {
    console.log(`Number of hands: ${frame.hands.length}`);
    console.log(`Number of fingers: ${frame.fingers.length}`);
});
