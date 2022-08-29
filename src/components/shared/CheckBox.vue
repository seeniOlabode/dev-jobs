<template>
  <div class="checkbox-container">
    <label for="check" class="switch flex items-center justify-center">
      <input
        @change="($event) => emitValue($event)"
        type="checkbox"
        id="check"
      />
      <span class="box">
        <img src="@/assets/desktop/icon-check.svg" alt="" />
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: "CheckBox",
  props: ["modelValue"],
  emits: ["update:modelValue"],
  methods: {
    emitValue($event) {
      console.log($event.target.checked, $event.target);
      this.$emit("update:modelValue", $event.target.checked);
    },
  },
};
</script>

<style scoped>
.checkbox-container {
  height: 24px;
  width: 24px;
}

input {
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
}

.box {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  @apply rounded hover:cursor-pointer dark:bg-dev-jobs-dark-checkbox bg-dev-jobs-light-checkbox;
}

.box img {
  opacity: 0;
}

input:checked + .box {
  @apply bg-dev-jobs-violet;
}

input:checked + .box > img {
  opacity: 1;
}
</style>
