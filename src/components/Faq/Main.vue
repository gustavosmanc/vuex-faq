<template>
  <div class="container">
    <transition
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      :leave-active-class="
        `animate__animated animate__${animation} animate__faster`
      "
      mode="out-in"
    >
      <component :is="$getComponent.name" />
    </transition>
  </div>
</template>

<script>
import Categories from '@/components/Faq/Categories';
import Questions from '@/components/Faq/Questions';
import Answer from '@/components/Faq/Answer';

import 'animate.css';

export default {
  components: { Categories, Questions, Answer },
  data() {
    return {
      animation: '',
    };
  },
  watch: {
    '$getComponent.depth'(newValue, oldValue) {
      if (newValue > oldValue) {
        this.animation = 'fadeOutLeft';
      } else {
        this.animation = 'fadeOutRight';
      }
    },
  },
  computed: {
    $getComponent() {
      return this.$store.getters.$getComponent;
    },
  },
};
</script>

<style scoped>
.container {
  padding: 2rem 0.375rem;
  padding-bottom: 0.875rem;
  background-image: var(--background-gradient);
  border-radius: 15px;
  box-shadow: 0 8px 21px 3px rgb(0 0 0 / 19%);
  overflow: hidden;
  position: relative;
}
</style>
