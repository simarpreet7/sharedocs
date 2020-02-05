function k() {
  window.location.replace("/word");
}
// var counterContent = 0;
// function n(c_id){
//   var x=c_id;
//   var y=document.getElementsByName("uname").innerHTML;
//   window.location.replace("/word/"+y+"/"+x);
// }

// function viewContent() {
//   if (counterContent % 2 == 0) {
//     document.getElementById("content-create-doc").style.visibility = "visible";
//   } else {
//     document.getElementById("content-create-doc").style.visibility = "hidden";
//   }
//   counterContent = counterContent + 1;
// }

function searchQuery() {
  var text = document.getElementById("fileSearch").value;
  alert("User has searched for " + text);
}

var previousHoverIndex = 0;
var previousLockIndex = 0;

// var counterOnContentSwitch = 0;
// var previousOnContentSwitch = 0;
// var onContentSwitch = 0;

function styleViewFromPanel(id) {
  document.getElementById(id).style.fontSize = 20;
  document.getElementById(id).style.backgroundColor = "#e6e6e6";
  document.getElementById(id).style.borderRadius = "0 20px 20px 0";
  document.getElementById(id).style.border = "2px solid #e6e6e6";
  document.getElementById(id).style.borderLeft = "2px solid transparent";
  document.getElementById(id).style.paddingLeft = "23px";
  document.getElementById(id).style.marginRight = "5px";
}

