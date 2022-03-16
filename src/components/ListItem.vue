<template>
  <ul class="mainUl">
    <li v-for="[key, value] of Object.entries(queryData)" :key="key">
      <span @click="handleNestedItem($event)" class="caret">{{ key }}</span>
      <template v-if="Object.keys(value).length">
        <ul class="nested">
          <recursive-component :queryData="value"></recursive-component>
        </ul>
      </template>
      <template v-else>
        <ul class="nested">
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
      event.target.classList.toggle('caretDown');
      event.target.parentElement
        .querySelector('.nested')
        .classList.toggle('active');
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
  transition: 0.3s ease-in-out;
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
