<template>
	<view>
	    <picker class="start" mode="selector" :range="array" @change="picker1" :value="index">
	        <view>{{array[index]}}</view>
	    </picker>
	</view>
</template>
<script>
	
export default {
	name:"TimePicker",
	data() {
		return {
			array:['11：00-12：00','12：00-13：00','13：00-14：00'],
			index:0
		};
	},
	methods: {
		picker1(e){
		    // console.log(this.array[this.index])
			this.$emit('time',this.array[this.index]);
		    //e.detail = this.array[this.index]
			
		}
	}
};
</script>

<style>
.start{
	height:50rpx;
	weight:80%;
	border: 1px solid  gainsboro;
	color:gray;
	text-align: center;
	border-radius:15rpx;
	color: gray;
	text-align: center;
	}
</style>

