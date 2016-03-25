var game = {};

game.init = function() {
    console.error('TODO: initialize game');
    /*
        What is needed:
            - a function to catch button presses
     */
    this.game = document.getElementById('game');
    this.renderGame();
    this.attachEvents();
};

game.attachEvents = function() {
    this.pageResize();
};

game.pageResize = function() {
    var that = this;
    var timeout;

    window.addEventListener('resize', function() {
        clearTimeout(timeout);
        timeout = setTimeout(that.resizeTiles, 250);
    });

    this.resizeTiles(true);
};

game.resizeTiles = function(instant) {
    var speed = instant ? 0 : 0.4;
    var gameScreen = document.getElementById('screen');
    var tileHeight = gameScreen.offsetHeight / 10;
    var tileWidth = gameScreen.offsetWidth / 10;

    TweenMax.to('.tile', speed, {
        height: tileHeight,
        width: tileWidth
    });
};

game.renderGame = function() {
    for (var i = 1 ; i < 133 ; i++) {
        var tile = document.createElement('span');
        tile.classList.add('tile');
        tile.style.backgroundImage = "url('https://placeholdit.imgix.net/~text?txtsize=180&txt=" + i + "&w=300&h=300&txttrack=0')";
        this.game.appendChild(tile);
    }
};
