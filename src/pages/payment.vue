<template>
    <q-page >
         <!-- <div style="margin-top:10vh;margin-left:20vw;">
        Payments
    </div> -->
    <div style="height:93vh;">
     <div style="height:100%;"  class="flex flex-center">
       <q-dialog v-model="isPin" persistent>
      <q-card class=" bg-blue-10 text-white">
        <q-card-section class="row items-center">
          <p><q-avatar icon="fa fa-key" color="white" text-color="red-10" />
          </p>
          <p class="q-ml-sm">Your pin is needed by bank for authentication.</p>
          <p></p>
          <q-input style="min-width:90%" bg-color="grey-1" maxlength="4" outlined v-model="authPin" label="pin" />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Continue" color="white" @click="proceedPayment({pin: authPin})"  v-close-popup/>
        </q-card-actions>
      </q-card>
    </q-dialog>
       <q-dialog v-model="isToken" persistent>
      <q-card class=" bg-blue-10 text-white">
        <q-card-section class="row items-center">
          <p><q-avatar icon="fa fa-info" color="white" text-color="green-10" />
          </p>
          <p class="q-ml-sm">Please provide your OTP.</p>
          <p></p>
          <q-input style="min-width:90%" bg-color="grey-1" maxlength="6" square outlined v-model="authToken" label="Token" />
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="CONTINUE" color="white" @click="proceedPayment({token: authToken})"  v-close-popup/>
        </q-card-actions>
      </q-card>
    </q-dialog>

                           <q-stepper
    class="stepContainer paymentbg"
      v-model="step"
      ref="stepper"
      active-color="purple-9"
      done-color="purple-9"
      color="purple-10"
      animated
    >
      <q-step
        :name="1"
        title="Select payment"
        icon="settings"
        :done="step > 1"
      >
      <div class="paymentSelector">
        <q-select
        filled
        transition-show="flip-up"
        transition-hide="flip-down"
        v-model="payment"
        :options="options"
        label="Payment for"
        color="purple-10"
        clearable
        options-selected-class="text-deep-orange"
      >
        <template v-slot:option="scope">
          <q-item
            v-bind="scope.itemProps"
            v-on="scope.itemEvents"
          >
            <q-item-section avatar>
              <q-icon :name="scope.opt.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label v-html="scope.opt.label" />
              <q-item-label caption>{{ scope.opt.description }}</q-item-label>
            </q-item-section>
          </q-item>
        </template>
      </q-select>
      <p></p>
      <p></p>
      <p></p>
      <div style="width:100%;">
        <div style="" class="row justify-center" v-if="payment.value=='rent'" >
            <q-card class="shadow-6" style="width:95%;height:20vh;">
                <q-card-section class="Title">
                    ₦200,000
                </q-card-section>
                <div class="column justify-center">
                <div class="col-6 row">
          <q-checkbox style="text-align:center;font-size:18px;" label="House rent for year 2020" class="col-12" keep-color v-model="agree" color="red"/>
                </div>
                </div>
            </q-card>
        </div>
     <div class="row justify-center" v-if="payment.value=='waste'">
        <q-card class="shadow-6" style="width:95%;height:20vh;">
       <q-card-section class="Title">
                    Payment for {{value > 1 ? value+' months' :'a month'}}
                </q-card-section>
                <q-card-section>
                          <div class="column justify-center">
                <div class="col-6 row">
