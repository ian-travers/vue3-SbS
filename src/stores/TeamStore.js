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
        const data = r.default;
        this.name = data.name;
        this.spots = data.spots;
        this.members = data.members;
      });
    },
  },
});

export default useTeamStore;
