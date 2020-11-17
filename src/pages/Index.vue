<template>
  <q-page style="position:relative;" class="flex flex-center mybackground ">
    <svg
 id="svg4566"
   version="1.1"
   height="100%"
   width="100%">
     <g
     id="layer1">
    <!-- <path
       d="M 0,-0.33789062 C 0.88661928,147.57129 2.4720913,447.15595 2.7070312,491.60156 c 1.8672099,3.73187 3.4811601,6.96234 4.1113282,8.23633 -1.1179968,-2.28025 -3.0885719,-6.37052 -2.8828125,-6.4375 2.6640687,-0.8671 6.1141761,14.57304 5.1582031,17.81055 -0.9615689,3.25648 -2.8011371,6.17857 -4.3203125,9.22265 0.031385,0.0127 0.062372,0.0244 0.09375,0.0371 3.4011653,-5.1595 3.2455093,-7.15551 3.5429687,-3.00195 0.1077583,1.50465 0.1699866,3.00454 0.203125,4.50781 C 406.94278,681.6435 240.75107,296.51781 397.14258,236.80469 c 157.14285,-60 165.71484,-237.14258063 165.71484,-237.14258062 z"
       style="fill:none;stroke:#000000;stroke-width:0.99999994px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"
       transform="scale(0.26458333)"
       id="path4570" /> -->
    <path
       d="M 2.8574219,1.3769531 3.2167969,219.23438 C 3.4142632,339.0558 4.3782699,455.57852 5.359375,478.17383 l 0.7578125,17.44922 c 1.9982824,4.23968 3.6797321,13.20652 2.9765625,15.58789 -0.5066852,1.71595 -1.2629531,3.33619 -2.0859375,4.93164 l 0.03125,0.72265 c 1.0898048,-2.01828 1.1651135,-2.27268 1.3710937,0.60352 0.055675,0.7774 0.093252,1.55269 0.1308594,2.32813 l 20.0312504,7.75 c 27.191021,10.52127 66.782611,22.03801 92.714844,26.96874 11.6856,2.22189 32.73504,3.42993 50.14062,2.87696 38.91296,-1.23629 56.74567,-7.80142 80.22071,-29.53516 27.57702,-25.53146 40.05159,-55.62476 59.53125,-143.62304 22.27229,-100.61381 37.60462,-126.15594 91.05859,-151.6836 16.3876,-7.82612 37.0529,-19.18135 45.92188,-25.23242 18.46188,-12.59604 49.29545,-43.88262 62.84765,-63.77148 21.46606,-31.50307 43.67281,-90.212681 47.97852,-126.847661 L 560.78711,1.3769531 H 281.82227 Z M 6.2480469,498.64648 6.25,498.69922 c 0.1047321,0.21123 2.2038958,20.92153 2.2910156,21.09766 C 8.376515,519.46137 6.439815,499.04179 6.2480469,498.64648 Z"
       style="fill:#ffffff;fill-opacity:1;stroke-width:2.85714293"
       transform="scale(0.75)"
       id="path4574"/>
  </g>
      </svg>
    <q-card id="cardlg" class="login shadow-15 flex flex-center" style="position:fixed;padding-right:2px;padding-left:2px;
   padding-bottom:5px;">

          <q-card-section style="margin-top:-25px">
            <q-card-section id="cardwl" class="column lgtext">
       <div style="color:#642B73" class="col-4">
       Welcome
       </div>
       <q-spinner-pie
          style="color:#b13f65"
          class="col-4 float-right"
          size="2.5em"
          v-if="loading"
        />
     </q-card-section>
       <div style="" class="row justify-center items-center">
         <div class="col-xs-11 col-12" >
         <div class="column q-gutter-y-lg">
           <q-img style="height:75px" src="statics/images/chealok2.png"></q-img>
       <div class="col-12 "><q-input size="50" v-model="user.username" filled placeholder="username" hint="Username" icon="mdi-login">
          <template v-slot:prepend>
          <q-icon name="mdi-account-tie" />
        </template>
          </q-input></div>
       <div class="col-12 "> <q-input v-model="user.password" filled :type="isPwd ? 'password' : 'text'" placeholder="Password" hint="Password">
        <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          />
        </template>
         <template v-slot:prepend>
          <q-icon name="lock" />
        </template>
         </q-input></div>
      <div class="col "> <q-btn style="background-color:#b13f65" class="float-right" text-color="white" label="login" icon="mdi-login" @click="login"/></div>
      </div></div>
   </div>
     </q-card-section>
   </q-card>
   <!-- <div style="width:100px;height:100px;color:#990000;z-index:2" v-anime="{ rotate: '1turn', backgroundColor: '#b5b', duration: 2000, loop: true }">{{this.kk}}</div> -->
   <!-- <div style="width:100px;height:100px;background-color:#990088;z-index:2" id="me">{{this.kk}}</div> -->
  </q-page>

