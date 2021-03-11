<template>
  <div>
    <div class="header">
      <BtnLeftArrow @go-back="goBack" />
      <div class="header-text">
        <h2>{{ $getCategory.title }}</h2>
        <p>Selecione uma pergunta</p>
      </div>
      <img
        class="header-icon"
        :src="require(`@/assets/images/${$getCategory.icon}`)"
        :alt="$getCategory.title"
      />
    </div>
    <ul class="questions">
      <li
        v-for="question in $getQuestions"
        :key="question.id"
        @click="handleAnswer(question.id)"
        class="question-item"
      >
        <p>{{ question.title }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import BtnLeftArrow from '@/components/helpers/BtnLeftArrow';

export default {
  components: { BtnLeftArrow },
  methods: {
    handleAnswer(questionId) {
      this.$store.dispatch('fetchComponent', {
        name: 'Answer',
        categoryId: this.$store.getters.$getComponent.categoryId,
        questionId,
        depth: 2,
      });
    },
    goBack() {
      this.$store.dispatch('fetchComponent', {
        name: 'Categories',
        categoryId: null,
        questionId: null,
        depth: 0,
      });
    },
  },
  computed: {
    $getCategory() {
      const categoryId = this.$store.getters.$getComponent.categoryId;

      const category = this.$store.getters.$getAllCategories.find(
        category => category.id === categoryId,
      );

      return category;
    },
    $getQuestions() {
      const categoryId = this.$store.getters.$getComponent.categoryId;

      const questions = this.$store.getters.$getAllCategories.find(
        category => category.id === categoryId,
      ).questions;

      return questions;
    },
  },
};
</script>

<style scoped>
.header {
  padding: 0 1.25rem 1.875rem 1.25rem;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 1rem;
  align-items: center;
  border-bottom: 1px solid var(--border-color);
}
.header-text {
  color: var(--white);
}
.header-text h2 {
  font-size: 1.25rem;
}
.header-text p {
  font-size: 0.813rem;
  padding-top: 0.288rem;
}
.header-icon {
  width: 1.5rem;
}
.questions {
  padding-top: 0.813rem;
  list-style: none;
}
.question-item {
  color: var(--white);
  padding: 1rem 1.25rem;
  font-size: 1rem;
  background-color: transparent;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
}
.question-item:hover {
  background-color: var(--hover-light);
}
</style>
