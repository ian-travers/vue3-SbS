<template>
  <header class="flex justify-between">
    <div>
      <AddMemberModal />
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
</template>

<script setup>
import useTeamStore from "@/stores/TeamStore";
import AddMemberModal from "@/components/Teams/AddMemberModal.vue";

const team = useTeamStore();
</script>