function viewFromPanel(b) {
  clearViewFromPanel(previousLockIndex);
  switch (b) {
    case 0:
      document.getElementById("content-create-doc").style.visibility =
        "visible";
      styleViewFromPanel("label-content-create-doc");
      // document.getElementById("label-content-create-doc").style.fontSize = 24;
      // document.getElementById("label-content-create-doc").style.backgroundColor = "#388e3c";
      // document.getElementById("label-content-create-doc").style.borderRadius = "20px";
      // document.getElementById("label-content-create-doc").style.border = "2px solid white";
      // document.getElementById("label-content-create-doc").style.paddingLeft = "15px";
      previousLockIndex = 0;
      break;
    case 1:
      document.getElementById("content-create-doc").style.visibility =
        "visible";
      styleViewFromPanel("label-content-create-sheets");
      // document.getElementById("label-content-create-doc").style.fontSize = 24;
      // document.getElementById("label-content-create-doc").style.backgroundColor = "#388e3c";
      // document.getElementById("label-content-create-doc").style.borderRadius = "20px";
      // document.getElementById("label-content-create-doc").style.border = "2px solid white";
      // document.getElementById("label-content-create-doc").style.paddingLeft = "15px";
      previousLockIndex = 1;
      break;
    case 2:
      document.getElementById("content-my-docs").style.visibility = "visible";
      styleViewFromPanel("label-content-my-docs");
      // document.getElementById("label-content-my-docs").style.fontSize = 24;
      // document.getElementById("label-content-my-docs").style.backgroundColor = "#388e3c";
      // document.getElementById("label-content-my-docs").style.borderRadius = "20px";
      // document.getElementById("label-content-my-docs").style.border = "2px solid white";
      // document.getElementById("label-content-my-docs").style.paddingLeft = "15px";
      previousLockIndex = 2;
      break;
    case 3:
      document.getElementById("content-create-group").style.visibility =
        "visible";
      styleViewFromPanel("label-content-create-group");
      // document.getElementById(
      //   "label-content-create-group"
      // ).style.fontSize = 24;
      // document.getElementById("label-content-create-group").style.backgroundColor = "#388e3c";
      // document.getElementById("label-content-create-group").style.borderRadius = "20px";
      // document.getElementById("label-content-create-group").style.border = "2px solid white";
      // document.getElementById("label-content-create-group").style.paddingLeft = "15px";
      previousLockIndex = 3;
      break;
    case 4:
      document.getElementById("content-my-groups").style.visibility = "visible";
      styleViewFromPanel("label-content-my-groups");
      // document.getElementById("label-content-my-groups").style.fontSize = 24;
      // document.getElementById("label-content-my-groups").style.backgroundColor = "#388e3c";
      // document.getElementById("label-content-my-groups").style.borderRadius = "20px";
      // document.getElementById("label-content-my-groups").style.border = "2px solid white";
      // document.getElementById("label-content-my-groups").style.paddingLeft = "15px";
      previousLockIndex = 4;
      break;
    case 5:
      document.getElementById("content-recent").style.visibility = "visible";
      styleViewFromPanel("label-content-recent");
      // document.getElementById("label-content-recent").style.fontSize = 24;
      // document.getElementById("label-content-recent").style.backgroundColor = "#388e3c";
      // document.getElementById("label-content-recent").style.borderRadius = "20px";
      // document.getElementById("label-content-recent").style.border = "2px solid white";
      // document.getElementById("label-content-recent").style.paddingLeft = "15px";
      previousLockIndex = 5;
      break;
    case 6:
      document.getElementById("content-important").style.visibility = "visible";
      styleViewFromPanel("label-content-important");
      // document.getElementById("label-content-important").style.fontSize = 24;
      // document.getElementById("label-content-important").style.backgroundColor = "#388e3c";
      // document.getElementById("label-content-important").style.borderRadius = "20px";
      // document.getElementById("label-content-important").style.border = "2px solid white";
      // document.getElementById("label-content-important").style.paddingLeft = "15px";
      previousLockIndex = 6;
      break;
    case 7:
      document.getElementById("content-recycle-bin").style.visibility =
        "visible";
      styleViewFromPanel("label-content-recycle-bin");
      // document.getElementById("label-content-recycle-bin").style.fontSize = 24;
      // document.getElementById("label-content-recycle-bin").style.backgroundColor = "#388e3c";
      // document.getElementById("label-content-recycle-bin").style.borderRadius = "20px";
      // document.getElementById("label-content-recycle-bin").style.border = "2px solid white";
      // document.getElementById("label-content-recycle-bin").style.paddingLeft = "15px";
      previousLockIndex = 7;
      break;
    case 8:
      document.getElementById("share-selection-pane").style.visibility =
        "visible";
      styleViewFromPanel("label-add-members");
      // document.getElementById("label-content-recycle-bin").style.fontSize = 24;
      // document.getElementById("label-content-recycle-bin").style.backgroundColor = "#388e3c";
      // document.getElementById("label-content-recycle-bin").style.borderRadius = "20px";
      // document.getElementById("label-content-recycle-bin").style.border = "2px solid white";
      // document.getElementById("label-content-recycle-bin").style.paddingLeft = "15px";
      previousLockIndex = 8;
      break;
    default:
      previousLockIndex = 99;
  }

  // console.log(counterOnContentSwitch);
  console.log(previousLockIndex);
}

function clearViewFromPanel(c) {
  switch (c) {
    case 0:
      document.getElementById("content-create-doc").style.visibility = "hidden";
      document.getElementById("label-content-create-doc").style = "intial";
      previousLockIndex = 0;
      break;
    case 1:
      document.getElementById("content-create-doc").style.visibility = "hidden";
      document.getElementById("label-content-create-sheets").style = "intial";
      previousLockIndex = 1;
      break;
    case 2:
      document.getElementById("content-my-docs").style.visibility = "hidden";
      document.getElementById("label-content-my-docs").style = "intial";
      previousLockIndex = 2;
      break;
    case 3:
      document.getElementById("content-create-group").style.visibility =
        "hidden";
      document.getElementById("label-content-create-group").style = "intial";
      previousLockIndex = 3;
      break;
    case 4:
      document.getElementById("content-my-groups").style.visibility = "hidden";
      document.getElementById("label-content-my-groups").style = "intial";
      previousLockIndex = 4;
      break;
    case 5:
      document.getElementById("content-recent").style.visibility = "hidden";
      document.getElementById("label-content-recent").style = "intial";
      previousLockIndex = 5;
      break;
    case 6:
      document.getElementById("content-important").style.visibility = "hidden";
      document.getElementById("label-content-important").style = "intial";
      previousLockIndex = 6;
      break;
    case 7:
      document.getElementById("content-recycle-bin").style.visibility =
        "hidden";
      document.getElementById("label-content-recycle-bin").style = "intial";
      previousLockIndex = 7;
      break;
    case 8:
      document.getElementById("share-selection-pane").style.visibility =
        "hidden";
      document.getElementById("label-add-members").style = "intial";
      previousLockIndex = 8;
      break;
    default:
      previousLockIndex = 99;
  }
}

