var currentColor = "black";
var currentTool = "circle";
var width = 30;

function onMouseDown(event) {
    var circle = Shape.Circle(event.point, width);
        circle.fillColor = currentColor;
}

$(".color-button").click(function() {
    //update currentColor variable from clicked background-color
    currentColor = $(this).css("background-color");
    
    //display current color above color options
    $("#current-color").css({backgroundColor: currentColor});
});