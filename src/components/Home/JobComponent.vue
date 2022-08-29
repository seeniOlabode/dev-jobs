<template>
  <li
    class="dark:bg-dev-jobs-very-dark-blue bg-dev-jobs-white mt-14 rounded-md basis-full relative sm:basis-5/12 flex-grow lg:basis-1/4 pb-8"
  >
    <div
      class="logo-container w-14 h-14 flex items-center justify-center rounded-xl relative -top-6 left-8"
      :style="{ 'background-color': job.logoBackground }"
    >
      <img :src="logoImage" alt="" />
    </div>

    <div class="text px-8 flex flex-wrap items-end">
      <div class="flex text-dev-jobs-dark-grey gap-3 w-full">
        <p>{{ job.postedAt }}</p>
        ●
        <p>{{ job.contract }}</p>
      </div>
      <h1
        @click="$router.push(`/job-detail/${job.id}`)"
        class="dark:text-dev-jobs-white text-dev-jobs-very-dark-blue font-bold text-xl mt-3 w-full cursor-pointer hover:text-dev-jobs-dark-grey"
      >
        {{ job.position }}
      </h1>
      <p class="text-dev-jobs-dark-grey mt-4 w-full">{{ job.company }}</p>
      <p class="text-dev-jobs-violet font-bold mt-8">
        {{ job.location }}
      </p>
    </div>
  </li>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "JobComponent",
  props: {
    job: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    // logoPath() {
    //   return `../.${this.job.logo}`;
    // },
    logoImage() {
      let output;
      if (this.job) {
        let name = this.job.company.toLocaleLowerCase().replace(/\s/g, "");
        output = require("../../assets/logos/" + name + ".svg");
      } else {
        output = "";
      }
      return output;
    },
    ...mapState({
      scheme: (state) => state.Darkmode.colorScheme,
    }),
  },
};
</script>

<style></style>
