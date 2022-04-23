/**
 * 
 */
//παράμετροι καμβά
var canvas;
var cntx;
var minimumCanvasWidth=300;
var minimumCanvasHeight=150;
var originalCanvasWidth=500;
var originalCanvasHeight=300;
var canvasWidth=originalCanvasWidth;
var canvasHeight=originalCanvasHeight;

//παράμετροι αλληλεπίδρασης
var mouseX=0;
var mouseY=0;

function initialiseCanvas(){
	canvas=document.getElementById("canvas2D");
	cntx=canvas.getContext("2d");
	defineCanvasSize();
	canvas.addEventListener("mousemove",function(evt){
		handleMouseMove(evt);
    }, false);	
	canvas.addEventListener("mousedown",function(evt){
		handleMouseDown(evt);
    }, false);	
	canvas.addEventListener("mouseup",function(evt){
		handleMouseUp(evt);
    }, false);	
}

function writeOnCanvas(x,y,msg,font,align,color){
	cntx.font=font;
	cntx.fillStyle=color;
	cntx.textAlign=align;
	cntx.fillText(msg,x,y);	
}

function clearCanvas(){
	cntx.clearRect(0,0,canvas.width,canvas.height);
}

function defineCanvasSize(){
    var w=window.outerWidth;
    var h=window.outerHeight;
    canvasWidth=Math.max(Math.min(w*0.9,originalCanvasWidth),minimumCanvasWidth);
    canvasHeight=Math.max(Math.min(h*0.5,originalCanvasHeight),minimumCanvasHeight);
	canvas.setAttribute("width",canvasWidth);
	canvas.setAttribute("height",canvasHeight);

}

function handleMouseMove(evt){
    var mousePos=getMousePos(canvas,evt);
    mouseX=mousePos.x;
    mouseY=mousePos.y;
    
    if(userDrawing){
    	canvas.style.cursor="crosshair";
    	userCurentX=parseInt(mouseX/patternStep+0.5)*patternStep;
    	userCurentY=parseInt(mouseY/patternStep+0.5)*patternStep;
    	drawScene();
    }
	else{
		canvas.style.cursor="default";
	}
    var message="Mouse position:"+mouseX+","+mouseY;
    showDebugInfo(message);
}

function handleMouseDown(evt){
    var mousePos=getMousePos(canvas,evt);
    mouseX=mousePos.x;
    mouseY=mousePos.y;
}

function handleMouseUp(evt){
	if(userDrawing){
		var drawX=parseInt(mouseX/patternStep+0.5)*patternStep;
		var drawY=parseInt(mouseY/patternStep+0.5)*patternStep;
		userLinesX.push(drawX);
		userLinesY.push(drawY);
		if(userLinesX.length<=4){
			userDrawing=true;
		}
		else{
			userDrawing=false;
		}
	}
}

function getMousePos(canvas,evt) {
	var rect=canvas.getBoundingClientRect();
	return{
		x:evt.clientX-rect.left,
		y:evt.clientY-rect.top
	};
}