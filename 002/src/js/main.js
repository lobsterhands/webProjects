// Author: Lyle Denman
// Start: 21 November 2015

(function() {

    var colors = ['blue', 'red'];

    getRandomColor = function(array) {
        var randomColor = Math.floor(Math.random() * array.length);
        return array[randomColor];
    };

    var gameBoard = document.getElementById('gameBoard');

    for (var i = 0; i < 100; i++) {
        var iDiv = document.createElement('div');

        iDiv.className = 'block';
        var randomColor = getRandomColor(colors);
        iDiv.className += ' ' + randomColor;

        gameBoard.appendChild(iDiv);
    }

    var children = document.getElementById('gameBoard').children;


    (function() {
        setTimeout(arguments.callee, 2000);
        for (child in children) {
            if (children.hasOwnProperty(child)) {
                children[child].className = "block " + getRandomColor(colors);
            }
        }
    })();





})();
