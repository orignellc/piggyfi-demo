<template>
  <div class="">
    <div class="text-center">
      <div
        class="inline-block text-sm text-white mx-auto bg-red-500 rounded px-2 py-1 mt-3"
      >
        CELO Testnet
      </div>
    </div>
    <div class="bg-gray-25 max-w-lg px-6 py-6 my-12 mx-auto">
      <div class="">
        <button
          class="mb-8 p-3 pl-0"
          v-if="hideBackButton === false"
          @click="router.go(-1)"
        >
          <Icons icon="arrow-left" pack="iconsax-linear" />
        </button>
      </div>
      <slot />
    </div>
  </div>
</template>
<script setup>
import Icons from "../components/ui/Icons";
import { useRouter } from "nuxt/app";

const { hideBackButton } = defineProps({
  hideBackButton: { default: true, type: Boolean },
});

const router = useRouter();
</script>
