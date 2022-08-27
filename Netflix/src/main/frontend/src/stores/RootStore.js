import AuthStore from "./AuthStore";

class RootStore {
  authStore;

  constructor() {
    this.authStore = new AuthStore();
  }
}

export default RootStore