<template>
  <TeamHeader :team="team" />

  <div class="place-self-center flex flex-col gap-y-3 w-4/5 mx-auto">
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
          :status="member.active"
        />
      </tbody>
    </table>

    <p
      class="text-right text-gray-600 italic"
      v-show="team.members.length === team.spots"
    >
      There are no remaining team spots. Upgrade to add more.
    </p>
  </div>

  <TeamFooter :team="team" />
</template>

<script setup>
import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMember from "@/components/Teams/TeamMember.vue";
import team from "@/team.json";
import TeamFooter from "@/components/Teams/TeamFooter.vue";
</script>
