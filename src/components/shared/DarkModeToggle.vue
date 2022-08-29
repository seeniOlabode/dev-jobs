<template>
  <div class="flex gap-4 items-center">
    <img src="@/assets/desktop/icon-sun.svg" alt="" />
    <label class="switch">
      <input
        :value="checkBoxValue"
        :checked="checkBoxValue"
        @change="handleChange"
        type="checkbox"
      />
      <span class="slider round"></span>
    </label>
    <img src="@/assets/desktop/icon-moon.svg" alt="" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "DarkModeToggle",
  computed: {
    ...mapState({
      scheme: (state) => state.Darkmode.colorScheme,
    }),
    checkBoxValue() {
      let output;
      output = this.scheme === "dark" ? true : false;
      return output;
    },
  },
  methods: {
    handleChange(e) {
      let schemeValue = e.target.checked ? "dark" : "light";
      this.$store.commit("setColorScheme", {
        scheme: schemeValue,
        override: true,
      });
    },
  },
};
</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffffff;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 5px;
  bottom: 5px;
  background-color: #5964e0;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.switch:active .slider:before {
  background-color: #939bf4;
}

.slider:before:active {
  background-color: #939bf4;
}

input:checked + .slider {
  background-color: #19202d;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  background-color: #ffffff;
}

input:checked + .slider:before {
  -webkit-transform: translateX(23px);
  -ms-transform: translateX(23px);
  transform: translateX(23px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 12px;
}

.slider.round:before {
  border-radius: 50%;
}

img[src*="sun"] {
  width: 20px;
  height: 18.6px;
}

img[src*="moon"] {
  width: 18px;
  height: 18px;
}
</style>
