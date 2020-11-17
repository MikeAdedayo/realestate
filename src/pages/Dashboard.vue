<template>
    <q-page class="" style="background-color:#cfcfcf;">
        <div v-if="$q.platform.is.desktop">
        <div class="overlay ovrly" >
         <img src="statics/images/outsite.jpg" width="100%" height="100%" stretch="fill" class="blur" style="opacity:0.3">
        <!-- <label class="text">
            Caption
          </label> -->
          <div class="text2 q-gutter-md">
            <i class="far fa-smile-beam"></i>
            <p>Good morning</p>
            <p style="line-height: 50px">Welcome, Odediran</p>
          </div>
        </div>
        <div class="row clipbg" style="margin-top:10px;">
          <div class="col-md-4 col-xs-12 col-sm-6 " >
<q-card class="shadow-11 redg" style="height:200px; margin:10px ">
      <q-card-section class="">
    </q-card-section>
      <q-card-section style="height:150px" class="Label column justify-center items-center">
        <p>{{countd}}</p>
      </q-card-section>
</q-card>
          </div>
           <div class=" col-md-4 col-xs-12 col-sm-6 ">
<q-card class="blueg shadow-11" style="height:200px; margin:10px">
      <q-card-section class="">
      </q-card-section>
      <q-card-section style="height:150px" class="Label column justify-center items-center">
        <p class=" ">{{countd}}</p>
      </q-card-section>
</q-card>
          </div>
           <div class="col-md-4 col-xs-12 col-sm-6">
<q-card class="shadow-11 greeng" style="height:200px; margin:10px">
      <q-card-section class="">
      </q-card-section>
      <q-card-section style="height:150px" class="Label column justify-center items-center">
        <p>₦200,000</p>
      </q-card-section>
</q-card>

          </div>
        </div>
<div class="row" style="margin-top:10px">
    <div class="col-md-4 col-xs-12 col-sm-6">
    <q-card style="background-color:#e7e7e7; margin:5px; height:500px" class=" shadow-7">
      <q-card-section class="cardtitle">
          Next Billing Date
      </q-card-section>
     <q-card-section class="flex flex-center">
      <q-date v-model="date" readonly/>
      </q-card-section>
    </q-card>
</div>
<div class="col-md-4 col-xs-12 col-sm-6">
    <q-card  style="background-color:#e7e7e7; margin:5px; height:500px" class=" shadow-7">
      <q-card-section class="cardtitle">
          Next Billing Time
      </q-card-section>
     <q-card-section class="flex flex-center">
         <q-knob
         style="margin-top:15%;"
      readonly
      v-model="value"
      show-value
      size="300px"
      :thickness="0.6"
      color="orange-13"
      track-color="orange-3"
      class="text-orange"
      font-size="32px"
    >
    {{value}}%
    </q-knob>
      </q-card-section>
    </q-card >
</div>
<div class="col-md-4 col-xs-12 col-sm-12">
  <div class="column">
    <div class="col-12">
    <q-card style="background-color:#e7e7e7; margin:5px; height:500px" class=" shadow-7">
      <q-card-section class="cardtitle">
          Apartment Profile
      </q-card-section>
     <q-card-section class="q-gutter-y-xs flex flex-center" style="margin-top:10px">
       <div class="row ">
         <div class="col-6">
           <div class="column">
             <div class="col-6">
               <q-icon color="primary" name="house"/>
               <p>Building Title</p>
             <p>St.Michael</p>
             </div>
              <div class="col-6">
               <q-icon color="primary" name="category"/>
               <p>Properties</p>
               <q-list bordered>
      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon color="primary" name="house" />
        </q-item-section>

        <q-item-section>3 bedroom flat</q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section avatar>
          <q-icon color="teal" text-color="white" name="room" />
        </q-item-section>

        <q-item-section>2 Toilets</q-item-section>
      </q-item>
 </q-list>
             </div>
           </div>
           </div>
            <div class="col-6">
           <div class="column">
             <div class="col-6">
               <q-icon color="primary" name="fas fa-sort-numeric-down"/>
               <p>Flat Number</p>
               <p>2</p>
             </div>
              <div class="col-6">
               <q-icon color="red" name="fas fa-clock"/>
               <p>Duration</p>
               <q-knob
      v-model="value2"
      size="75px"
      show-value
      :thickness="0.6"
      color="white"
      center-color="purple-10"
      class="q-ma-md text-white"
    />
             </div>
           </div>
           </div>
        <div class="col-12">
    <q-rating
        :v-model="4"
        size="3.5em"
        color="green-5"
        icon="star_border"
      />
       </div></div>

      </q-card-section>
    </q-card>
