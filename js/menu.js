
menuOpen = function(){
	$("#mainMenu").animate({"right" : "0px"});
	$('#modal').fadeIn();
}


$(".logo , .logoMenutxt").tapend(menuOpen);

$("#modal").tapend(function(){
	$("#mainMenu").animate({"right" : "-"+(window.innerWidth*0.8)+"px"});
	$('#modal').fadeOut();
});

document.addEventListener('touchmove', function(e){ e.preventDefault(); }, false);


//		** iScroll ** 

var myScroll = new IScroll('#Categories', {
    mouseWheel: false,
    scrollbars: false,

});
