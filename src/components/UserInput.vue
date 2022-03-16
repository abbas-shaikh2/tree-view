<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <input type="text" ref="input" required />
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleSubmit() {
      this.$emit('querySearch', this.$refs.input.value.split(','));
    },
  },
};
</script>

<style scoped>
form {
  width: 100%;
  text-align: center;
}

input {
  width: 80%;
  padding: 0.7rem;
  font-size: 1.2rem;
}
</style>
