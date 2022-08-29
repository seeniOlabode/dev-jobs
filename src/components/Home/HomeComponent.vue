<template>
  <main class="px-6 w-full pb-5 h-full top-0 pt-20 lg:px-40">
    <ul
      v-if="!jobsLoading && jobsFetched"
      class="flex flex-wrap justify-between sm:gap-8 pb-24"
    >
      <job-component
        v-for="job in jobs"
        :key="`${job.company}${job.id}`"
        :job="job"
      />
    </ul>
    <div v-else class="w-full h-full flex justify-center items-center">
      <loader class="mx-auto relative bottom-20" />
    </div>

    <div
      v-if="jobsEmpty"
      class="w-full h-full flex justify-center items-center relative bottom-24"
    >
      <h3
        class="dark:text-dev-jobs-white text-xl text-center max-w-sm w-96 relative bottom-36"
      >
        <span class="text-4xl">😣</span>
        <br />
        <br />
        Sorry, there are jobs matching your search.
      </h3>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
import Loader from "@/components/shared/LoaderComponent.vue";
import JobComponent from "@/components/Home/JobComponent.vue";

export default {
  name: "HomeComponent",
  components: { Loader, JobComponent },
  data() {
    return {};
  },
  methods: {},
  computed: {
    ...mapState({
      jobs: (state) => state.Jobs.displayedJobs,
      jobsLoading: (state) => state.Jobs.jobsLoading,
      jobsFetched: (state) => state.Jobs.jobsFetched,
      jobsEmpty: (state) => state.Jobs.displayedJobsEmpty,
      scheme: (state) => state.Darkmode.colorScheme,
    }),
  },
};
</script>

<style scoped>
main::-webkit-scrollbar {
  display: none;
}

main {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
