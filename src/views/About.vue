<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ testNumbers }}</h2>
    <h2>{{ chartProps }}</h2>
    <LineChart :v-model="chartProps" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { LineChart, useLineChart } from "vue-chart-3";
import store from "@/store";

export default defineComponent({
  name: "Home",
  components: {
    LineChart,
  },
  computed: {
    chartProps() {
      const testData = {
        labels: this.testNumbers.x,
        datasets: [
          {
            data: this.testNumbers.y,
          },
        ],
      };
      const { lineChartProps} = useLineChart({
        chartData: testData,
      });
      return lineChartProps;
    },

    testNumbers() {
      return store.state.testNumbers;
    },
  },
});
</script>
