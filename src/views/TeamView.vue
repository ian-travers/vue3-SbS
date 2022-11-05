<template>
  <TeamHeader />

  <div class="place-self-center flex flex-col gap-y-3 w-4/5 mx-auto">
    <TeamMembers />

    <p
      v-show="team.members.length === team.spots"
      class="text-right text-gray-600 italic"
    >
      There are no remaining team spots. Upgrade to add more.
    </p>
  </div>

  <TeamFooter />
</template>

<script setup>
import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import TeamFooter from "@/components/Teams/TeamFooter.vue";
import useTeamStore from "@/stores/TeamStore";

const team = useTeamStore();

team.fill();

setTimeout(() => {
  team.grow(11);
}, 2000);
</script>
