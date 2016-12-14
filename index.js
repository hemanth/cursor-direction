'use strict';
const directions = 'TOP, RIGHT, BOTTON, LEFT'.split(',');
module.exports = (event, domElement) => {
	const w = domElement.offsetWidth, 
	h = domElement.offsetHeight, 
	x = event.pageX - domElement.offsetLeft - w / 2 * (w > h ? h / w : 1), 
	y = event.pageY - domElement.offsetTop - h / 2 * (h > w ? w / h : 1), 
	digit = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
	return directions[digit]
};