function onContent(a) {
  if (a != previousLockIndex) {
    outsideContent(previousHoverIndex);
    switch (a) {
      case 0:
        document.getElementById("label-content-create-doc").style.fontSize = 20;
        previousHoverIndex = 0;
        break;
      case 1:
        document.getElementById("label-content-create-sheets").style.fontSize = 20;
        previousHoverIndex = 1;
        break;
      case 2:
        document.getElementById("label-content-my-docs").style.fontSize = 20;
        previousHoverIndex = 2;
        break;
      case 3:
        document.getElementById(
          "label-content-create-group"
        ).style.fontSize = 20;
        previousHoverIndex = 3;
        break;
      case 4:
        document.getElementById("label-content-my-groups").style.fontSize = 20;
        previousHoverIndex = 4;
        break;
      case 5:
        document.getElementById("label-content-recent").style.fontSize = 20;
        previousHoverIndex = 5;
        break;
      case 6:
        document.getElementById("label-content-important").style.fontSize = 20;
        previousHoverIndex = 6;
        break;
      case 7:
        document.getElementById(
          "label-content-recycle-bin"
        ).style.fontSize = 20;
        previousHoverIndex = 7;
        break;
      case 8:
        document.getElementById("label-add-members").style.fontSize = 20;
        previousHoverIndex = 8;
        break;
      default:
        previousHoverIndex = 99;
    }
  }
}

function outsideContent(a) {
  if (a != previousLockIndex) {
    switch (a) {
      case 0:
        document.getElementById("label-content-create-doc").style.fontSize = 16;
        previousHoverIndex = 0;
        break;
      case 1:
        document.getElementById("label-content-create-sheets").style.fontSize = 16;
        previousHoverIndex = 1;
        break;
      case 2:
        document.getElementById("label-content-my-docs").style.fontSize = 16;
        previousHoverIndex = 2;
        break;
      case 3:
        document.getElementById(
          "label-content-create-group"
        ).style.fontSize = 16;
        previousHoverIndex = 3;
        break;
      case 4:
        document.getElementById("label-content-my-groups").style.fontSize = 16;
        previousHoverIndex = 4;
        break;
      case 5:
        document.getElementById("label-content-recent").style.fontSize = 16;
        previousHoverIndex = 5;
        break;
      case 6:
        document.getElementById("label-content-important").style.fontSize = 16;
        previousHoverIndex = 6;
        break;
      case 7:
        document.getElementById(
          "label-content-recycle-bin"
        ).style.fontSize = 16;
        previousHoverIndex = 7;
        break;
      case 8:
        document.getElementById(
          "label-add-members"
        ).style.fontSize = 16;
        previousHoverIndex = 8;
        break;
      default:
        previousHoverIndex = 0;
        console.log("Process has begun");
    }
  }
}

var counterSelectionPane = 0;

function viewSelectionPane() {
  if (counterSelectionPane % 2 == 0) {
    document.getElementById("share-selection-pane").style.visibility =
      "visible";
    // alert("clicked");
  } else {
    document.getElementById("share-selection-pane").style.visibility = "hidden";
  }
  counterSelectionPane = counterSelectionPane + 1;
}

function hideSelectionPane() {
  document.getElementById("share-selection-pane").style.visibility = "hidden";
  counterSelectionPane = counterSelectionPane + 1;
  viewFromPanel(2);
}

var counterCreateGroupPane = 0;

function viewCreateGroupPane() {
  if (counterSelectionPane % 2 == 0) {
    document.getElementById("content-create-group").style.visibility =
      "visible";
    // alert("clicked");
  } else {
    document.getElementById("content-create-group").style.visibility = "hidden";
  }
  counterCreateGroupPane = counterCreateGroupPane + 1;
}

