<script setup>
    import LotContainer from '@/components/LotContainer.vue';
</script>

<template>
    <div class="park">
        <h1 class="secHeader">North Campus</h1>
        <div class="lotBox">
            <LotContainer lotName="Knowlton Lot" 
            :lotImg="require('../assets/imgKnowlton.svg')" 
            shortName="know" />
            <LotContainer lotName="Packard Athletic Center Lot"
            :lotImg="require('../assets/fakeLot.svg')"
            shortName="pac" />
            <LotContainer lotName="Center for Innovation and Growth Lot"
            :lotImg="require('../assets/fakeLot.svg')"
            shortName="cig" />
            <LotContainer lotName="Telfer Lot"
            :lotImg="require('../assets/fakeLot.svg')"
            shortName="telfer" />
        </div>

        <h1 class="secHeader">South Campus</h1>
        <div class="lotBox">
            <LotContainer lotName="Strosacker Union Lot"
            :lotImg="require('../assets/fakeLot.svg')"
            shortName="union" />
        </div>
    </div>
</template>

<style>
    div.park {
        margin-bottom: 100px;
    }
    div.lotBox {
        display: grid;
        grid-template-columns: auto auto auto;
        gap: 20px;
        justify-content: center;
        margin: 0px;
        margin-top: 50px;     
    }

    h1.secHeader {
        font-size: 36pt;
        margin: 20px;
    }

    /*  Desktop, Small */
    @media screen and (min-width: 801px) and (max-width: 1200px) {
    div.lotBox {grid-template-columns: auto auto;}
    } 

    /* Mobile */
    @media screen and (max-width: 800px) {
        div.lotBox {grid-template-columns: auto;}
    }
</style>