<template>
	<div class="container">
	<input type="text" v-model="current_error" @keyup.alt="addError">
	<div v-for="error in errors" :key="error" class="element" @click="modify()">  {{error}} </div>
    </div>
</template>

<script>
export default {

  data () {
    return {
    	errors: [],
    	current_error: '',
    	step: 0 
    }
  },
  methods: {
  	addError (e) {
  		if (e.key === ',' && this.current_error){
  			if(!this.errors.includes(this.current_error)){
  				this.errors.push(this.current_error)
  			}
  			this.current_error = ''
  		}
  	}
  },
  computed: {
  		name () {
  			if (this.step === 1){
  				return 'element1'
  			}
  			if (this.step === 2){
  				return 'element2'
  			}
  			return 'element3'


  		}
  	}
}
</script>

<style lang="css" scoped>
.container{
	text-align: center;
	max-width: 420px;
	margin: 30px auto;
	background: white;
	padding: 40px;
	border-radius: 10px;
}
   input{
   	display: block;
	padding: 10px 6px;
	width: 50%;
	box-sizing: border-box;
	border: none;
	border-bottom: 1px solid #ddd;
	color: #555;
	margin-right: auto;
    margin-left: auto;
   }
   .element{
	 margin: 20px 10px 0 0;
	 padding: 6px 12px;
	 background: #eee;
	 border-radius: 20px;
	 font-size: 12px;
	 letter-spacing: 1px;
	 font-weight: bold;
	 color: #777;
	 cursor: pointer;

   }
   .element1{
   	color: pink;
   }
   .element2{
   	color: green;
   }
   .element3{
   	color: red;
   }
</style>