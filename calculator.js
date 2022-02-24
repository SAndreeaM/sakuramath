function calculate(x = 0, y = 0) {
	
	var input = document.getElementsByTagName('input');
	var res = document.getElementById('res');
	var history = document.getElementById('history');
	var eq = document.getElementById('eq').value;
	
	var x = Number(input[0].value);
	var y = Number(input[1].value);
	
	res.innerHTML = "";
	
	if(isNaN(x) || isNaN(y)) {
		
		alert("Please input ONLY numerical values.");
		return;
		
	}

	if (eq == 'sum') {

		var resEq = (x + y).toFixed(2);
		var eqSymbol = ' + ';
	
	}
	
	if (eq == 'sub') {
		
		var resEq = (x - y).toFixed(2);
		var eqSymbol = ' - ';
		
	}
	
	if (eq == 'mult') {
		
		var resEq = (x * y).toFixed(2);
		var eqSymbol = ' * ';
	
	}
	
	if (eq == 'div') {
	
		var resEq = (x / y).toFixed(2);
		var eqSymbol = ' / ';
	
	}
	
	if (eq == 'pow') {
	
		var resEq = (Math.pow(x,y)).toFixed(2);
		var eqSymbol = ' ^ ';
			
	}
	
	if(eq != 'fact' && eq != 'sqrt') {
		
	
		var resTxt = x + eqSymbol + y + ' = ' + resEq;
		var hisTxt = x + eqSymbol + y + ' = ' + resEq;
	
	} else {
		
		if(eq == 'fact') {
			
			if(!Number.isInteger(x)) {
				
				alert("Please input ONLY natural numbers. (integers that are greater than 0)");
				return;
				
			}
			
			var p = 1;
			
			for(i = 1 ; i <= x ; i++) {
				
				p = p*i;
				
			}
			
			
			var resTxt = x + '!' + ' = ' + p;
			var hisTxt = x + '!' + ' = ' + p;
			
		} else {
			
			if(x < 0) {
				
				alert("Please input ONLY positive numbers. (that are greater than 0)");
				return;
				
			}
			
			resTxt = '√' + x + ' = ' + (Math.sqrt(x)).toFixed(2);
			hisTxt = '√' + x + ' = ' + (Math.sqrt(x)).toFixed(2);
			
		}
		
	}
	
	res.innerHTML += resTxt + '<br/>';
	history.innerHTML += hisTxt + '<br/>';
	
	
}

function change() {
	
	var eq = document.getElementById('eq').value;
	
	if(eq == 'fact' || eq == 'sqrt') document.getElementById("divy").style.display = "none";
	if(eq != 'fact' && eq != 'sqrt') document.getElementById("divy").style.display = "block";
}

function del() {
	
	var history = document.getElementById('history');
	history.innerHTML = "";
	
}