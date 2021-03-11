<template>
  <div class="app">
    <Faq />
  </div>
</template>

<script>
import Faq from '@/components/Faq/Main';
export default {
  components: { Faq },
};
</script>

<style scoped>
.app {
  display: grid;
  grid-template-columns: 305px;
  grid-template-rows: 29.839rem;
  justify-content: center;
  align-content: center;
  height: 100vh;
  background: #f5f6f8;
}
</style>
