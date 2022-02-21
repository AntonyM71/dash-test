import {APIPokemon} from "@/api/types";
import {createStore} from "vuex";
import {allPokemon} from "../api/api";
export default createStore({
  state(): TeamState {
    return {
      members: [],
      pokemons: []
    };
  },
  mutations: {
    addAvailablePokemon(state: TeamState, pokemons: APIPokemon[]) {
      state.pokemons = pokemons;
    },
    addMember(state: TeamState, newPokemon: APIPokemon) {
      if (state.members.length < 6) {
        state.members = state.members.concat(newPokemon);
      }
    },
    removeMember(state: TeamState, pokemnonToRemove: string) {
      state.members = state.members.filter((m) => m.id !== pokemnonToRemove);
    }
  },
  actions: {
    async getAllPokemons({commit}) {
      const pokemons = await allPokemon();
      commit("addAvailablePokemon", pokemons);
    },
    addMember({commit}, id) {
      commit("addMember", id);
    },
    deleteMember({commit}, id) {
      commit("removeMember", id);
    }
  },
  modules: {},
  getters: {
    numberOfTeamMembers(state) {
      return state.members.length;
    },
    allAvailablePokemons(state) {
      return state.pokemons;
    }
  }
});

export interface TeamState {
  members: APIPokemon[];
  pokemons: APIPokemon[];
}
