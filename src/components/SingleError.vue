<template>
	<div :class="getClass()" class="cont"> 
		{{ error }} 
		<div>
			<button @click="modify()" v-if="one" class="mark"> Open </button>
			<button @click="modify()" v-if="two" class="mark"> In-progress </button>
			<button @click="modify()" v-if="three" class="mark"> Completed </button>
		</div>
		
	</div>
</template>

<script>
export default {
	props: ['error'],
  data () {
    return {
    	step: 1,
    	one: true,
    	two: false,
    	three: false
    }
  },
  methods: {
  	getClass () {
  		if(this.step === 1){
  			this.one = true
  			this.three = false
  			return 'element1'
  		}
  		if(this.step == 2){
  			this.one=false
  			this.two=true
  			return 'element2'

  		}
  		else {
  			this.three = true
  			this.two = false
  			return 'element3'
  		}
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
.cont{
	position: relative;
	text-align: center;
}
.mark{
	position: relative;
	text-align: center;
	float: right;
	width: auto;
	height: 20px;
	bottom: 3px;
	margin: 2px 5px 0px 5px;
	border-bottom: 20px;
	background-color: #4DC1E5;
	color: white;
	border: none;
	border-radius: 10px;
	cursor: pointer;
	clear: top;
}
</style>
