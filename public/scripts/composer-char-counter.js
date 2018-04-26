
var updateCounter = function(event) {
  var $counter = $('.counter');

  var remainder = 140 - $(this).val().length;

  if (remainder >= 0) {
    $counter.text(remainder).removeClass('counter--invalid');
  } else {
    $counter.text(remainder).addClass('counter--invalid');
  }
}

$( document ).ready(function() {
  $("#new-tweet-form textarea").on('input', updateCounter);
});
