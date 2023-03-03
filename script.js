console.log("Loaded like a potato");

//Global Variables
currentLot = "::NOLOT";
const arrToastIds = [];




//Strings
know = "Knowlton";
pac = "Packard Athletic Center";
cig = "Center for Innovation and Growth";
telfer = "Telfer";
union = "Strosacker Union";

// Get Buttons
const btnParkKnow = document.getElementById("btnParkKnow");
const btnParkPAC = document.getElementById("btnParkPAC");
const btnParkCIG = document.getElementById("btnParkCIG");
const btnParkTelfer = document.getElementById("btnParkTelfer");
const btnParkUnion = document.getElementById("btnParkUnion");

// Button Callbacks
btnParkKnow.addEventListener("click",function(){park(know)});
btnParkPAC.addEventListener("click",function(){park(pac)});
btnParkCIG.addEventListener("click",function(){park(cig)});
btnParkTelfer.addEventListener("click",function(){park(telfer)});
btnParkUnion.addEventListener("click",function(){park(union)});

const arrLotBtns = [btnParkKnow, btnParkPAC, btnParkCIG, btnParkTelfer,
                    btnParkUnion];
/**
 *  Callback for Park buttons.      console.log

 *  TODO: Add more info/stuff here.
 */
function park(lot) {
  btn=document.getElementById(event.srcElement.id);
  // Park
  if (currentLot==="::NOLOT") {
    currentLot = lot;
    toast("Parked in "+lot+" lot!",1000);
    btn.setAttribute("class","btnNormal");
    btn.innerHTML = "Unpark";
  }

  // Unpark
  else {

    //If unparking from same lot:
    if (currentLot === lot) {
      btn.setAttribute("class","btnHighlight");
      btn.innerHTML = "Park";
      currentLot = "::NOLOT";
    }

    //If moving lots:
    else {
      moveLot();
      park(lot);
    }
    }
  }

function moveLot() {
  arrLotBtns.forEach(function(i){
        i.setAttribute("class","btnHighlight");
        i.innerHTML = "Park";
        currentLot="::NOLOT";
      });
}


let toastId = -99;
/**
 *  Displays a toast message to the user for a specified amount of time.
 *  @param {String}  text      Text to show the user
 *  @param {int}     duration  How long to show the toast
 */
function toast(text, duration) {

  const date = new Date();
  strDate = date.toString();
  toastId = "toast-"+strDate.substring(19,21)+strDate.substring(22,25);
  strToast = `
  <div class="toastBox" id="${toastId}">
    <div class="toast">
    ${text}
    </div>
  </div>
  `
  body.insertAdjacentHTML('beforeend',strToast);

  //Remove
  currentToasts = document.getElementsByClassName("toastBox");
  setTimeout(() => {

    curDate = date.toString();
    curDate = curDate.substring(19,21)+curDate.substring(22,25)

    for (let i=0; i < currentToasts.length; i++) {
      idNum = currentToasts[i].id.substring(6,10);
      if (parseInt(idNum) >= parseInt(curDate)-1) {
        currentToasts[i].parentNode.removeChild(currentToasts[i]);
      }
    }

  },duration);


  /*
  objToast = document.getElementById(toastId);
  setTimeout(() => {
    if (objToast != null) {
      objToast.parentNode.removeChild(objToast)
      toastId = -99;
    }

    },duration);
  */
    }


