<template>
  <table class="table-fixed border-spacing-2 border-separate">
    <thead>
      <tr>
        <th class="text-left px-6 py-2">Name</th>
        <th class="text-left px-6 py-2">Email</th>
        <th class="text-left px-6 py-2">Status</th>
      </tr>
    </thead>

    <tbody>
      <TeamMember
        v-for="member in team.members"
        :key="member.email"
        :name="member.name"
        :email="member.email"
        :status="member.status"
      />
    </tbody>
  </table>
</template>

<script setup>
import TeamMember from "@/components/Teams/TeamMember.vue";
import useTeamStore from "@/stores/TeamStore";

const team = useTeamStore();
</script>
