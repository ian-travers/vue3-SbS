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

        this.$patch({
          name: data.name,
          spots: data.spots,
          members: data.members,
        });
      });
    },
  },
});

export default useTeamStore;
