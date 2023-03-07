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
    transition: transform 90ms ease-in-out;
    user-select: none;


}

div.btnMNav img {
    font-size: 0;
    padding-bottom: 8px;
    width: 32px;
    height: 32px;
    user-select: none;
    pointer-events: none;
}

div.btnMNav p.btn-text {
    display: block;
    font-size: 11pt;
    margin: 0px;
    padding: 0px;
    color: black;
    
}



div.btnMNav:active {
  transform: scale(.85);
  
  
}

</style>