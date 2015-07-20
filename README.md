# mTimeLapse
Simple library that takes all the images in a div with id="mTimeLapse", and fades them 
through a loop to create a rough time-lapse 'video'.

Has easily customizable frame time names and values.

Here is an example html file:
```html

<!DOCTYPE html>
<html lang='en'>
<head>
	<title>Time Lapse</title>
	<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
	<script type='text/javascript' src='mTimeLapse.js'></script>
	<style>
		* {
			margin:0px;
			padding:0px;
			font-family:sans-serif;
		}

		body {
			text-align: center;
		}

		input {
			background-color: slategray;
			padding:4px 12px;
			margin:4px;
			width:100px;
			color: rgb(250,252,255);
			border:0px;
		}

		input:hover {
			cursor: pointer;
			color:white;
		}

		#frames {
			width:98%;
		}

		#frame_front,
		#frame_back {
			position: absolute;
			top:10px;
			left:10px;
			width:98%;
		}

		#controls {
			width:98%;
			height:60px;
			position: fixed;
			bottom: 60px;
			left:10px;
			color:slategray;
			margin:10px auto;
		}

		#mTimeLapse {
			display: none;
		}
	</style>
</head>
<body>
	<div id="mTimeLapse">
		<img src="frame_1.jpg"/>
		<img src="frame_2.jpg"/>
		<img src="frame_3.jpg"/>
		<img src="frame_4.jpg"/>
		<img src="frame_5.jpg"/>
	</div>
</body>
</html>

```
## License
Copyright (C) 2015 Matthew LaGrandeur, released under [GPL 3.0](https://www.gnu.org/licenses/gpl-3.0-standalone.html)

## Author
| ![Matthew LaGrandeur's picture](https://1.gravatar.com/avatar/f6f7b963adc54db7e713d7bd5f4903ec?s=70) |
|---|
| [Matthew LaGrandeur](http://mattlag.com/) |
| matt[at]mattlag[dot]com |



