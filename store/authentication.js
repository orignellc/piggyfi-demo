import { reactive } from "#imports";

export default reactive({
  authUser: {},
  setAuthUser(user) {
    if (user && user._id) this.authUser = user;
  },
  getAuthUserId() {
    return this.authUser._id;
  },
});
