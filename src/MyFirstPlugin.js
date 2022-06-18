import MyPlugin from "./components/allPlugin/allPlugin.vue";

export default {
  install: (app, Option) => {
    app.component("allPlugin", MyPlugin);
    app.directive("font-size", (el, binding) => {
      var size = 16;
      switch (binding.arg) {
        case "small":
          size = Option.fontSize.small;
          break;
        case "large":
          size = Option.fontSize.large;
          break;
        default:
          size = Option.fontSize.medium;
          break;
      }
      el.style.fontSize = size + "px";
    });

    app.mixin({
      data() {
        return {
          featuredLink: "https://learnve.co",
        };
      },
      created() {
        console.log("Printing from created.");
      },
    });

    const logout = () => {
      console.log("Logout is being called");
    };

    app.provide("logout", logout);
  },
};
