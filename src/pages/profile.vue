<template>
    <q-page >
      <svg
      style="position:absolute;width:320px;height:700px;overflow:none;"
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   id="svg5764"
   version="1.1"
   viewBox="0 0 210 297"
   height="297mm"
   width="210mm">
  <defs
     id="defs5758" />
  <metadata
     id="metadata5761">
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
     id="layer1">
    <g
       id="g6344">
      <path
         style="opacity:0.9;fill:#8d4370;fill-opacity:1;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none"
         id="path6311"
         d="M -265.33928,133.71429 -470.85316,81.522536 -322.89683,-70.36183 Z"
         transform="matrix(1.2210699,0.49088663,-0.33703747,1.7784578,629.3954,236.94714)" />
      <path
         style="opacity:0.9;fill:#8d4370;fill-opacity:1;stroke:#ffffff;stroke-width:10.09900934;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
         id="path6311-9"
         d="M -265.33928,133.71429 -470.85316,81.522536 -322.89683,-70.36183 Z"
         transform="matrix(1.2210699,0.46337728,-0.33703747,1.6787928,685.54089,228.16337)" />
    </g>
  </g>
</svg>
      <div class="colomn" >
          <div class="col-2">
        <q-img class="outr" src="statics/images/outsite.jpg">
          <div class="absolute-full text-subtitle2 flex flex-center">
                      </div>
        </q-img>
          </div>
      </div>
      <div class="q-pa-md" style="margin-top:-70px">
        <q-card style="postion:relative;" class="shadow-8">
                <svg
      style="z-index:0;width:100%;height:100%;position:absolute;overflow:none;"
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
       style="opacity:1.0;fill:#480048aa;fill-opacity:1;stroke-width:0;stroke-miterlimit:4;stroke-dasharray:none" />
  </g>
</svg>
          <q-card-section class="row q-gutter-lg">
            <div class="col-auto">
              <q-avatar size="100px" font-size="52px" color="teal" text-color="white" icon="mdi-account"/>
            </div>
              <div class="col-auto column">
                <p class="col-2">Odediran Michael</p>
                <p class="col-2">mike@gmail.com</p>
                <p class="col-2">08133497386</p>
              </div>
          </q-card-section>
        </q-card>
        <!-- Content begins -->
      </div>

      <div>
    <q-card>
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="purple-9"
          indicator-color="purple-10"
          align="justify"
          narrow-indicator
        >
          <q-tab name="General" label="General information" />
          <q-tab name="Contact" label="Contact Information" />
          <q-tab name="Payment" label="Payment Information" />
          <q-tab name="Tenancy" label="Tenacy information" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated
          swipeable
          transition-prev="scale"
          transition-next="scale"
          class="profilebg"
        >
          <q-tab-panel name="General" >
            <div class="text-h6">General information</div>
            <div class="column q-pa-lg">
              <div class="col row">
                <div class="col-6">
                  <p>Last name</p>
                  <p>Odediran</p>
                </div>
                <div class="col-6">
                  <p>First name</p>
                  <p>Michael</p>
                </div>
              </div>
                 <div class="col row">
                <div class="col-6">
                  <p>OCCUPATION</p>
                  <p>{{this.profile[0].occupation}}</p>
                </div>
                <div class="col-6">
                  <p>SEX</p>
                  <p>{{this.profile[0].gender}}</p>
                </div>
              </div>
                <div class="col row">
                <div class="col-6">
                  <p>MARITAL STATUS</p>
                  <p>{{this.profile[0].marital_status}}</p>
                </div>
                <div class="col-6">
                  <p>RELIGION</p>
                  <p>{{this.profile[0].Religion}}</p>
                </div>
              </div>
               <div class="col row">
                <div class="col-6">
                  <p>NATIONALITY</p>
                  <p>{{this.profile[0].Nationality}}</p>
                </div>
                <div class="col-6">
                  <p>STATE OF ORIGIN</p>
                  <p>{{this.profile[0].State_of_origin}}</p>
                </div>
              </div>
               <div class="col row">
                <div class="col-12">
                  <p>NAME OF SPOUSE</p>
                  <p>{{this.profile[0].Spouse_name}}</p>
                </div>
                <div class="col-12">
                  <p>NAME OF CHILDREN</p>
                  <p>nil</p>
                </div>
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="Contact">
             <div class="text-h6">Contact information</div>
            <div class="column q-pa-lg">
              <div class="col row">
                <div class="col-6">
                  <p>TELPHONE NUMBER</p>
                  <p>{{this.profile[0].telphone_no}}</p>
                </div>
                <div class="col-6">
                  <p>OFFICE ADDRESS</p>
                  <address>{{this.profile[0].office_addr}}</address>
                </div>
              </div>
                 <div class="col row">
                <div class="col-6">
                  <p>PREVIOUS HOME ADDRESS</p>
                  <address>{{this.profile[0].previous_home_addr}}</address>
                </div>
                <div class="col-6">
                  <p>SPONSOR'S HOME ADDRESS</p>
                  <p>{{this.profile[0].sponsor_addr}}</p>
                </div>
              </div>
                <div class="col row">
                <div class="col-6">
                  <p>SPONSOR'S PHONE NO</p>
                  <p>{{this.profile[0].sponsor_phone}}</p>
                </div>
                <!-- <div class="col-6">
                  <p>SPONSOR'S ADDRESS</p>
                  <address>No 2, spn address</address>
                </div> -->
              </div>
            </div>
          </q-tab-panel>
          <q-tab-panel name="Payment">
            <p></p>
            <div style="min-height:50vh;max-width: 400px">
    <q-list bordered>
      <q-expansion-item
        group="somegroup"
        icon="house"
        label="House rent info"
        default-opened
        header-class="text-primary"
      >
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <q-separator />

      <q-expansion-item group="somegroup" icon="mdi-basket" label="Waste info" header-class="text-teal">
        <q-card>
          <q-card-section>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
            commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
            eveniet doloribus ullam aliquid.
          </q-card-section>
        </q-card>
      </q-expansion-item>
