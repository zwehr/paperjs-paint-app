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

$("#apply-hex").click(function() {
    //add hash to user's hex and set current color
    currentColor = "#" + $("#hex-value").val();
    
    //set #current-color box to user's hex
    $("#current-color").css({backgroundColor: currentColor});
});

$("#current-width").html(width);

$("#increase-width").click(function() {
    if (width == 95) {
        alert ("Cannot have width of 100+!");
    } else {
        width+= 5;
        $("#current-width").html(width);
    }
});

$("#decrease-width").click(function() {
    if (width == 0) {
        alert("Cannot have a negative width!");
    } else {
        width-= 5;
        $("#current-width").html(width);
    }
});