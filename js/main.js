/**
 * 
 */
//ρυθμίσεις σελίδων περιεχομένου
var minPage=1;
var currentPage=0;
var maxPage=7;

//ρυθμίσεις εμφάνισης περιεχομένου
var pageFont="Verdana";
var titleFontSize=25;
var contentFontSize=16;
var pageTitle="";
var pageContent=[];
var pagePic=[];
var pageLinks=[];
var multChoice=[];
var lineSpacingPercent=1.4;
var animationRate=50;
var buttonBorder=8;
var opacityLimit=80;

//ρυθμίσεις αλληλεπίδρασης
var expectingUserInput=false;
var correctAnswer;
var hintLevel=0;
var forceTermination=false;

function initialise(){	
	pageNumbering();
	sizeDIVs();
	nextPage();
	initialiseCanvas();
}

function selectPage(selectedPage){
	currentPage=selectedPage;
	changePage();
}

function changePage(){
	$("#error").hide(jQueryAnimationRate);
	$("#correct").hide(jQueryAnimationRate);
	$(".pics").hide(jQueryAnimationRate,showPage());
}

function nextPage(){
	if(currentPage<maxPage){
		currentPage++;
	}
	changePage();
}

function previousPage(){
	if(currentPage>minPage){
		currentPage--;
	}
	changePage();
}

function showNavigation(){
	if(currentPage>minPage){
		$("#prevPage").show(jQueryAnimationRate);
	}
	else{
		$("#prevPage").hide(jQueryAnimationRate);
	}
	if(currentPage<maxPage){
		$("#nxtPage").show(jQueryAnimationRate);
	}
	else{
		$("#nxtPage").hide(jQueryAnimationRate);
	}
}

function clearPageContents(){
	userDrawing=false;
	$("#images").show(jQueryAnimationRate);
	$("#question").show(jQueryAnimationRate);
	$("#canvasArea").hide(jQueryAnimationRate);
	$("#clearDrawing").hide(jQueryAnimationRate);
	$("#showSolution").hide(jQueryAnimationRate);

	var i;
	for(i=pageContent.length-1;i>-1;i--){
		pageContent.splice(i,1);
	}
	for(i=pageLinks.length-1;i>-1;i--){
		pageLinks.splice(i,1);
	}
	for(i=pagePic.length-1;i>-1;i--){
		pagePic.splice(i,1);
	}
	for(i=multChoice.length-1;i>-1;i--){
		multChoice.splice(i,1);
	}
	expectingUserInput=false;
	hintLevel=0;
	forceTermination=false;
}

function showPage(){
	clearHint();
	//Άντληση περιεχομένου
	definePageContents();
	//Εμφάνιση κειμένου
	showText();
    //Εμφάνιση εικόνων
	showImages();
    sizeDIVs();
	showNavigation();
}

function showText(){
	var i,content="";
	//Εμφάνιση τίτλου
	content+="<p id='pageTitle'>"+pageTitle+"</p><p class='pageContent'>";
	//Εμφάνιση κειμένου
	for(i=0;i<pageContent.length;i++){
		content+="<br class='pageContent'>"+pageContent[i];//+"</p>";
	}
	content+="</p>";
	if(showLinks && pageLinks.length>0){
		content+="<p id='pageLinks'> Δες περισσότερες πληροφορίες";
		for(i=0;i<pageLinks.length;i++){
			if(i==pageLinks.length-1 && pageLinks.length>1){
				content+=" και ";
			}
			else if(i>=0){
				content+=", ";
			}
			content+="<a href='"+pageLinks[i]+"' target='_blank'>εδώ</a>";
		}
		content+="</p>";
	}
	$("#textToShow").html(content);
	content="";
	if(multChoice.length>0){
		content+="<p id='question'>"+multChoice[0]+"</p><ol id='choices'>";
		for(i=1;i<multChoice.length;i++){
			content+="<li class='multipleChoice' onclick='handleUserSelection("+i+")'>"+multChoice[i]+"</li>";
		}
		content+="</ol>";
	}
	$("#question").html(content);
}

function showImages(){
	var imgList="";
	$(".pics").hide(jQueryAnimationRate/4);
	for(i=0;i<pagePic.length;i++){
		imgList+="<img class='pics' id='img"+i+"' src='img/"+pagePic[i]+"' style='display: none;'><br>";
	}
	//document.getElementById("imgArea").innerHTML=imgList;
	document.getElementById("images").innerHTML=imgList;
	sizePics(1);
    $(".pics").show(jQueryAnimationRate/4);
}

function sizePics(firstPic){
	var i,img,w,h;
	for(i=firstPic;i<pagePic.length;i++){
		img=document.getElementById("img"+i);	
	    w=img.width;
	    h=img.height;
	    if(w>widthLimit){
	    	w=widthLimit;
	    	h=img.height*w/img.width;
	    }
	    img.width=w;
	    img.height=h;
	}
}

function handleUserSelection(userAnswer){
	var hintColor,hintBackColor;
	$("#error").hide();
	$("#correct").hide();
	if(userAnswer==correctAnswer){
		$("#choices").hide(jQueryAnimationRate);
		$("#error").hide(jQueryAnimationRate);
		$("#correct").show(jQueryAnimationRate);
		hintLevel=100;
		hintColor="blue";
		hintBackColor="lightBlue";
	}
	else{
		$("#correct").hide(jQueryAnimationRate);
		$("#error").show(jQueryAnimationRate);
		hintColor="red";
		hintBackColor="yellow";
	}
	document.getElementById("hint").color=hintColor;
	document.getElementById("hint").backgroundColor=hintBackColor;
	showHint();
}

function checkAnswer(answerX,answerY,userAnswer){
	if(userAnswer==correctAnswer){
		terminateQuestion(answerX,answerY,userAnswer);
	}
	else{
		addCanvasInput(userAnswer,80,5*canvas.height/7);
		showHint();
	}
}

function terminateQuestion(answerX,answerY,userAnswer){
	write(answerX,answerY,userAnswer,pageFont,"left","blue");
	clearHint();
	showNavigation();
}

function showDebugInfo(info){
	if(debug)document.getElementById("debug").innerHTML=info;
}

function sizeDIVs(){
	var newTop=document.getElementById("infoArea").getBoundingClientRect().top;
	var textLeft=toolBoxLeft+toolBoxWidth+divBorder;
	$("#infoArea").animate({
        left: textLeft+"px"
    });
	var imagesLeft=textLeft+document.getElementById("infoArea").getBoundingClientRect().width+divBorder;
	
	$("#imgArea").animate({
        top: newTop+"px",
        left: imagesLeft+"px"
    });
}

