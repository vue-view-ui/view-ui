import "./style.scss";
import Select from "./Select.vue";
import Selects from "./Selects.vue";
import SelectEdit from "./SelectEdit.vue";
import Option from "./Option.vue";

export default {
  name: "Select",
  functional: true,
  props: {
    edit: Boolean,
    multiple: Boolean
  },
  render(createElement, context) {
    const { props, data, children } = context;
    const { edit, multiple } = props;
    if (edit) {
      return createElement(SelectEdit, data, children);
    } else {
      return createElement(Select, data, children);
    }
  },
  install(app) {
    app.component("Select", this);
    app.component(Option.name, Option);
  }
};
