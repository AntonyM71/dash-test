import { createStore } from "vuex";

export default createStore({
  state(): stateType {
    return {
      testState: "myString",
      testNumbers: {
      x: [1,2,3,4,5,6,7,8,9], y: [9,8,7,6,5,4,3,2,1,]
      }
    };
  },
  mutations: {
    newString(state: stateType, newstr: string) {
      state.testState = newstr;
    },
  },
  actions: {},
  modules: {},
});

interface stateType {
  testState: string;
  testNumbers: {x: number[], y: number[]};
}
