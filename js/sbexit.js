$(function(){
  $(document.body)
	  .on('click touchend','#swipebox-slider .current img', function(e){
		  return false;
	  })
	  .on('click touchend','#swipebox-slider .current', function(e){
		  $('#swipebox-close').trigger('click');
	  });
});