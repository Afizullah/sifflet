<template>
  <v-app>
    <v-navigation-drawer model-value class="pt-4" color="grey-lighten-3" rail>
    </v-navigation-drawer>
    <v-main>
      <v-btn @click="toggleTheme">toggle theme</v-btn>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { useTheme } from 'vuetify'

const theme = useTheme()
const toggleTheme = () => theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
</script>
