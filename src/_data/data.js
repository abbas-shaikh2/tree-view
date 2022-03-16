export const vegetables = [
  {
    state: 'MH',
    weather: 'Hot',
    vegetable: 'Tomato',
    count: 125,
    sale: 3000,
  },
  {
    state: 'MP',
    weather: 'Rainy',
    vegetable: 'Peas',
    count: 90,
    sale: 4000,
  },
  {
    state: 'UP',
    weather: 'Hot',
    vegetable: 'Chilli',
    count: 200,
    sale: 2500,
  },
  {
    state: 'CH',
    weather: 'Rainy',
    vegetable: 'Peas',
    count: 100,
    sale: 4500,
  },
  {
    state: 'MH',
    weather: 'Rainy',
    vegetable: 'Peas',
    count: 125,
    sale: 3000,
  },
  {
    state: 'MP',
    weather: 'Hot',
    vegetable: 'Chilli',
    count: 90,
    sale: 4000,
  },
  {
    state: 'UP',
    weather: 'Rainy',
    vegetable: 'Tomato',
    count: 200,
    sale: 2500,
  },
  {
    state: 'CH',
    weather: 'Hot',
    vegetable: 'Tomato',
    count: 100,
    sale: 4500,
  },
  {
    state: 'MH',
    weather: 'Rainy',
    vegetable: 'Chilli',
    count: 125,
    sale: 3000,
  },
  {
    state: 'MP',
    weather: 'Rainy',
    vegetable: 'Tomato',
    count: 90,
    sale: 4000,
  },
  {
    state: 'UP',
    weather: 'Hot',
    vegetable: 'Peas',
    count: 200,
    sale: 2500,
  },
  {
    state: 'CH',
    weather: 'Rainy',
    vegetable: 'Chilli',
    count: 100,
    sale: 4500,
  },
];

// function nestGroupsBy(arr, properties) {
//   if (properties.length === 1) {
//     return groupBy(arr, properties[0], ['sale', 'count']);
//   }

//   const property = properties.shift();
//   let grouped = groupBy(arr, property);
//   for (let key in grouped) {
//     grouped[key] = nestGroupsBy(grouped[key], Array.from(properties));
//   }
//   return grouped;
//   console.log(grouped);
// }

// function groupBy(conversions, property, props = []) {
//   return conversions.reduce((acc, veg) => {
//     let key = veg[property];

//     if (!acc[key]) {
//       acc[key] = [];
//     }

//     if (!props.length) {
//       acc[key].push(veg);
//     } else {
//       let tempObj = {};
//       props.forEach(elem => (tempObj[elem] = veg[elem]));
//       acc[key] = tempObj;
//     }
//     return acc;
//   }, {});
// }

// const groups = nestGroupsBy(vegetables, ['state', 'vegetable', 'weather']);
