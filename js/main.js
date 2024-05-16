const { createApp } = Vue

createApp({
  data() {
    return {

    }
  },
  methods: {
    axios() {
      axios.get(/*INSERIRE INDIRIZZO API*/).then((/*ARGOMENTO FUNZIONE*/) => {
      })
    }
  },
  mounted() {
    this.axios()
  }
}).mount('#app')