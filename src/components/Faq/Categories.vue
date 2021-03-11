<template>
  <div>
    <div class="header">
      <div class="header-image">
        <img src="~@/assets/images/astronaut.svg" alt="astronaut" />
      </div>
      <div class="header-text">
        <h2>Perguntas frequentes</h2>
        <p>Escolha a categoria desejada</p>
      </div>
    </div>
    <ul class="categories">
      <li
        v-for="category in $getAllCategories"
        :key="category.id"
        @click="handleQuestions(category.id)"
        class="category-item"
      >
        <img
          :src="require(`@/assets/images/${category.icon}`)"
          :alt="category.title"
        />
        <p>{{ category.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created() {
    return this.$store.dispatch('fetchCategories');
  },
  methods: {
    handleQuestions(categoryId) {
      this.$store.dispatch('fetchComponent', {
        name: 'Questions',
        categoryId,
        questionId: null,
        depth: 1,
      });
    },
  },
  computed: {
    $getAllCategories() {
      return this.$store.getters.$getAllCategories;
    },
  },
};
</script>

<style scoped>
.header-image {
  display: grid;
  justify-content: center;
}
.header-image img {
  width: 242px;
}
.header-text {
  padding: 1.1rem 1.875rem 2.125rem;
  color: var(--white);
  align-self: flex-start;
}
.header-text h2 {
  font-size: 1.25rem;
}
.header-text p {
  font-size: 0.813rem;
  padding-top: 0.288rem;
}
.categories {
  list-style: none;
}
.category-item {
  color: var(--white);
  padding: 1rem 1.875rem;
  font-size: 1rem;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 2.125rem;
  background-color: transparent;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
}
.category-item:hover {
  background-color: var(--hover-light);
}
.category-item img {
  width: 1.5rem;
}
</style>