</div></div></div></div>
<div class="row" style="margin-top:10px">
    <div class="col-12">
        <q-card style="background-color:#e2e2e2">
          <q-card-section>
            Compliant
            <div class="float-right"><q-btn color="primary" icon="check" label="New Compliant"  /></div>
          </q-card-section>
         <q-card-section>
             <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 400px">
      <q-chat-message
        :text="['hey, how are you?']"
        sent
      />
      <q-chat-message
        :text="['doing fine, how r you?']"
      />
    </div>
  </div>
          </q-card-section>
        </q-card>

    </div>

</div>
</div>
<div class="flex flex-center" style="height:90vh;" v-if="$q.platform.is.mobile">
    <div class="mobilebr">
  <transition
  appear
 enter-active-class="animated fadeIn anido"
  leave-active-class="animated fadeOut"
>
    <img class="humanbg" src="statics/images/one.svg"/>
  </transition>
  <img style="width:100vw;height:92vh;" src="statics/images/shape2.svg" alt="">
  <!-- <div class="overla"></div> -->
</div>
<div class="mobilemain">
    <transition
  appear
 enter-active-class="animated pulse"
 leave-active-class="animated fadeOut"
>
  <p class="hello"> Hello {{user}}, </p>
    </transition>
  <p>{{greeting}}</p>
  <div style="height:65%" class="flex flex-center">
    <q-card style="font-size:15px;width:85vw;height:30vh;position:relative;" class="mobilered">
      <svg
      style="z-index:0;width:100%;height:100%;position:absolute;"
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   id="svg5207"
   version="1.1"
   viewBox="0 0 297 210"
   height="210mm"
   width="297mm">
  <defs
     id="defs5201" />
  <metadata
     id="metadata5204">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title></dc:title>
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     transform="translate(0,-87)"
     id="layer1">
    <rect
       ry="33.261906"
       y="21.984526"
       x="30.238096"
       height="107.34525"
       width="238.88092"
       id="rect5752"
       style="opacity:1.0;fill:#ffffffee;fill-opacity:1;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none" />
  </g>
</svg>
  <p style="font-size:16px;text-align:center;color:#8d4370;position:relative">Tenancy Account</p>
      <q-card-section class="column">
        <div style="font-size:14px" class="col-2">Next payment due</div>
        <div class="col-2">{{countd}}</div>
        <p></p>
        <div class="row col-2">Payable fee</div>
        <div class="row col-2">₦200,000</div>
      </q-card-section>
    </q-card>
    </div>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
    <q-fab color="white" text-color="purple" icon="keyboard_arrow_up" direction="up">
        <q-fab-action color="primary" to="/user/profile" icon="mdi-face-profile" />
        <q-fab-action color="secondary" to="/user/payment" icon="mdi-credit-card" />
        <q-fab-action color="deep-orange" to="/user/complains" icon="rss_feed" />
      </q-fab>

      <br>

    </q-page-sticky>
</div>

</div>
        </q-page>
</template>
<style scoped>
.anido{
  animation-duration: 1s;
}
.humanbg{
  position:absolute;
  top:0;width:100vw;
  height:91vh;
     filter: blur(5px);
  -webkit-filter: blur(5px);
  /* background-image: url('/statics/images/personalization.svg');
  background-size: 100% 100%;
  background-repeat:  no-repeat; */
  /* animation: humaan 30s; */
  /* animation-iteration-count: infinite; */
}
.mobilemain{
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  font-size: 26px;
  color: whitesmoke;
  height: 68vh;
  width: 95%;
  /* background-color: #1828484f; */
  z-index: 1;
}
.mobilebr{
  background-color: whitesmoke;
  /* display:none ; */
  position: absolute;
  top: 0;
    /* margin-top: -2px; */
z-index: 0;
}
.overla{
position: absolute;
top: 0;
left: 0;
background-color: #413744e7;
opacity:0.3 ;
width: 100%;
height: 100%;
}
/* .clipbg{
     } */
