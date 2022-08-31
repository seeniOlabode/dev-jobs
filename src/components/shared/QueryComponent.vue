<template>
  <div
    @keyup.enter="search()"
    class="h-20 dark:bg-dev-jobs-very-dark-blue bg-dev-jobs-white rounded-md mt-8 flex items-center px-6 absolute left-6 right-6 z-20 gap-3 border-solid dark:border-dev-jobs-violet border-b-4 lg:left-40 lg:right-40"
  >
    <input
      id="title-search"
      class="title-search w-2/3 sm:w-2/6"
      type="search"
      placeholder="Filter by title..."
      v-model="query.title"
    />
    <button
      class="ml-auto h-12 w-12 flex justify-center items-center rounded-md sm:hidden"
      @click="openModal()"
    >
      <img
        class="hidden dark:inline"
        src="@/assets/mobile/darkmode-icon-filter.svg"
        alt=""
      />
      <img class="dark:hidden" src="@/assets/mobile/icon-filter.svg" alt="" />
    </button>

    <button
      class="bg-dev-jobs-violet h-12 w-12 flex items-center justify-center rounded-md sm:hidden"
      @click="search()"
    >
      <img src="@/assets/desktop/darkmode-icon-search.svg" alt="" />
    </button>

    <!-- ----------------------------------------------- -->

    <div
      v-if="showFilter"
      class="filter-search sm:flex items-center grow h-full hidden"
    >
      <div class="location flex px-3 lg:px-7 h-full items-center w-2/6 grow">
        <img src="@/assets/desktop/icon-location.svg" alt="" />
        <input
          placeholder="Filter by location..."
          class="title-search ml-3"
          type="text"
          v-model="query.location"
        />
      </div>
      <div class="contract flex px-3 lg:px-7 h-full items-center w-2/6">
        <check-box v-model="query.contract" />
        <h4 class="font-bold dark:text-dev-jobs-white ml-3">
          Full Time <span class="hidden lg:inline"> Only </span>
        </h4>
      </div>

      <action-button
        @click="search()"
        class="px-3 md:px-9"
        buttonType="primary"
      >
        Search
      </action-button>
    </div>

    <!-- ----------------------------------------------- -->

    <modal sm:hidden v-if="modalValue" @close="(value) => closeModal(value)">
      <div
        class="dark:bg-dev-jobs-very-dark-blue bg-dev-jobs-white rounded-md w-full"
      >
        <div class="flex py-6 px-6 border-b-2 dark:border-b-dev-jobs-dark-grey">
          <img src="@/assets/desktop/icon-location.svg" alt="" />
          <input
            class="location-input ml-3"
            type="text"
            placeholder="Filter by location..."
            v-model="query.location"
          />
        </div>
        <div class="flex p-6 flex-wrap">
          <check-box v-model="query.contract" />
          <h4
            class="ml-3 font-bold dark:text-dev-jobs-white text-dev-jobs-very-dark-blue"
          >
            Full Time Only
          </h4>
          <action-button
            @click="search()"
            class="basis-full mt-6 py-4"
            buttonType="primary"
          >
            Search
          </action-button>
        </div>
      </div>
    </modal>
  </div>
</template>

<script>
import Modal from "@/components/shared/ModalComponent.vue";
import ActionButton from "./ActionButton.vue";
import CheckBox from "./CheckBox.vue";

export default {
  name: "QueryComponent",
  components: { Modal, ActionButton, CheckBox },
  data() {
    return {
      query: {
        title: "",
        location: "",
        contract: false,
      },
      modalValue: false,
      windowWidth: window.innerWidth,
    };
  },
  computed: {
    showFilter() {
      let output = false;
      if (this.windowWidth > 639) {
        output = true;
      }
      return output;
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },
  methods: {
    search() {
      this.closeModal(true);
      this.$store.dispatch("queryJobs", this.query);
      let contractValue = this.query.contract;
      this.query = {
        title: "",
        location: "",
        contract: contractValue,
      };
    },
    closeModal(value) {
      if (value) {
        this.modalValue = false;
      }
    },
    openModal() {
      this.modalValue = true;
    },
    onResize() {
      this.windowWidth = window.innerWidth;
      if (window.innerWidth > 639) {
        this.closeModal(true);
      }
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.title-search {
  background: none;
  @apply dark:text-dev-jobs-white;
}

.title-search:focus {
  outline: none;
}

.location,
.contract {
  border-left: 1px solid;
  @apply border-l-dev-jobs-query-border;
}

.location-input {
  background: none;
  @apply dark:text-dev-jobs-white;
}

.location-input:focus {
  outline: none;
}

#title-search {
  @apply max-w-xs md:max-w-none;
}
</style>
