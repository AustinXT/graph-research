<template>
  <div class="home">
    <h1>网络图 JS 库测评</h1>
    <p>
      说明
    </p>
    <h3>测评结果</h3>
    <table>
      <thead>
        <tr>
          <th>JS 库</th>
          <th>编码难度</th>
          <th>Flowchart 功能</th>
          <th>可拓展性</th>
          <th>综合评价</th>
          <th>渲染速度</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>G6</td>
          <td>低</td>
        </tr>
        <tr>
          <td>D3(d3-force)</td>
          <td>高</td>
        </tr>
      </tbody>
    </table>
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
table {
  margin: auto;
  margin-top: 15px;
}
</style>
