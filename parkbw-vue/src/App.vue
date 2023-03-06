<script setup>
import BtnMobNav from './components/BtnMobNav.vue';
</script>
<template>
  <div class="desktopNav">
      <ul>
        <li class="left"><router-link to="/park">Park</router-link></li>
        <li class="left"><router-link to="/myspot">My Spot</router-link></li>
        <li class="center"><p class="pageTitle">Find A Lot</p></li>
        <li class="right"><router-link to="/more">More</router-link></li>
        <li class="right"><router-link to="/help">Help</router-link></li>
      </ul>
  </div>
  <div class="mobileHeaderBox">
    <div class="mobileHeader">
      <p class="pageTitle">Find A Lot</p>
    </div>
  </div>

  <div class="mobileNav">
    <ul class="mNavBar">
      <li>
        <router-link to="/myspot" class="noHighlight">
          <btn-mob-nav text="My Spot"
          :icon="require('@/assets/btnMySpot.svg')" />
        </router-link>
      </li>
      <li>
        <router-link to="/park" class="noHighlight">
          <btn-mob-nav text="Park"
          :icon="require('@/assets/btnPark.svg')" />
        </router-link>
      </li>
      <li>
        <router-link to="/more" class="noHighlight">
          <btn-mob-nav text="More"
          :icon="require('@/assets/btnMore.svg')" />
        </router-link>
      </li>
    </ul>
  </div>
  <router-view/>
</template>

<style>
/* Global Styling */

* {
  font-family: Arial;
  
}

div.park, div.myspot, div.help, div.more {
  margin-top: 100px;
  
}

/* Buttons */

button.btnNormal {
  background-color: #504235;
  color: white;
  border-style: none;
  border-radius: 7px;
  padding: 14px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 11pt;
  box-shadow: 0px 4px #120d09;
  transition: ease-in-out;
  transition-duration: 15ms;
}

button.btnNormal:hover {
  background-color: #64574c;
  box-shadow: 0px 4px #3d2d1f;
}

button.btnNormal:active {
  background-color: #504235;
  box-shadow: 0px 0px #120d09;
  transform: translate(0,4px);
}

button.btnHighlight {
  background-color: #FFCC33;
  color: black;
  border-style: none;
  border-radius: 7px;
  padding: 14px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 11pt;
  box-shadow: 0px 4px #b38f24;
  transition: ease-in-out;
  transition-duration: 15ms;
}


button.btnHighlight:hover {
  background-color: #ffd65c;
  box-shadow: 0px 4px #e6b82e;
}

button.btnHighlight:active {
  background-color: #FFCC33;
  box-shadow: 0px 0px #b38f24;
  transform: translate(0px,4px);
}

button.btnSpicy {
  background-color: #e01b24;
  color: white;
  border-style: none;
  border-radius: 7px;
  padding: 14px;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 11pt;
  box-shadow: 0px 4px #9d1319;
  transition: ease-in-out;
  transition-duration: 15ms;
}

button.btnSpicy:hover {
  background-color: #e64950;
  box-shadow: 0px 4px #ca1820;
}

button.btnSpicy:active {
  background-color: #e01b24;
  box-shadow: 0px 0px #9d1319;
  transform: translate(0px,4px);
}

@keyframes loadingAnim {
  0% {opacity: 100%;}
  50% {opacity: 25%;}
  100% {opacity: 100%;}
}

/* Desktop Navigation */

div.desktopNav {
  display: flex;
  justify-content: center;
  margin: 0px;
  padding: 0px;
}

div.desktopNav ul {
  display: block;
  position: fixed;
  margin: 0px;
  margin-top: 8px;
  padding: 0px;
  list-style-type: none;
  background-color: #FFCC33;
  overflow: hidden;
  text-align: center;
  width: 98%;
  border-radius: 7px;
  box-shadow: 0px 1px 2px #999999;
}

div.desktopNav ul li {
  display: inline-block;
  margin: 0px;
  padding: 0px;
}

div.desktopNav ul li.left {
  float: left;
}

div.desktopNav ul li.right {
  float: right;
}

div.desktopNav ul li.center {
  float: bottom;
  margin-left: auto;
  margin-right: auto;
  width: 50%; 
}
div.desktopNav ul li p.pageTitle {
  font-weight: bold;
  font-size: 16pt;
  vertical-align: middle;
}
div.desktopNav a {
  display: block;
  color: black;
  text-decoration: none;
  margin: 0px;
  padding: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 23.33px;
  padding-bottom: 23.33px;
  width: 80px;
  height: 50%;
  font-size: 13pt;
}

div.desktopNav a:hover {
  background-color: #e6b82e;
}

div.desktopNav a:active {
  background-color: #cca329;
}

div.desktopNav a.current {
  font-weight: bold;
}

@media screen and (min-width: 801px) {
  div.mobileNav {display: none}
  div.mobileHeader {display: none;}
  
}


/* Mobile Cosmetic Changes*/
@media screen and (max-width: 800px) {
  div.desktopNav {display: none;}
  button.btnNormal, button.btnHighlight, button.btnSpicy {
    padding-top: 17px;
    padding-bottom: 17px;
  }
  
  button.btnNormal:hover {
    background-color: #504235;
    box-shadow: 0px 4px #120d09;
  }
  
  button.btnNormal:active {
    box-shadow: 0px 0px #120d09;
  }
  
  button.btnHighlight:hover {
    background-color: #FFCC33;
    box-shadow: 0px 4px #b38f24;
  }
  
  button.btnHighlight:active {
    box-shadow: 0px 0px #b38f24;
  }
  
   button.btnSpicy:hover {
    background-color: #e01b24;
    box-shadow: 0px 4px #9d1319;
   }
   
   button.btnSpicy:active {
    background-color: #e01b24;
    box-shadow: 0px 0px #9d1319;
  }

/* Mobile Navigation */
  div.mobileHeaderBox {
    display: flex;
    justify-content: center;
  }

  div.mobileHeader {
    position: fixed;
    width: 93%;
    margin: 0px;
    margin-top: 8px;
    padding: 0px;
    background-color: #FFCC33;
    text-align: center;
    box-shadow: 0px 1px 2px #999999;
    border-radius: 7px;
}

div.mobileNav ul.mNavBar {
  display: block;
  padding: 0px;
  margin: 0px;
  position: fixed;
  bottom: 0px;
  background-color: #FFFFFF;
  overflow: hidden;
  list-style-type: none;
  box-shadow: 0px -1px #e6e6e6;
  width: 100%;
  text-align: center;
  
}

div.mobileNav ul li {
  float: none;
  display: inline-block;
  vertical-align: top;
}

div.mobileHeader p.pageTitle {
  font-size: 16pt;
  font-weight: bold;
  margin: 17px;
}

div.mobileNav ul.mNavBar {
  display: block;
  padding: 0px;
  margin: 0px;
  position: fixed;
  bottom: 0px;
  background-color: #FFFFFF;
  overflow: hidden;
  list-style-type: none;
  box-shadow: 0px -1px #e6e6e6;
  width: 100%;
  text-align: center;
  
}

a {
  text-decoration: none;
}

a.noHighlight {
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -webkit-tap-highlight-color: transparent;
}

div.mobileNav ul.mNavBar .router-link-active {
  display: block;
  background-color: #FFCC33;
  border-radius: 7px;
}
}
</style>
