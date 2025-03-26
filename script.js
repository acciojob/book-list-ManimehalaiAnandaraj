//your JS code here. If required.
function addbook() {
	

	const title=document.getElementById("title").value;
		const author=document.getElementById("author").value;
		const isbn=document.getElementById("isbn").value;

	if(title ==="" || author ==="" || isbn==="")
	{
		alert("Please fill in all fields");
		return;
	}

		const table=document.getElementById("book-list").
			
	const newrow = document.createElement("tr");

	newrow.innerHTML=`
	<td>${title}</td>
	<td>${author}</td>
	<td>${isbn}</td>
	<td><button class="delete" onclick="removebook(this)">X</button>
	`;
	table.appendChild(newrow);
	
	document.getElementById("title").value="";
	document.getElementById("author").value="";
	document.getElementById("isbn").value="";
		
}
function removebook(btn) {
	btn.parentElement.parentElement.remove();
}


