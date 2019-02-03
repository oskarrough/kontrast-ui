function rgbToHsl(r, g, b) {
	r /= 255, g /= 255, b /= 255;
	var max = Math.max(r, g, b);
	var min = Math.min(r, g, b);
	var h, s, l = (max + min) / 2;

	if (max == min) {
		h = s = 0; // achromatic
	} else {
		var d = max - min;
		s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
		switch(max) {
			case r: h = (g - b) / d + (g < b ? 6 : 0); break;
			case g: h = (b - r) / d + 2; break;
			case b: h = (r - g) / d + 4; break;
		}
		h /= 6;
	}

	return [h, s, l];
}

function hexToHue(hexColor) {
	// Grab the hex representation of red (chars 1-2)
	// and convert to decimal (base 10).
	var r = parseInt(hexColor.substr(1,2), 16); 
	var g = parseInt(hexColor.substr(3,2), 16);
	var b = parseInt(hexColor.substr(5,2), 16);

	return rgbToHsl(r, g, b)[0] * 360
}

