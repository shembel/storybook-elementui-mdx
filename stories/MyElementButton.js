import Vue from 'vue';
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; 

Vue.use(Element);

export default {
  name: 'my-element-button',

  template: `
    <el-button @click="onClick">
      <slot></slot>
    </el-button>
  `,

  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
