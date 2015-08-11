$( document ).ready(function() {

var info_blocks = $('.info_block');

var work = $('#work');
var my_projects = $('.my_projects');

var about = $('#about');
var personal_info = $('.personal_info');

var contact = $('#contact');
var contact_info = $('.contact_info');

work.on('click', function(){
  info_blocks.hide();
  my_projects.show();
})
about.on('click', function(){
  info_blocks.hide();
  personal_info.show();
})
contact.on('click', function(){
  info_blocks.hide();
  contact_info.show();
})

});
