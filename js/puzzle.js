/**
 * 
 */
var animationRate=1;
var canvasFontName="Verdana";
var canvasFontSize=14;

var patternLeft;
var patternTop;
var patternStep;
var patternSize=3;
var patternRadius=4;
var linesX=[];
var linesY=[];

var userDrawing=false;
var userLinesDrawn=0;
var userLinesX=[];
var userLinesY=[];
var userCurentX;
var userCurentY;

var showingSolution=false;

function initialisePattern(){
	patternStep=40;
	patternLeft=3*patternStep;//200;
	patternTop=2*patternStep;//100;
	//1ο σημείο
	linesX.push(patternLeft+(patternSize-1)*patternStep);
	linesY.push(patternTop+(patternSize-1)*patternStep);
	//2ο σημείο
	linesX.push(patternLeft);
	linesY.push(patternTop);
	//3ο σημείο
	linesX.push(patternLeft+patternSize*patternStep);
	linesY.push(patternTop);
	//4ο σημείο
	linesX.push(patternLeft);
	linesY.push(patternTop+patternSize*patternStep);
	//5ο σημείο
	linesX.push(patternLeft);
	linesY.push(patternTop);
}

function drawGrid(){
	var i,j;
	cntx.fillStyle="rgb(0,0,0)";
	i=0;
	while(i<=canvas.width){
		j=0;
		while(j<=canvas.height){
	    	cntx.beginPath();
	    	cntx.arc(i,j,1,0,2*Math.PI);
	    	cntx.fill();
	    	j+=patternStep;
		}
		i+=patternStep;
	}
}

function drawDots(){
	var i,j;
	cntx.fillStyle="rgb(210,0,0)";
	for(i=0;i<patternSize;i++){
		for(j=0;j<patternSize;j++){
	    	cntx.beginPath();
	    	cntx.arc(patternLeft+i*patternStep,patternTop+j*patternStep,patternRadius,0,2*Math.PI);
	    	cntx.fill();
		}
	}
}

function connectPoints(){
	var lineNo=0;
	var xStart=linesX[lineNo];
	var yStart=linesY[lineNo];
	var xCurrent=xStart;
	var yCurrent=yStart;
	var xEnd=patternLeft;
	var yEnd=patternTop;
	var dx=-1;
	var dy=-1;
	cntx.strokeStyle="rgb(0,0,0)";
	var id=setInterval(drawLines,animationRate);
	function drawLines(){
		drawScene();
		//Σχεδίαση τρέχοντος σχήματος
		drawProgressivePuzzle(lineNo);
		switch(lineNo){
		case 0:
			if(xCurrent>xEnd){
				cntx.beginPath();
				cntx.moveTo(xStart,yStart);
				cntx.lineTo(xCurrent,yCurrent);
				cntx.stroke();
				xCurrent+=dx;
				yCurrent+=dy;
			}
			else{
				lineNo++;
				//Προετοιμασία επόμενου σταδίου
				prepareNextSolutionStage();
				dx=1;
				dy=0;
			}
			break;
		case 1:
			if(xCurrent<xEnd){
				cntx.beginPath();
				cntx.moveTo(xStart,yStart);
				cntx.lineTo(xCurrent,yCurrent);
				cntx.stroke();
				xCurrent+=dx;
				yCurrent+=dy;
			}
			else{
				lineNo++;
				//Προετοιμασία επόμενου σταδίου
				prepareNextSolutionStage();
				dx=-1;
				dy=1;
			}
			break;
		case 2:
			if(xCurrent>xEnd){
				cntx.beginPath();
				cntx.moveTo(xStart,yStart);
				cntx.lineTo(xCurrent,yCurrent);
				cntx.stroke();
				xCurrent+=dx;
				yCurrent+=dy;
			}
			else{
				lineNo++;
				//Προετοιμασία επόμενου σταδίου
				prepareNextSolutionStage();
				dx=0;
				dy=-1;
			}
			break;
		case 3:
			if(yCurrent>yEnd){
				cntx.beginPath();
				cntx.moveTo(xStart,yStart);
				cntx.lineTo(xCurrent,yCurrent);
				cntx.stroke();
				xCurrent+=dx;
				yCurrent+=dy;
			}
			else{
				lineNo++;
				drawProgressivePuzzle(lineNo);
				//Λήξη σχεδίασης
				clearInterval(id);
				showingSolution=false;
				showConclusion();
				userDrawing=false;
			}			
			break;
		}
	}
	function prepareNextSolutionStage(){
		xStart=linesX[lineNo];
		yStart=linesY[lineNo];
		xCurrent=xStart;
		yCurrent=yStart;
		xEnd=linesX[lineNo+1];
		yEnd=linesY[lineNo+1];
	}
}


