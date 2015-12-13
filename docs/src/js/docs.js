// ==========================================================================
// Docs example
// ==========================================================================

/*global plyr, shr*/

// Setup the player
plyr.setup({
	debug: 		true,
	title: 		'Video demo',
	tooltips: 	true,
	captions: {
		defaultActive: true
	},
	onSetup: function() {
		console.log('✓ Setup done');
	}
});

// Setup shr
shr.setup({
	count: {
		classname: 'btn-count'
	}
});

// General functions
(function() {
	var buttons = document.querySelectorAll('[data-source]');

	// Bind to each button
	for (var i = buttons.length - 1; i >= 0; i--) {
		buttons[i].addEventListener('click', newSource);
	}

	// Set a new source
	function newSource() {
		var trigger = this,
		type        = trigger.getAttribute('data-source'),
		player      = document.querySelector('.plyr').plyr;

		switch(type) {
			case 'video':
				player.source({
					type:       'video',
					title: 		'Bug Buck Bunny',
					sources: [{
						src:    'https://cdn.selz.com/plyr/1.0/movie.mp4',
						type:   'video/mp4'
					},
					{
						src:    'https://cdn.selz.com/plyr/1.0/movie.webm',
						type:   'video/webm'
					}],
					poster:     'https://cdn.selz.com/plyr/1.0/poster.jpg',
					tracks:     [{
						kind:   'captions',
						label:  'English',
						srclang:'en',
						src:    'https://cdn.selz.com/plyr/1.0/example_captions_en.vtt',
						default: true
					}]
				});
				break;

			case 'audio':
				player.source({
					type:       'audio',
					title: 		'96 by Logistics',
					sources: [{
						src:    'https://cdn.selz.com/plyr/1.0/logistics-96-sample.mp3',
						type:   'audio/mp3'
					},
					{
						src:    'https://cdn.selz.com/plyr/1.0/logistics-96-sample.ogg',
						type:   'audio/ogg'
					}]
				});
				break;

			case 'youtube':
				player.source({
					type:       'youtube',
					title: 		'Enovato interview of Dan Cederholm for Made By',
					sources:    'Au87oAJ2jeE'
				});
				break;

			case 'vimeo':
				player.source({
					type:       'vimeo',
					title: 		'View from a blue moon',
					sources:    '143418951'
				});
				break;
		}

		for (var x = buttons.length - 1; x >= 0; x--) {
			buttons[x].classList.remove('active');
		}

		event.target.classList.add('active');
	}
})();

// Google analytics
// For demo site (http://[www.]plyr.io) only
if(document.domain.indexOf('plyr.io') > -1) {
	(function(i,s,o,g,r,a,m){i.GoogleAnalyticsObject=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	ga('create', 'UA-40881672-11', 'auto');
	ga('send', 'pageview');
}