<script setup>
import { onMounted } from "@vue/runtime-core";
import HelloWorld from "./components/HelloWorld.vue";
import IntersectionComponent from "./components/IntersectionComponent.vue";
import intersectionEntry from "./composables/intersectionEntry";
const { observedElement, elementClass, interOptions, interCallback, observer } =
  intersectionEntry();
onMounted(() => {
  observedElement.value = document.querySelector(".intersection");
  elementClass.value = "movein-left";
  interOptions(null, 0);
  interCallback();
  observer.observe(observedElement.value);
});
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <IntersectionComponent class="intersection" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.movein-left {
  animation: moveinLeft 2s ease-in;
}
/* Animations */
@keyframes moveinLeft {
  0% {
    opacity: 0;
    transform: translateX(60px);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
}
</style>
