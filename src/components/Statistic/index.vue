<template>
  <div class="wrapper-card" style="width: 100%; padding: 20px">
    <div>
      <span>
        <h1 class="title">{{ title }}</h1>
      </span>
      <div class="date">
        <span>
          {{ content }}
        </span>
        <span style="font-size: 17px; font-weight: lighter">
          {{ content2 }}
        </span>
      </div>
    </div>
    <span>
      <a-icon
        :style="{ fontSize: '60px', color: '#000' }"
        :type="icon"
        theme="outlined"
      />
    </span>
  </div>
</template>

<script>
export default {
  props: ["title", "content", "content2", "icon"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.wrapper-card {
  display: flex;
  justify-content: space-between;
  border: 0.5px solid #ddd;
  border-radius: 12px;
  margin: 6px;
  padding: 15px;
}

.date {
  display: flex;
  flex-direction: column;
  justify-content: right;
  align-items: center;
  font-size: 2.5em;
  font-weight: bolder;
  padding: 0;
  margin: 0;
}

.title {
  font-size: 1.5em;
  font-weight: lighter;
}
</style>
