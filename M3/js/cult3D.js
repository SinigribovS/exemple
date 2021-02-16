// Cult3D support file for Netscape Navigator and Internet Explorer
var movieName = "interfata";

// AntiAliasing
var AA_AUTOMATIC = 0;	// Automatic antialiasing when using software
var AA_DISABLED = 1;	// Disable antialiasing when using software
var AA_ENABLED = 2;	// Enable antialiasing when using software

// Action status
var AS_NOTFOUND = -1;	// Action status not found
var AS_CLEAR = 0;	// Action status is clear
var AS_SET = 1;		// Action status is set

// General variables
var Cult3D;

function init(){
		Cult3D=new Cult3D_Object("CultObject");
}
function cEvent(nme) {
	if (Cult3D == null) {
		alert("Cult3d object not loaded");
	} else {
		if (!Cult3D.triggerEvent(nme))
			alert("no such Event");
	}
}
function initOnLoad() {
		//Create_Cult3D("co/munte.co");
		hideApplet(); //Show or hide applet on start
        recalculeaza();
        redimensioneazaContinut(); 
		window.status = "Done";
		window.setInterval("changeStatus()", 50);
		interfata.focus();
		
}
function changeStatus(){
		window.status = "Done";
}
function initOnResize() {
		recalculeaza();
		redimensioneazaSWF();
        redimensioneazaContinut(); 
		//alert('aaaa');
}

// Netscape support functions
function NS_getVersion(){
		return this.Cult3D.getVersion();
}

function NS_triggerEvent(name){
		return this.Cult3D.triggerEvent(name);
}

function NS_getLastMessage(){
		return this.Cult3D.getLastMessage();
}

function NS_setAntiAliasing(aa_mode){
		this.Cult3D.setAntiAliasing(aa_mode);
}

function NS_getAntiAliasing(){
		return this.Cult3D.getAntiAliasing();
}


function NS_setAntiAliasingDelay(aa_delay){
		this.Cult3D.setAntiAliasingDelay(aa_delay);
}

function NS_getAntiAliasingDelay(){
		return this.Cult3D.getAntiAliasingDelay();
}

function NS_getFrame(){
		return this.Cult3D.getFrame();
}

function NS_setFocus(){
		this.Cult3D.setFocus();
}

function NS_getActionStatus(name){
		return this.Cult3D.getActionStatus(name);
}	

function NS_triggerAction(name,action){
		return this.Cult3D.triggerAction(name,action);
}

// This are available in version 5.2.x.x and later
function NS_setStereoMode(mode){
		this.Cult3D.setStereroMode(mode);
}

function NS_getStereoMode(){
		return this.Cult3D.getStereoMode();
}

function NS_setDisparity(disparity){
		this.Cult3D.setDisparity(disparity);
}

function NS_getDisparity(){
		return this.Cult3D.getDisparity();
}

// Internet Explorer support functions
function IE_getVersion(){
		return this.Cult3D.Version;
}

function IE_triggerEvent(name){
		return this.Cult3D.TriggerEvent(name);
}

function IE_getLastMessage(){
		return this.Cult3D.LastMessage;
}

function IE_setAntiAliasing(aa_mode){
		this.Cult3D.AntiAliasing=aa_mode;
}

function IE_getAntiAliasing(){
		return this.Cult3D.AntiAliasing;
}


function IE_setAntiAliasingDelay(aa_delay){
		this.Cult3D.AntiAliasingDelay=aa_delay;
}

function IE_getAntiAliasingDelay(){
		return this.Cult3D.AntiAliasingDelay;
}

function IE_getFrame(){
		return this.Cult3D.Frame;
}

function IE_setFocus(){
		this.Cult3D.focus();
}

function IE_getActionStatus(name){
		return this.Cult3D.GetActionStatus(name);
}

function IE_triggerAction(name,action){
		return this.Cult3D.TriggerAction(name,action);
}

// This are available in version 5.2.x.x and later
function IE_setStereoMode(mode){
		this.Cult3D.StereroMode=mode;
}

function IE_getStereoMode(){
		return this.Cult3D.StereoMode;
}

function IE_setDisparity(disparity){
		this.Cult3D.Disparity=disparity;
}

function IE_getDisparity(){
		return this.Cult3D.Disparity;
}


// Dummy function
function None_Dummy(){
}

// Identify the browser, wait for a small period of time to make sure
// that Netscape is able to start the Java engine. Provide the
// same interface for both Internet Explorer and Netscape Communicator.
function Cult3D_Object(name)
{
	if (typeof(this.Type)!="undefined")
		return;
	if (typeof(document.embeds[name])=="object") {
		this.Type="NS";
		this.Cult3D=document.embeds[name];
		this.triggerEvent=NS_triggerEvent;
		this.getVersion=NS_getVersion;
		this.getLastMessage=NS_getLastMessage;
		this.getAntiAliasing=NS_getAntiAliasing;
		this.getAntiAliasingDelay=NS_getAntiAliasingDelay;
		this.setAntiAliasing=NS_setAntiAliasing;
		this.setAntiAliasingDelay=NS_setAntiAliasingDelay;
		this.getFrame=NS_getFrame;
		this.setFocus=NS_setFocus;
		this.getActionStatus=NS_getActionStatus;
		this.triggerAction=NS_triggerAction;
		this.getStereoMode=NS_getStereoMode;
		this.setStereoMode=NS_setStereoMode;
		this.getDisparity=NS_getDisparity;
		this.setDisparity=NS_setDisparity;
		return;
	}
	if (typeof(eval(name))=="object" && typeof(eval(name).Version)=="string") {
		this.Type="IE";
		this.Cult3D=eval(name);
		this.triggerEvent=IE_triggerEvent;
		this.getVersion=IE_getVersion;
		this.getLastMessage=IE_getLastMessage;
		this.getAntiAliasing=IE_getAntiAliasing;
		this.getAntiAliasingDelay=IE_getAntiAliasingDelay;
		this.setAntiAliasing=IE_setAntiAliasing;
		this.setAntiAliasingDelay=IE_setAntiAliasingDelay;
		this.getFrame=IE_getFrame;
		this.setFocus=IE_setFocus;
		this.getActionStatus=IE_getActionStatus;
		this.triggerAction=IE_triggerAction;
		this.getStereoMode=IE_getStereoMode;
		this.setStereoMode=IE_setStereoMode;
		this.getDisparity=IE_getDisparity;
		this.setDisparity=IE_setDisparity;
		return;
	}
	this.Type="";
	this.Cult3D=null;
	this.getVersion=None_Dummy;
	this.getLastMessage=None_Dummy;
	this.getAntiAliasing=None_Dummy;
	this.getAntiAliasingDelay=None_Dummy;
	this.setAntiAliasing=None_Dummy;
	this.setAntiAliasingDelay=None_Dummy;
	this.getFrame=None_Dummy;
	this.setFocus=None_Dummy;
	this.getActionStatus=None_Dummy;
	this.triggerAction=None_Dummy;
	this.getStereoMode=None_Dummy;
	this.setStereoMode=None_Dummy;
	this.getDisparity=None_Dummy;
	this.setDisparity=None_Dummy;
}


function isIE(){
	return navigator.appName.indexOf('Microsoft') != -1;
}