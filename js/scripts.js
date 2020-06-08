$(document).ready(function() {
  const favoriteIceCreams = ['mint', 'vanilla', 'strawberry', 'chocolate'];
  favoriteIceCreams.forEach(function(flavor) {
    $("ul").append(`<li>${flavor}!</li>`);
  });
});