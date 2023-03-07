<script setup>
    defineProps({
        lotName: {
            type: String
        },
        lotImg: {
            type: String
        },
        shortName: {
            type: String
        }

    })
</script>
<template>

    <div class="lotContainer">
        <p class="lotName">{{ lotName }}</p>
        <img :src="lotImg" />
        <div class="lotContBottom">
            <p class="bottomTxt left">Available:<br>
    
            <num>26</num>
            </p>
            <p class="bottomTxt right">Taken:<br>
                <num class="taken">5</num>
            </p>
            <button class="btnHighlight" @click="park(know)">Park</button>
        </div>
    </div>

</template>
<script>

/* Short Names */
let know = "Knowlton";

export default{
    methods: {
        park(lot) {
            //Add toast
        },
        toastMsg(lot) {
            return "Parked in " + lot +"!"
        }
    }
}
</script>
<style>
    /* Lot Cards */
    
    div.lotContainer {
        display: block;
        padding: 16px;
        margin: 0px;
        width: 350px;
        height: 380px;
        background-color: #FFFFFF;
        border-radius: 30px;
        box-shadow: 0px 0px 8px 1px #00000040;
       
    }

    div.lotContainer p.lotName {
        display: inline-block;
        font-size: 16pt;
        width: 100%;
        text-align: center;
    }

    div.lotContainer img {
        display: block;
        width: 256px;
        height: 128px;
        margin-left: auto;
        margin-right: auto;
    }

    div.lotContainer button {
        display: block;
        margin: 0px;
        margin-top: 100px;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
    }

    div.lotContBottom p.bottomTxt {
        display: inline-block;
        text-align: center;
        width: 75px;
        font-size: 12pt;
        font-weight: bold;
        }

        div.lotContBottom p num {
        font-size: 14pt;
        font-weight: normal;
        }

        div.lotContBottom p num.taken {
        color: #997a1f;
        }

        div.lotContBottom p.left {
        float: left;
        }
        div.lotContBottom p.right {
        float: right;
        }

        div.lotContBottom p.label {
        display: block;
        color: #696969;
        text-transform: uppercase;
        font-weight: normal;
        text-align: left;
        width: 91px;
        margin-left: 126px;
        margin-top: 20px;
        }
</style>