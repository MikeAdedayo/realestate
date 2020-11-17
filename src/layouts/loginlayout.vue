<template>
    <q-layout>
    <!-- <q-header elevated>
      <q-toolbar class="toolbg" style="background-color:#ffffff">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
          ChealokEstate
        </q-toolbar-title>
   </q-toolbar>
    </q-header> -->
       <q-page-container>
      <router-view />
    </q-page-container>
    </q-layout>
</template>
