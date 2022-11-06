<template>
  <button
    class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:bg-gray-400"
    :disabled="!team.spotsRemaining"
    @click="showModal = true"
  >
    Add Member ({{ team.spotsRemaining }} Spots Left)
  </button>
  <Teleport to="body">
    <Modal :show="showModal" @close="showModal = false">
      <p>Need to add a new member to your team?</p>
      <form class="mt-6">
        <div class="flex gap-2">
          <input type="email" placeholder="Email address..." class="flex-1" />
          <button>Add</button>
        </div>
      </form>
    </Modal>
  </Teleport>
</template>

<script setup>
import { ref } from "vue";
import useTeamStore from "@/stores/TeamStore";
import Modal from "@/components/Modal.vue";

const showModal = ref(false);
const team = useTeamStore();
</script>
