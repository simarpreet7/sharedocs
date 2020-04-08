// let socket=io();



// function god(){
// socket.emit('boom',{change:document.getElementById("editor1").innerHTML});
// }
// socket.on('btoc',(data)=>{
 
//   document.getElementById("editor1").innerHTML=data.change

 
  
// })

// document.getElementById("editor1").addEventListener("keydown")
// {
//   var x = document.getElementById("editor1").innerHTML;
//   document.getElementById("h").value = x;
// console.log(document.getElementById("h").value)
// }


// document.getElementById("editor1").addEventListener("click")
// {
//   var x = document.getElementById("editor1").innerHTML;
//   document.getElementById("h").value = x;console.log(document.getElementById("h").value)}



// document.getElementById("editor1").addEventListener("keyup")
// {
//   var x = document.getElementById("editor1").innerHTML;
//   document.getElementById("h").value = x;console.log(document.getElementById("h").value)}



function downloading(){
  var x = document.getElementById("editor1").innerHTML;
  var str=Array.from(x);
  var stringa=[];
   for(var i=0;i<str.length;++i){
    if(str[i]=='<'&&str[i+1]=='d'&&str[i+2]=='i'&&str[i+3]=='v'){
    
      
      while(str[i]!='>'){
           i+=1;
      }
    }
   
      else if(str[i]=='<'&&str[i+1]=='/'&&str[i+2]=='d'&&str[i+3]=='i'&&str[i+4]=='v'){
    
        break;
           
        }
      else
      { 
        stringa.push(str[i]);
       
        
      }
   } 
   x3=stringa.join("")
 


  var a = document.body.appendChild(
    document.createElement("a")
);
a.download = document.getElementById("saver").value+".html";
a.href = "data:text/html," + x3;
a.innerHTML = "";

}


function f() {
  var p;
  var k = 0;
  if (document.getElementById("orignal_checker").value === document.getElementById("orignal_checker2").value) {
    k = 1;
  }
  while (p == "" || p == null) {
    p = prompt("please enter your file name :", document.getElementById("orignal_name").value);
    if (k == 0) {
      p = document.getElementById("orignal_name").value;
    }
  }

  var x = document.getElementById("editor1").innerHTML;
  var str=Array.from(x);
  var stringa=[];
   for(var i=0;i<str.length;++i){
    if(str[i]=='<'&&str[i+1]=='d'&&str[i+2]=='i'&&str[i+3]=='v'){
    
      
      while(str[i]!='>'){
           i+=1;
      }
    }
   
      else if(str[i]=='<'&&str[i+1]=='/'&&str[i+2]=='d'&&str[i+3]=='i'&&str[i+4]=='v'){
    
        break;
           
        }
      else
      { 
        stringa.push(str[i]);
       
        
      }
   } 
   x3=stringa.join("")
   console.log(x)
 
   console.log(x3)
  document.getElementById("h").value = x3;
  document.getElementById("saver").value = p;
}


function d() {

  document.getElementsByName("r").action = window.location.href + "/save";
}

function chooseColor() {
  var mycolor = document.getElementById("myColor").value;
  document.execCommand("foreColor", false, mycolor);
}

function changeFont() {
  var myFont = document.getElementById("input-font").value;
  document.execCommand("fontName", false, myFont);
}

function changeSize() {
  var mysize = document.getElementById("fontSize").value;
  document.execCommand("fontSize", false, mysize);
}

function checkDiv() {
  var editorText = document.getElementById("editor1").innerHTML;
  if (editorText === "") {
    document.getElementById("editor1").style.border = "5px solid red";
  }
}

function removeBorder() {
  document.getElementById("editor1").style.border = "1px solid transparent";
}

function viewer() {
  alert(
    "Copied text selection: " +
    window
    .getSelection()
    .anchorNode.data.substring(
      window.getSelection().anchorOffset,
      window.getSelection().extentOffset
    )
  );
}


var counterFormatTextPanel = 0;

var popupState = 0;

function viewPopup(id) {
  if (popupState == 0)
    popupState = 1;

  if (popupState == 1) {
    var popup = document.getElementById(id);
    popup.classList.toggle("show");
  }
}

function hidePopup(id) {
  if (popupState == 1)
    popupState = 0;

  if (popupState == 0) {
    var popup = document.getElementById(id);
    popup.classList.toggle("hide");
  }
}

var counterSelectionPane = 0;
var response = 'r';

