import { createStore } from "vuex";
import createPersistedstate from "vuex-persistedstate";

import user from "./modules/user";
import cart from "./modules/cart";
import category from "./modules/category";

export default createStore({
  modules: {
    user,
    cart,
    category,
  },
  plugins: [
    createPersistedstate({
      // 本地存储名字
      key: "erabbit-client-pc-store",
      // 指定需要存储的模块
      paths: ["user", "cart"],
    }),
  ],
});
