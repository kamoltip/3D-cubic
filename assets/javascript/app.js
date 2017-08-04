$(function(){
	
	var
      $outerSquare = $('.cube'),
		$menus		 = $('a.item'),
		$innerSquare = $('.center'),
		$menuParent	= $menus.parent(),
		$box 			 = $('.shape')
    ;
	
	$outerSquare
   .click('$flip', function() {
		$box.shape('flip up');
		})
;
$menus.detach();
	$menus
    .click( '$menus', function() {
        $(this)
         .addClass('active')
          .siblings('.item')
            .removeClass('active');
	
		})
;
$menuParent.append( $menus );
	
	$menus.on('click', function(attr) {
		var tabId = $(this).attr('data-tab');
		$box.shape(tabId);
	})
;
	
// 	$innerSquare
//      	 .click('$flip', function() {
// 		$box.shape('flip left');
// 		})
// 	;
	
});

// var email = 'kamoltip@yahoo.com';
// var password = '12345';
// var auth = firebase.auth();
// auth.createUserWithEmailAndPassword(email, password).catch(function(error) {
//    console.log(error.code);
//    console.log(error.message);
// });
// auth.signInWithEmailAndPassword(email, password).catch(function(error) {
//    console.log(error.code);
//    console.log(error.message);
// });
// auth.signOut().then(function() {
//    console.log("Logged out!")
// }, function(error) {
//    console.log(error.code);
//    console.log(error.message);
// });

// $(".button").on("click", function(){
// $('.ui.basic.modal')
//   .modal('show')
// ;

// var data = 'ariana';
// $.ajax({
//     url:'https://www.googleapis.com/youtube/v3/search?part=snippet&q='+data+'&type=video&key=AIzaSyDjwj6_F7GKOw70x_7oaSy_XVGlm8-d3zE',
//     method:"GET",
//     dataType: "jsonp"
// })
// .then(function(data){

// 	$(p).append(data);
//   console.log(data);
// })
// .fail(function(err){
//   console.log(err.statusText);
// })
// });