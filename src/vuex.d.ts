import { Store } from "vuex";

declare module "@vue/runtime-core" {
  interface State {
    testState: string;
  }
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