</q-list>
  </div>
          </q-tab-panel>

          <q-tab-panel name="Tenancy">
            <div class="text-h6">Tenancy Information</div>
            <div class="row q-pa-md">
              <q-card class="col-xs-12 col-md-6">
             <q-card-section class="text-subtext">
               Moved in
             </q-card-section>
             <q-card-section class="q-pa-lg">
                20/5/2017
             </q-card-section>
           </q-card>
            <q-card class="col-xs-12 col-md-6">
             <q-card-section class="text-subtext">
               REFUNDABLE CAUTION FEE
             </q-card-section>
             <q-card-section class="q-pa-lg">
                ₦15,000
             </q-card-section>
           </q-card>
            <q-card class="col-xs-12 col-md-6">
             <q-card-section class="text-subtext">
               Tenacy Rate
             </q-card-section>
             <q-card-section class="q-pa-lg">
                ₦200,000
             </q-card-section>
           </q-card>
            <q-card class="col-xs-12 col-md-6">
             <q-card-section class="text-subtext">
               YEARLY EXPIRATION DATE
             </q-card-section>
             <q-card-section class="q-pa-lg">
                20/5
             </q-card-section>
           </q-card>
           </div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>  </div>
</q-page>
</template>
<style scoped>
.outr{
  height: 300px;
}
@media screen and (max-width: 420px) {
  .outr{
    height: 160px;
  }
  .profilebg{
  background-image: url('/statics/images/profilepath.svg'); background-repeat: no-repeat;
  background-size: 400px 620px;
}
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
  top: 30%;
  left: 20%;
  font-size: 50px;
  color: white;
  transform: translate(-50%,-50%);
  -ms-transform: translate(-50%,-50%);
}
.blur{
     filter: blur(8px);
  -webkit-filter: blur(8px);
}
</style>

<script>
export default {
  data () {
    return {
      step: 1,
      done1: false,
      done2: false,
      done3: false,
      editing: false,
      tab: 'General',
      profile: {}
    }
  },

  methods: {
    reset () {
      this.done1 = false
      this.done2 = false
      this.done3 = false
      this.step = 1
    },
    loadProfileData () {
      this.profile = this.$store.state.profile.profile
    }
  },
  mounted () {
    this.loadProfileData()
    console.log(this.profile[0].Religion)
  }
}
</script>
