$(function (){
// Click Event
$('.acs-tabs li').click(function(){
// Allow for multiple tabs
var $this = $(this).closest('.acs-tabs')
// Remove & add .active class
$this.find('li').removeClass('active');
$(this).addClass('active'); 
// Display the proper content
var $tab = $(this).index();
$('.tbl').css({'display':'none'});
$this.find('> div')
.removeClass('visible')
.eq($tab).addClass('visible')
.find('.tbl').fadeIn(1000);
});
});
