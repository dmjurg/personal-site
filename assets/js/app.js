$( document ).ready(function() {

var work = $('#work');
var my_projects = $('.my_projects');

var about = $('#about');
var personal_info = $('.personal_info');

var contact = $('#contact');
var contact_info = $('.contact_info');

work.on('click', function(){
  my_projects.toggleClass();
})
about.on('click', function(){
  personal_info.toggleClass();
})
contact.on('click', function(){
  contact_info.toggleClass();
})

});
