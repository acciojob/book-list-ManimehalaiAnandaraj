//your JS code here. If required.
document.getElementByClassNames("form-group").addEventListener("submit",function(e){
e.preventDefault();
	const title=document.getElementById("title").value;
		const author=document.getElementById("author").value;
		const isbn=document.getElementById("isbn").value;

		const table=document.getElementById("book-list").
			getElementByTagName("tbody")[0];
	const newrow=table.insertRow(table.rows.length);

	const cell1=newrow.incertCell(0);
	const cell2=newrow.incertCell(1);
	const cell3=newrow.incertCell(2);
	const cell4=newrow.incertCell(3);

	cell1.innerHtml=title;
	cell2.innerHtml=author;
	cell3.innerHtml=isbn;
	cell4.innerHtml=`<button class="delete">X</button>`;

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