function viewSelectionPane() {
  if (counterSelectionPane % 2 == 0) {
    document.getElementById("share-selection-pane").style.visibility =
      "visible";
    console.log(response);
    // alert("clicked");
  } else {
    document.getElementById("share-selection-pane").style.visibility = "hidden";
  }
  counterSelectionPane = counterSelectionPane + 1;
}

function hideSelectionPane() {
  document.getElementById("share-selection-pane").style.visibility = "hidden";
  counterSelectionPane = counterSelectionPane + 1;
}

function storeRadioOutput(permission) {
  response = permission;
  console.log(response);
}

function addMember() {
  // var tableEntries = [{
  //     officialName: "Siddhartha",
  //     group: "DTU",
  //     officeDept: "FrontEnd",
  //     email: "siddharthamaster4@gmail.com"
  //   },
  //   {
  //     officialName: "Simarpreet Singh",
  //     group: "DTU",
  //     officeDept: "BackEnd",
  //     email: "siddharthamaster4@gmail.com"
  //   },
  //   {
  //     officialName: "Siddhant Jain",
  //     group: "DTU",
  //     officeDept: "FrontEnd",
  //     email: "siddharthamaster4@gmail.com"
  //   },
  //   {
  //     officialName: "Yogesh Narang",
  //     group: "DTU",
  //     officeDept: "FrontEnd",
  //     email: "siddharthamaster4@gmail.com"
  //   },
  //   {
  //     officialName: "Siddhartha3",
  //     group: "DTU",
  //     officeDept: "FrontEnd",
  //     email: "siddharthamaster4@gmail.com"
  //   }
  // ];

  // var para = document.createElement("P");
  // var text = document.createTextNode("Addition button worked successfully");
  // para.appendChild(text);
  // document.getElementById("share-selection-pane").appendChild(text);

  // var access = document.getElementsByName("access-permission").value;

  var email = document.getElementById("email").value;
  document.getElementById("view-existing-groups").innerHTML = "View Groups";

  var table = document.getElementById("share-table-new");
  var insPosTable = table.rows.length; //Last Row is the Footer
  var rowEntry = table.insertRow(insPosTable);
  // rowEntry.insertCell(0).innerHTML = tableEntries[0].officialName;
  // rowEntry.insertCell(1).innerHTML = tableEntries[];
  rowEntry.insertCell(0).innerHTML = email;
  rowEntry.insertCell(1).innerHTML = '';
  // rowEntry.insertCell(1).innerHTML = response;


  var tickIndex = 0;

  if (response == 'r')
    tickIndex = 2;
  else if (response == 'w')
    tickIndex = 3;
  else
    tickIndex = 4;

  for (var i = 2; i <= 4; i++) {
    if (i == tickIndex)
      rowEntry.insertCell(i).innerHTML = "&#x2705";
    else
      rowEntry.insertCell(i).innerHTML = '';
  }

  response = 'r';
  document.getElementById("email").value = '';
  document.getElementById("readable").checked = "checked";

  //Task, to clear the input for the next one
  //Reset the radio buttons

  //Make a checkbox for selecting all the values in the sharing table 
  // There is a need to make the table feasible for the input from the radio buttons.
  // Scrollable table?  We need to have a detailed look at it.
  // There is an added need to alert the 
  // There is a need to remove the access from the access table.
  // We can do this today. Take a time input. Manipulating the date is our best chance.

  //No need to work on this project during the Engi week

  //Need to make the add members table work successfully
  //Need to send the data to the backend. Store it, and then start working on it

  // for (var i = 0; i < 55; ++i) {
  //   table.innerHTML +=
  //     "<tr><td>" +
  //     tableEntries[i % 4].officialName +
  //     "</td><td>" +
  //     tableEntries[i % 4].group +
  //     "</td><td>" +
  //     tableEntries[i % 4].officeDept +
  //     "</td><td>" +
  //     tableEntries[i % 4].email +
  //     "</td></tr>";
  // }
  // var memberCounter = document.createTextNode(table.rows.length);
  // document.getElementById("memberCounter").appendChild(" " + memberCounter);
}

var counterViewGroups = 0;

function viewGroups() {
  if (counterViewGroups == 0) {
    document.getElementById("share-table-new").style.visibility = "hidden";
    document.getElementById("view-existing-groups").innerHTML = "View Individual Members";
    counterViewGroups = 1;
  } else {
    document.getElementById("share-table-new").style.visibility = "visible";
    document.getElementById("view-existing-groups").innerHTML = "View Groups";
    counterViewGroups = 0;
  }
}

