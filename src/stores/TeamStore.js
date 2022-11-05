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
    async fill() {
      const r = await import("@/team.json");
      this.$state = r.default;
    },

    grow(spots) {
      this.spots = spots;
    },
  },
});

export default useTeamStore;