<q-slider
  v-model="value"
      :min="1"
      :max="12"
      :step="1"
      label
      label-always
      color="red"
    />
    <q-badge color="purple-10">
      fee: {{'₦' + value * 500.00 }}
    </q-badge>
     </div>
                </div>
                </q-card-section>
        </q-card>
        </div>
         <div v-if="payment.value=='nepa'">
            <p>Am nepa</p>
        </div>
      </div>
      </div>
      </q-step>

      <q-step
        :name="2"
        title="Pay"
        caption="Optional"
        icon="create_new_folder"
        :done="step > 2"
      >
      <div class="mainpay">
         <q-card class="shadow-5 flat row paymentContainer">
                    <q-card-section class="flex flex-center col-md-6 col-12 cardside">
                            <q-card class="atmcard shadow-9">
                                <div style="height:100%" class="justify-around column q-gutter-y-xs q-pa-md">
                                    <div class="row col-2">
                                        <p>Debit card</p>
                                    </div>
                                    <div class="row col-1">
                                        <p>{{cvv}}</p>
                                    </div>
                                    <div class="col-4 justify-center">
                                    <q-input standout="text-white" borderless v-model="cardnumber" input-class="text-white" placeholder="Number on card" hide-bottom-space mask="#### - #### - #### - ####" maxlength="25" style="color:green;" disable/>
                                        <p></p>
                                    </div>
                                    <div class="row col-3">
                                     <p class="col-9"><q-input input-class="text-white" borderless v-model="cardHolder" placeholder="Name on card" hide-bottom-space mask="" maxlength="30" disable/></p>
                                     <div class="col-3">
                                         {{mm}}/{{yy}}
                                     </div>
                                    </div>
                                </div>
                            </q-card>
                    </q-card-section>
                    <q-card-section class="column col-md-6 col-12 flex flex-center cardDetail">
                            <div class="credential q-qutter-y-lg">
                            <div class="col-1 title row justify-start">
                                <p style="color:#0f6397" class="col-12">Payment Credentials</p>
                            </div>
                            <div class="col-3 row">
                                <q-input type="text" v-model="cardHolder" label="Name on Card" class="col-12"/>
                            </div>
                            <div class="col-3 row">
                                <q-input v-model="cardnumber" mask="#### - #### - #### - ####" maxlength="25" class="col" label="Card number"/>
                            </div>
                                        <div class="col-3 row justify-between q-pa-sm">
                                            <div class="col-8 row">
                                                <q-select standout v-model="mm" :options="month" label="Month" class="col-6"/>
                                                <q-select standout v-model="yy" :options="year" label="Year" class="col-6"/>
                                                                                            </div>
                                  <q-input v-model="cvv" type="password" mask="###" maxlength="3" label="CVV" class="col-3"/>
                                </div>
                                </div>
                    </q-card-section>
                </q-card>
      </div>
      </q-step>
            <template v-slot:navigation>
        <q-stepper-navigation >
          <q-btn v-if="agree" :disable="payment.value == ''" class="btnst" @click="pay" color="purple-9" :label="step === 2 ? 'Pay' : 'Continue'" :icon="step === 2 ? 'payment' : ''" />
          <q-btn v-if="step > 1" flat color="purple-9" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
        </q-stepper-navigation>
      </template>
    </q-stepper>
            </div>
    </div>
            </q-page>
