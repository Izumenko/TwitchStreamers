var streamsColoumn = document.querySelector('.column-left');
var topGames       = document.querySelector('.top-games');
var twitchClientId = 'fsreq3bjqe7egs31oqr3rxii9758i3';

$.ajax({
   type: 'GET',
   url: 'https://api.twitch.tv/kraken/games/top',
   headers: {
      'Client-ID': twitchClientId
   },
   success: function(data) {

      for( var k = 0; k < data.top.length; k++) {
         topGames.innerHTML +=  '<div class="game-container">' + 
                                    '<div class="game-logo">' + 
                                       '<img src=' + data.top[k].game.box.small + '>' + 
                                    '</div>' + 
                                    '<div class="top-games-info">' +
                                       '<img src="images/viewer-icon.png">' +
                                       '<p>' + data.top[k].viewers + '</p>' +
                                    '</div>' +
                                '</div>';
      }
   }
});

$.ajax({
   type: 'GET',
   url: 'https://api.twitch.tv/kraken/streams',
   headers: {
     'Client-ID': twitchClientId
   },
   success: function(data) {
   
      for( var i = 0; i < data.streams.length; i++) {
     	   streamsColoumn.innerHTML += '<div class="stream-line">' + 
                 									'<div class="stream-line-img-container">' +
               										'<img src=' + data.streams[i].channel.logo +  '>' +
                 									'</div>' +
                 									 
                 									'<div class="info-container">' +
                 										'<h2>' + data.streams[i].channel.display_name + '</h2>' +
                  									'<p>' + data.streams[i].game + '</p>' +
                                             '<div class="info-container-viewers">' +
                                                '<img src="images/viewer-icon.png">' +
                     									'<p>' + data.streams[i].viewers + '</p>' +
                                             '</div>' +
                  								'</div>' + 

               									'<div class="name-container">' +
               										'<p>' +
                                                '<a target="_blank" href=' + data.streams[i].channel.url + '>' + data.streams[i].channel.status + '</a>' +
                                             '</p>' +
               									'</div>' +
               									'<div class="button-wrapper">' +
               										'<button class="play-button" name="' + data.streams[i].channel.name + '"></button>' +
               									'</div>' +
               							 '</div>';
      }
      buttonsEvents();
      
   }
});

buttonsEvents = function () {
	$('.play-button').on('click', function(elem) {
		var channelName = elem.target.name;
   	$('.video-frame').attr('src','http://player.twitch.tv/?channel=' + channelName);
	})	
};