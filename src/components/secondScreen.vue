<template>
  <div>
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Fråga:
          </h1>
          <h2 class="subtitle">
            {{question}}
          </h2>
        </div>
      </div>
    </section>
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Meddelande:
          </h1>
          <h2 class="subtitle">
            {{message}}
          </h2>
        </div>
      </div>
    </section>
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Osynlig fråga:
          </h1>
          <h2 class="subtitle">
            {{questionTwo}}
          </h2>
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
