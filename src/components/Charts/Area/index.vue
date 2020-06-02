<template>
  <VueApexCharts
    width="100%"
    height="230px"
    type="bar"
    :options="chartOptions"
    :series="series"
  />
</template>

<script>
import VueApexCharts from "vue-apexcharts";
export default {
  name: "Area",
  props: {
    title: String,

    series_name0: String,
    series_data0: Array,

    series_name1: String,
    series_data1: Array,

    categorie: Array,
  },
  components: {
    VueApexCharts,
  },
  created() {
    this.chartOptions.title.text = this._props.title;

    this.series[0].name = this._props.series_name0;
    this.series[0].data = this._props.series_data0;

    this.series[1].name = this._props.series_name1;
    this.series[1].data = this._props.series_data1;

    this.chartOptions.xaxis.categories = this._props.categorie;
  },
  mounted() {
    setTimeout(console.log("components time", this.series), 2000);
  },
  data() {
    return {
      value: "I am the child.",
      series: [
        {
          name: null,
          data: null,
        },
        {
          name: null,
          data: null,
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "bar",
          dropShadow: {
            enabled: true,
            color: "#000",
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2,
          },
          toolbar: {
            show: false,
          },
        },
        colors: ["#77B6EA", "#545454"],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
        title: {
          text: "...",
          align: "left",
        },
        grid: {
          borderColor: "#e7e7e7",
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        markers: {
          size: 1,
        },
        xaxis: {
          categories: null,
          fontSize: "12px",
          title: {
            /* text: "Month", */
          },
        },
        yaxis: {
          title: {
            text: "",
          },
          /* min: 5,
          max: 40, */
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -25,
          offsetX: -5,
        },
      },
    };
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
}
</style>
