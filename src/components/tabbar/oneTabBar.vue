<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "oneTabBar",
};
</script>
<style>
#tab-bar {
  position: fixed;
  display: flex;
  left: 0;
  right: 0;
  bottom: 0;
  height: 49px;
  background: #f6f6f6;
}
</style>