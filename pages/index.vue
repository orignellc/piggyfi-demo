<template>
  <NuxtLayout name="demo" hide-back-button>
    <div class="mb-6">
      <div class="text-lg font-medium mb-3">Login as Customers</div>

      <div class="app-list bg-white rounded-md shadow-card px-3 py-2">
        <a
          :href="`/demo/${user._id}`"
          class="cursor-pointer p-3 py-4 hover:bg-gray-50 block"
          v-for="user in users"
        >
          <div class="flex justify-between">
            <span class="">{{ user.name }}</span>
            <span
              class="h-6 w-6 bg-contain bg-no-repeat bg-center"
              :style="`background-image: url(https://flagcdn.com/${user.countryCode.toLowerCase()}.svg)`"
            ></span>
          </div>
          <div class="text-sm text-gray-700">{{ user.email }}</div>
        </a>
      </div>
    </div>

    <div class="mb-6">
      <div class="text-lg font-medium mb-3">Login as Vendor</div>

      <div class="app-list bg-white rounded-md shadow-card px-3 py-2">
        <a
          :href="`/demo/${user._id}`"
          class="flex justify-between cursor-pointer p-3 py-4 hover:bg-gray-25"
          v-for="user in users"
        >
          <span class="">{{ user.name }}</span>
          <span
            class="h-6 w-6 bg-contain bg-no-repeat bg-center"
            :style="`background-image: url(https://flagcdn.com/${user.countryCode.toLowerCase()}.svg)`"
          ></span>
        </a>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import User from "../daos/user";

const users = await User.all();
</script>

<style>
.shadow-card {
  box-shadow: 0 1px 30px 3px rgba(169, 168, 172, 0.11);
}

.app-list a:not(:last-child) {
  @apply border-b border-gray-300;
}
</style>
