$(document).ready(function() {
  console.log('Doc pronto')
})

var next = $('.button-right');
var previous = $('.button-left')
var img1 = $('.img1')
var img2 = $('.img2')
var img3 = $('.img3')

next.click(function() {
  if (img1.hasClass('active')){
    $(img2).addClass('active');
    $(img1).removeClass('active');

  } else if (img2.hasClass('active')) {
    $(img3).addClass('active');
    $(img2).removeClass('active');

  } else {
    $(img1).addClass('active');
    $(img3).removeClass('active');
  }
});

previous.click(function() {
  if (img1.hasClass('active')){
    $(img3).addClass('active');
    $(img1).removeClass('active');

  } else if (img2.hasClass('active')) {
    $(img1).addClass('active');
    $(img2).removeClass('active');

  } else {
    $(img2).addClass('active');
    $(img3).removeClass('active');
  }
});
