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
//let visi = document.getElementById("visi").multiple;

spausti.addEventListener("click", function(){
  for (let i=0; i<boxes.length; i++) {
    let keisti = 'rgb(' + rand() + ',' + rand() + ',' + rand() + ')';
    boxes[i].style.backgroundColor = keisti;
    boxes[i].innerHTML = keisti;
  } 
})
function recolor(event) { 
    event.target.style.backgroundColor = randomColor()
}
function randomColor() {
    return 'rgb(' + rand() + ',' + rand() + ',' + rand() + ')';   
}

function rand() {
    return Math.floor(Math.random() * 256);
}
const color = document.getElementsById("rgbText");
function reOnClick(divD) {
    let divs = document.getElementsByClassName("color");
      for (let i = 0; i < divs.length; i++) {
          if (divs[i].id == divD) {
              divs[i].style.backgroundColor = randomColor(); 
              divs[i].innerText = divs[i].style.backgroundColor;
          }
          else {
             divs[i].style.backgroundColor = randomColor(); 
             divs[i].innerText = divs[i].style.backgroundColor;
          }
          } 
}
function convertRgb(rgb) {
  let separator = rgb.indexOf(",") > -1 ? "," : " ";
  rgb = rgb.substr(4).split(")")[0].split(separator);
  let r = (+rgb[0]).toString(16),
    g = (+rgb[1]).toString(16),
    b = (+rgb[2]).toString(16);
  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;
  return "#" + r + g + b;{
    
  }
  
}


// function rgbT() {
//   let rgbText = getElementById("rgbText");
//   let style = getElementById("visi").value;
//   //let style = window.getComputedStyle(element,"");
//   let spanText = style.getPropertyValue("background-color");
  
//   //let spanText = document.getElementById("visi").value;
//   rgbText.innerHTML = spanText;
// }

//---------------------------------------5-------------------------------------//
let table = document.getElementsByClassName("myTable")[0];
let Table = document.getElementById("myTable");
let tbody = document.getElementsByTagName("tbody");


function showTable() {
  
  if (table.style.display !== "none") {
    table.style.display = "inline-table";
  } else {
    table.style.display = "inline-table";
  }
} 

function hideTable() {

  if (table.style.display !== "inline-table") {
    table.style.display = "none";
  } else {
    table.style.display = "none";
  }
} 

function resetInput(){  
  document.getElementById("myForm").reset();  
}  

function clearTable() {
  // let new_tbody = document.createElement('tbody');
  // populate_with_new_rows(new_tbody);
  // old_tbody.parentNode.replaceChild(new_tbody, old_tbody)
  //for (let i = 0; i > td.length; i++) {
  // document.getElementsByTagName("td").remove();
  // Table.innerHTML = document.getElementById("myTable").innerHTML;
  //document.getElementById("myTable").deleteRow(i);
  let tableHeaderRowCount = 1;
  let table = document.getElementById('myTable');
  let rowCount = table.rows.length;
  for (let i = tableHeaderRowCount; i < rowCount; i++) {
      table.deleteRow(tableHeaderRowCount);
  }
}

function addCourse() {
  
  let row = myBody.insertRow();
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);

  let name = document.getElementById("name").value;
  let lastname = document.getElementById("lastname").value;
  let birthday = document.getElementById("birthday").value;
  let amzius = fnCalculateAge()
  
  cell1.innerHTML = name;
  cell2.innerHTML = lastname;
  cell3.innerHTML = amzius;
}

function fnCalculateAge(){
  let userDateinput = document.getElementById("birthday").value;  
  let birthDate = new Date(userDateinput);
  let difference = Date.now() - birthDate.getTime(); 
  let ageDate = new Date(difference); 
  let calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
  return calculatedAge
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




//  let tbody = document.getElementsByTagName("tbody");
// let listRow = document.getElementsByTagName("td");
// document.getElementsByTagName("td")[i].remove();
// return 'rgb(${rand()}, ${rand()}, ${rand()})'