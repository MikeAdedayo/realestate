<template>
  <div class="q-pa-md flex flex-center">
    <div class="tabwidth">
      <q-tabs
        v-model="tab"
        align="justify"
        narrow-indicator
        class="q-mb-lg"
      >
        <q-tab class="text-purple" name="Complaint" label="Complaint" />
        <q-tab class="text-orange" name="Status" label="Status" />
              </q-tabs>

      <div class="q-gutter-y-sm">
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          transition-prev="scale"
          transition-next="scale"
          class=" "
        >
          <q-tab-panel class="q-gutter-y-md mytab" name="Complaint">
                      <p>Subject</p>
           <q-input square standout="text-white" v-model="subject" label="Subject" />
           <p>Message</p>
           <q-input type="textarea" v-model="message" standout="bg-teal text-white" label="Complaint" stack-label>
        <template v-slot:control>
          <div class="self-center full-width no-outline" tabindex="0">Field content</div>
        </template>
      </q-input>
      <q-btn class="float-right" @click="submit" style="background: #FF0080; color: white" label="Submit" />
          </q-tab-panel>

          <q-tab-panel name="Status">
            <div class="q-pa-sm" v-for="item in status" :key="item.id">
            <div class="row">
            <div class="text-h6 col-8">{{item.subject}}</div>
            <q-avatar class="col-3 offset-1" size="24px" :icon="item.status ? 'fa fa-check-circle' : 'fa fa-circle'" color="white" :text-color="item.status ? 'green-10' : 'red-10'"/>
            </div>
            <p class="row">{{item.message}}</p>
            <p>{{item.date}}</p>
            <q-separator inset color="blue" />
          </div>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </div>
</template>
<style scoped>
.tabwidth{
  max-width: 600px;
}
.mytab{
   width:50vh;
}
@media screen and (max-width: 420px){
  .tabwidth{
    width: 100vw;
  }
  .mytab{
    width: 95vw;
  }
}
</style>

<script>
import { QSpinnerComment } from 'quasar'
import axios from 'axios'
export default {
  data () {
    return {
      tab: 'Complaint',
      message: '',
      subject: '',
      status: {}
    }
  },
  methods: {
    submit () {
      /* This is for Codepen (using UMD) to work */
      const spinner = typeof QSpinnerComment !== 'undefined'
        ? QSpinnerComment // Non-UMD, imported above
        : Quasar.components.QSpinnerComment // eslint-disable-line
      /* End of Codepen workaround */

      this.$q.loading.show({
        spinner,
        spinnerColor: 'purple-10',
        spinnerSize: 120,
        backgroundColor: 'white',
        message: 'Sending your complain. Hang on...',
        messageColor: 'deep-purple-8'
      })
      try {
        axios.post('http://127.0.0.1:8000/complain/' + this.$store.state.profile.username,
          {
            username: this.$store.state.profile.username,
            subject: this.subject,
            message: this.message
          }
        ).then(response => {
          let data = response.data
          console.log(data.response)
          if (data.response === 'sucess') {
            this.loadStatus()
            this.$q.notify({
              color: 'deep-purple-8',
              message: 'complaint sent',
              timeout: 3000,
              textColor: 'white',
              position: 'top',
              icon: 'fa fa-check-circle'
            })
            this.clean()
            this.$q.loading.hide()
          }
        })
      } catch (error) {
        this.$q.notify({
          color: 'deep-purple-8',
          message: 'Error! complaint not sent',
          timeout: 3000,
          textColor: 'white',
          position: 'top',
          icon: 'mdi-danger'
        })
        this.$q.loading.hide()
      }
    },
    clean () {
      this.message = ''
      this.subject = ''
    },
    loadStatus () {
      console.log(this.$store.state.profile.username)
      axios.get('http://127.0.0.1:8000/complain/' + this.$store.state.profile.username)
        .then(response => {
          const data = response.data
          console.log(data)
          this.status = data
        })
    }
  },
  mounted () {
    console.log('start')
    this.loadStatus()
  }
}
</script>
