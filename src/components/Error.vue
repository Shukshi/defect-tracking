<template>
	<div class="container">
		<div v-if="!isEditing">
			<input type="text" v-model="current_error" placeholder="Add error.." class="add">
			<button  @click="addError()" class="submitButton"> Submit </button>
		</div>

		<div v-else>
			<input type="text" v-model="current_error" class="add">
			<button @click="updateError()" class="submitButton"> Update </button>
		</div>
		<div v-for="(error, index) in filteredErrors" :key="error" class="element">
		    <SingleError :error="error"  /> 
		    <button @click="editError(index, error)" class="edit"> Edit </button>   
			<button @click="deleteError(index)" class="delete">Del</button> 
		</div>
		<input type="text" v-model="search" placeholder="Search Errors" class="search">
		
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
	padding: 20px;
	border-radius: 10px;
	height: auto;
}
.edit{
	position: relative;
	text-align: center;
	float: right;
	width: 10%;
	height: 20px;
	margin: 0 5px 0 5px;
	bottom: 2px;
	background-color: #4DC1E5;
	color: white;
	border: none;
	border-radius: 10px;
	cursor: pointer;
	clear: top;
}
.delete{
	position: relative;
	text-align: center;
	float: right;
	width: 10%;
	height: 20px;
	margin: 0 5px 0 5px;
	bottom: 2px;
	background-color: #4DC1E5;
	color: white;
	border: none;
	border-radius: 10px;
	cursor: pointer;
	clear: top;
}
.add{
	text-align: center;
	width: 65%;
	height: 35px;
	border-radius: 20px;
	border-color: white;
}
.submitButton{
	position: relative;
	right: 0px;
	width: 20%;
	height: 35px;
	background-color: #4DC1E5;
	color: white;
	border: none;
	border-radius: 20px;
	cursor: pointer;
	margin: 20px 20px 0 0 ;
}
.element{
    margin: 40px 0 20px 0;
    height: 35px;
	padding: 6px 6px 0 6px;
	background: #eee;
	border-radius: 20px;
	font-size: 12px;
	letter-spacing: 1px;
	font-weight: bold;
	color: #777;
	top: 300px;
	text-align: center;
	overflow-y: auto;
}
.element1{
   	color: #6E7B7F;
   	font-size: 12px;
}
.element2{
   	color: #6E7B7F;
   	text-shadow: 0.5px 0.5px #067192;
   	font-size: 12px;
}
.element3{
   	color: #6E7B7F;
   	text-decoration: line-through;
   	font-size: 12px;
}
.search{
	text-align: center;
	width: 100%;
	height: 35px;
	border-radius: 20px;
	border-color: white;
	margin: 20px 0 20px 0;
}
</style>