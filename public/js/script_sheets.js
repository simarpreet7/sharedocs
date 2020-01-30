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

function viewPanel() {
  var width = window.innerWidth;
  var height = window.innerHeight;

  // document.getElementById("panel").style.width = "0px";
  if (counterFormatTextPanel % 2 == 0) {
    document.getElementById("panel").style.visibility = "visible";
    document.getElementById("format-text-panel").style.visibility = "visible";
    // document.getElementById("content").style.width = width * 0.8;
  } else {
    document.getElementById("panel").style.visibility = "hidden";
    document.getElementById("format-text-panel").style.visibility = "hidden";
    document.getElementById("content").style.width = width - 5;
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
    document.getElementById("content").style.marginTop = "131px";
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
    id.innerHTML = "View Menu";
    document.getElementById("menu").style.visibility = "hidden";
  }

  counterMenu = counterMenu + 1;
}

function viewTitle() {
  document.getElementById("");
}