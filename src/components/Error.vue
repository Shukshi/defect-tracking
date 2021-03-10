<template>
	<div class="container">
		<div class="input">
			<input type="text" v-model="current_error" placeholder="Add error.." class="add">
			<button @click="addError()" class="submitButton"> Submit </button>
		</div>
		<div class="input">
			<input type="text" v-model="search" placeholder="Search Errors" class="add">
		</div>
		<div v-for="(error, index) in filteredErrors" :key="error" >
			<div v-if="!edits[index]" class="element">
				<div  class = "text">
					{{ error }}
				</div>
				<div class="allbut">
					<StatusButton :error="error" />
		    		<img class="buttons" src="../assets/edit.svg" @click="editError(index, error)">  
					<img class="buttons" src="../assets/trash-2.svg" @click="deleteError(index)">
				</div> 
			</div>
			<div v-else class = "edit_element"> 
				<input v-model="edit_error" class="edited">
				<button class="update_buttons" @click= "updateError(index)">Update</button>
			</div>
		</div>
    </div>
</template>

<script>
import StatusButton from "./StatusButton.vue";
export default {
  components: {
  	StatusButton
  },
  data () {
    return {
    	errors: [],
    	edits: [],
    	current_error: '',
    	selectedIndex: null,
    	search: '',
    	edit_error: '',
    	isEditing: false
    }
  },
  methods: {
  	addError () {
  		if (this.current_error){
  			if(!this.errors.includes(this.current_error)){
  				this.errors.push(this.current_error)
  				this.edits.push(false)
  			}
  			this.current_error = ''
  		}
  	},
    editError (index, error) {
    	this.edit_error = error
    	this.selectedIndex = index
    	this.isEditing = true
    	this.edits[index] = true
    	console.log(this.isEditing)
    },
    deleteError (index) {
    	this.errors.splice(index, 1)
    },
    updateError (index) {
    	this.errors.splice(this.selectedIndex, 1, this.edit_error)
    	this.edits[index] = false
    	this.edit_error = ''

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
	max-width: 420px;
	margin: 40px auto;
	background: white;
	padding: 20px;
	border-radius: 10px;
	height: auto;
}
.input{
	margin: 0px;
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
	padding: 10px;
}
.add{
	margin: 0px;
	text-align: left;
	float: right;
	height: 35px;
	width: 100%;
	border-radius: 20px;
	border-color: white;
}
.submitButton{
	margin: 0px;
	position: relative;
	width: 20%;
	height: 35px;
	float: right;
	background-color: #4DC1E5;
	color: white;
	border: none;
	border-radius: 20px;
	cursor: pointer;
}
.element{
    display: flex;
	flex-wrap: nowrap;
	background: #eee;
	width: auto;
	margin: 10px;
}

.text{
	text-align: left;
	padding: 5px;
	float: left;
	width: 100%;
	color: #6E7B7F;
}
.allbut{
	display: flex;
	flex-wrap: nowrap;
	position: relative;
	right: 0px;
}
.buttons{
	display: flex;
	flex-wrap: nowrap;
	float: right;
	padding: 10px;
	float: right;
	height: 15px;
	cursor: pointer;
}
.edit_element{
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
	background: #eee;
	width: auto;
	margin: 10px;
}
.edited{
	background: #eee;
	border-color: #eee;
	height: 30px;
	width: 100%;
	box-shadow: none;
	border:1px;
	solid: #eee;
	color: #6E7B7F;
}
.update_buttons{
	position: relative;
	text-align: center;
	width: auto;
	height: 20px;
	margin: 5px;
	background-color: #4DC1E5;
	color: white;
	border: none;
	border-radius: 10px;
	cursor: pointer;

}
</style>