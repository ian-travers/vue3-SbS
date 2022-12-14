import { defineStore } from "pinia";

const useTeamStore = defineStore("team", {
  state: () => ({
    name: "",
    spots: 0,
    members: [],
  }),

  actions: {
    async fill() {
      const r = await import("@/team.json");
      this.$state = r.default;
    },

    grow(spots) {
      this.spots = spots;
    },
  },

  getters: {
    spotsRemaining() {
      return this.spots - this.members.length;
    },
  },
});

export default useTeamStore;
