var row = 10;
var cell = 10;	
function createInnerHTML(){
	var d = document.getElementById('d');
	d.innerHTML = '';
	var txt = '<table> <tbody>';
	for( var i = 1 ; i <= row; i++){
		txt += '<tr>';
		for(var j = 1; j <= cell;j++){
			txt += "<td>" + (i*j) + "</td>"
		} 
		txt += "</tr>";
	}
	txt += "</tbody> </table>";
	d.innerHTML = txt;

}
function createDOM(){
	var d = document.getElementById('d');
	d.innerHTML = '';
	var t = d.appendChild(document.createElement('table'));
	var tb = t.appendChild( document.createElement('tbody'));
	for (var i = 1;i<= row;i++){
		var tr = tb.appendChild(document.createElement('tr'));
		for(var j = 1; j <= cell; j++){
			var td = tb.appendChild(document.createElement('td'))
			td.appendChild(document.createTextNode(i*j))
		}

	}

}