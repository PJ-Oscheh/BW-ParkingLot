console.log("Loaded!");

//TODO: Remove inline function calls, prevent clicking when loading
function doLoadingAnim(btnId) {
  console.log("Clicked");
  btn = document.getElementById(btnId);
  
  if (btn.getAttribute("class") === "btnNormal" ){
    btn.setAttribute("style", "animation: normalLoading 4s forwards infinite; animation-delay: 1s; transform: translate(0, 4px); box-shadow: 0px 0px #000000;")
  }
  else if (btn.getAttribute("class") === "btnHighlight") {
      btn.setAttribute("style","animation: highlightLoading 4s forwards infinite; animation-delay: 1s; transform: translate(0, 4px); box-shadow: 0px 0px #000000;");
  }
  else {
    btn.setAttribute("style","animation: spicyLoading 4s forwards infinite; animation-delay: 1s; transform: translate(0, 4px); box-shadow: 0px 0px #000000;");
  }
  

}
