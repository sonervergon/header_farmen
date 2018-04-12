<template>
  <div class="hello">
    <h1>FARMEN</h1>
        <div class="ask">
            <h2>{{text}}</h2>
        </div>
        <div class="note">
            <h2>Ask your question: <br> <a>bit.ly/farmenkth-event</a></h2>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      text: ''
    }
  },
  created () {
    firebase.database().ref('text').on('value', (snapshot) => {
      this.text = snapshot.val()
    })
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

@font-face {
    font-family: BNb;
    src: url('BebasNeueBook.otf');
}
@font-face {
    font-family: BN;
    src: url('BebasNeueRegular.otf');
}
@font-face {
    font-family: Volvo;
    src: url('VolvoBroad.otf');
}
@font-face {
    font-family: OS;
    src: url('OstrichSansRounded-Medium.otf');
}
@font-face {
    font-family: OSh;
    src: url('OstrichSans-Heavy.otf');
}

.note {
    text-align: center;
    position: absolute;
    top: 88%;
    left: 50%;
    transform: translate(-50%,-50%);
}

h1 {

    font-family: OS;
    color: #fff;
    font-size: 1000%;
    position: absolute;
    transform: translate(-50%, 50%);
    left: 50%;
    border-bottom: 6px transparent #fff;
    line-height: 90%;
    border-radius: 5px;
    color: #13add0;
    border-color: #13add0;
    letter-spacing: 3px;
}

h2 {
    font-family: BNb;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 2px;
}

a {
    color: #13add0;
    letter-spacing: 3px;
    font-family: Lato;
    text-transform: lowercase;
}

.ask {
    position: absolute;
    left: 50%;
    top: 55%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size:200%;
    letter-spacing: 3px;
    width: 87%;
    text-align: center;
    border-radius: 9px;
    border: 4px #fff solid;
    padding: 0;
}

.hello {
    background-size: 10%;
    height: 100vh;
    background-color: #2d2d2c;
}
</style>
