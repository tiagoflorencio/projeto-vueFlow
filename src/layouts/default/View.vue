<template>
  <v-container fluid class="ps-0">
    <v-row no-gutters>
      <v-col cols="2">
        <v-sheet class="pa-2 ma-2">
        <MenuLateral/>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-1">
          <v-main class="h-screen">    
    <router-view />
  </v-main>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
 
</template>

<script lang="ts" setup>
import MenuLateral from './MenuLateral.vue'
</script>

<style>
.h-screen {
    height: 93dvh !important;
}
</style>
