$(document).ready(function() {
  //carousel options
  $('#quote-carousel').carousel({
    pause: true, interval: 10000,
  });
});

/*
	Wilson Mendes Teixeira
	Homepage: Main Website JavaScript
*/

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}


/* Work Profile Overlay */
function openMenu() {
    document.getElementById("fullMenu").style.height = "100%";
}

function closeMenu() {
    document.getElementById("fullMenu").style.height = "0%";
}
/* Work Profile Overlay */
function openProject2() {
    document.getElementById("myProject2").style.height = "100%";
}

function closeProject2() {
    document.getElementById("myProject2").style.height = "0%";
}
/* Work Profile Overlay */
function openProject3() {
    document.getElementById("myProject3").style.height = "100%";
}

function closeProject3() {
    document.getElementById("myProject3").style.height = "0%";
}
/* Contact Form Overlay */
function openContact() {
    document.getElementById("myContact").style.width = "100%";
}

function closeContact() {
    document.getElementById("myContact").style.width = "0%";
}
/* Menu */
$(document).ready(function(){
	$("#nav-mobile").html($("#nav-main").html());
	$("#nav-trigger span").click(function(){
		if ($("nav#nav-mobile ul").hasClass("expanded")) {
			$("nav#nav-mobile ul.expanded").removeClass("expanded").slideUp(250);
			$(this).removeClass("open");
		} else {
			$("nav#nav-mobile ul").addClass("expanded").slideDown(250);
			$(this).addClass("open");
		}
	});
});

/*Google Maps*/
function initialize() {
	var mapCenter = new google.maps.LatLng(50.3403, -4.2376);
	var marker;
	var mapCanvas = document.getElementById("map");
	var mapProp = {
	  center: mapCenter,
	  zoom: 9,
	  mapTypeId: google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(mapCanvas, mapProp)

	var marker = new google.maps.Marker({
		position: mapCenter,
		animation: google.maps.Animation.BOUNCE
	});

	marker.setMap(map);
}
google.maps.event.addDomListener(window, "load", initialize);

// Script that changes the thumbails to the 'BigImg' Wrapper
function changeImage(img){
 document.getElementById('BigImg').src=img;
}
