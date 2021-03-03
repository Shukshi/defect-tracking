<template>
	<div :class="getClass()"> 
		{{ error }} 
		<button @click="modify()"> Update </button> 
	</div>
</template>

<script>
export default {
	props: ['error'],
  data () {
    return {
    	step: 0
    }
  },
  methods: {
  	getClass () {
  		if(this.step === 1){
  			return 'element1'
  		}
  		if(this.step == 2){
  			return 'element2'
  		}
  		else return 'element3'
  	},
    modify () {
    	this.step = this.step + 1
    	if(this.step > 3){
    		this.step = 1
    	}
    }
  }
}
</script>

<style lang="css" scoped>
</style>