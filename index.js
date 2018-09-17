$(document).ready(function(){
	 $(window).resize(function(){

	 if( $(window).width() <= 500 ) {
	 	$( "button" ).click(function() {
  $("span").toggle()
});
}
    })
 })