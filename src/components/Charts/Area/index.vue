<template>
  <VueApexCharts type="line" :options="chartOptions" :series="series"/>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
export default {
  name: "Home",
  props: {
    title: String,

    series_name0: String,
    series_data0: Array,

    series_name1: String,
    series_data1: Array
  },
  components: {
    VueApexCharts
  },
  created() {
    this.chartOptions.title.text = this._props.title;

    this.series[0].name = this._props.series_name0;
    this.series[0].data = this._props.series_data0;

    this.series[1].name = this._props.series_name1;
    this.series[1].data = this._props.series_data1;
  },
  mounted() {
    // Pass a value to the parent through the function
    /* console.log(this); */
    /* this.value1(this.value1); */
  },
  data() {
    return {
      value: "I am the child.",
      series: [
        {
          name: "High - 2013",
          data: [28, 29, 33, 36, 32, 32, 33]
        },
        {
          name: "Low - 2013",
          data: [12, 11, 14, 18, 17, 13, 13]
        }
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "line",
          dropShadow: {
            enabled: true,
            color: "#000",
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          toolbar: {
            show: false
          }
        },
        colors: ["#77B6EA", "#545454"],
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: "smooth"
        },
        title: {
          text: "...",
          align: "left"
        },
        grid: {
          borderColor: "#e7e7e7",
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        markers: {
          size: 1
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
          title: {
            /* text: "Month", */
          }
        },
        yaxis: {
          title: {
            text: ""
          }
          /* min: 5,
          max: 40, */
        },
        legend: {
          position: "top",
          horizontalAlign: "right",
          floating: true,
          offsetY: -25,
          offsetX: -5
        }
      }
    };
  }
};
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
}
</style>
