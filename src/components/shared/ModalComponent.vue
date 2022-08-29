<template>
  <div
    id="backdrop"
    @click="($event) => closeModal($event)"
    class="backdrop fixed w-screen h-screen top-0 left-0 px-6 flex items-center justify-center"
  >
    <div class="w-full slot-holder">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
  methods: {
    closeModal($event) {
      this.$emit("close", $event.target.id === "backdrop");
    },
  },
};
</script>

<style scoped>
.backdrop {
  z-index: 1000;
  background: rgba(0, 0, 0, 0.45);
}

.slot-holder {
  max-width: 350px;
}
</style>
