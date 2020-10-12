<template>
  <div class="home">
    <h1>网络图 JS 库测评</h1>
    <p>
      说明
    </p>
    <h3>Demos 展示</h3>
    <ul>
      <li>
        <router-link to="/G6">G6</router-link>
      </li>
      <li>
        <router-link to="/D3">D3(d3-force)</router-link>
      </li>
      <li>
        <router-link to="/Sigmajs">Sigmajs</router-link>
      </li>
      <li>
        <router-link to="/Visjs">Visjs</router-link>
      </li>
      <li>
        <router-link to="/Cytoscapejs">Cytoscapejs</router-link>
      </li>
      <li>
        <router-link to="/Colajs">Colajs</router-link>
      </li>
      <li>
        <router-link to="/Echarts">Echarts</router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Home',
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
