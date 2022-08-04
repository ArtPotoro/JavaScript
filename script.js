//-------------------------------------1-----------------------------------------//
function showBox() {
    let x = document.getElementsByClassName("motionbox")[0];
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } 
//--------------------------------------2--------------------------------------//
function toggleWidth() {
    let element = document.getElementsByClassName("visual")[0];
    element.classList.toggle("largerWidth");
}

function toggleHeight() {
    let element = document.getElementsByClassName("visual")[0];
    element.classList.toggle("largerHeight");
}

function centerPosition() {
  let element = document.getElementsByClassName("visual")[0];
  element.classList.toggle("centerPosition");
}

function randomPosition() {
  let element = document.getElementsByClassName("visual")[0];
  element.classList.toggle("randomPosition");
}

//--------------------------------------3-------------------------------------//

const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)

//--------------------------------------4-------------------------------------//

let keisti = 'rgb(' + rand() + ',' + rand() + ',' + rand() + ')';
let boxes = document.querySelectorAll(".color");
let spausti = document.getElementById("spalvos");


spausti.addEventListener("click", function(){
  for (let i=0; i<boxes.length; i++) {
    let keisti = 'rgb(' + rand() + ',' + rand() + ',' + rand() + ')';
    boxes[i].style.backgroundColor = keisti
  } 
})
function recolor(event) {
    event.target.style.backgroundColor = randomColor()

}
function randomColor() {
    return 'rgb(' + rand() + ',' + rand() + ',' + rand() + ')';
    
}
// return 'rgb(${rand()}, ${rand()}, ${rand()})'

function rand() {
    return Math.floor(Math.random() * 256);
}



//---------------------------------------5-------------------------------------//

function showTable() {
  let t = document.getElementsByClassName("myTable")[0];
  if (t.style.display !== "none") {
    t.style.display = "inline-table";
  } else {
    t.style.display = "none";
  }
} 

function hideTable() {
  let t = document.getElementsByClassName("myTable")[0];
  if (t.style.display !== "inline-table") {
    t.style.display = "none";
  } else {
    t.style.display = "none";
  }
} 


// const table = document.querySelector('table');
// const tbody = table.querySelector('tbody');

// form.map(obj => tr(obj.nr, obj.name, obj.lastname, obj.birthday)).forEach(el => tbody.append(el));

// function tableData(){
//   document.getElementsByClassName(".name, .lastname, .birthday");
//   tbody.append(tr);
// }
// function td(text) {
//   const td = document.createElement('td');
//   td.innerText = text;
//   return td;
// }

// function tr(col1, col2, col3, col4) {
//   const tr = document.createElement('tr');
//   tr.append(td(col1));
//   tr.append(td(col2));
//   tr.append(td(col3));
//   tr.append(td(col4));
//   return tr;
// }
function fnCalculateAge(){

  let userDateinput = document.getElementById("birthday").value;  


  let birthDate = new Date(userDateinput);
 
  let difference=Date.now() - birthDate.getTime(); 
  let ageDate = new Date(difference); 
  let calculatedAge =   Math.abs(ageDate.getUTCFullYear() - 1970);
  return calculatedAge
  
}



function addCourse() {
  let i = 1 ;
  
  let row = myTable.insertRow(i);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);

  let name = document.getElementById("name").value;
  let lastname = document.getElementById("lastname").value;
  let birthday = document.getElementById("birthday").value;
  let amzius = fnCalculateAge()
  console.log(amzius);
  cell1.innerHTML = name;
  cell2.innerHTML = lastname;
  cell3.innerHTML = amzius;
}

