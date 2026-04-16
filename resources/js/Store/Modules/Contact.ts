import { sendContact } from '@/Api/Contact';
import { defineStore } from 'pinia';

import { ContactFormFields } from '@/Types/Forms';
import { ContactModuleContext } from '@/Types/Modules';

const state = () => ({});

const getters = {};

const mutations = {};

const actions = {
  async submitContactForm(this: ContactModuleContext, contactFormFields: ContactFormFields): Promise<void> {
    this.setLoading?.({ type: 'contact', flag: true });
    try {
      await sendContact(contactFormFields);
    } catch (error) {
      return Promise.reject(error);
    } finally {
      this.setLoading?.({ type: 'contact', flag: false });
    }
  },
};

export const useContactStore = defineStore('contact', {
  state,
  getters,
  actions: {
    ...actions,
    ...mutations,
  },
});
