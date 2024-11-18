<script setup>
  import {ref} from 'vue'
  const handleClik = (e)=>{
    alert(e)
  }
</script>
<template>
  <div class="item a"
    data-swapy-item="a">
    <div class="handle"
      ></div>
    <div class="btnContainer">
      <button class="btnCustom" @click="handleClik('A')" >A</button>
      <button class="btnCustom" @click="handleClik('B')" >B</button>
      <button class="btnCustom" @click="handleClik('C')" >C</button>
      <button class="btnCustom" @click="handleClik('D')" >D</button>
      <button class="btnCustom" @click="handleClik('E')" >E</button>
    </div>
  </div>
</template>
<style scoped>
.handle {
  border-radius: 10px;
}
.item.a {
  border-radius: 10px;
}
.btnContainer{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: center;
  gap: 1.5rem;

  
}
.btnCustom{
  border-radius: 9px;
  width: 5rem;
}
</style>