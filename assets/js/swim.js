( function() {
	/*
	 *
	 *	Continuous Animations
	 *
	*/

	//from MDN
	function getRandomInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	$(document).on('ready', function(){

		//waves stuff
		var s = $('.morph-shape');

		var h = $('.hair-shape');

		var wave = Snap('.waves svg path');

		var hair = Snap('.hair svg path');

		var morph = [];

		var hairmorph = [];

		morph[0] = s[0].dataset.original; 
		morph[1] = s[0].dataset['morph-1'];

		hairmorph[0] = h[0].dataset.original; 
		hairmorph[1] = h[0].dataset['morph-1'];

		// setInterval(function(){
		// 	wave.animate({ d: morph[0] }, 800, mina.linear);
		// }, 1600);

		function waves(){
			wave.stop().animate({ d: morph[1] }, 1200, function(){
				wave.stop().animate({ d: morph[0] }, 800, function(){
					waves();
				});
			});	
		}
		waves();

		function hairs(){
			hair.stop().animate({ d: hairmorph[1] }, 4800, function(){
				hair.stop().animate({ d: hairmorph[0] }, 3600, function(){
					hairs();
				});
			});	
		}
		hairs();

		//fish1 stuff
		var $fish1 = $('.fish1');

		var $fish2 = $('.fish2');

		var $swimtim = $('.swimtim');

		var $hair = $('.hair');

		var durationSetting = 2300;

		function fish1Swim() {
			$fish1.velocity({
				left: ['25%', '-10%'],
				scaleX: '0.7',
				translateY: '+=200%'
			},{
				delay: getRandomInt(300, 1000),
				duration: durationSetting
			}).velocity({
				left: '50%',
				scaleX: '1',
				translateY: '-=200%'
			},{
				duration: durationSetting
			}).velocity({
				left: '75%',
				scaleX: '0.7',
				translateY: '+=200%'
			},{
				duration: durationSetting
			}).velocity({
				left: '120%',
				scaleX: '1',
				translateY: '-=200%'
			},{
				duration: durationSetting,
				complete: function(){

					setTimeout(function(){
						$fish1.css({
							"top": getRandomInt(10, 50) + "em"
						});
						fish1Swim();	
					}, getRandomInt(1000, 3000));
					
				}
			});
		}
		fish1Swim();

		function fish2Swim() {
			$fish2.velocity({
				right: ['25%', '-10%'],
				scaleX: '0.7',
				translateY: ['+=175%', 'easeIn']
			},{
				delay: getRandomInt(300, 1000),
				duration: durationSetting,
				easing: 'linear',
			}).velocity({
				right: '50%',
				scaleX: '1',
				translateY: ['-=175%', 'easeIn']
			},{
				duration: durationSetting,
				easing: 'linear',
			}).velocity({
				right: '75%',
				scaleX: '0.7',
				translateY: ['+=175%', 'easeIn']
			},{
				duration: durationSetting,
				easing: 'linear',
			}).velocity({
				right: '120%',
				scaleX: '1',
				translateY: ['-=175%', 'easeIn']
			},{
				duration: durationSetting,
				easing: 'linear',
				complete: function(){

					setTimeout(function(){
						$fish2.css({
							"top": getRandomInt(20, 30) + "em"
						});
						fish2Swim();	
					}, getRandomInt(1000, 3000));
					
				}
			});
		}
		fish2Swim();

		function bobTim(){
			$swimtim.velocity({
				translateY: '' + getRandomInt(4, 8) + 'px'
			},{
				duration: durationSetting
			}).velocity({
				translateY: '-' + getRandomInt(4, 8) + 'px'
			},{
				duration: durationSetting,
				complete: function(){
					bobTim();
				}
			});
		}
		bobTim();

		$bubble = $('<svg class="bubble" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="10"/></svg>');
		$swimtim.parent().append($bubble);

		function blowBubbles(){
			$('.bubble').css({
				"top": $('.swimtim g#Layer_1').offset().top * -0.001 + 'px',
				"left": "57%",
				"opacity": "0"
			}).velocity({
				opacity: [1, 0],
				translateY: ["-=25%", 0]
			},{
				duration: 200,
				delay: getRandomInt(400, 1000)
			}).velocity({
				translateX: getRandomInt(-30, 30) + "%",
				translateY: ["-=300%", "-=25%"],
				opacity: 0
			},{
				complete: function(){
					blowBubbles();
				}
			});
		}
		blowBubbles();

		$leftarm = $('.swimtim #LeftArm');
		$rightarm = $('.swimtim #RightArm');

		function swingLeftArm(){
			$leftarm.velocity({
				rotateZ: '10deg'
			},{
				duration: durationSetting * 2
			}).velocity({
				rotateZ: '0'
			},{
				duration: durationSetting * 2,
				complete: function(){
					swingLeftArm();
				}
			});
		}
		swingLeftArm();
		
		function swingRightArm(){
			$rightarm.velocity({
				rotateZ: '5deg'
			},{
				duration: durationSetting * 2
			}).velocity({
				rotateZ: '0'
			},{
				duration: durationSetting * 2,
				complete: function(){
					swingRightArm();
				}
			});
		}
		swingRightArm();
		

	});
	

})();

( function(){

	/*
	 *
	 *	Continuous Animations
	 *
	*/

	$(document).on('ready', function(){

		function scrollAnimate(dest) {
			$(dest).velocity('scroll',{
				duration: 600,
				easing: 'easeInOutQuart',
				offset: '-20px'
			});
		}

		$(document).delegate('.nav-menu a', 'click', function(e){
			e.preventDefault();
			$('button.menu-toggle').click();
			var dest = $(e.target).attr('href');
			scrollAnimate(dest);
		});

	});

})();