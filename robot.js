var robot = document.getElementById('robot');
var buttonPlace = document.getElementById('place');
var buttonLeft = document.getElementById('left');
var buttonRight = document.getElementById('right');
var buttonMove = document.getElementById('move');
var buttonReport = document.getElementById('report');
var output = document.getElementById('output');
var direction, errorText;
var topPosition = 0, leftPosition = 0;
var xPOS = 0, yPOS = 0 ;


function intialPosition(x, y, f) {
	xPOS = x; yPOS = y;
	topPosition = 750 - yPOS * 100; leftPosition = xPOS * 100 + 25;
	direction = f;
	robot.style.top = topPosition+"px";
	robot.style.left = leftPosition+"px";
	robot.innerHTML = direction;
	robot.classList.remove("hidden");
}

function updateOutput() {
	output.innerHTML = xPOS+", "+yPOS+", "+direction;
}

function outputError() {
	output.innerHTML = "Please change direction...";
}

function enableAction() {
	buttonMove.disabled = false;
	buttonLeft.disabled = false;
	buttonRight.disabled = false;
	buttonReport.disabled = false;
}

function buttonMoveAction() {
	buttonMove.addEventListener('click', function(e) {
		if(direction === "EAST") {
			if(leftPosition < 425) {
				leftPosition += 100;
				xPOS += 1;
				robot.style.left = leftPosition+"px";
			} 
			else {
				outputError();
				e.stopPropagation();
			}
		}
		else if(direction === "SOUTH") {
			if(topPosition < 750) {
				topPosition += 100;
				yPOS -= 1;
				robot.style.top = topPosition+"px";
			}
			else {
				outputError();
				e.stopPropagation();
			}
		}
		else if(direction === "WEST") {
			if(leftPosition > 50) {
				leftPosition -= 100;
				xPOS -= 1;
				robot.style.left = leftPosition+"px";
			}
			else {
				outputError();
				e.stopPropagation();
			}
		}
		else if(direction === "NORTH") {
			if(topPosition > 400) {
				topPosition -= 100;
				yPOS += 1;
				robot.style.top = topPosition+"px";
			}
			else {
				outputError();
				e.stopPropagation();
			}
		}
	});
}

function buttonDirectionRight() {
	buttonRight.addEventListener('click', function() {
		if(direction === "EAST") direction = "SOUTH";
		else if(direction === "SOUTH") direction = "WEST";
		else if(direction === "WEST") direction = "NORTH";
		else if(direction === "NORTH") direction = "EAST";
		robot.innerHTML = direction;
	});
}

function buttonDirectionLeft(){
	buttonLeft.addEventListener('click', function() {
		if(direction === "EAST") direction = "NORTH";
		else if(direction === "NORTH") direction = "WEST";
		else if(direction === "WEST") direction = "SOUTH";
		else if(direction === "SOUTH") direction = "EAST";
		robot.innerHTML = direction;
	});
}

function buttonReportAction(){
	buttonReport.addEventListener('click', function() {
		output.classList.toggle('hidden');
	});
}

document.addEventListener('DOMContentLoaded', function(e) {
	//console.log(document.getElementsByClassName('table-container').offsetTop);
	buttonPlace.addEventListener('click', function(){
		var placeX= parseInt(document.getElementById("placeX").value);
		var placeY= parseInt(document.getElementById("placeY").value);
		var placeF = document.getElementById("placeF").value;
		intialPosition(placeX, placeY, placeF);
		enableAction();
	});

	document.addEventListener('click', function() {
		updateOutput();
	});

	buttonMoveAction();

	buttonDirectionRight();

	buttonDirectionLeft();
	
	buttonReportAction();
	
})