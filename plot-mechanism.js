	var co_ordinateArr = [];
		$(document).ready(function(){

			var rect = $("#click-on-image").offset();
			//console.log(rect);
			var x_rel = ((564-7) + rect.left);
			var y_rel = ((37-7) + rect.top);
			
			//console.log(x_rel + "y_rel "+y_rel);
			$('.map').append($('<i class="fa fa-crosshairs " />').css({
	            color: 'red',
	            position: 'absolute',
	            left:x_rel,
	            top:y_rel
	        }));
/*
			$.ajax({
				url:"getCoordinates.php",
				type: "GET",
				success:function(data){

				}
			})*/



	        $('.map').append($('<i class="fa fa-crosshairs " />').css({
	            color: 'red',
	            position: 'absolute',
	            left:rect.left,
	            top:rect.top
	        }));

			$('#click-on-image').on('click', function(ev) {
		        //console.log(ev, $(this));
		        var bounds = $("#click-on-image")[0].getBoundingClientRect();
		        //console.log(bounds);
		        var x = ev.clientX - bounds.left;
		        var y = ev.clientY - bounds.top;
		        console.log("x "+x);
		        console.log("y "+y);

		        plotCoordinates(x, y);

		        /*var x_new = ev.pageX - $("#click-on-image").offset().left;
		        var y_new = ev.pageY - $('#click-on-image').offset().top;
		        console.log("x_new "+x_new);
		        console.log("y_new "+y_new);

				var x_relative = (ev.pageX - $('#click-on-image').offset().left) + $(window).scrollLeft();
				var y_relative = (ev.pageY - $('#click-on-image').offset().top) + $(window).scrollTop();
				console.log("x_relative "+x_relative);
		        console.log("y_relative "+y_relative);

		        plotX = x_relative + bounds.left;
		        plotY = y_relative + bounds.top; */

		       /* $('#click-on-image').append($('<i class="fa fa-crosshairs " />').css({
		            color: 'red',
		            position: 'absolute',
		            left: plotX-7,
		            top: plotY-7
		        }));*/
		        /*console.log("pageX "+ev.pageX);
		        console.log("pageY "+ev.pageY);

		        console.log("clientX "+ev.clientX);
		        console.log("clientY "+ev.clientY);

		        console.log("plotX "+ plotX);
		        console.log("plotY "+ plotY);*/


	            /*var X = ev.pageX - $('.map img').offset().left;
	            var Y = ev.pageY - $('.map img').offset().top;
	            var divX = Math.ceil(X);
	            var divY = Math.ceil(Y);
	            console.log(divX);
	            console.log(divY);*/
	            //coOrdinates.push({'left' : ev.pageX - 7, 'top': ev.pageY - 7, 'divX':divX, 'divY':divY });
	            
	            //$('#markbodypart').prop('checked', false);
	            //ajaxSave('answer_image_<?php echo $quesVal['id']; ?>');
	        }); 
	
		});

		window.onresize = function(event) {
			var rect = $("#click-on-image").offset();
			//console.log(rect);

			$(".fa-crosshairs").remove();

		    $('.map').append($('<i class="fa fa-crosshairs " />').css({
	            color: 'red',
	            position: 'absolute',
	            left:rect.left,
	            top:rect.top
	        }));

			var x_rel = ((564-7) + rect.left);
			var y_rel = ((37-7) + rect.top);

			console.log(x_rel + "y_rel "+y_rel);

			$('.map').append($('<i class="fa fa-crosshairs " />').css({
	            color: 'red',
	            position: 'absolute',
	            left:x_rel,
	            top:y_rel
	        }));
		};


		function plotCoordinates(x,y){

			var rect = $("#click-on-image").offset();

			var x_rel = ((x-7) + rect.left);
			var y_rel = ((y-7) + rect.top);

			$('.map').append($('<i class="fa fa-crosshairs " />').css({
	            color: 'red',
	            position: 'absolute',
	            left:x_rel,
	            top:y_rel
	        }));


	        var co_ordinates = {};
	        co_ordinates["x"]= x_rel;
	        co_ordinates["y"]= y_rel;
	        co_ordinateArr.push(co_ordinates);

	        //ajaxSave(co_ordinateArr);
		}

		function ajaxSave(co_ordinateArr){

			//console.log(co_ordinateArr);
			//var postData = JSON.stringify({co_ordinateArr});
			$.ajax({
				type:"POST",
				url: "backend.php",
				data: {'points':co_ordinateArr},
				//contentType: 'application/json',
				//dataType : 'json',
				success:function(){
					console.log("successfully inserted");
				}
			})
		}