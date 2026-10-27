<script setup lang="ts">
	import { computed } from 'vue';

	import ContactHero from '@/Partials/Contact/ContactHero.vue';
	import ContactForm from '@/Partials/Contact/Form.vue';

	import { useAppStore } from '@/Store/Modules/App';
	import { useContentStore } from '@/Store/Modules/Content';
	import { useIconLinksStore } from '@/Store/Modules/IconLinks';

	const contentStore = useContentStore();
	const iconLinksStore = useIconLinksStore();

	const iconLinks = computed(() => iconLinksStore.getIconLinks);

	contentStore.fetchContent('contact');

	const contactHeroData = computed(() => contentStore.content);

	const appStore = useAppStore();
	const theme = computed(() => (appStore.theme === 0 ? 'light' : 'dark'));
</script>

<template>
	<contact-hero :links="iconLinks" :contact-hero-data="contactHeroData" :theme="theme" />
	<div class="flex flex-1 flex-col">
		<section class="shadow-bottom flex-1 bg-gray-lighter shadow-custom-mid-inset">
			<!--	form starts-->
			<contact-form />
		</section>
	</div>
</template>