function viewPanel(id) {
  var width = window.innerWidth;
  var height = window.innerHeight;

  // document.getElementById("panel").style.width = "0px";

  if (counterFormatTextPanel % 2 == 0) {
    document.getElementById("panel").style.visibility = "visible";
    document.getElementById(id).style.visibility = "visible";
    document.getElementById("content").style.width = width - 350;
    document.getElementById("content").style.marginLeft = 340;
    // document.getElementById("menu").style.width = auto;
    // document.getElementById("menu").style.right = (width - 340) * 0.5;
    // var right = parseInt(document.getElementById("menu").style.right);
    // right = (width) * 0.5;
    // document.getElementById("menu").style.right = right;
  } else {
    document.getElementById("panel").style.visibility = "hidden";
    document.getElementById(id).style.visibility = "hidden";
    document.getElementById("content").style.width = width - 10;
    document.getElementById("content").style.marginLeft = 0;
    // document.getElementById("menu").style.width = auto;
    // var right = parseInt(document.getElementById("menu").style.right);
    // right = (width - 340) * 0.5;
    //Issue with the bottom panel has arised. How to resolve that? (Grey gap)
  }
  counterFormatTextPanel = counterFormatTextPanel + 1;
}

//Variable status On and Off implemented.

var counterMenu = 0;

function viewMenu() {
  if (counterMenu % 2 == 0) {
    document.getElementById("menu").style.visibility = "visible";
    // document.getElementById("hide-menu").innerHTML = 'Hide Menu';
    document.getElementById("content").style.marginTop = "43px";
    document.getElementById("header").style.borderBottom = "none";
    // document.getElementById("content").style.width = "80%";
  } else {
    document.getElementById("menu").style.visibility = "hidden";
    // document.getElementById("hide-menu").innerHTML = 'View Menu';
    document.getElementById("content").style.marginTop = "56px";
    document.getElementById("header").style.borderBottom = "5px solid #3498db";
    // document.getElementById("content").style.width = "100%";
  }
  counterMenu = counterMenu + 1;
}

/*
  Found a better logic for implementing it
*/

var counterCopyPanel = 0;

function copiedText() {
  if (counterMenu % 2 == 0) {
    document.getElementById("menu-panel").style = "visible";
  }
}

function changeName(id) {
  if (counterMenu % 2 == 0) {
    id.innerHTML = "Hide Menu";
    document.getElementById("menu").style.visibility = "visible";
  } else {
    id.innerHTML = "/oobb";
    document.getElementById("menu").style.visibility = "hidden";
  }

  counterMenu = counterMenu + 1;
}

function viewTitle() {
  document.getElementById("");
}

function resizeTable() {
  document.getElementById("table-1").resize = "both";
}

function ko() {
  document.getElementById("editor1").innerHTML = document.getElementById("fname").value;
}

function createImage() {
  //   var y = document.getElementById("Y");
  var img = document.createElement("img");
  img.src = "./copy.png";
  document.getElementById("IMG").appendChild(img);
  document.getElementById("IMG").style.backgroundColor = "green";
  //   y.innerHTML = "click on button to change size";
}

function changeSize() {
  target = document.getElementById("IMG").childNodes[0];
  w = window.prompt("Input Width", 1);
  h = window.prompt("Input height", 1);
  target.style.width = w + "px";
  target.style.height = h + "px";
}

function changeBorder() {
  target = document.getElementById("IMG").childNodes[0];
  borderW = window.prompt("Input Border Width", 0);
  borderC = document.getElementById("get").value;

  target.style.borderStyle = "solid";
  target.style.borderWidth = borderW + "px";
  target.style.borderColor = borderC;
}

function changeBorderColor() {
  target = document.getElementById("IMG").childNodes[0];

  borderC = document.getElementById("get").value;

  target.style.borderColor = borderC;
}

var x2 = 0;
// var y;

function rotateLeft() {
  target = document.getElementById("IMG").childNodes[0];
  x2 = x2 - 90;
  // y = x + "deg";
  target.style.transform = "rotate(" + x2 + "deg)";
  target.style.transition = "0.13s";
}

function rotateRight() {
  target = document.getElementById("IMG").childNodes[0];
  x2 = x2 + 90;
  // y=x+""
  target.style.transform = "rotate(" + x2 + "deg)";
  target.style.transition = "0.13s";
}
var x = 1;

function zoomIn() {
  x *= 2;
  target = document.getElementById("IMG").childNodes[0];
  target.style.transform = "scale(" + x + ")";
}

function zoomOut() {
  x /= 2;
  target = document.getElementById("IMG").childNodes[0];
  target.style.transform = "scale(" + x + ")";
}

function findInText() {
  document.getElementById();
}