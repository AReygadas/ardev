<script setup>
import A from './A.vue'
import C from './C.vue'
import D from './D.vue'
import { createSwapy } from 'swapy'
import { onMounted, ref } from 'vue'

const DEFAULT = {
  '1': null,
  '2': 'a',
  '3': 'c',
  '4': 'd'
}

// No es necesario definir tipos explícitos en JavaScript
// const slotItems = ref(localStorage.getItem('slotItem') ? JSON.parse(localStorage.getItem('slotItem')) : DEFAULT)
// const slotItems = ref(DEFAULT)
const slotItems = ref({ ...DEFAULT })
const container = ref(null)

onMounted(() => {
  if (container.value) {
    const swapy = createSwapy(container.value)
    swapy.onSwap(({ data }) => {
      localStorage.setItem('slotItem', JSON.stringify(data.object))
    })
  }
})

function getItemById(itemId) {
  switch (itemId) {
    case 'a':
      return A
    case 'c':
      return C
    case 'd':
      return D
    default:
      return null
  }
}
</script>
<template>
  <div class="container"
    ref="container">
    <div class="slot a"
      data-swapy-slot="1">
      <component :is="getItemById(slotItems['1'])" />
    </div>
    <div class="second-row">
      <div class="slot b"
        data-swapy-slot="2">
        <component :is="getItemById(slotItems['2'])" />
      </div>
      <div class="slot c"
        data-swapy-slot="3">
        <component :is="getItemById(slotItems['3'])" />
      </div>
    </div>
     <div class="second-row">
      <div class="slot d"
        data-swapy-slot="4">
        <component :is="getItemById(slotItems['4'])" />
      </div>
      <div class="slot "
        data-swapy-slot="5">
        <component :is="getItemById(slotItems['5'])" />
      </div>
    </div>
    <div class="slot a"
      data-swapy-slot="6">
      <component :is="getItemById(slotItems['6'])" />
    </div>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}

:root {
 background: #11111148;
  backdrop-filter: blur(4px) saturate(86%);
}

body,
#app {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  width: 100%;
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 70vw;
  padding: 10px;
}

.second-row {
  display: flex;
  gap: 5px;
}

.slot {
  background: #11111148;
  backdrop-filter: blur(4px) saturate(86%);
  border-radius: 10px;
  flex: 1;
}

.slot.a {
  flex-basis: 100px;
    border-radius: 10px;
}

.slot.c {
  flex:2;
  border-radius: 10px;
}

.second-row {
  height: 100px;
}

.slot.d {
  flex-basis: 120px;
  
}

.item {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 40px;
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  position: relative;
}

.item.a {
  background: #b95050;
}

.item.b {
  background: #50b97f;
   border-radius: 10px;
}

.item.c {
  background: #508db9;
   border-radius: 10px;
}

.item.d {
  background: #b95096;
   border-radius: 10px;
}

[data-swapy-highlighted] {
  background: #04348d48;
  backdrop-filter: blur(4px) saturate(86%);
}

.handle {
  position: absolute;
  left: 0;
  top: 0;
  width: 20px;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
   border-radius: 10px;
}

.enable-input {
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px;
}
</style>