function hideCreateGroupPane() {
  document.getElementById("content-create-group").style.visibility = "hidden";
  counterCreateGroupPane = counterCreateGroupPane + 1;
  viewFromPanel(2);
}

function addMember() {
  var tableEntries = [{
      officialName: "Siddhartha",
      group: "DTU",
      officeDept: "FrontEnd",
      email: "siddharthamaster4@gmail.com"
    },
    {
      officialName: "Simarpreet Singh",
      group: "DTU",
      officeDept: "BackEnd",
      email: "siddharthamaster4@gmail.com"
    },
    {
      officialName: "Siddhant Jain",
      group: "DTU",
      officeDept: "FrontEnd",
      email: "siddharthamaster4@gmail.com"
    },
    {
      officialName: "Yogesh Narang",
      group: "DTU",
      officeDept: "FrontEnd",
      email: "siddharthamaster4@gmail.com"
    },
    {
      officialName: "Siddhartha3",
      group: "DTU",
      officeDept: "FrontEnd",
      email: "siddharthamaster4@gmail.com"
    }
  ];

  // var para = document.createElement("P");
  // var text = document.createTextNode("Addition button worked successfully");
  // para.appendChild(text);
  // document.getElementById("share-selection-pane").appendChild(text);

  // var name = document.getElementById("officialName").value;
  // var group = document.getElementById("group").value;
  // var officeDept = document.getElementById("officeDept").value;
  var email = document.getElementById("email-of-members").value;

  var table = document.getElementById("share-table-new");
  var insPosTable = table.rows.length; //Last Row is the Footer
  var rowEntry = table.insertRow(insPosTable);
  rowEntry.insertCell(0).innerHTML = tableEntries[0].officialName;
  // rowEntry.insertCell(1).innerHTML = tableEntries[];
  // rowEntry.insertCell(2).innerHTML = officeDept;
  // rowEntry.insertCell(3).innerHTML = email;


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
  var memberCounter = document.createTextNode(table.rows.length);
  document.getElementById("memberCounter").appendChild(" " + memberCounter);
}

function addGroupMember() {
  var tableEntries = [{
      officialName: "Siddhartha",
      group: "DTU",
      officeDept: "FrontEnd",
      email: "siddharthamaster4@gmail.com"
    },
    {
      officialName: "Simarpreet Singh",
      group: "DTU",
      officeDept: "BackEnd",
      email: "siddharthamaster4@gmail.com"
    },
    {
      officialName: "Siddhant Jain",
      group: "DTU",
      officeDept: "FrontEnd",
      email: "siddharthamaster4@gmail.com"
    },
    {
      officialName: "Yogesh Narang",
      group: "DTU",
      officeDept: "FrontEnd",
      email: "siddharthamaster4@gmail.com"
    },
    {
      officialName: "Siddhartha3",
      group: "DTU",
      officeDept: "FrontEnd",
      email: "siddharthamaster4@gmail.com"
    }
  ];

  // var para = document.createElement("P");
  // var text = document.createTextNode("Addition button worked successfully");
  // para.appendChild(text);
  // document.getElementById("share-selection-pane").appendChild(text);

  // var name = document.getElementById("officialName").value;
  // var group = document.getElementById("group").value;
  // var officeDept = document.getElementById("officeDept").value;
  var email = document.getElementById("email-for-group").value;

  var table = document.getElementById("group-members-table-new");
  var insPosTable = table.rows.length; //Last Row is the Footer
  var rowEntry = table.insertRow(insPosTable);
  rowEntry.insertCell(0).innerHTML = tableEntries[0].email;
  // rowEntry.insertCell(1).innerHTML = tableEntries[];
  // rowEntry.insertCell(2).innerHTML = officeDept;
  // rowEntry.insertCell(3).innerHTML = email;


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


  var memberCounter = document.createTextNode(table.rows.length);
  document.getElementById("memberCounter").appendChild(" " + memberCounter);
}