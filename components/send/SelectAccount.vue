<template>
  <div class="">
    <div
      class="p-3 bg-primary-50 hover:bg-primary-100 text-gray-700 hover:text-gray-600 rounded-md cursor-pointer"
    >
      <div class="flex justify-between items-center">
        <span>MPESA <span class="font-semibold">08088638672</span> </span>
        <span class="font-bold text-lg">
          <Icons icon="arrow-right" pack="iconsax-linear" />
        </span>
      </div>
    </div>

    <div class="hidden">
      <div class="p-3 rounded-md cursor-pointer hover:bg-primary-50">
        <div
          class="mb-2 text-sm border-l-2 border-primary-500 px-2 leading-none"
        >
          MPESA
        </div>
        <div class="font-semibold text-gray-700">08088637748</div>
        <div class="text-gray-800">Abosede Mayungbe</div>
      </div>
      <div class="p-3 rounded-md cursor-pointer hover:bg-primary-50">
        <div
          class="mb-2 text-sm border-l-2 border-primary-500 px-2 leading-none"
        >
          Bank Transfer
        </div>
        <div class="font-semibold text-gray-700">0126862222</div>
        <div class="text-gray-700">Abosede Mayungbe</div>
        <div class="text-sm text-gray-600">Kuda Bank</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import Icons from "../ui/Icons";
</script>
