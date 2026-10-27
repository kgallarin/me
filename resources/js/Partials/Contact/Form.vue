<script setup lang="ts">
  import { ref } from 'vue';

  import { useContactStore } from '@/Store/Modules/Contact';

  import { ContactFormErrors, ContactFormFields } from '@/Types/Forms';

  import useForm from '@/Composables/Forms';

  import BaseContainer from '@/Components/Common/BaseContainer.vue';
  import BaseInput from '@/Components/Common/BaseInput.vue';

  const contactStore = useContactStore();

  const form = useForm<ContactFormFields, ContactFormErrors>({
    name: '',
    email: '',
    message: '',
  });

  const successMessage = ref('');

  const submit = async () => {
    form.isProcessing = true;
    successMessage.value = '';

    try {
      await contactStore.submitContactForm(form.fields);
      successMessage.value = 'Message sent successfully!';
      form.reset();
    } catch (error) {
      form.setErrorResponse(error);
    } finally {
      form.isProcessing = false;
    }
  };
</script>

<template>
  <base-container class="py-16 md:py-32">
    <h3 class="mb-16 font-proxima text-3xl font-light">Or send me an email</h3>

    <div v-if="successMessage" class="mb-8 rounded-md bg-green-100 p-4 text-green-700">
      {{ successMessage }}
    </div>

    <form @submit.prevent="submit">
      <div v-if="form.errors.general_error" class="mb-4 text-red-500">
        {{ form.errors.general_error[0] }}
      </div>

      <base-input
        v-model="form.fields.name"
        label="Name or alias"
        placeholder="How should I call you?"
        :error="form.errors.name?.[0]"
        required
      />

      <base-input
        v-model="form.fields.email"
        type="email"
        label="Email"
        placeholder="your_awesome@email.com"
        :error="form.errors.email?.[0]"
        required
      />

      <base-input
        v-model="form.fields.message"
        type="textarea"
        label="Message"
        placeholder="What's on your mind?"
        :error="form.errors.message?.[0]"
        rows="4"
        required
      />

      <div class="flex justify-end">
        <button
          type="submit"
          :disabled="form.isProcessing"
          class="focus:ring-primary-dark w-full rounded-md bg-primary px-6 py-3 font-proxima text-lg font-medium text-secondary hover:bg-secondary hover:text-primary focus:border-transparent focus:outline-none focus:ring-2 disabled:opacity-50 md:w-fit"
        >
          {{ form.isProcessing ? 'Sending...' : 'Send' }}
        </button>
      </div>
    </form>
  </base-container>
</template>
