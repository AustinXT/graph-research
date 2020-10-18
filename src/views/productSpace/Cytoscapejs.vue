<template>
  <div>
    <h1>Cytoscapejs</h1>
    <div id='cy'></div>
  </div>
</template>

<script>
import cytoscape from 'cytoscape';

export default {
  name: 'Cytoscapejs',
  data() {
    return {};
  },
  mounted() {
    this.initCytoscape();
  },
  methods: {
    initCytoscape() {
      const list1 = [];
      const list2 = [];
      for (let i = 1; i < 10; i += 1) {
        list1.push({ data: { id: `a${i}`, title: `Tom${i}`, label: `Cruise${i}` } });
        if (i <= 8) {
          list2.push({
            data: {
              id: `a${i}a${i}`,
              weight: 1,
              source: `a${i}`,
              target: `a${i + 1}`,
              relationship: `管家${i}`,
            },
          });
        }
      }
      cytoscape({
        container: document.getElementById('cy'), // container to render in
        elements: {
          nodes: list1,
          edges: list2,
        },

        style: [
          // the stylesheet for the graph
          {
            selector: 'node',
            style: {
              'background-color': '#666',
              label: 'data(id)',
            },
          },

          {
            selector: 'edge',
            style: {
              width: 3,
              'line-color': '#ccc',
              'target-arrow-color': '#ccc',
              'target-arrow-shape': 'triangle',
              'curve-style': 'bezier',
            },
          },
        ],

        // layout: {
        //   name: 'grid',
        //   rows: 2,
        // },
        layout: {
          name: 'circle', // circle  random breadthfirst preset  // 4种展示方式  还有自定义的 没弄
          directed: true,
          roots: '#a',
          padding: 100,
        },
        zoom: 1,
        minZoom: 0.5, // 最小值
        maxZoom: 2, // 最大值
      });
    },
  },
};
</script>

<style>
#cy {
  width: 600px;
  height: 500px;
  display: block;
  background-color: royalblue;
}
</style>
