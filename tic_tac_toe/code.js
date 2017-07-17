/**
 * Created by Itamar on 3/22/2017.
 */

function TicTacToe() {
    var board = [];
    var BOARD_SIZE = 3;


    this.start = function () {
        for (var i = 0; i < BOARD_SIZE; i++) {
            var rowArr = new Array(BOARD_SIZE);
            rowArr.fill(0);

            board.push(rowArr);
        }
    }

    this.play = function(x,y) {

    }

    this.printBoard = function () {
        var result = "";

        for (var row of board) {
            for (var cell of row) {
                result += cell;
            }
            result += "\n";
        }

        console.log(result)
        // console.log(board)
    }
}

var $container = document.querySelector("#container");

var ticTacToe = new TicTacToe($container);
ticTacToe.start();

ticTacToe.play(0,0);

ticTacToe.printBoard();

