const { createApp } = Vue;

createApp({
  data() {
    return {
      images: [],
      message:'',
      input:'',
      showSuccessAlert: false,
    };
  },
  methods: {
     async onEnter() {
      const response = await axios.get(
      "https://api.unsplash.com/search/photos?page=1&query="+this.input+"&orientation=landscape&collections=1451037&content_filter=high&aspect_ratio=1.5:1",{
        headers: { Authorization: "Client-ID Yme6ZcumIXpWryQ0DPc249CE0ua2Mxh66Y-4W2gPAAc", },
      }).then(response=>{
        this.images=response.data.results
      })
      // alert(this.input)
      
      
      
     
    },    

  
  
  },
  mounted() {
    
  },
  beforeUnmount() {
    
  },

}).mount("#app");
