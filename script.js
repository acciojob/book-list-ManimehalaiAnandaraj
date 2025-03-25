//your JS code here. If required.
document.querySelector(".form-group").addEventListener("submit",function(e){
e.preventDefault();
	const title=document.getElementById("title").value;
		const author=document.getElementById("author").value;
		const isbn=document.getElementById("isbn").value;

		const table=document.getElementById("book-list").
			getElementsByTagName("tbody")[0];
	
	const newrow=table.insertRow(0);

	const cell1=newrow.insertCell(0);
	const cell2=newrow.insertCell(1);
	const cell3=newrow.insertCell(2);
	const cell4=newrow.insertCell(3);

	cell1.innerHTML=title;
	cell2.innerHTML=author;
	cell3.innerHTML=isbn;
	cell4.innerHTML=`<button class="delete">X</button>`;

	document.getElementById("title").value="";
	document.getElementById("author").value="";
	document.getElementById("isbn").value="";
		
});

document.getElementById("book-list").addEventListener("click",function(e){
if(e.target.classList.contains("delete"))	
{
	e.target.parentElement.parentElement.remove();
}
});


