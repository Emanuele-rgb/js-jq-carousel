$(document).ready(function() {
  console.log('Doc pronto')
})

var next = $('.button-right');
var previous = $('.button-left')
var img1 = $('.img1')
var img2 = $('.img2')
var img3 = $('.img3')

next.click(function() {
  $(img2).addClass('active');
  $(img1).removeClass('active');
});

previous.click(function() {
  $(img1).addClass('active');
  $(img2).removeClass('active');
});
