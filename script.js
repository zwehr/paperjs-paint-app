var currentColor = "black";
var currentTool = "circle";
var width = 30;
var linePath;
var brushPath;
var rectPoint1;
var rectPoint2;

function onMouseDown(event) {
    switch (currentTool) {
        case "circle":
            var circle = Shape.Circle(event.point, width);
            circle.fillColor = currentColor;
            break;
        case "line":
            linePath = new Path();
            linePath.strokeColor = currentColor;
            linePath.strokeWidth = width;
            linePath.add(event.point);
            break;
        case "brush":
            brushPath = new Path();
            brushPath.strokeColor = currentColor;
            brushPath.strokeWidth = width;
            break;
        case "rectangle":
            rectPoint1 = event.point;
            break;
        default:
            break;
    }
}

//mouse drag only used for brush tool
function onMouseDrag(event) {
    switch(currentTool) {
        case "brush":
            brushPath.add(event.point);
            break;
        default:
            break;
    }
}

//finish drawing based on mouseUp position if line or rectangle is selected
function onMouseUp(event) {
    switch (currentTool) {
        case "line":
            linePath.add(event.point);
            break;
        case "rectangle":
            rectPoint2 = event.point;
            var rect = new Rectangle(rectPoint1, rectPoint2);
            var rectPath = new Path.Rectangle(rect);
            rectPath.fillColor = currentColor;            
            break;
        default:
            break;
    }
}

//change currentTool if different radio button selected
$('#toolForm input').on('change', function() {
    currentTool = $('input[name=tool]:checked', '#toolForm').val();
});

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