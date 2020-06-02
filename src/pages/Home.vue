<template>
  <div>
    <div class="columns is-variable is-1-mobile is-0-tablet is-3-desktop  ">
      <Statistic
        style="background: #5EBFA7; color: #fff"
        class="column"
        :title="`${card3.titulo} Recuperados`"
        :content="card3.total"
        :content2="`Novos - ${card3.novos}`"
        icon="bar-chart"
      />

      <Statistic
        class="column"
        :title="`${card2.titulo} Confirmados`"
        :content="card2.total"
        :content2="card3.total"
        icon="area-chart"
      />

      <Statistic
        style="background: tomato; color: #fff"
        class="column"
        :title="card1.titulo"
        :content="card1.total"
        :content2="card3.total"
        icon="stock"
      />
    </div>

    <div class="columns is-variable is-1-mobile is-0-tablet is-3-desktop  ">
      <Area
        class="column"
        title="Doação nos ultimos 5 meses"
        series_name0="Name0001"
        series_name1="Name0002"
        :series_data0="series0"
        :series_data1="series1"
        :categorie="categories"
      />
      <Area
        class="column"
        title="Doação nos ultimos 5 meses"
        series_name0="Name0001"
        series_name1="Name0002"
        :series_data0="series2"
        :categorie="categories"
      />
    </div>

    <div class="columns is-variable is-1-mobile is-0-tablet is-3-desktop  ">
      <Area
        class="column"
        title="Doação nos ultimos 5 meses"
        series_name0="Name0001"
        series_name1="Name0002"
        :series_data0="series0"
        :series_data1="series1"
        :categorie="categories"
      />
      <Area
        class="column"
        title="Doação nos ultimos 5 meses"
        series_name0="Name0001"
        series_name1="Name0002"
        :series_data0="series2"
        :categorie="categories"
      />
    </div>
  </div>
</template>

<script>
import Area from "../components/Charts/Area";
/* import LineChart from "../components/Charts/LineChart"; */

import Statistic from "../components/Statistic";

import { corona1 } from "../services";

export default {
  name: "Home",
  components: {
    Area,
    Statistic,
  },
  data() {
    return {
      series0: [],
      series1: [],
      series2: [],
      categories: [],

      card1: {
        total: "",
        titulo: "",
        novos: "",
        incidencia: "",
        letalidade: "",
      },

      card2: {
        total: "",
        titulo: "",
        novos: "",
        incidencia: "",
        letalidade: "",
      },
      card3: {
        total: "",
        titulo: "",
        novos: "",
        incidencia: "",
        letalidade: "",
      },
    };
  },
  computed: {},
  async mounted() {
    console.log("oi");
  },
  async created() {
    corona1.get(`/prod/PortalEstado`).then((res) => {
      let data = res.data.map((value) => {
        /* value.casosAcumulado.push(dado0); */
        dado0.push(value.casosAcumulado);
        dado1.push(value.obitosAcumulado);
        dado2.push(parseInt(value.populacaoTCU2019));
        estado.push(value.nome);
        /* value.casosAcumulado.push(dado1) */
        return value.casosAcumulado;
      });
      return data;
    });

    var dado0 = [];
    var dado1 = [];
    var dado2 = [];
    var estado = [];

    this.series0 = dado0.reverse();
    this.series1 = dado1;
    this.series2 = dado2;
    this.categories = estado;

    console.log("==>", estado);

    this.getDados();
  },
  methods: {
    getDados() {
      corona1
        .get(`/prod/PortalGeralApi`)
        .then((res) => {
          console.log(res.data);
          this.card3.titulo = res.data.confirmados.titulo;
          this.card3.total = res.data.confirmados.total;
          this.card3.novos = res.data.confirmados.novos;
          this.card3.total = res.data.confirmados.recuperados;

          this.card1.titulo = res.data.obitos.titulo;
          this.card1.total = res.data.obitos.total;
          this.card1.novos = res.data.obitos.novos;
          this.card1.letalidade = res.data.obitos.letalidade;

          this.card2.titulo = res.data.confirmados.titulo;
          this.card2.total = res.data.confirmados.total;
          this.card2.novos = res.data.confirmados.novos;
          this.card2.letalidade = res.confirmados.obitos.letalidade;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
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
