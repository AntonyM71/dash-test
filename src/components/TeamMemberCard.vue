<template>
  <div class="hello">
      <h3>{{name}}</h3>
    <button v-on:click="deleteMember(id)">
        Remove
        </button>
  </div>
</template>

<script lang="ts">
import { APIPokemon, APIPokemonAttack, APIPokemonDimension, APIPokemonEvolutionRequirement } from "@/api/types";
import { defineComponent, PropType } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "TeamMemberCard",
  props: {
  id: {type: String, default: "" },
  number: {type: String, default: "" },
  name: {type: String, default: "" },
  weight: {type: Object as PropType<APIPokemonDimension> },
  height: {type: Object as PropType<APIPokemonDimension> },
  classification: {type: String, default: "" },
  types: {type: Array, default: () => [] },
  resistant: {type: Array, default: () => [] },
  attacks: {type: Object as PropType<APIPokemonAttack>, default: () => ({})},
  weaknesses: {type: Array, default: () => [] },
  fleeRate: {type: Number,  default: 0 },
  maxCP: {type: Number,  default: 0 },
  evolutions: {type: Array as PropType<APIPokemon[]>, default: () => []},
  evolutionRequirements: {type: Object as PropType<APIPokemonEvolutionRequirement>, default: () => ({})},
  maxHP: {type: Number,  default: 0 },
  image: {type: String, default: "" },
  },
  methods: {
      ...mapActions([
          "deleteMember"
      ])
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
