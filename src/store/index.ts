import {APIPokemon} from "@/api/types";
import {createStore} from "vuex";

export default createStore({
  state(): TeamState {
    return {
      members: []
    };
  },
  mutations: {
    addMember(state: TeamState, action: APIPokemon) {
      if (state.members.length < 6) {
        state.members = state.members.concat(action);
      }
    },
    removeMember(state: TeamState, action: string) {
      state.members = state.members.filter((m) => m.id !== action);
    }
  },
  actions: {
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
    }
  }
});

export interface TeamState {
  members: APIPokemon[];
}
