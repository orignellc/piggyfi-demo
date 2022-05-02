<template>
  <div class="">
    <div
      class="bg-white hover:bg-primary-50 shadow-sm rounded-md p-4 mb-4"
      v-for="vendor in vendors"
    >
      <div class="flex justify-between mb-2 text-sm">
        <div class="text-gray-600">{{ vendor.name }}</div>
        <div class="text-gray-700">
          Trades
          <span class="font-medium text-black">{{
            vendor.completedTrades
          }}</span>
          |
          <Icons icon="heart" pack="iconsax-linear" />
          <span class="font-medium text-black">{{ vendor.rating }}</span>
        </div>
      </div>
      <div class="flex items-end justify-between">
        <div class="">
          <span class="text-gray-500 text-sm leading-tight">Price</span>
          <div class="text-sm">
            NGN<span class="text-lg font-semibold">{{ vendor.rate }}</span> /
            $<span class="text-lg font-semibold">1 </span>
          </div>
        </div>
        <div class="">
          <button
            @click="$emit('input', vendor)"
            class="block rounded-md bg-primary-500 py-1 px-3 font-medium text-white text-sm"
          >
            Select vendor
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Vendor from "../../daos/vendor";
import Icons from "../ui/Icons";

const filter = defineProps({
  amount: Number,
  country: String,
});
const vendors = await Vendor.all(filter);
</script>
