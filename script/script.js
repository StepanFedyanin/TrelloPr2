const btnCreateList = document.getElementById("btn-create-list");
const desk = document.getElementById("desk");
let i=0;
console.log(desk.parentNode);

btnCreateList.addEventListener("click",function(){
	
let list=document.createElement("div");
let text=document.createElement("h2");
let dopBlock=document.createElement("div");


let listName = document.getElementById("list-name").value;
let photo=document.createElement("img");
let create=document.createElement("button");

dopBlock.classList.add("list-cards")
let addBlock = document.createElement("button");
addBlock.classList.add("add-card");
addBlock.innerHTML=("Создать блок +")
dopBlock.append(addBlock);

if(listName==""){
	i++;
	list.innerHTML=("<h2>Новый лист"+i+"</h2>");
	text.append(list)


}else{
	text.append(listName);
	list.append(text);

}


photo.classList.add("edit-list");

photo.setAttribute("src","img/paint.jpg");
photo.setAttribute("alt","Редактирование");
photo.setAttribute("width","30px");
create.classList.add("delstis")
create.append("X");
list.classList.add("list");
list.append(photo);
list.append(create);
list.append(dopBlock);
desk.append(list);
})	


const clearAll = document.getElementById("Allclear");
const inputListName = document.getElementById("list-name");
clearAll.onclick = function(){
	desk.innerHTML= "";
	i=0;
}



function addList(){
	btnCreateList.addEventListener("click", addList);
;}


desk.addEventListener("click", e=>{
editLIst(e);
})

function editLIst(e){
	let obj =e.target;
	if(obj.classList.contains("edit-list")){
		let list = obj.parentNode;
		let h2 = list.querySelector("h2");
		h2.setAttribute("contenteditable","true");
		h2.focus();
	}
	if(obj.classList.contains("delstis")){
		desk.removeChild(obj.parentNode);
		i--;
	}
	if(obj.classList.contains("add-card")){
		let textAria = document.createElement("textarea");
		textAria.classList.add("text");

		let delstiCard = document.createElement("button");
		delstiCard.classList.add("delistCacs")
		delstiCard.append("X");

		let cards =document.createElement("div")
		cards.classList.add("card");


		cards.append(textAria);
		cards.append(delstiCard);

		obj.parentNode.append(cards);
	}
	if(obj.classList.contains("delistCacs")){
		obj.parentNode.remove();
	}


}


inputListName.addEventListener("keydown",e=>{
	if(e.key =="Enter"){
		btnCreateList.click();
	}
})


