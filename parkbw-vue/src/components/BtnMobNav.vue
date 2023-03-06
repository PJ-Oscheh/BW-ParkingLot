<script setup>
defineProps({
    text: {
        type: String
    },
    icon: {
        type: String
    }
})
</script>
<template>
    <div class="btnMNav">
        <img :src="icon" />
        <br>
        <p class="btn-text">{{ text }}</p>
    </div>
</template>
<style>

div.btnMNav {
    font-size: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: center;
    text-align: center;
    flex-direction: column;
    width: 64px;
    height: 64px;
    padding: 0px;
    margin: 4px;
}

div.btnMNav img {
    font-size: 0;
    padding-bottom: 8px;
    width: 32px;
    height: 32px;
}

div.btnMNav p.btn-text {
    display: block;
    font-size: 11pt;
    margin: 0px;
    padding: 0px;
    color: black;
    
}

/*
div.btnMNav {
  font-size: 0;
  display: inline-block;
  padding-left: 32px;
  padding-right: 32px;
  padding-top: 8px;
  padding-bottom: 8px;
  margin: 0px;
  color: black;
  vertical-align: top;
}


div.btnMNav img{
  font-size: 0;
  margin: 0px;
  padding-top: 0px;
  padding-bottom: 8px;
  width: 32px;
  height: 32px;
  
}

div.btnMNav p.btn-text {
    display: block;
    margin: 0px;
    padding: 0px;
    font-size:  11pt;
}

div.btnMNav:active {
  background-color: #b3b3b3;
  color: black;
}
*/
</style>