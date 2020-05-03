$(function() {
  var menu = $('ul li a:contains("#")');

  console.log(menu.length);

  if(menu) {
    menu.parent().addClass('dropdown');
    menu.addClass('dropdown-toggle');
    menu.attr({'id':"dropdown", 'data-toggle':"dropdown", 'aria-haspopup':true, 'aria-expanded':false});
  }	
});
