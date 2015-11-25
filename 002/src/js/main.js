// Author: Lyle Denman
// Start: 25 November 2015

(function() {

    var colors = ['blue', 'red'];

    getRandomColor = function(array) {
        var randomColor = Math.floor(Math.random() * array.length);
        return array[randomColor];
    };

    var gameBoard = document.getElementById('gameBoard');

    //for (var i = 0; i < 100; i++) {
    for (var i = 0; i < 20; i++) {
    var iDiv = document.createElement('div');

        iDiv.className = 'block';
        if (i == 0) {
            iDiv.className += ' ' + 'blue';
        } else {
            iDiv.className += ' ' + 'red';
        }
        //var randomColor = getRandomColor(colors);
        //iDiv.className += ' ' + randomColor;
        iDiv.innerHTML = i%10;
        gameBoard.appendChild(iDiv);
    }

    var children = document.getElementById('gameBoard').children;

    var j = 0;
    (function() {
        setTimeout(arguments.callee, 2000);
        var temp = children[j+1].className;
        children[j+1].className = children[j].className;
        children[j].className = temp;
        j++;
    })();





})();
