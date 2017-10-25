
function newTab(){
    console.log('a');
    var url = document.getElementById('eventIFrame').src;
    var tabOrWindow = window.open(url, '_blank');
    tabOrWindow.focus();
}

function mouseOver() {
    document.getElementById("logo").src="./resources/leadmilGifl.gif"
}

function mouseOut() {
    document.getElementById("logo").src="./resources/Leadmill_logo_DarkGraySteel.png";
}

function showEvents(){
    console.log('b');
    document.getElementById('eventListing').style.display = "inline";
}
