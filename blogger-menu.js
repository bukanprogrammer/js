$(function() {
  var menu = $('ul li a:contains("#")');

  console.log(menu.length);

  if(menu) {
    for(var i=1; i <= menu.length; i++) {
      menu.parent().addClass('dropdown');
      menu.addClass('dropdown-toggle');
      menu.attr({'id':"dropdown". "+i+" .", 'data-toggle':"dropdown", 'aria-haspopup':true, 'aria-expanded':false});
    }
  }	
});
