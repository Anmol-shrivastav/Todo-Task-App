let input = document.querySelector(".inputbox");

function deleteTask(e){
	e.currentTarget.remove();
}

input.addEventListener("keypress", function(e){
	if(e.key == "Enter") {
		let task = input.value;
		if(!task) {
			alert("Error: Please Enter Task");
			return;
		}
		let high = document.querySelector("#high");
		let medium = document.querySelector("#medium");
		let low = document.querySelector("#low");
		
		if(high.checked==false && medium.checked==false && low.checked==false){
			alert("Select atleast one priority.");
			return;
		}
		
		if((high.checked==true && medium.checked==true && low.checked==true) || (high.checked==true && medium.checked==true) || (medium.checked==true && low.checked==true) || (high.checked==true && low.checked==true)){
			alert("Please select only one priority.");
			return;
		}
		if(high.checked==true){
			var ul = document.querySelector(".container .part2 .highpriority .tasklist");
		}else if(medium.checked==true){
			var ul = document.querySelector(".container .part2 .mediumpriority .tasklist");
		}else if(low.checked==true){
			var ul = document.querySelector(".container .part2 .lowpriority .tasklist");
		}
		input.value = "";
		let li = document.createElement("li");
		li.innerText = task;
		ul.insertBefore(li, ul.firstChild);
		li.addEventListener("dblclick", deleteTask);
	}
});

