<template>
  <NuxtLayout name="demo">
    <div class="">
      <div class="mb-10">
        <div class="text-xl font-medium text-gray-800">Withdraw</div>
      </div>
      <div>
        ls
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

        <div class="mb-8">
          <div class="text-gray-500 mb-2">
            Select account you want to withdraw to:
          </div>
          <SelectAccount />
        </div>

        <AvailableVendors class="mb-8" />
      </div>

      <button
        class="block rounded-md bg-primary-500 py-4 font-medium text-center text-white w-full"
      >
        Continue
      </button>
    </div>
  </NuxtLayout>
</template>

<script setup>
import SelectAccount from "../../../../components/send/SelectAccount";
import AvailableVendors from "../../../../components/send/AvailableVendors";
</script>
