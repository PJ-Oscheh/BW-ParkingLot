console.log("Loaded like a potato");

const button = document.getElementById("btnParkKnow");


// Button Callbacks
button.addEventListener("click",function(){park()});

/**
 *  Callback for Park buttons.
 *  TODO: Add more info/stuff here.
 */
function park() {
  toast("Parked!",1000)
}

/**
 *  Displays a toast message to the user for a specified amount of time.
 *  @param {String}  text      Text to show the user
 *  @param {int}     duration  How long to show the toast
 */
function toast(text, duration) {

  toastId = Math.random()
  strToast = `
  <div class="toastBox" id="${toastId}">
    <div class="toast">
    ${text}
    </div>
  </div>
  `

  body.insertAdjacentHTML('beforeend',strToast);
  objToast = document.getElementById(toastId);
  setTimeout(() => {objToast.parentNode.removeChild(objToast)},duration);
}

