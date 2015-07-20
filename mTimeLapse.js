
$(function(){

	var tl = {
		'advancing': false,
		'img':[],
		'currFrame': 0,
		'fadeTime': 500,
		'sitTime': 0,
		'framefront':false,
		'frameback':false,
		'si': 'false',
		'speeds': {
			'Very_Fast': 100,
			'Fast': 200,
			'Medium': 500,
			'Slow': 1000,
			'Very_Slow': 2000
		}
	};

	var f = $('#mTimeLapse');

	if(f){
		// Setup
		tl.img = f.children('img');
		f.before('<div id="frames"><img id="frame_back"/><img id="frame_front"/></div><div id="controls"></div></div>');

		var c = $('#controls');
		c.append('<input type="button" value="Pause" id="pausebutton" onclick="toggleAdvance();"/><br>');
		for(var s in tl.speeds){ if(tl.speeds.hasOwnProperty(s)){
			c.append('<input type="button" value="' + (s.replace(/_/g, ' ') + '" onclick="setSpeed(\'' + s + '\');"/>'));
		}}

		// Go
		tl.framefront = $('#frame_front');
		tl.frameback = $('#frame_back');
		advance();
	}

	function advanceFrame() {
		// console.log('Advancing, currframe is ' + tl.currFrame);

		tl.frameback.attr('src', getFrameSrc());
		tl.currFrame = ((tl.currFrame + 1) % tl.img.length);
		tl.framefront.attr('src', getFrameSrc());
		tl.framefront.css({'opacity': 0.0});
		tl.framefront.animate({'opacity': 1.0},{'duration': tl.fadeTime, 'queue':false});

		// console.log('\t\t>done');
	}

	function getFrameSrc() {
		var s = tl.img[tl.currFrame].src;
		// console.log(s);
		return s;
	}

	function advance() {
		window.clearInterval(tl.si);
		// console.log('Advancing, si=' + tl.si);
		tl.advancing = true;
		$('#pausebutton').attr('value', 'Pause');
		tl.si = setInterval(advanceFrame, (tl.fadeTime + tl.sitTime));
	}

	window.setSpeed = function(name) {
		// console.log('setSpeed ' + name);
		tl.fadeTime = tl.speeds[name] || 500;
		advance();
	};

	window.toggleAdvance = function() {
		tl.advancing = !tl.advancing;
		// console.log('ToggleAdvance - advancing = ' + tl.advancing);

		if(tl.advancing) advance();
		else {
			window.clearInterval(tl.si);
			// console.log('clearInterval cancelled for ' + tl.si);
			$('#pausebutton').attr('value', 'Play');
		}
	};
});