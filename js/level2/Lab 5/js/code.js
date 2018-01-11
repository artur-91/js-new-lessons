function f(){
	var i = document.createElement('em');
	i.appendChild(document.createTextNode('ays text@ teq e'));
	var b = document.createElement('h1');
	b.appendChild(document.createTextNode('ays text@ mec e'));
	var t = document.createTextNode('sovorakan text');
	var br = document.createElement('br');
	var f = document.createDocumentFragment();
	f.appendChild(i);
	f.appendChild(b);
	f.appendChild(t);
	f.appendChild(br);
	var d= document.getElementsByTagName('div');
		for (var i = 0; i< d.length;i++){
			d[i].insertBefore(f.cloneNode(true),d[i].firstChild)
		}
}