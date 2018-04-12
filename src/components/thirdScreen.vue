<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <b-field label="Fråga">
            <b-input v-model="question" placeholder="Ställ frågan inför publiken" rounded></b-input>
        </b-field>
        <a class="button is-dark is-rounded" @click="post('Que')">Updatera</a>
        </div>
      </div>
    </section>
    <section class="hero is-warning">
      <div class="hero-body">
        <div class="container">
          <b-field label="Meddelande">
            <b-input v-model="message" placeholder="Skicka meddelande till moderatorer" rounded></b-input>
          </b-field>
          <a class="button is-dark is-rounded" @click="post('mod')">Updatera</a>
        </div>
      </div>
    </section>
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <b-field label="Osynlig fråga">
            <b-input v-model="questionTwo" placeholder="Skicka fråga till moderatorerna endast" rounded></b-input>
          </b-field>
          <a class="button is-dark is-rounded" @click="post('invQue')">Updatera</a>
        </div>
      </div>
    </section>
    <nav class="level">
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Klockan är</p>
          <p class="title">{{timeHours}}:{{timeMinutes}}</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from 'firebase'
import moment from 'moment'

export default {
  data () {
    return {
      message: '',
      question: '',
      questionTwo: '',
      minutes: '00',
      seconds: '00'
    }
  },
  methods: {
    post (arg) {
      if (arg === 'Que') {
        firebase.database().ref('text').set(this.question)
      } else if (arg === 'invQue') {
        firebase.database().ref('questionTwo').set(this.questionTwo)
      } else {
        firebase.database().ref('message').set(this.message)
      }
    }
  },
  created () {
    firebase.database().ref('message').on('value', (snapshot) => {
      this.message = snapshot.val()
    })
    firebase.database().ref('text').on('value', (snapshot) => {
      this.question = snapshot.val()
    })
    firebase.database().ref('questionTwo').on('value', (snapshot) => {
      this.questionTwo = snapshot.val()
    })
    moment.locale()
    this.timeMinutes = new Date().getMinutes()
    this.timeHours = new Date().getHours()
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
section {
  margin-top: 0%;
}

.subtitle {
  font-size: 200%;
}
.title {
  font-size: 130%;
}
nav {
  margin-top: 50px;
}

</style>
