/////////////////////////////////////////////////////
var options = [{
  selector: '#staggered-test'
  , offset: 50
  , callback: function(el) {
    Materialize.toast("This is our ScrollFire Demo!", 1500);
  }
}, {
  selector: '#staggered-test'
  , offset: 205
  , callback: function(el) {
    Materialize.toast("Please continue scrolling!", 1500);
  }
}, {
  selector: '#staggered-test'
  , offset: 400
  , callback: function(el) {
    Materialize.showStaggeredList($(el));
  }
}, {
  selector: '#image-test'
  , offset: 500
  , callback: function(el) {
    Materialize.fadeInImage($(el));
  }
}];
Materialize.scrollFire(options);


////////////////////////////////////////////////
var vid = document.getElementById("bgvid");


////////////////////////////////////////////////
$('.button-collapse').sideNav({
  menuWidth: 300, // Default is 300
  edge: 'right', // Choose the horizontal origin
  closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
  draggable: true // Choose whether you can drag to open on touch screens
});


////////////////////////////////////////////////
$('.dropdown-button').dropdown('open');
$('dropdown-button').dropdown('close');
