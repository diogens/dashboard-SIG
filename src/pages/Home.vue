<template>
  <div>
    <div class="row">
      <Statistic :title="card1.titulo" :content="card1.total" icon="stock"/>
      <Statistic :title="`${card2.titulo} Confirmados`" :content="card2.total" icon="area-chart"/>
      <Statistic :title="`${card3.titulo} Recuperados`" :content="card3.total" icon="bar-chart"/>
    </div>
  </div>
</template>

<script>
/* import LineChart from "../components/Charts/Area";
import PieChart from "../components/Charts/Area"; */

import Statistic from "../components/Statistic";

import { api, corona1 } from "../services";

export default {
  name: "Home",
  components: {
    /* LineChart,
    PieChart, */
    Statistic
  },
  data() {
    return {
      series0: [0, 0, 33, 0, 0, 22, 12],
      series1: [10, 20, 55, 20, 12, 32, 14],

      card1: {
        total: "",
        titulo: "",
        novos: "",
        incidencia: "",
        letalidade: ""
      },

      card2: {
        total: "",
        titulo: "",
        novos: "",
        incidencia: "",
        letalidade: ""
      },
      card3: {
        total: "",
        titulo: "",
        novos: "",
        incidencia: "",
        letalidade: ""
      }
    };
  },
  mounted() {
    /* this.getDados(); */
  },
  created() {
    this.getDados();
  },
  methods: {
    getDados() {
      corona1
        .get(`/prod/PortalGeralApi`)
        .then(res => {
          console.log(res.data.confirmados);
          this.card3.titulo = res.data.confirmados.titulo;
          this.card3.total = res.data.confirmados.total;
          this.card3.total = res.data.confirmados.recuperados;
          this.card3.total = res.data.confirmados.recuperados;

          this.card1.titulo = res.data.obitos.titulo;
          this.card1.total = res.data.obitos.total;
          this.card1.novos = res.data.obitos.novos;
          this.card1.letalidade = res.data.obitos.letalidade;

          this.card2.titulo = res.data.confirmados.titulo;
          this.card2.total = res.data.confirmados.total;
          this.card2.novos = res.data.confirmados.novos;
          this.card2.letalidade = res.confirmados.obitos.letalidade;

          /* this.card1.titulo = res.data.obitos.titulo;
          this.card1.total = res.data.obitos.total;
          this.card1.novos = res.data.obitos.novos;
          this.card1.letalidade = res.data.obitos.letalidade; */

          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    }
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