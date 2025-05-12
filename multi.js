
function multi(a,b) {

	if (a == 0) { return 0;}
	if (b == 0) {return 0;}

	return a * b ;	

}

function divid(a,b) {
	if (b == 0) return -1;
	return a / b;

}
module.exports = {
 multi,
 divid
};

