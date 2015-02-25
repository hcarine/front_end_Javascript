var add = function(){
	var compra= document.getElementById("compra");
	var list = document.getElementById("list");
	list.appendChild(createRow(compra.value));
	compra.value = "";
}
var createRow = function(itemName){
	var checkbox = document.createElement("input");
	checkbox.type= "checkbox";
	var label = document.createElement("label");
	label.appendChild(document.createTextNode(itemName));

	var container = document.createElement("div");
	container.appendChild(checkbox);
	container.appendChild(label);
	return container;
}