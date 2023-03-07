<script setup>
import { onMounted } from 'vue';

    defineProps({
        text: {
            type: String,
            required: true
        }
    })
</script>

<script>
    export default{
        mounted() {
            if (this.$refs.toastvue) {
                setTimeout(() => {this.$el.parentNode.removeChild(this.$el)}, 1000)
                
            }
        }
    }
        
</script>

<template>
    <div ref="toastvue" class="toastBox">
        <div class="toast">{{ text }}</div>
    </div>
</template>
<style>
div.toastBox {
  display: flex;
  justify-content: center;
}

div.toast {
  position: fixed;
  bottom: 0px;
  margin-bottom: 100px;
  background-color: #333;
  color: white;
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0px 2px 15px #2e2e2e;
}
</style>