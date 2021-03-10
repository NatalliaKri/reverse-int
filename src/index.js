
module.exports = function reverse (n) {
	
	let newArr = [];
	let d = Math.abs(n);
	
	d = String(d);
	let t = d.split('');
	
	
	for(let i = t.length - 1; i >= 0; i--){
		if(t[i] === '0'){
			t.splice(i, 1);
		};
		
		if(t[i] !== '0'){
			break;
		}
	};
	
	
	for( let i = t.length - 1; i >= 0; i--){
		
		let digit = t.slice(i, i + 1);
		newArr.push(digit);
	}
	
  return  newArr.join(''); 
}

