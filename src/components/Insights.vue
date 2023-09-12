<template>
    <div>
      <h1>{{ $t('insights') }}</h1>
      <form @submit.prevent="submitForm">
        <h2>{{ $t('addInsightTitle') }}</h2>
        <div>
          <label for="chapter_id">{{ $t('chapter') }}: </label>
          <input type="number" id="chapter_id" v-model="newInsight.chapter_id">
        </div>
        <div>
          <label for="verse_number">{{ $t('verse') }}: </label>
          <input type="number" id="verse_number" v-model="newInsight.verse_number">
        </div>
        <div>
          <label for="content">{{ $t('content') }}: </label>
          <textarea id="content" v-model="newInsight.content"></textarea>
        </div>
        <button type="submit">{{ $t('addInsightButton') }}</button>
      </form>
      <table class="table">
      <thead>
        <tr>
          <th>{{ $t('chapter') }}</th>
          <th>{{ $t('verse') }}</th>
          <th>{{ $t('content') }}</th>
          <th>{{ $t('actions') }}</th>
        </tr>
      </thead>
      <tbody>
        <insight-item
          v-for="insight in insights"
          :key="insight.id"
          :insight="insight"
        />
      </tbody>
    </table>
  </div>
  </template>

<script>
  import { ref, onMounted, computed } from 'vue';
  import { useStore } from 'vuex';
  import InsightItem from './InsightItem.vue';
  import { useI18n } from 'vue-i18n';


  export default {
    name: 'Insights',
    components: { InsightItem },
    setup() {
      const store = useStore();
      const { locale } = useI18n();

      onMounted(() => {
        const storedLanguage = localStorage.getItem('language');
        if (storedLanguage) {
          locale.value = storedLanguage;
        }
        store.dispatch('fetchInsights');
      });

      const insights = computed(() => store.state.insights.insights);

      const newInsight = ref({ chapter_id: '', verse_number: '', content: '' });

      const submitForm = () => {
        store.dispatch('postInsight', newInsight.value);

        newInsight.value = { chapter_id: '', verse_number: '', content: '' };
      };

      return {
        insights,
        newInsight,
        submitForm,
      };
    },
  };
</script>
  
  <style scoped>
  .table {
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
  }
  </style>
  