import { createStore } from "vuex";
// const axios = require("axios");
// const url = "http://localhost:3000/devjobs";
import createCallBack from "@/helper/createCallBack";
import JobsObject from "@/data.json";
import getDefaultColorScheme from "@/helper/getDefaultColorScheme";

const Darkmode = {
  state: () => ({
    colorScheme: "dark",
  }),
  mutations: {
    setColorScheme(state, payload) {
      state.colorScheme = payload.scheme;
      if (payload.override) {
        localStorage.setItem("dev-jobs-scheme", payload.scheme);
      }
      document.getElementsByTagName("HTML")[0].classList.remove("light");
      document.getElementsByTagName("HTML")[0].classList.remove("dark");
      document.getElementsByTagName("HTML")[0].classList.add(payload.scheme);
    },
  },
  actions: {
    fetchDefaultColorScheme({ commit }) {
      let savedScheme = localStorage.getItem("dev-jobs-scheme");
      let schemeObject = {};
      if (savedScheme) {
        schemeObject.scheme = savedScheme;
        schemeObject.override = false;
      } else {
        schemeObject.scheme = getDefaultColorScheme();
        schemeObject.override = false;
      }
      commit("setColorScheme", schemeObject);
    },
  },
};

const Jobs = {
  state: () => ({
    jobs: [],
    jobsLoading: false,
    jobsFetched: false,
    displayedJobs: [],
    displayedJobsEmpty: false,
  }),
  mutations: {
    storeJobs(state, payload) {
      state.jobs = payload;
      // console.log(state.jobs.filter((job) => job.company === "Scoot"));
    },
    setJobsLoading(state, payload) {
      state.jobsLoading = payload;
    },
    setJobsFetched(state) {
      state.jobsFetched = true;
    },
    setDisplayedJobs(state, payload) {
      state.displayedJobs = payload;
    },
    setDisplayedJobsEmpty(state, payload) {
      state.displayedJobsEmpty = payload;
    },
  },
  actions: {
    // Works with Axios and Endpoint

    // async fetchJobs({ commit }) {
    //   commit("setJobsLoading", true);
    //   await axios.get(url).then((res) => {
    //     commit("storeJobs", res.data);
    //     commit("setDisplayedJobs", res.data);
    //     setTimeout(() => {
    //       commit("setJobsLoading", false);
    //       commit("setJobsFetched");
    //     }, 1000);
    //   });
    // },

    // End

    async fetchJobs({ commit }) {
      commit("setJobsLoading", true);
      commit("storeJobs", JobsObject.devjobs);
      commit("setDisplayedJobs", JobsObject.devjobs);
      setTimeout(() => {
        commit("setJobsLoading", false);
        commit("setJobsFetched");
      }, 1000);
    },
    queryJobs({ commit, getters }, payload) {
      commit("setJobsLoading", true);
      commit("setDisplayedJobsEmpty", false);
      let title = payload.title ? payload.title : "*";
      let location = payload.location ? payload.location : "*";
      let contract = payload.contract ? payload.contract : "*";
      let myCallBack = createCallBack(title, location, contract);
      const filteredArray = getters.filterJobs(myCallBack);
      commit("setDisplayedJobs", filteredArray);
      setTimeout(() => {
        commit("setJobsLoading", false);
        if (filteredArray.length < 1) {
          commit("setDisplayedJobsEmpty", true);
        }
      }, 1000);
    },
  },
  getters: {
    filterJobs: (state) => (callBack) => {
      const filteredList = state.jobs.filter((job) => callBack(job));
      return filteredList;
    },
  },
};

export default createStore({
  modules: {
    Darkmode,
    Jobs,
  },
});
