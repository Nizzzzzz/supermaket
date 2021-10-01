<template>
  <div><router-view></router-view> <mainTabBar></mainTabBar></div>
</template>
<script>
import mainTabBar from "./components/tabbar/mainTabBar.vue";
export default {
  name: "App",
  components: {
    // 错误点-添加组件的方式
    mainTabBar,
  },
};
</script>
<style>
</style>
