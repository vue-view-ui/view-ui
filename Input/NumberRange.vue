<template>
  <FormBox v-if="edit" :label="label" :error="error">
    <div class="vi-input-range">
      <i v-if="icon" :class="icon"></i>
      <input v-model="input[0]" type="number" :placeholder="placeholder[0]" @input="min" />
      <span>至</span>
      <input type="number" v-model="input[1]" :placeholder="placeholder[1]" @input="max" />
    </div>
  </FormBox>
  <div v-else class="vi-input-preview">
    <i v-if="icon" :class="icon"></i>
    <span v-else class="vi-input-preview-label">{{label}}：</span>
    <span class="vi-input-preview-value">{{value[0]}} - {{value[1]}}</span>
    <span class="vi-input-preview-unit">{{unit}}</span>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      default() {
        return [];
      }
    },
    placeholder: {
      type: Array,
      default() {
        return ["最小值", "最大值"];
      }
    },
    label: {
      type: String
    },
    icon: {
      type: String
    },
    unit: {
      type: String
    }
  },
  data() {
    return {
      input: this.value || [],
      edit: true,
      error: ""
    };
  },
  methods: {
    min() {
      this.input[0] = Number(this.input[0]);
      this.$emit("input", this.input);
    },
    max() {
      this.input[1] = Number(this.input[1]);
      this.$emit("input", this.input);
    }
  },
  watch: {
    value(value) {
      this.input = value;
    }
  },
  created() {
    if (this.jsIcon) {
      this.jsIcon = this.jsIcon.replace(/&#x/, "\\u");
      this.jsIcon = this.jsIcon.replace(/;/, "");
      this.jsIcon = eval('"' + this.jsIcon + '"');
    }
  },
  install(app) {
    app.component(this.name, this);
  }
};
</script>

<style lang="scss">
.vi-input-range {
  input {
    width: 45%;
  }
  span {
    display: inline-block;
    line-height: 37px;
  }
}
</style>