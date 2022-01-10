<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js 3.0 app" />
    <h2>{{ test }}</h2>
    <h2>{{ testState }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import store from "@/store";

export default defineComponent({
  name: "Home",
  components: {
    HelloWorld,
  },
  data: (): dataType => {
    return { test: "string" };
  },
  computed: {
    testState() {
      return store.state.testState;
    },
  },
});

interface dataType {
  test: string;
}
</script>
