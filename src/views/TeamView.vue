<template>
  <TeamHeader @add="showModal = true" />

  <div class="place-self-center flex flex-col gap-y-3 w-4/5 mx-auto">
    <TeamMembers />

    <p v-show="!team.spotsRemaining" class="text-right text-gray-600 italic">
      There are no remaining team spots. Upgrade to add more.
    </p>
  </div>

  <TeamFooter />

  <Modal :show="showModal" @close="showModal = false">
    <p>Need to add a new member to your team?</p>
    <form class="mt-6">
      <div class="flex gap-2">
        <input type="email" placeholder="Email address..." class="flex-1" />
        <button>Add</button>
      </div>
    </form>
  </Modal>
</template>

<script setup>
import TeamHeader from "@/components/Teams/TeamHeader.vue";
import TeamMembers from "@/components/Teams/TeamMembers.vue";
import TeamFooter from "@/components/Teams/TeamFooter.vue";
import useTeamStore from "@/stores/TeamStore";
import Modal from "@/components/Modal.vue";
import { ref } from "vue";

const team = useTeamStore();

team.fill();

const showModal = ref(false);

setTimeout(() => {
  team.grow(11);
}, 2000);
</script>
