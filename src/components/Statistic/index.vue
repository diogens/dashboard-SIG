<template>
  <div class="wrapper-card" style="width: 50%">
    <div>
      <span>
        <h1>{{ title }}</h1>
      </span>
      <div class="date">
        <p>{{ content }}</p>
      </div>
    </div>
    <span>
      <a-icon :style="{ fontSize: '60px', color: '#000' }" :type="icon" theme="outlined"/>
    </span>
  </div>
</template>

<script>
export default {
  props: ["title", "content", "icon"],
  data() {
    return {};
  }
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
  justify-content: center;
  align-items: center;
}
</style>
