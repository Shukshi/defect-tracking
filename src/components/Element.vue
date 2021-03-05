<template>
	<div class="element"> 
		<div class ="title"> {{ current_error }} </div>
		
		<img class="buttons" src="./chevron-down.svg">
	</div>
</template>

<script>
export default {
	props: ['current_error'],
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.element{
	display: flex;
	flex-wrap: nowrap;
	background-color: #E9E9E9;
	height: 25px;
	padding: 15px;
	width: 100%;
}
.title{
	flex-grow: 5;
	padding: 10px;
	text-align: left;
}
.buttons{
	padding: 10px;
	float: right;
	height: 10px;
}
</style>