<template>
    <tr>
      <td v-if="!editing">{{ insight.chapter_id }}</td>
      <td v-else>
        <input type="number" v-model="editInsight.chapter_id" />
      </td>
  
      <td v-if="!editing">{{ insight.verse_number }}</td>
      <td v-else>
        <input type="number" v-model="editInsight.verse_number" />
      </td>
  
      <td v-if="!editing">{{ insight.content }}</td>
      <td v-else>
        <textarea v-model="editInsight.content"></textarea>
      </td>
  
      <td>
        <button v-if="!editing" @click="editing = true">{{ $t('edit') }}</button>
        <button v-else @click="saveEdit">{{ $t('save') }}</button>
        <button @click="deleteInsight">{{ $t('delete') }}</button>
      </td>
    </tr>
  </template>
  
<script>
  import { useStore } from 'vuex';
import { ref, watch } from 'vue';

  export default {
      props: ['insight'],
  
      setup(props) {
          const store = useStore();
  
          const editing = ref(false);
          const editInsight = ref({ ...props.insight });
  
          const saveEdit = async () => {
              await store.dispatch('updateInsight', editInsight.value);
              editing.value = false;
          };
  
          const deleteInsight = async () => {
              await store.dispatch('deleteInsight', editInsight.value.id);
          };
  
          watch(
              () => props.insight,
              newVal => {
                  editInsight.value = { ...newVal };
              }
          );
  
          return {
              editing,
              editInsight,
              saveEdit,
              deleteInsight
          };
      }
  };
  </script>