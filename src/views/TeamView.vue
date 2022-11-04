<template>
  <header class="flex justify-between">
    <div>
      <button
        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
        :disabled="team.members.length === team.spots"
      >
        Add Member ({{ team.spots - team.members.length }} Spots Left)
      </button>
    </div>

    <div>
      <div class="inline-flex items-center text-3xl relative">
        <svg
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
          />
        </svg>
        <h3>{{ team.name }} Team</h3>
        <div
          class="bg-green-700 w-5 h-5 text-xs text-white rounded-full flex justify-center items-center absolute -right-4 -top-2"
        >
          {{ team.spots }}
        </div>
      </div>
    </div>
  </header>

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

  <footer class="mt-12 bg-gray-100 py-4 text-center">
    <h5 class="font-semibold text-lg">
      {{ team.name }} - {{ team.spots }} Member Team
    </h5>
  </footer>
</template>

<script setup>
import TeamMember from "@/components/Teams/TeamMember.vue";
import team from "@/team.json";
</script>