function drawProgressivePuzzle(lineNo){
	cntx.beginPath();
	cntx.moveTo(linesX[0],linesY[0]);
	for(i=1;i<=lineNo;i++){
		cntx.lineTo(linesX[i],linesY[i]);
	}
	cntx.stroke();
	if(lineNo<4)showProgress(lineNo+1);
}


function drawScene(){
	clearCanvas();
	drawGrid();
	drawDots();
	if(!showingSolution)drawUserShape();
}

function drawUserShape(){
	if(userLinesX.length>0){
		cntx.strokeStyle="rgb(0,0,0)";
		cntx.beginPath();
		cntx.moveTo(userLinesX[0],userLinesY[0]);
		for(var i=1;i<userLinesX.length;i++){
			cntx.lineTo(userLinesX[i],userLinesY[i]);
		}
		cntx.lineTo(userCurentX,userCurentY);
		cntx.stroke();
	}
	showProgress(userLinesX.length);
}

function showProgress(noOfLines){
	var xScr=5;
	var yScr=canvasFontSize;
	var font=canvasFontSize+"px "+canvasFontName;
	var align="left";
	var color="red";
	if(noOfLines<4)color="blue";
	writeOnCanvas(xScr,yScr,"Πλήθος τμημάτων:"+noOfLines,font,align,color);
}

function clearDrawing(){
	var i;
	for(i=userLinesX.length-1;i>=0;i--){
		userLinesX.splice(i,1);
		userLinesY.splice(i,1);
	}
	userDrawing=true;
	drawScene();
}

function solvePuzzle(){
	showingSolution=true;
	clearDrawing();
	connectPoints();	
}

function showConclusion(){
	var msg="";
	msg+="<p>Στη σπαζοκεφαλιά με τον ταχυδρόμο έπρεπε να εντοπίσουμε τα καλά κρυμένα δεδομένα αφαιρώντας τα στοιχεία της εκφώνησης που τραβούσαν την προσοχή μας (π.χ. το χρώμα των μαλλιών!)</p>";
	msg+="<p>Στην περίπτωση των εννέα κουκίδων πρέπει να υπερνικήσουμε την τάση της σκέψης μας να φαντάζεται και να δοκιμάζει λύσεις μέσα στο τετραγωνικό πλαίο που οριοθετούν οι κουκίδες.</p>";
	msg+="<p>Πραγματικά, οι περιορισμοί του προβλήματος έχουν να κάνουν με το πλήθος των ευθύγραμμων τμημάτων καθώς και με το γεγονός ότι αυτά σχεδιάζονται με μονοκοντυλιά, αλλά πουθενά δεν αναφέρεται ότι πρέπει να σχεδιάσουμε γραμμές μόνο <b>εντός</b> του νοητού τετραγώνου.</p>";
	msg+="<p>Κυριολεκτικά και μεταφορικά λοιπόν, <br>o ξεπερνώντας <i>φαινομενικούς</i> αλλά <b>ανύπαρκτους</b> περιορισμούς, <br>o δοκιμάζοντας μια ευρύτητα στη σκέψη μας, <br>o εντοπίζοντας με σαφήνεια και πληρότητα τα δεδομένα, <br>o αναλύοντας από όλες τις πλευρές μια κατάσταση, <br>μπορούμε να αντιμετωπίσουμε πολλά προβλήματα που με πρώτη ματιά μοιάζουν άλυτα.</p>";
	document.getElementById("hint").innerHTML=msg;
}