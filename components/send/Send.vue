<template>
  <div class="">
    <input
      type="email"
      placeholder="Enter email address"
      class="w-full py-4 px-3 mb-8 border border-gray-300 shadow rounded outline-none"
    />

    <div
      class="flex w-full items-center py-4 px-3 border border-gray-300 shadow rounded outline-none mb-8"
    >
      <input
        type="number"
        min="0"
        class="w-full outline-none"
        placeholder="Amount"
        step="10"
      />
      <span class="pl-3">USD</span>
    </div>

    <button
      class="block rounded-md bg-primary-500 py-4 font-medium text-center text-white w-full"
    >
      Continue
    </button>
  </div>
</template>

<script setup>
import Icons from "../ui/Icons";
</script>
