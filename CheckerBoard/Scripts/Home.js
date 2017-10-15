var hasPiece = true;
var piecePicked = {};

PickUp = function (element) {

    $(element).css("border", "1px dashed turquoise");

    piecePicked = element;
    hasPiece = false;
}

DropPiece = function (otherElement) {

    otherElement.className = piecePicked.className;

    $(piecePicked).css("border", "1px solid black");
    piecePicked.className = "cell";

    hasPiece = true;
    piecePicked = {};
}


$(document).ready(function () {
    var cells = $(".cell");
    var colorCount = 0;

    for (var i = 0; i < cells.length; i++) {
        var cell = $(cells[i]);
        var isDark = colorCount % 2 == 0;
        var isNextRow = (i + 1) % 8 == 0;
        colorCount += isNextRow ? 2 : 1;
        cell.css("background-color", isDark ? "navy" : "white");
    }

    $(".cell").click(function () {

        if (hasPiece) {
            if ($(this).hasClass("red")) {
                PickUp(this)
            }
            else if ($(this).hasClass("black")) {
                PickUp(this)
            }
        }
        else
            {
            DropPiece(this)
        }

    });

});