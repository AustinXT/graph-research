<template>
  <div>
    <h1>G6</h1>
    <p>
      说明: 根据SITC。
    </p>
    <div id="mountNode"
      class="graph"></div>
  </div>
</template>

<script>
import G6 from '@antv/g6';
import nodes from './nodes-SITC';
import edges from './edges-SITC';

export default {
  name: 'G6',
  data() {
    return {
      graph: {},
      nodes: nodes.map((node) => ({
        id: node.productId,
        x: node.x / 5 + 200,
        y: node.y / 5 - 360,
        size: node.nodeSize / 5,
        name: node.productName,
        community: node.productCommunity,
        leamerCategory: node.leamerCategory,
        style: {
          fill: node.nodeColor,
          opacity: 0.6,
          cursor: 'pointer',
        },
      })),
      edges: edges.map((edge) => ({
        source: edge.sProductId,
        target: edge.tProductId,
        style: {
          stroke: edge.linkColor,
          opacity: 0.4,
          cursor: 'pointer',
          lineWidth: edge.linkWidth / 4,
        },
      })),
      config: {
        container: 'mountNode', // String | HTMLElement，必须，在 Step 1 中创建的容器 id 或容器本身
        width: 1200, // Number，必须，图的宽度
        height: 1000, // Number，必须，图的高度
        layout: {
          // type: 'force',
          // preventOverlap: true,
        },
        modes: {
          default: [
            {
              type: 'drag-canvas',
              enableOptimize: true,
            },
            'zoom-canvas',
            {
              type: 'activate-relations',
              trigger: 'click',
            },
            {
              type: 'tooltip',
              formatText: function formatText(model) {
                return (`产品名称：${model.name}<br/>产品类型：${model.community}<br/>Leamer分类：${model.leamerCategory}`);
              },
            },
            {
              type: 'edge-tooltip',
              formatText: function formatText(model, e) {
                const edge = e.item;
                return (
                  `来源：${
                    edge.getSource().getModel().name
                  }<br/>去向：${
                    edge.getTarget().getModel().name}`
                );
              },
            },
          ],
        },
        defaultNode: {
          color: '#5B8FF9',
          style: {
            fill: '#C6E5FF',
          },
        },
        defaultEdge: {
          size: 0.1,
          color: '#e2e2e2',
        },
        nodeStateStyles: {
          hover: {
            opacity: 1,
            stroke: '#d2d2d2',
            lineWidth: 2,
          },
          click: {
            stroke: '#f00',
            lineWidth: 2,
          },
          active: {
            opacity: 1,
          },
          inactive: {
            opacity: 0.2,
          },
        },
        edgeStateStyles: {
          hover: {
            opacity: 1,
            stroke: '#d2d2d2',
            lineWidth: 2,
          },
          click: {
            stroke: '#f00',
            lineWidth: 2,
          },
          active: {
            stroke: '#999',
          },
        },
      },
    };
  },
  mounted() {
    this.mountGraph();
  },
  methods: {
    mountGraph() {
      this.graph = new G6.Graph({ ...this.config, plugins: [] });
      // 读取数据
      this.graph.read({
        nodes: this.nodes,
        edges: this.edges,
      });
      // 鼠标进入节点
      this.graph.on('node:mouseenter', (e) => {
        const nodeItem = e.item; // 获取鼠标进入的节点元素对象
        this.graph.setItemState(nodeItem, 'hover', true); // 设置当前节点的 hover 状态为 true
      });
      // 鼠标离开节点
      this.graph.on('node:mouseleave', (e) => {
        const nodeItem = e.item; // 获取鼠标离开的节点元素对象
        this.graph.setItemState(nodeItem, 'hover', false); // 设置当前节点的 hover 状态为 false
      });
      this.graph.on('node:click', (e) => {
        const clickNodes = this.graph.findAllByState('node', 'click');
        clickNodes.forEach((cn) => {
          this.graph.setItemState(cn, 'click', false);
        });
        const nodeItem = e.item;
        this.graph.setItemState(nodeItem, 'click', true);
      });
      this.graph.on('edge:click', (e) => {
        const clickEdges = this.graph.findAllByState('edge', 'click');
        clickEdges.forEach((ce) => {
          this.graph.setItemState(ce, 'click', false);
        });
        const edgeItem = e.item;
        this.graph.setItemState(edgeItem, 'click', true);
      });
      this.graph.on('node:dragstart', (e) => {
        this.graph.layout();
        this.refreshDragedNodePosition(e);
      });
      this.graph.on('node:drag', (e) => {
        this.refreshDragedNodePosition(e);
      });
      this.graph.on('node:dragend', (e) => {
        e.item.get('model').fx = null;
        e.item.get('model').fy = null;
      });
    },
    refreshDragedNodePosition(e) {
      const model = e.item.get('model');
      model.fx = e.x;
      model.fy = e.y;
    },
  },
};
</script>

<style lang="scss" scoped>
.graph {
  position: relative;
  background-color: #f9f9f9;
  width: 1200px;
  height: 1000px;
  overflow: scroll;
  margin: auto;
}
</style>
<style lang="scss">
.g6-tooltip {
  border: 1px solid #e2e2e2;
  border-radius: 4px;
  font-size: 12px;
  color: #000;
  background-color: rgba(255, 255, 255, 0.9);
  padding: 10px 8px;
  box-shadow: rgb(174, 174, 174) 0px 0px 10px;
  text-align: left;
}
</style>
