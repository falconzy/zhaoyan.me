
$('document').ready(function(){
///////////////////////////////////////////////////////////////////////////////////// 
//
//	regular size slideshow settings
//
	$('.carousel').carousel({
		interval: 4000
	});
  var width = $(window).width();
  if(width<600)
  {
    $('#mottoSlider').hide();
    $('#footerParnter').hide();
  }

  var title = document.title.toString();

  if(title.indexOf('Playgournd')> -1 )
  {
  	$('#li_index').addClass('active disabled');
  }

  if(title.indexOf('About')> -1 )
  {
  	$('#li_about').addClass('active disabled');
  }

  if(title.indexOf('Photo')> -1 )
  {
  	$('#li_MyPhoto').addClass('active disabled');
  }

  if(title.indexOf('Paper')> -1 )
  {
  	$('#li_MyPaper').addClass('active disabled');
  }

  if(title.indexOf('Lab')> -1 )
  {
  	$('#li_MyLab').addClass('active disabled');
  }

});
////////////////////////////////////////////////////////////////////////////////////

