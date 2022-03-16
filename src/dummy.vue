// nestTree(arr, properties) { // if (properties.length === 1) { // return
this.groupNode(arr, properties[0], ['sale', 'count']); // } // const property =
properties.shift(); // let grouped = this.groupNode(arr, property); // for (let
key in grouped) { // grouped[key] = this.nestTree(grouped[key],
Array.from(properties)); // } // return grouped; // }, // groupNode(conversions,
property, props = []) { // return conversions.reduce((acc, veg) => { // let key
= veg[property]; // if (!acc[key]) { // acc[key] = []; // } // if
(!props.length) { // acc[key].push(veg); // } else { // let tempObj = {}; //
props.forEach(elem => (tempObj[elem] = veg[elem])); // acc[key] = tempObj; // }
// return acc; // }, {}); // }

<template>
  <ul class="mainUl">
    <li v-for="[key, value] of Object.entries(queryData)" :key="key">
      <span
        ref="caretLi"
        @click="handleNestedItem"
        class="caret"
        :class="{ caretDown: caretLi }"
        >{{ key }}</span
      >
      <template v-if="Object.keys(value).length">
        <ul class="nested" :class="{ active: nestedUl }">
          <recursive-component :queryData="value"></recursive-component>
        </ul>
      </template>
      <template v-else>
        <ul class="nested" :class="{ active: nestedUl }">
          <li class="lastValue">{{ value }}</li>
        </ul>
      </template>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['queryData'],
  name: 'recursive-component',
  data() {
    return {
      caretLi: false,
      nestedUl: false,
    };
  },
  methods: {
    handleNestedItem: function (event) {
      this.caretLi = !this.caretLi;
      this.nestedUl = !this.nestedUl;
    },
  },
};
</script>

<style>
.mainUl {
  margin: 1rem 0;
}
li {
  width: 100%;
  list-style: none;
  font-size: 1.2rem;
}
.caret {
  width: 100%;
  display: block;
  cursor: pointer;
  user-select: none; /* Prevent text selection */
  border: 1px solid #111;
  margin: 1rem 0;
  padding: 0.5rem;
}

.caret::before {
  content: '\25B6';
  color: black;
  display: inline-block;
  margin-right: 6px;
}

/* Rotate the caret/arrow icon when clicked on (using JavaScript) */
.caretDown::before {
  transform: rotate(90deg);
}

/* Hide the nested list */
.nested {
  display: none;
}

/* Show the nested list when the user clicks on the caret/arrow (with JavaScript) */
.active {
  display: block;
}
</style>
