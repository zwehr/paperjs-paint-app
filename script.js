var currentColor = 'black';

function onMouseDown(event) {
    var circle = Shape.Circle(event.point, 30);
        circle.fillColor = currentColor;
}

$(".color-choice").click(function() {
    currentColor = $(this).css("background-color");
});