<template>
  <div class="home">
    <h1>Your Team</h1>
    <li v-for="member in teamMembers" :key="member">
      <team-member-card v-bind="member" />
      </li>
    <h3>{{numberOfTeamMembers() + "/6"}} </h3>
    <h1> Available Pokemon </h1>
    <li v-for="pokemon in pokemons" :key="pokemon.id">
      <pokemon-card v-bind="pokemon" />
      </li>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import store from "@/store";
import { allPokemon} from "../api/api"
import { APIPokemon } from "@/api/types";
import PokemonCard from "@/components/PokemonCard.vue";
import TeamMemberCard from "@/components/TeamMemberCard.vue"
import { mapGetters } from "vuex";



export default defineComponent({
  components: { "pokemon-card": PokemonCard,
  "team-member-card": TeamMemberCard},
  name: "Home",
  data: (): dataType => {
    return { pokemons: [] };
  },
  methods: {
    ...mapGetters(["numberOfTeamMembers"])
  },
  computed: {
    teamMembers() {
      return store.state.members;
    },
  },
  async mounted() {
    const allRetreivedPokemon = await allPokemon()
    this.pokemons = allRetreivedPokemon.pokemons;
  }
});

interface dataType {
  pokemons: APIPokemon[];
}

</script>
