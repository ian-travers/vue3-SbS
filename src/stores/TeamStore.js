import { defineStore } from "pinia";

const useTeamStore = defineStore("team", {
  state() {
    return {
      name: "",
      spots: 0,
      members: [],
    };
  },

  actions: {
    fill() {
      import("@/team.json").then((r) => {
        this.$state = r.default;
      });
    },
  },
});

export default useTeamStore;
