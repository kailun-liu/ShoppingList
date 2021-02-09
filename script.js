var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var deletebtn = document.getElementById("deleteAll");

function inputLength()
{
	return input.value.length;
}

function createListElement()
{
	var li = document.createElement("li");
	var btn = document.createElement("button");
	var div = document.createElement("div");
	btn.setAttribute("id", "delete");
	li.classList.add("col-2");
	btn.classList.add("btn", "btn-primary", "btn-sm", "col-1");
	div.classList.add("row", "p-2");
	li.appendChild(document.createTextNode(input.value));
	btn.appendChild(document.createTextNode("delete"));
	div.appendChild(li);
	div.appendChild(btn);
	ul.appendChild(div);
	input.value = "";
}

function addListAfterClick()
{
	if(inputLength()>0)
	{
		createListElement();
	}
}

function addListAfterKeypress(event)
{
	if(inputLength()>0 && event.keyCode === 13)
	{
		createListElement();
	}
}

function toggleDone(event)
{
	if (event.path[0].localName === "li")
	{
		event.path[0].classList.toggle("done");
	}
}

function deleteList(event)
{
	if (event.path[0].id === "delete")
	{
		event.path[1].remove();
	}
}

function deleteAll()
{
	for (item of document.querySelectorAll("div"))
	{
		item.remove();
	}
}

deletebtn.addEventListener("click", deleteAll);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
ul.addEventListener('click', toggleDone);
ul.addEventListener("click", deleteList);
