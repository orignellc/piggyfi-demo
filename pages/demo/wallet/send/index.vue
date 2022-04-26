<template>
  <NuxtLayout name="demo">
    <div class="">
      <div class="mb-10">
        <div class="text-xl font-medium text-gray-800">Send Money</div>
      </div>

      <form @submit.prevent="wizard.next" v-if="wizard.isAtStart()">
        <div class="mb-8">
          <input
            @blur="orderDetailForm.setFormRecipient"
            @submit="orderDetailForm.setFormRecipient"
            v-model="recipientEmail"
            type="email"
            placeholder="Enter email address"
            class="w-full py-4 px-3 mb-2 border border-gray-300 shadow rounded outline-none"
          />
          <div class="text-sm">
            <div class="" v-if="recipientFetchLoading">...</div>
            <div class="text-gray-700" v-else-if="recipient && recipient._id">
              {{ recipient.name }}
            </div>
          </div>
        </div>

        <div
          v-if="recipient && recipient._id"
          class="flex w-full items-center py-4 px-3 bg-white border border-gray-300 shadow rounded outline-none mb-8"
        >
          <input
            v-model="input.amount"
            type="number"
            min="0"
            class="w-full outline-none"
            placeholder="Amount"
            step="10"
          />
          <span class="pl-3">USD</span>
        </div>

        <button
          type="submit"
          :disabled="continueButtonDisabled"
          class="block rounded-md bg-primary-500 py-4 font-medium text-center text-white w-full disabled:bg-opacity-50"
        >
          Continue
        </button>
      </form>

      <AvailableVendors
        @input="orderDetailForm.setFormVendor"
        v-if="wizard.isAtVendor()"
      />
    </div>
  </NuxtLayout>
</template>

<script setup>
import { computed, ref } from "#imports";
import AvailableVendors from "../../../../components/send/AvailableVendors";
import User from "../../../../daos/user";
import { useRouter } from "nuxt/app";
import Transaction from "../../../../daos/transaction";
import routes from "../../../../helpers/routes";

const router = useRouter();

let recipient = ref({});
let recipientFetchLoading = false;
const recipientEmail = ref(null);

const input = ref({
  senderId: null,
  recipientId: null,
  vendorId: null,
  amount: null,
});

const continueButtonDisabled = computed(
  () => !(input.value.recipientId && input.value.amount)
);
const orderDetailForm = {
  async setFormRecipient() {
    recipientFetchLoading = true;

    if (recipient.value && recipient.value.email === recipientEmail.value) {
      input.value.recipientId = null;
      recipient.value = {};
    }

    recipient.value = await User.getByEmail(recipientEmail.value);
    input.value.recipientId = recipient.value._id;
    recipientFetchLoading = false;
  },

  setFormVendor(vendor) {
    input.value.vendorId = vendor._id;
    const order = Transaction.newOrder(input.value);

    if (order) {
      router.push(routes.wallet.fundOrder(order._id));
    }
  },
};

const wizard = {
  currentStep: ref(null),
  __VENDORS__: "vendors",

  isAtStart() {
    return wizard.currentStep.value === null;
  },
  isAtVendor() {
    return wizard.currentStep.value === wizard.__VENDORS__;
  },

  next() {
    if (wizard.isAtStart()) {
      wizard.currentStep.value = wizard.__VENDORS__;
    }
  },
};
</script>
