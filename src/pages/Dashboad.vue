<template>
  <div>
    <div class="row">
      <Statistic title="ESTOQUES" content="descrição" icon="stock"/>
      <Statistic title="SEGUIDORES" content="descrição" icon="area-chart"/>
      <Statistic title="Nª POSTS" content="descrição" icon="bar-chart"/>
    </div>
    <div class="row">
      <LineChart
        class="box"
        title="Doação nos ultimos 5 meses"
        series_name0="Name0001"
        series_name1="Name0002"
        :series_data0="series0"
        :series_data1="series1"
      />
      <PieChart
        class="box"
        title="Ações nos ultimos meses"
        series_name0="Name0001"
        series_name1="Name0002"
        :series_data0="series0"
        :series_data1="series1"
      />

      <div class="columns is-gapless">
        <div class="column">
          No gap
        </div>
        <div class="column">
          No gap
        </div>
        <div class="column">
          No gap
        </div>
        <div class="column">
          No gap
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from "../components/Charts/Area";
import PieChart from "../components/Charts/Area";

import Statistic from "../components/Statistic";

export default {
  name: "Home",
  components: {
    LineChart,
    PieChart,
    Statistic
  },
  data() {
    return {
      series0: [0, 0, 33, 0, 0, 22, 12],
      series1: [10, 20, 55, 20, 12, 32, 14]
    };
  }
};
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
}
.box {
  width: 50%;
  padding: 10px;
  background: #fff;
}
</style>