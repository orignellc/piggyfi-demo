import authentication from "~/store/authentication";
import { reactive, ref } from "#imports";
import User from "~/daos/user";
import Transaction from "~/daos/transaction";

export const transferForm = reactive({
  senderId: authentication.getAuthUserId(),
  recipientId: null,
  amount: null,
  vendorId: null,

  async submit() {
    const form = {
      senderId: this.senderId,
      recipientId: this.recipientId,
      amount: this.amount,
      vendorId: this.vendorId,
    };

    const order = await Transaction.newOrder(form);
    this.reset();

    return order;
  },

  reset() {
    this.senderId = null;
    this.recipientId = null;
    this.amount = null;
    this.vendorId = null;
  },
});

export const recipientFetcher = reactive({
  recipient: {},
  loading: false,
  email: null,
  async findAndUpdateRecipientByEmail() {
    if (this.email === this.recipient.email) return;

    this.loading = true;

    transferForm.recipientId = null;
    this.recipient.value = {};

    this.recipient = await User.getByEmail(this.email);
    transferForm.recipientId = this.recipient._id;
    this.loading = false;
  },
});

const STEP_FORM = "FORM";
const STEP_VENDOR = "VENDOR";

export const wizard = reactive({
  currentStep: 0,
  steps: [STEP_FORM, STEP_VENDOR],
  isAtVendor() {
    return this.steps[this.currentStep] === STEP_VENDOR;
  },
  isAtForm() {
    return this.steps[this.currentStep] === STEP_FORM;
  },
  next() {
    if (this.steps.length >= this.currentStep + 1) this.currentStep += 1;
  },
  previous() {
    if (this.currentStep >= 0) this.currentStep -= 1;
  },
});

const wizard2 = {
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
