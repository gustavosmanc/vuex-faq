import { createStore } from 'vuex';
import { faqCategories } from '@/utils/db.json';

export default createStore({
  state: {
    categories: [],
    component: {
      name: 'Categories',
      categoryId: null,
      questionId: null,
      depth: 0,
    },
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    SET_COMPONENT(state, component) {
      state.component = component;
    },
  },
  actions: {
    fetchCategories(context) {
      context.commit('SET_CATEGORIES', faqCategories);
    },
    fetchComponent(context, component) {
      context.commit('SET_COMPONENT', component);
    },
  },
  getters: {
    $getAllCategories(state) {
      return state.categories;
    },
    $getComponent(state) {
      return state.component;
    },
  },
});
