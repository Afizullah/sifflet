<script setup lang='ts'>

import {useRouter} from 'vue-router';
import {ref} from 'vue';

let router = useRouter();

const searchQuery = ref('');
</script>


<template>
  <Footer
    v-model="searchQuery"
    :service-title="serviceTitle"
    :logo-text="logoText"
    :quick-links="quickLinks"
    @click="router.push({ name: 'Accueil' })"
  >
    <template #operator>
      <MedalSvg />
    </template>
  </Footer>
</template>
