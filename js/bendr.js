
	$(document).ajaxStart(function(){
  		$('.current-beer-img').attr('src','loader.svg').show();
	});
	
	$(function (){
		$.ajax({
			type: 'GET', 
			url: 'https://api.punkapi.com/v2/beers/random',
			success: function(data) {
				var img = data[0].image_url;
				$('.current-beer-img').attr('src',img);
				var title = data[0].name;
				$('.current-beer-title').text(title);
				
				$("#thumbsUp").click(function(){
					$(".liked-beers-list").append("<li> " + title + " </li>");
					$(function (){
					$.ajax({
						type: 'GET', 
						url: 'https://api.punkapi.com/v2/beers/random',
						success: function(data) {
						img = data[0].image_url;
						$('.current-beer-img').attr('src',img);
						title = data[0].name;
						$('.current-beer-title').text(title);
						}
					});
					});
				});
			
				$("#thumbsDown").click(function(){
					$(function (){
					$.ajax({
						type: 'GET', 
						url: 'https://api.punkapi.com/v2/beers/random',
						success: function(data) {
						img = data[0].image_url;
						$('.current-beer-img').attr('src',img);
						title = data[0].name;
						$('.current-beer-title').text(title);
						}
					});
					});
				});
				}
			});
		});