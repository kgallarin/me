<script setup lang="ts">
  import BaseContainer from '@/Components/Common/BaseContainer.vue';
</script>

<template>
  <base-container class="py-16 md:py-32">
    <h3 class="mb-16 font-proxima text-3xl font-light">Or send me an email</h3>

    <form action="">
      <div class="mb-4">
        <label for="email" class="mb-2 block font-proxima text-lg font-light text-primary">Name or alias</label>
        <input
          type="email"
          id="email"
          class="w-full rounded-md border border-gray-300 px-4 py-2 text-primary focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>
      <div class="mb-4">
        <label for="email" class="mb-2 block font-proxima text-lg font-light text-primary">Email</label>
        <input
          type="email"
          id="email"
          class="w-full rounded-md border border-gray-300 px-4 py-2 text-primary focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>
      <div class="mb-4">
        <label for="message" class="mb-2 block font-proxima text-lg font-light text-primary">Message</label>
        <textarea
          id="message"
          rows="4"
          class="w-full rounded-md border border-gray-300 px-4 py-2 text-primary focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
          required
        ></textarea>
      </div>
      <div class="flex justify-end">
        <button
          type="submit"
          class="hover:bg-primary-dark focus:ring-primary-dark w-full rounded-md bg-primary px-6 py-3 font-proxima text-lg font-medium text-primary text-white focus:border-transparent focus:outline-none focus:ring-2 md:w-fit"
        >
          Send
        </button>
      </div>
    </form>
  </base-container>
</template>
