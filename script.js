// Javascript and card flip animation from Amit Mondal:
// https://codepen.io/mondal10/pen/WNNEvjV
document.addEventListener('DOMContentLoaded', function() {
  var card = document.querySelector('.card');

  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});

