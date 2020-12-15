/*
	Wilson Mendes Teixeira
	Homepage: Main Website JavaScript
*/

// When the user clicks on the button, scroll to the top of the document
$("#myBtn").click(function() {
    $('html, body').animate({
        scrollTop: $("#scrollTop").offset().top
    }, 2000);
});

// When the user clicks on the down arrow, scroll to the body div
$("#down").click(function() {
    $('html, body').animate({
        scrollTop: $("#navbar").offset().top
    }, 2000);
});

/************ textCycle Effect For Title ************/
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 150 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
};

/************ textCycle Effect For Title ************
var divs = $('div[id^="content-"]').hide(),
    i = 0;

(function cycle() {

    divs.eq(i).fadeIn(400)
              .delay(1000)
              .fadeOut(400, cycle);

    i = ++i % divs.length;

})();
*/

/************ typeWriter Effect For Title ************
var i = 0;
var txt = "Hi, I'm Wilson.";
var speed = 65;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("titlewritter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
*/
