<template>
  <NuxtLayout name="demo" hide-back-button>
    <div>
      <div class="mb-10">
        <div class="inline-flex items-center">
          <div
            class="h-10 w-10 rounded-full inline-flex justify-center items-center bg-primary-50"
          >
            <Icons icon="avatar" class="text-primary-600" />
          </div>
          <span class="text-base font-medium px-3">Hello {{ user.name }},</span>
        </div>
      </div>

      <div class="shadow-card rounded-lg bg-gray-25 px-4 py-8">
        <div class="">
          <div class="mb-8">
            <div class="mb-4 text-base font-medium text-gray-500">
              Wallet Balance
            </div>
            <div class="text-3xl font-medium text-gray-700">
              {{ user.balance }}
            </div>
          </div>

          <div class="">
            <NuxtLink
              to="/demo/wallet/send"
              class="inline-flex items-center mr-6"
            >
              <span
                class="h-10 w-10 rounded-full inline-flex justify-center items-center bg-green-200"
              >
                <Icons icon="send" class="text-green-700" />
              </span>
              <span class="text-base font-medium px-2">Send</span>
            </NuxtLink>

            <NuxtLink
              :to="routes.wallet.withdraw"
              class="inline-flex items-center"
            >
              <span
                class="h-10 w-10 rounded-full inline-flex justify-center items-center bg-red-50"
              >
                <Icons icon="minus-square" class="text-red-600" />
              </span>
              <span class="text-base font-medium px-2">Withdraw</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
import routes from "../../helpers/routes";
import Icons from "../../components/ui/Icons";
import User from "../../daos/user";
import { useRoute } from "nuxt/app";
import { onMounted, ref, computed } from "#imports";
import authentication from "../../store/authentication";

const route = useRoute();
const user = computed(() => authentication.authUser);

onMounted(async () => {
  const user = await User.getByID(route.params.id);
  authentication.setAuthUser(user);
});
</script>

<style>
.shadow-card {
  box-shadow: 0 1px 30px 3px rgba(169, 168, 172, 0.11);
}
</style>