.upper{
    height:400px;
     background-image: url('/statics/images/outsite.jpg'); background-repeat: no-repeat;
}
.ovrly{
  height: 350px;
}
@media screen and (max-width: 420px) {
  .ovrly{
    height: 250px;
  }
  /* .clipbg{
 background-image: url('/statics/images/clipdrawing.svg'); background-repeat: no-repeat;
  background-size: 100%
  } */
}
.overlay {
  position: relative; /* Sit on top of the page content */
  display: block; /* Hidden by default */
  width: 100%; /* Full width (cover the whole page) */
  /* height: 100%; */
    top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* background-color: rgba(0,0,0,0.5); */
  background-image: linear-gradient(135deg,  #253350f6, #112d3d, #5c4563);
  z-index: 2; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
}
.text{
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 50px;
  color: white;
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
}
.text2{
  position: absolute;
  top: 45%;
  left: 20%;
  font-size: 40px;
  font-family: DrawveticaMini;
  line-height: 30px;
  color: white;
  transform: translate(-20%,-30%);
  -ms-transform: translate(-20%,-30%);
}
.blur{
     filter: blur(8px);
  -webkit-filter: blur(8px);
}
.cardtitle{
  background-image: linear-gradient(135deg,  #587192, #366681, #858585);
  color:whitesmoke;
  font-family: 'Courier New', Courier, monospace;
  font-size:18px;
  margin-bottom: 10px
}
.acolor{
  color:#4b3009;
}
.mobilered{
  /* background-image: linear-gradient(135deg,  #c0484810, #48004809); */
  background-color: #48004877;
}
.redg{
  background-image: linear-gradient(135deg,  #c04848, #480048);
}
.blueg{
  background-image: linear-gradient(135deg,  #4b6cb7, #182848);
}
.greeng{
  background-image: linear-gradient(135deg, #71b280, #134e5e );
}

.Label{
  font-size: 2.5em;
  font-weight:bold;
  color:white;
  font-family: 'KirangHaerang';
  /* text-align: center; */
}
</style>

<script>
// import { url } from 'inspector'
import anime from 'animejs'

export default {
  methods: {
    myframe () {
      const line = anime.timeline({
        duration: 3000,
        // targets: '#me',
        translateX: 1000,
        easing: 'easeInOutCubic'
      })
      line.add({
        easing: 'easeInOutCubic',
        targets: '.hello',
        keyframes: [
          { translateX: 20, opacity: 0.2 },
          { translateX: 0, opacity: 0.9 },
          { scale: 1 }],
        duration: 1000
      })
    }
  },
  mounted () {
    window.setInterval(() => {
      this.now = new Date().getTime()
    }, 1000)
    // this.myframe()
  },
  data () {
    return {
      date: '2019/02/01',
      value: 70,
      value2: 62,
      now: new Date().getTime(),
      user: 'Michael',
      day: new Date().getHours()
    }
  },
  computed: {
    countd () {
      var countDownDate = new Date('September 5, 2019 12:00:00').getTime()
      // var now = new Date().getTime()
      var distance = countDownDate - this.now
      var days = Math.floor(distance / (1000 * 60 * 60 * 24))
      var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
      var min = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60))
      var sec = Math.floor(distance % (1000 * 60) / (1000))
      return days + 'days ' + hours + 'hours ' + min + 'minutes ' + sec + 'seconds '
    },
    greeting () {
      const day = this.day
      if (day <= 11) {
        return 'Good Morning'
      } else if (day <= 16) {
        return 'Good Afternoon'
      } else if (day <= 23) {
        return 'Good Evening'
      } else {
        return 'Good Day'
      }
    }
  }
}
</script>
