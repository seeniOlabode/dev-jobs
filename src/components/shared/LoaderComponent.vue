<template>
  <div class="loader"></div>
</template>

<script></script>

<style scoped>
.loader {
  border: 8px solid; /* Light grey */
  border-top: 8px solid #5964e0; /* Violet */
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 500ms linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
