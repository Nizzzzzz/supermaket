<template>
  <div class="tab-bar-item" @click="activeItem">
    <div class="item-icon">
      <div class="icon" v-if="is_active"><slot name="item-icon"></slot></div>
      <div class="icon" v-else><slot name="item-icon-active"></slot></div>
    </div>
    <div class="item-text" :style="{ color: active_color }">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "TabBarItem",
  // props: {
  // 		path: String,
  // 		activeStyle: {
  // 			type: String,
  // 			default: 'red'
  // 		}
  // 	},
  props: {
    path: {
      type: String,
      default: "/",
    },
    color: {
      type: String,
      default: "red",
    },
  },
  //关于参数传递的问题：有两种传递方式，字符串数组与对象嵌套。
  //字符串数组每项代表的是从父组件中传入的参数。对象嵌套更为多功能，可以指定传入的数据类型等信息
  data() {
    return {};
  },
  methods: {
    activeItem() {
      this.$router.push(this.path);
    },
  },
  computed: {
    is_active() {
      return this.$route.path != this.path;
    },
    active_color() {
      if (this.$route.path == this.path) {
        return this.color;
      } else {
        return "#cdcdcd";
      }
    },
  },
};
</script>
<style>
.tab-bar-item {
  flex: 1;
  font-size: 12px;
  text-align: center;
}
.tab-bar-item img {
  width: 22px;
  height: 22px;
  margin: 4px 0;
  vertical-align: middle;
  /* 此处的vertical-align的作用是使图片与文字垂直居中，具体作用是使元素在父元素中居中，又由于text与img都在块级元素内自动换行 */
}
</style>