</template>

<style scoped>
svg{
  position: absolute;
  top: 0;
  left:  0;
  margin-left: -6px;
  margin-top: -5px;
  transform: scale(1.0);
  /* width: 100%;
  height: 100%; */
}
.mybackground{
  background-image: linear-gradient(135deg,  #642B73, #642B73, #b13f65);
  height:100vh;
}
.mypadding{
  width: 100%
}

.login{
width:400px;
height:65%;
background-color: rgba(209, 197, 206, 0.849);

}
@media screen and (max-width: 420px){
  .login{
    width:95vw;
    height:500px;
  }
}
.mainbg{

   background-image: url('/statics/images/bkgk.svg'); background-repeat: no-repeat; background-size: 100% 100%;
      filter: blur(8px);
  /* -webkit-filter: blur(8px);  */
}
.lgtext{
  color:#5c4563;
  font-family: Caroni;
  font-size: 30px;
}
@media screen and (max-width: 420px) {
  svg{
    transform: scale(1.0325);
  }
}

</style>

<script>
// import { translate } from 'pages/myanimate'
import anime from 'animejs'
import axios from 'axios'
import { LocalStorage } from 'quasar'
// import { mapActions } from 'vuex'
// import { QSpinnerPie } from 'quasar'
export default {
  name: 'PageIndex',
  data () {
    return {
      isPwd: true,
      kk: '',
      loading: false,
      user: [{ username: ' ' }, { password: ' ' }]
    }
  },
  methods: {
    display (message, icon) {
      this.$q.notify({
        color: 'deep-purple-8',
        message: message,
        timeout: 1500,
        textColor: 'white',
        position: 'top',
        icon: icon
      })
    },
    login () {
      this.loading = true
      this.display('loging in', 'mdi-login')
      axios.post('http://127.0.0.1:8000/login/',
        {
          username: this.user.username,
          password: this.user.password
        }
      ).then(response => {
        let data = response.data
        console.log(data.response)
        if (data.response === 'sucessful') {
          LocalStorage.set('username', this.user.username)
          this.$store.dispatch('school/loadProfile', this.user.username)
          this.timer = setTimeout(() => {
            this.loading = false
            this.display('welcome ' + this.user.username, 'check')
            this.$router.push({ path: '/user' })
            this.timer = void 0
          }, 1000)
        }
        if (data.response === 'invalid password') {
          this.display('wrong password', 'fa-danger')
          this.loading = false
        }
        if (data.response === 'invalid username') {
          this.display('wrong username', 'sad')
          this.loading = false
        }
      }).catch(error => {
        console.log('am here', error)

        if (error === 'Error: Network Error') {
          console.log('am here network', error)
        }
        this.display('Network error!', 'mdi-circle')
        this.loading = false
      })
    },
    welcome () {
      const line = anime.timeline({
        duration: 9000,
        // targets: '#me',
        translateX: 1000,
        easing: 'easeInOutCubic'
      })
      line.add({
        easing: 'easeInOutCubic',
        targets: '#cardwl',
        keyframes: [
          { scale: 1.1 },
          { scale: 0.9 },
          { scale: 1 }],
        // translateY: 1000,
        duration: 500
      })
    }
    // ...mapActions([
    //   'loadProfile'
    // ])
  },
  mounted () {
    this.timer = setTimeout(() => {
      this.welcome()
    }, 1000)
  },
  computed: {

  }
}
</script>
