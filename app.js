const app = Vue.createApp({
    data() {
      return {
        output: '',
        output2: '',
        confirmedOutput: ''
      };
    },
    methods: {
        confirmInput() {
            this.confirmedOutput = this.output2;
        },
        showAlert() {
            alert("Show Alert!")
        },
        outPut(event) {
            this.output = event.target.value;
        },
        outPut2(event) {
            this.output2 = event.target.value;
        },
    }
  });
  
  app.mount('#assignment');