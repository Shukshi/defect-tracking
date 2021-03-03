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
		<input type="text" v-model="search" placeholder="Search Errors">
		<div v-for="(error, index) in filteredErrors" :key="error" class="element">
		    <SingleError :error="error" :step="step" />
			<button @click="editError(index, error)"> Edit </button>   
			<button @click="deleteError(index)">Delete</button> 
		</div>
		
    </div>
</template>

<script>
import SingleError from "./SingleError.vue";
export default {
  components: {
  	SingleError
  },
  data () {
    return {
    	errors: [],
    	current_error: '',
    	isEditing: false,
    	selectedIndex: null,
    	search: ''
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
  },
  computed: {
  	filteredErrors: function() {
  		return this.errors.filter((error) => {
  			return error.toLowerCase().match(this.search.toLowerCase())
  		})
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