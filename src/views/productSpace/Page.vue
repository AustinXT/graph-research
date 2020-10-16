<template>
  <div>
    <h1>产业森林</h1>
    <p>
      说明
    </p>
    <h3>Demos 展示</h3>
    <ul>
      <li>
        <router-link to="/productSpace/G6">G6</router-link>
      </li>
      <li>
        <router-link to="/productSpace/D3">D3(d3-force)</router-link>
      </li>
      <li>
        <router-link to="/productSpace/Sigmajs">Sigmajs</router-link>
      </li>
      <li>
        <router-link to="/productSpace/Visjs">Visjs</router-link>
      </li>
      <li>
        <router-link to="/productSpace/Cytoscapejs">Cytoscapejs</router-link>
      </li>
      <li>
        <router-link to="/productSpace/Colajs">Colajs</router-link>
      </li>
      <li>
        <router-link to="/productSpace/Echarts">Echarts</router-link>
      </li>
    </ul>
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>

export default {
  name: 'ProductSpacePage',
  components: {
  },
};
</script>

<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
