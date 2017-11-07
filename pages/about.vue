<template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        nuxt-starter
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <h2 class="red">Hello {{ name }}! - {{ test }}</h2>
      <nuxt-link to="/">index</nuxt-link>
      <br /><br /><a class="button--green" @click="$store.commit('increment')">{{ $store.state.counter }}</a>
      <br /><br /><a class="button--green" @click="inc">{{ $store.state.counter }}</a>
      <br /><br /><a class="button--green" @click="add">{{ $store.state.counter }}</a>
      <br /><br /><a class="button--green" @click="increment">{{ counter }}</a>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'
import Logo from '~/components/Logo.vue'

export default {
  async asyncData (context) {
    // called every time before loading the component
    // return { name: 'World' }
    // return axios.get('https://api.myjson.com/bins/x0qyn').then(res => res.data)
    const res = await axios.get('https://api.myjson.com/bins/x0qyn')
    return res.data
  },
  data () {
    return {
      name: 'world',
      test: 'i am demo'
    }
  },
  head () {
    return {
      title: this.name,
      meta: [
        { hid: 'description', name: 'description', content: 'My custom description' }
      ]
    }
  },
  methods: {
    ...mapMutations({
      add: 'increment'
    }),
    ...mapMutations([
      'increment'
    ]),
    inc () {
      this.$store.commit('increment')
    }
  },
  computed: mapState([
    'counter'
  ]),
  components: {
    Logo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.red {
  color: red;
}
</style>
