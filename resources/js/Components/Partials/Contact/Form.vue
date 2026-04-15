<script setup lang="ts">
import { ref, reactive } from 'vue';

import BaseContainer from '@/Components/Common/BaseContainer.vue';
import { sendContactEmail } from '@/Api/Contact';

const form = reactive({ name: '', email: '', message: '' });
const status = ref<'idle' | 'loading' | 'success' | 'error'>('idle');
const feedback = ref('');

async function handleSubmit() {
    status.value = 'loading';
    feedback.value = '';

    try {
        const result = await sendContactEmail(form);

        if (result.success) {
            status.value = 'success';
            feedback.value = result.message;
            form.name = '';
            form.email = '';
            form.message = '';
        } else {
            status.value = 'error';
            feedback.value = result.message;
        }
    } catch {
        status.value = 'error';
        feedback.value = 'Something went wrong. Please try again.';
    }
}
</script>

<template>
  <base-container class="py-16 md:py-32">
    <h3 class="mb-16 font-proxima text-3xl font-light">Or send me an email</h3>

    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label for="name" class="mb-2 block font-proxima text-lg font-light text-primary">Name or alias</label>
        <input
          v-model="form.name"
          type="text"
          id="name"
          class="w-full rounded-md border border-gray-300 px-4 py-2 text-primary focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>
      <div class="mb-4">
        <label for="email" class="mb-2 block font-proxima text-lg font-light text-primary">Email</label>
        <input
          v-model="form.email"
          type="email"
          id="email"
          class="w-full rounded-md border border-gray-300 px-4 py-2 text-primary focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>
      <div class="mb-4">
        <label for="message" class="mb-2 block font-proxima text-lg font-light text-primary">Message</label>
        <textarea
          v-model="form.message"
          id="message"
          rows="4"
          class="w-full rounded-md border border-gray-300 px-4 py-2 text-primary focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
          required
        ></textarea>
      </div>

      <p v-if="feedback" :class="status === 'success' ? 'text-green-600' : 'text-red-500'" class="mb-4 font-proxima text-sm">
        {{ feedback }}
      </p>

      <div class="flex justify-end">
        <button
          type="submit"
          :disabled="status === 'loading'"
          class="hover:bg-primary-dark focus:ring-primary-dark w-full rounded-md bg-primary px-6 py-3 font-proxima text-lg font-medium text-white focus:border-transparent focus:outline-none focus:ring-2 disabled:opacity-50 md:w-fit"
        >
          {{ status === 'loading' ? 'Sending...' : 'Send' }}
        </button>
      </div>
    </form>
  </base-container>
</template>
