<template>
  <div id="mainTabBar">
    <one-tab-bar>
      <TabBarItem path="/Home" :color="active_color">
        <!-- 注意此处的具名插槽的使用，使用的是template标签，与之前的不同，个人认为可能与组件嵌套有关也可能是父组件已经使用slot子组件不能再使用slot -->
        <template #item-icon>
          <img src="../../assets/images/tabbar/icon01.png" alt="" />
        </template>
        <template #item-icon-active>
          <img src="../../assets/images/tabbar/icon01_active.png" alt="" />
        </template>
        <template #item-text>
          <div>主页</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/About" :color="active_color">
        <template #item-icon>
          <img src="../../assets/images/tabbar/icon02.png" alt="" />
        </template>
        <template #item-icon-active>
          <img src="../../assets/images/tabbar/icon02_active.png" alt="" />
        </template>
        <template #item-text>
          <div>关于</div>
        </template>
      </TabBarItem>
      <TabBarItem path="/Cart" :color="active_color">
        <template #item-icon>
          <img src="../../assets/images/tabbar/icon03.png" alt="" />
        </template>
        <template #item-icon-active>
          <img src="../../assets/images/tabbar/icon03_active.png" alt="" />
        </template>
        <template #item-text>
          <div>购物车</div>
        </template></TabBarItem
      >
    </one-tab-bar>
  </div>
</template>
<script>
import oneTabBar from "./oneTabBar.vue";
import TabBarItem from "./TabBarItem.vue";
export default {
  name: "mainTabBar",
  components: {
    TabBarItem,
    oneTabBar,
  },
  data() {
    return {
      active_color: "#f96056",
      // active_color: "blue",
    };
  },
};
</script>
<style>
</style>