<template>
  <div class="container">
    <h1>{{ $t('proverbs') }}</h1>
    <select v-model="selectedLanguage">
      <option value="en">English</option>
      <option value="nl">Nederlands</option>
    </select>
    <div class="scrolling-wrapper">
      <button v-for="chapter in 31" :key="chapter" @click="fetchChapter(chapter, selectedLanguage)" :data-chapter="chapter">
        {{ $t('chapter') }} {{ chapter }}
      </button>
    </div>
    <div v-if="selectedChapter">
      <h2>{{ $t('chapter') }} {{ selectedChapter.chapter_id }}</h2>
      <p>{{ selectedChapter.content }}</p>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, nextTick, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import ProverbsService from '../../services/proverbsService';
import { useI18n } from 'vue-i18n';

export default {
  name: 'Home',
  setup() {
    const selectedChapter = ref(null);
    const selectedLanguage = ref('en');
    const router = useRouter();
    const route = useRoute();
    const { t, i18n, locale } = useI18n();

    const fetchChapter = async (chapter, language = 'en') => {
      selectedChapter.value = await ProverbsService.getChapter(chapter, language);
      router.push({ query: { chapter } });
      localStorage.setItem('selectedChapter', chapter);
      localStorage.setItem('language', language);
      await nextTick();
      const chapterButton = document.querySelector(`.scrolling-wrapper button[data-chapter="${chapter}"]`);
      chapterButton?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    };

    onMounted(async () => {
      const chapter = parseInt(route.query.chapter) || parseInt(localStorage.getItem('selectedChapter')) || 1;
      const language = route.query.language || localStorage.getItem('language') || 'en';
      selectedChapter.value = chapter;
      selectedLanguage.value = language;
      await fetchChapter(chapter, language);
    });

    watch(selectedLanguage, async (newLanguage) => {
      const chapter = parseInt(route.query.chapter) || parseInt(localStorage.getItem('selectedChapter')) || 1;
      await fetchChapter(chapter, newLanguage);
      locale.value = newLanguage;
    });

    return {
      fetchChapter,
      selectedChapter,
      selectedLanguage,
      t
    };
  },
};
</script>



<style scoped>

.container {
  max-width: 70%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2%;
  padding-right: 2%;
}
.scrolling-wrapper {
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

.scrolling-wrapper > button {
  display: inline-block;
  margin-right: 1%;
  padding: 5px;
}
</style>
