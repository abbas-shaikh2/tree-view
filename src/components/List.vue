<template>
  <div>
    <user-input @querySearch="handleQuery" />
    <div v-if="Object.entries(queryData).length">
      <ListItem :queryData="queryData" />
    </div>
  </div>
</template>

<script>
import { vegetables } from '@/_data/data';
import UserInput from '@/components/UserInput.vue';
import ListItem from '@/components/ListItem.vue';

export default {
  data() {
    return {
      vegetables,
      queryData: {},
      tempLen: 0,
      veg: [],
    };
  },
  components: {
    UserInput,
    ListItem,
  },
  methods: {
    handleQuery(query) {
      let array = this.nestTree(this.vegetables, query);
      this.queryData = array;
    },

    nestTree(arr, properties) {
      if (properties.length === 1) {
        return this.groupNode(arr, properties[0], ['sale', 'count']);
      }

      const property = properties.shift();
      let grouped = this.groupNode(arr, property);

      for (let key in grouped) {
        grouped[key] = this.nestTree(grouped[key], Array.from(properties));
      }
      return grouped;
    },

    groupNode(conversions, property, props = []) {
      return conversions.reduce((acc, veg) => {
        let key = veg[property];

        if (!acc[key]) {
          acc[key] = [];
        }

        if (!props.length) {
          acc[key].push(veg);
        } else {
          let tempObj = {};
          props.forEach(elem => (tempObj[elem] = veg[elem]));
          acc[key] = tempObj;
        }

        return acc;
      }, {});
    },
  },
};
</script>

<style></style>