</template>
<style scoped>
.mainpay{
 height:65vh;
 min-height:430px;
}
.mycolor{
color: #ffffff;
}
.paymentSelector{
height:65vh;
width:50vw;
}
.paymentContainer{
height:55vh;
width:50vw;
}
.cardside{

background-image: linear-gradient(135deg,  #0f6397,#4849ac);
}
.cardDetail{
   background-color:#eceaea;
   color:rgb(20, 16, 16);
   font-size: 26px
   }
.cardDetail .credential{
    width:90%;
    min-height:200px;
}
.atmcard{
    color:#f3f3f3;
    width: 90%;
    height:25vh;
    min-height:160px;
    border-radius: 15px;
    background-image: linear-gradient(135deg,  #eb5f39,#eea849);
    }
@media screen and (max-width: 450px) {
 .paymentbg{
  background-image: url('/statics/images/profilepath.svg'); background-repeat: no-repeat;
  background-size: 100% 100%;
}
.resiz{
    width: 100vw;
    margin: -10px;
}
.paymentContainer{
       width: 98vw;
       margin-left: -20px;
       /* margin-bottom: 10px; */
   }
   .paymentSelector{
       width: 98vw;
       margin-left: -20px;
}
.cardDetail{
    margin-top:10px;
    height: 43vh;
    min-height: 260px;
    overflow: hidden;
}
.stepContainer{
    width: 100%;
    height:100%;
    }
.btnst{
    margin-top: 1vh;
}
.cardside{
    margin-top: -20px
}
}
</style>
<script>
import { QSpinnerCube } from 'quasar'

// import Paystackb from 'paystack-js/dist/paystack'
import { Transaction, Card } from 'paystack-js'
// import { async } from 'q';
// Object.defineProperty(Vue.prototype, '$moment', { value: Paystack });
export default {
  data () {
    return {
      authPin: '',
      authToken: '',
      myTransaction: null,
      isToken: false,
      isPin: false,
      value: 1,
      agree: false,
      payment: '',
      step: 1,
      cardHolder: '',
      cvv: null,
      cardnumber: '',
      mm: 'MM',
      yy: 'YY',
      month: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', 11, 12],
      year: [19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
      options: [
        {
          label: 'House rent',
          value: 'rent',
          description: 'House yearly payment',
          icon: 'mail'
        },
        {
          label: 'Waste fee',
          value: 'waste',
          description: 'Waste dispose payment',
          icon: 'bluetooth'
        },
        {
          label: 'Electricity fee',
          value: 'nepa',
          description: 'Nepa fee',
          icon: 'map'
        }
      ]
    }
  },
  methods: {
    loadIdicator (status) {
      /* This is for Codepen (using UMD) to work */
      const spinner = typeof QSpinnerCube !== 'undefined'
        ? QSpinnerCube // Non-UMD, imported above
        : Quasar.components.QSpinnerCube // eslint-disable-line
        /* End of Codepen workaround */
      if (status === 'show') {
        this.$q.loading.show({
          spinner,
          spinnerColor: 'purple-10',
          spinnerSize: 120,
          backgroundColor: 'white',
          message: 'Transation is in progress. Hang on...',
          messageColor: 'purple-10'
        })
      }
      if (status === 'hide') {
        this.$q.loading.hide()
      }
    },
    pay () {
      if (this.step === 2) {
        this.loadIdicator('show')
        this.wawu()
      }
      this.$refs.stepper.next()
    },

    beforeDestroy () {
      if (this.timer !== void 0) {
        clearTimeout(this.timer)
        this.$q.loading.hide()
      }
    },
    async wawu () {
      const requestData = {
        email: 'yellocomehere@email.com',
        amount: 10000, // amount in kobo
        key: 'pk_test_639f91a39522fd2e4caa1409bf4f2708cb347da8'
      }
      const transaction = await Transaction.request(requestData)
      this.myTransaction = transaction
      this.proceedPayment()
    },
    async proceedPayment (auth) {
      console.log(this.cardnumber)
      const transaction = this.myTransaction
      // Request a new transaction
      // const transaction = await Transaction.request(requestData)
      // Create a payment method instance that will be used e.g card
      var card = new Card({
        number: '5060666666666666666',
        cvv: '123',
        month: '01',
        year: '20'
        // pin: '1234'
      })
      if (auth) {
        this.loadIdicator('show')
        console.log('am here')
        if (this.authPin) {
          card.pin = this.authPin.toString()
        }
        if (this.authToken) {
          await transaction.authenticateCard(this.authToken)
        }
      }
      console.log(transaction)
      // Payment method instances provide validation functions that
      // you can use to check for validaty before setting payment method
      // transaction.setPaymentMethod('card', card)
      console.log(Card.validate(card).result)
      console.log(Card.getType(card.number))
      // Transaction.setCard(card)
      if (Card.validate(card).isValid) {
        try {
          // transaction.setPaymentMethod('card', card)
          await transaction.setCard(card)
          console.log('cardset')
        } catch (e) {
          // console.log(e)
        }
      }
      // Charge the payment method
      try {
        // transaction.setCard('card', card)
        console.log(card)
        const transResponse = await transaction.chargeCard()
        console.log(transResponse)
        if (transResponse.status === 'auth') {
          if (transResponse.data.auth === 'pin') {
            console.log('am pin')
            this.loadIdicator('hide')
            this.isPin = true
          }
          if (transResponse.data.auth === 'otp') {
            console.log('am otp')
            this.loadIdicator('hide')
            this.isToken = true
          }
        }
        if (transResponse.status === 'success') {
          this.$q.notify({
            color: 'deep-purple-8',
            message: 'transation completed',
            timeout: 2000,
            textColor: 'white',
            position: 'top',
            icon: 'mdi-check'
          })
          this.loadIdicator('hide')
        }
        if (transResponse.status === 'failed') {
          if (transResponse.message === 'Incorrect PIN') {
            this.$q.notify({
              color: 'deep-purple-8',
              message: 'transation failed, ' + transResponse.message,
              timeout: 4000,
              textColor: 'white',
              position: 'top',
              icon: 'fa fa-exclamation-circle'
            })
            this.loadIdicator('hide')
          }
        }
      // // Handle the charge response
      } catch (e) {
        console.log(e)
      }
      // if (k.status === 'success') {
      //   alert('Payment completed!')
      // }
    }
  }
//   created: function () {
//     this.cordova.on('deviceready', () => {
//       window.addEventListener('focusin', (e) => {
//         if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
//           var input = e.target
//           window.addEventListener('native.showkeyboard', (e) => {
//             input.scrollIntoView(false)
//           }, {once: true})
//         }
//       })
//     }
//   },
}
</script>
