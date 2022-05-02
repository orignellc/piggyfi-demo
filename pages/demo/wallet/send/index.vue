<template>
  <NuxtLayout name="demo">
    <div class="">
      <div class="mb-10">
        <div class="text-xl font-medium text-gray-800">Send Money</div>
      </div>

      <template v-if="wizard.isAtForm()">
        <div class="mb-8">
          <input
            @blur="recipientFetcher.findAndUpdateRecipientByEmail"
            v-model="recipientFetcher.email"
            type="email"
            placeholder="Enter email address"
            class="w-full py-4 px-3 mb-2 border border-gray-300 shadow rounded outline-none"
          />
          <div class="pt-4">
            <div class="" v-if="recipientFetcher.loading">...</div>
            <div
              class="text-gray-700 flex justify-between items-center mt-3"
              v-else-if="recipient && recipient._id"
            >
              <span class="flex items-center leading-none">
                <span
                  class="h-5 w-5 flex items-center justify-center inline-block mr-2 rounded-full bg-primary-500 text-sm text-white leading-none"
                >
                  {{ recipient.name.charAt(0) }}
                </span>
                {{ recipient.name }}
              </span>

              <span
                class="h-6 w-6 bg-contain bg-no-repeat bg-center"
                :style="`background-image: url(https://flagcdn.com/${recipient.countryCode.toLowerCase()}.svg)`"
              ></span>
            </div>
          </div>
        </div>

        <div
          v-if="transferForm.recipientId"
          class="flex w-full items-center py-4 px-3 bg-white border border-gray-300 shadow rounded outline-none mb-8"
        >
          <input
            v-model="transferForm.amount"
            type="number"
            min="0"
            class="w-full outline-none"
            placeholder="Amount"
            step="10"
          />
          <span class="pl-3">USD</span>
        </div>

        <button
          @click.prevent="wizard.next"
          type="button"
          :disabled="continueButtonDisabled"
          class="block rounded-md bg-primary-500 py-4 font-medium text-center text-white w-full disabled:bg-opacity-50"
        >
          Continue
        </button>
      </template>

      <template v-if="wizard.isAtVendor()">
        <AvailableVendors
          class="mb-8"
          @input="(vendor) => (transferForm.vendorId = vendor._id)"
        />

        <button
          @click.prevent="transferForm.submit"
          type="button"
          :disabled="transferForm.vendorId"
          class="block rounded-md bg-primary-500 py-4 font-medium text-center text-white w-full disabled:bg-opacity-50"
        >
          Continue
        </button>
      </template>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { computed } from "#imports";
import AvailableVendors from "../../../../components/send/AvailableVendors";
import { useRouter } from "nuxt/app";
import routes from "../../../../helpers/routes";
import {
  transferForm,
  recipientFetcher,
  wizard,
} from "../../../../store/transfer";

const router = useRouter();

const recipient = computed(() => recipientFetcher.recipient);

async function submitTransfer() {
  const order = await transferForm.submit();
  if (order) {
    await router.push(routes.wallet.fundOrder(order._id));
  }
}
const continueButtonDisabled = computed(
  () => !(transferForm.recipientId && transferForm.amount)
);
</script>
