<template>
  <div>
    <div class="header">
      <BtnLeftArrow @go-back="goBack" />
      <div class="header-text">
        <p>{{ $getQuestion }}</p>
      </div>
    </div>
    <p class="answer" v-html="$getAnswer"></p>
  </div>
</template>

<script>
import BtnLeftArrow from '@/components/helpers/BtnLeftArrow';

export default {
  components: { BtnLeftArrow },
  created() {
    return this.$store.dispatch('fetchCategories');
  },
  methods: {
    goBack() {
      this.$store.dispatch('fetchComponent', {
        name: 'Questions',
        categoryId: this.$store.getters.$getComponent.categoryId,
        questionId: null,
        depth: 1,
      });
    },
  },
  computed: {
    $getQuestion() {
      const categoryId = this.$store.getters.$getComponent.categoryId;
      const questionId = this.$store.getters.$getComponent.questionId;

      const questions = this.$store.getters.$getAllCategories.find(
        category => category.id === categoryId,
      ).questions;

      const question = questions.find(question => question.id === questionId)
        .title;

      return question;
    },
    $getAnswer() {
      const categoryId = this.$store.getters.$getComponent.categoryId;
      const questionId = this.$store.getters.$getComponent.questionId;

      const questions = this.$store.getters.$getAllCategories.find(
        category => category.id === categoryId,
      ).questions;

      const answer = questions.find(question => question.id === questionId)
        .content;

      return answer;
    },
  },
};
</script>

<style scoped>
.header {
  padding: 0 1.25rem 1.875rem 1.25rem;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 1rem;
  align-items: center;
}
.header-text p {
  color: var(--white);
  font-size: 1rem;
}
.answer {
  color: var(--white);
  font-size: 0.813rem;
  padding: 0 1.25rem 1.875rem 1.25rem;
  line-height: 1.25rem;
}
</style>
