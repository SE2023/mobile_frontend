<template>
	<view>
	    <picker class="start" mode="selector" :range="timeList" @change="picker1" :value="index">
	       <view>{{timeList[index]}}</view>
	    </picker>
	</view>
</template>
<script>
	
export default {
	name:"TimePicker",
	props:{
		timeList:[],
	},
	data() {
		return {
			// timeList:['11：00-12：00','12：00-13：00','13：00-14：00'],
			index:0
		};
	},
	
	methods: {
		picker1(e){
		    this.index = e.detail.value;
			this.$emit('time',this.timeList[this.index]);
		    e.detail = this.timeList[this.index]
			
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


