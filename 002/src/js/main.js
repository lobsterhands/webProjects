// Author: Lyle Denman
// Start: 25 November 2015

(function() {

    var ELEM_NUM = 100;
    var colors = ['blue', 'red', 'green', 'yellow'];

    getRandomColor = function(array) {
        var randomColor = Math.floor(Math.random() * array.length);
        return array[randomColor];
    };

    var gameBoard = document.getElementById('gameBoard');

    //for (var i = 0; i < 100; i++) {
    for (var i = 0; i < ELEM_NUM; i++) {
    var iDiv = document.createElement('div');

        iDiv.className = 'block';
        if (i == 0) {
            iDiv.className += ' ' + 'blue';
        } else {
            iDiv.className += ' ' + 'red';
        }
        var randomColor = getRandomColor(colors);
        iDiv.className += ' ' + randomColor;
        //iDiv.innerHTML = i%10;
        gameBoard.appendChild(iDiv);
    }

    var children = document.getElementById('gameBoard').children;

    var j = 0;
    var speed = 0;

    (function() {
        setTimeout(arguments.callee, speed);
        var temp = children[j+1].className;
        //console.log(temp);
        //console.log(children[j].className);
        children[j+1].className = children[j].className;
        children[j].className = temp;
        j++;
        //console.log('j has just been incremented: j=',j);
        if (j == ELEM_NUM-1) {
            j = 0;
            //console.log('j has been reset to zero: j=',j);
        }
    })();





})();
