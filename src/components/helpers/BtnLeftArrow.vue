<template>
  <div @click="goBack" class="header-btn">
    <div class="arrow"></div>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$emit('goBack');
    },
  },
};
</script>

<style scoped>
.header-btn {
  padding: 0.875rem 0.75rem;
  cursor: pointer;
  background-color: transparent;
  border-radius: 8px;
  transition: background-color 0.2s ease-in-out;
}
.header-btn:hover {
  background-color: var(--hover-dark);
}
.header-btn .arrow {
  width: 22px;
  height: 3px;
  background: var(--white);
  border-radius: 1.25rem;
  position: relative;
}
.header-btn .arrow:before {
  content: '';
  background: var(--white);
  position: absolute;
  width: 13px;
  height: 3px;
  top: -4px;
  left: -3px;
  border-radius: 20px;
  transform: rotate(-51deg);
}
.header-btn .arrow:after {
  content: '';
  background: var(--white);
  position: absolute;
  width: 13px;
  height: 3px;
  transform: rotate(51deg);
  bottom: -4px;
  left: -3px;
  border-radius: 20px;
}
</style>
