var WidthNou = 0;
var HeigthNou = 0;
var LeftNou = 0;
var TopNou = 0;


var procentAppletTop = TopNou*100/768;
var procentAppletLeft = LeftNou*100/1024;
var procentAppletWidth = WidthNou*100/1024;
var procentAppletHeight = HeigthNou*100/768;

var NumeApplet = "Cult3dApplet";

 
// functia de setare a dimensiunilor si pozitiei appletului 

function Create_Cult3D(nume_co){
	window.document["interfata"].SetVariable("_global.isVisible", "1");
	var elem_object = document.getElementById("Cult3dApplet");
	s =  '<object id="CultObject" classid="clsid:31B7EB4E-8B4B-11D1-A789-00A0CC6651A8" name="cult" width="100%" height="100%" codebase="http://www.cult3d.com/download/cult.cab#version=5,2,0,99">';
	s+= '<param name="SRC" value="'+nume_co+'">';
	s+= '<param name="DisableHW" value="1">';
    s+= '<param name="ANTIALIASING" value="2">';
	s+= '<param name="ViewFinished" value="1">';
	s+=	'<param name="PBCOLOR" value="FF0000">';
	s+= '<param name="BGCOLOR" value="3CC3FF">';
	s+= '<param name="DISABLEPB" value="0">';
   	s+= '</object>';
	elem_object.innerHTML = s;
	//alert(elem_object.innerHTML);
	//il creem o singura data
}

function set_param_applet(W,H,X,Y){
	 procentAppletWidth = W*100/1024;
	 procentAppletHeight = H*100/768;
     procentAppletLeft = X*100/1024;
     procentAppletTop = Y*100/768; 

	 recalculeaza();
	 redimensioneazaContinut();
}


function recalculeaza(){
     var dx = document.body.clientWidth;
	 var dy = document.body.clientHeight;      
  
 if(dx/1024 > dy/768){
	      WidthNou = dy / 768 * 1024;
	      HeigthNou = dy;	

	      LeftNou = (dx - dy / 768 * 1024) / 2;
	      TopNou = 0;
       }       
 else {
		  WidthNou = dx;
		  HeigthNou = dx / 1024 * 768;

		  LeftNou = 0;
	      TopNou = (dy - dx / 1024 * 768) / 2;
      } 
}

function redimensioneazaSWF(){
	 flash.style.width = WidthNou;
	 flash.style.heigth = HeigthNou;
	 flash.style.left = LeftNou;
}


function redimensioneazaContinut(){
	 
	 var widthAPP  = WidthNou * procentAppletWidth/100;
     var heightAPP = HeigthNou * procentAppletHeight/100;
     var leftAPP   = LeftNou + WidthNou * procentAppletLeft/100;
     var topAPP    = TopNou + HeigthNou * procentAppletTop/100;   

     eval(NumeApplet).style.width  = widthAPP;
     eval(NumeApplet).style.height = heightAPP;
     eval(NumeApplet).style.left   = leftAPP;
     eval(NumeApplet).style.top    = topAPP;   
  }

function hideAppletX(){
	 eval(NumeApplet).style.visibility = "hidden";
	 window.document["interfata"].SetVariable("_global.isVisible", "0");
}

function hideApplet(){
	 eval(NumeApplet).style.visibility = "hidden";
 	 window.document["interfata"].SetVariable("_global.isVisible", "2");
}

function showApplet(){
	 eval(NumeApplet).style.visibility = "visible";
 	 window.document["interfata"].SetVariable("_global.isVisible", "1");
}

