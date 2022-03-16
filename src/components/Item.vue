<template>
  <ul>
    <div @click="toggle">
      {{ main }}

      <span v-if="isNested">[{{ isOpen ? '-' : '+' }}]</span>
    </div>
    <ul v-show="isOpen" v-if="isNested">
      <!-- <rounded :main="main" :val="val" /> -->
    </ul>
  </ul>
</template>

<script>
export default {
  name: 'rounded',
  props: ['main', 'val'],
  data() {
    return {
      isOpen: false,
    };
  },

  computed: {
    isNested() {
      return Object.keys(this.val).length;
    },
  },
  methods: {
    toggle() {
      this.isOpen = !this.Open;
    },
  },
  mounted() {
    console.log(this.main, this.val);
  },
};
</script>

<style></style>
