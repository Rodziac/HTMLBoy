var gameboy = {};

gameboy.init = function() {
    this.attackEvents();
    this.power(true);
};

gameboy.attackEvents = function() {
    this.pageResize();
    this.attachButtons();
    this.attachKeyPress();
};

gameboy.pageResize = function() {
    var that = this;
    var timeout;

    window.addEventListener('resize', function() {
        clearTimeout(timeout);
        timeout = setTimeout(that.resizeGameboy, 250);
    });

    this.resizeGameboy(true);
};

gameboy.resizeGameboy = function(instant) {

    var speed = instant ? 0 : 0.4;
    var gbHeight = window.innerHeight;
    var gbWidth = (gbHeight * 11) / 19;

    if (gbWidth > window.innerWidth) {
        gbWidth = window.innerWidth;
        gbHeight = (gbWidth * 19) / 11;
    }

    TweenMax.to('#GBAContainer', speed, {
        height: gbHeight,
        width: gbWidth
    });
};

gameboy.attachButtons = function() {
    console.error('TODO: Listen button DOM touch and click events');
};

gameboy.attachKeyPress = function() {
    console.error('TODO: watch keyboard presses with custom listener');
};

gameboy.power = function(powerSwitch) {
    if(powerSwitch) {
        console.error('TODO: Visual indication for turning on the console');
        game.init();
    } else {
        console.error('TODO: Turn console off');
    }
};
