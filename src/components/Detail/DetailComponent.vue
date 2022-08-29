<template>
  <main class="w-full h-full pt-20">
    <div class="px-6 relative lg:px-40" v-if="!jobsLoading && jobsFetched">
      <div
        class="job-header dark:bg-dev-jobs-very-dark-blue bg-dev-jobs-white relative rounded-md text-center pb-8 bottom-28 z-40 m-0 sm:flex sm:items-center sm:pb-0 sm:h-36 border-solid dark:border-dev-jobs-violet border-b-4"
      >
        <div
          class="job-logo h-14 w-14 rounded-2xl flex items-center justify-center mx-auto relative bottom-5 sm:static sm:m-0 sm:rounded-none sm:h-full sm:w-36 sm:rounded-l-md"
          :style="headerStyle"
        >
          <img class="sm:w-20" :src="logoImage" alt="" />
        </div>
        <div class="sm:flex sm:justify-between sm:grow sm:pl-10">
          <div class="sm:text-left">
            <h2
              class="dark:text-dev-jobs-white text-dev-jobs-very-dark-blue mt-1 text-center text-xl font-bold sm:mt-0 sm:text-2xl sm:text-left"
            >
              {{ displayedDetails.company }}
            </h2>
            <a class="text-dev-jobs-dark-grey mt-3 sm:mt-0" href="scoot.com"
              >{{ displayedDetails.company.toLocaleLowerCase() }}.com</a
            >
          </div>
          <br class="sm:hidden" />
          <action-button-vue
            class="mt-6 sm:mr-11 sm:mt-0"
            buttonType="secondary"
            >Company Site</action-button-vue
          >
        </div>
      </div>
      <div
        class="job-details relative bottom-14 dark:bg-dev-jobs-very-dark-blue bg-dev-jobs-white rounded-md px-6 py-10 h-full sm:px-12 sm:pt-12"
      >
        <div class="detail-header sm:flex sm:justify-between sm:items-center">
          <div class="text">
            <div class="flex gap-3 text-dev-jobs-dark-grey text-base">
              <h3>{{ displayedDetails.postedAt }}</h3>
              ●
              <h3>{{ displayedDetails.contract }}</h3>
            </div>

            <h2
              class="dark:text-dev-jobs-white text-dev-jobs-very-dark-blue text-xl font-bold mt-2 sm:text-3xl"
            >
              {{ displayedDetails.position }}
            </h2>

            <p class="text-dev-jobs-violet font-bold mt-2 text-sm">
              {{ displayedDetails.location }}
            </p>
          </div>

          <action-button-vue
            class="w-full mt-14 px-4 sm:w-36 sm:mt-0"
            buttonType="primary"
          >
            Apply Now
          </action-button-vue>
        </div>

        <p class="description mt-8 text-dev-jobs-grey">
          {{ displayedDetails.description }}
        </p>

        <div class="requirements mt-16">
          <h4
            class="font-bold text-xl dark:text-dev-jobs-white text-dev-jobs-very-dark-blue"
          >
            Requirements
          </h4>
          <p class="text-dev-jobs-grey mt-7">
            {{ displayedDetails.requirements.content }}
          </p>
          <ul class="requirements-list mt-8 flex flex-wrap gap-2">
            <li
              class="flex basis-full"
              v-for="item in displayedDetails.requirements.items"
              :key="item"
            >
              <div class="text-dev-jobs-violet">●</div>
              <p class="text-dev-jobs-grey ml-8">{{ item }}</p>
            </li>
          </ul>
        </div>

        <div class="role mt-16">
          <h4
            class="font-bold text-xl dark:text-dev-jobs-white text-dev-jobs-very-dark-blue"
          >
            What You Will Do
          </h4>
          <p class="text-dev-jobs-grey mt-7">
            {{ displayedDetails.role.content }}
          </p>
          <ul class="roles-list mt-8 flex flex-wrap gap-2">
            <li
              class="flex basis-full"
              v-for="item in displayedDetails.role.items"
              :key="item"
            >
              <div class="text-dev-jobs-violet">●</div>
              <p class="text-dev-jobs-grey ml-8">{{ item }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div v-else class="w-full h-full flex justify-center items-center">
      <loader class="mx-auto relative bottom-20" />
    </div>
    <div
      v-if="!jobsLoading && jobsFetched"
      class="footer mt-7 dark:bg-dev-jobs-very-dark-blue bg-dev-jobs-white w-screen h-28 px-6 flex items-center sm:justify-between lg:px-40"
    >
      <div class="hidden sm:flex flex-wrap">
        <h1
          class="dark:text-dev-jobs-white text-dev-jobs-very-dark-blue text-xl font-bold mt-0 basis-full"
        >
          {{ displayedDetails.position }}
        </h1>
        <p class="text-dev-jobs-dark-grey mt-0">
          {{ displayedDetails.company }}
        </p>
      </div>
      <action-button-vue class="w-full sm:w-36" buttonType="primary"
        >Apply Now</action-button-vue
      >
    </div>
  </main>
</template>

<script>
import ActionButtonVue from "@/components/shared/ActionButton.vue";
import Loader from "@/components/shared/LoaderComponent.vue";

import { mapState } from "vuex";

export default {
  name: "DetailView",
  components: { ActionButtonVue, Loader },
  computed: {
    ...mapState({
      jobs: (state) => state.Jobs.jobs,
      jobsLoading: (state) => state.Jobs.jobsLoading,
      jobsFetched: (state) => state.Jobs.jobsFetched,
    }),
    logoImage() {
      let output;
      if (this.displayedDetails) {
        let name = this.displayedDetails.company
          .toLocaleLowerCase()
          .replace(/\s/g, "");
        output = require("../../assets/logos/" + name + ".svg");
      } else {
        output = "";
      }
      return output;
    },
    headerStyle() {
      let output = { "background-color": "#ffffff" };
      if (this.displayedDetails) {
        output = { "background-color": this.displayedDetails.logoBackground };
      }
      return output;
    },
    displayedDetails() {
      let output = { company: "Default" };
      if (this.jobs) {
        let index = this.$route.params.id - 1;
        output = this.jobs[index];
      }
      return output;
    },
  },
};
</script>

<style></style>
