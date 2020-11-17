<template>
  <q-layout view="hHh Lpr lFf">
    <q-header style="height:7%" elevated>
      <q-toolbar class="toolbg">
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
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="navcolor"
    >
    <div class="flex flex-center q-pa-lg">
    <q-avatar size="120px" color="white" icon="mdi-face-profile" text-color="black" font-size="60"/>
      </div>
      <q-list>
        <q-item-label header>Odediran Michael</q-item-label>
         <q-separator inset color="white" />
        <q-item clickable tag="a" to='/user'>
          <q-item-section avatar>
            <q-icon name="dashboard" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="/user/profile">
          <q-item-section avatar>
            <q-icon name="mdi-face-profile" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Profile</q-item-label>
             </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="/user/payment">
          <q-item-section avatar>
            <q-icon name="mdi-credit-card" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Payment</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="/user/notice">
          <q-item-section avatar>
            <q-icon name="record_voice_over" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Notifications</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" to="/user/complains">
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Complains</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
import { openURL, LocalStorage } from 'quasar'
// import { anime } from 'animejs'

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    openURL,
    dataR () {
      if (this.$store.state.profile.username === '') {
        this.$store.dispatch('profile/loadProfile', LocalStorage.getItem('username'))
      }
    }
  },
  mounted () {
    this.dataR()
    // kii () {
    //   // let t = anime.timeline({
    //   //   duration: 3000,
    //   //   easing: 'easeInOutQuart',
    //   // })
    //   // t.add( {
    //   //  targets: 'svg',
    //   //  keyFrames: [
    //   //       {scale: .2, translateX: 200,rotate: '360deg' },
    //   //       {scale: .1, translateX: 400}
    //   //       ],
    //   //  duration: 3000
    //   //      })
    // }
  }
}
</script>

<style>
.toolbg{
 height:7vh;
 background-image: linear-gradient(135deg,  #410c3e, #1f0327, #5f737c);
  }
  .navcolor{
    background-image: linear-gradient(45deg,  #410c3e, #110016);
  color:#dddddd;
  }
</style>
