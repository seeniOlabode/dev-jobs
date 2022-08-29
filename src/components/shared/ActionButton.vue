<template>
  <button :class="buttonClass">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    buttonType: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    buttonClass() {
      let classObject = {};
      classObject = {
        secondary: this.buttonType === "secondary",
        primary: this.buttonType === "primary",
      };
      return classObject;
    },
  },
};
</script>

<style scoped>
button {
  @apply font-bold py-4 rounded-md;
}

.primary {
  @apply text-dev-jobs-white bg-dev-jobs-violet;
}

.primary:hover {
  @apply bg-dev-jobs-light-violet;
}

.secondary {
  background-color: rgba(89, 100, 224, 0.1);
  @apply text-dev-jobs-violet px-5;
}

.secondary:hover {
  background-color: rgba(89, 100, 224, 0.35);
}
</style>
