<template>
	<div class="container">
		<div v-if="!isEditing">
			<input type="text" v-model="current_error" >
			<input type="submit" value="Submit" @click="addError()">
		</div>
		<div v-else>
			<input type="text" v-model="current_error" >
			<input type="update" value="Update"  @click="updateError()">
		</div>
		<div v-for="(error, index) in errors" :key="error"  class="element">
		    <div :class="getClass()">
		    	{{ error }}
		    </div> 
			<button @click="modify()"> Update </button> 
			<button @click="editError(index, error)"> Edit </button>   
			<button @click="deleteError(index)">Delete</button> 
		</div>
    </div>
</template>

<script>
export default {

  data () {
    return {
    	errors: [],
    	current_error: '',
    	step: 0, 
    	isEditing: false,
    	selectedIndex: null
    }
  },
  methods: {
  	addError () {
  		if (this.current_error){
  			if(!this.errors.includes(this.current_error)){
  				this.errors.push(this.current_error)
  			}
  			this.current_error = ''
  		}
  	},
    modify () {
    	this.step = this.step + 1
    	if(this.step > 3){
    		this.step = 1
    	}
    },
  	getClass () {
  		console.log(this.step)
  		if(this.step === 1){
  			return 'element1'
  		}
  		if(this.step == 2){
  			return 'element2'
  		}
  		else return 'element3'
  	},
    editError (index, error) {
    	this.current_error = error
    	this.selectedIndex = index
    	this.isEditing = true
    },
    deleteError (index) {
    	this.errors.splice(index, 1)
    },
    updateError () {
    	this.errors.splice(this.selectedIndex, 1, this.current_error)
    	this.isEditing = false
    	this.current_error = ''
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