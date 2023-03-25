<template>
	<view class="order-item">
		<view class="text">
			<view class="title">
				{{props.item.title}}
			</view>
			<view class="time">
				{{props.item.time}}
			</view>
			<view class="status">
				{{props.item.status}}
			</view>
		</view>
		<button class="cancelBtn">
			Cancle
		</button>
	</view>
</template>

<script lang='ts' setup>	
	import { defineProps } from 'vue'
	
	let props = defineProps(['item'])
	
	console.log('item in component', props.item)
</script>

<style>
	.order-item {
		margin-top: 5px;
		height: 90px;
		background-color: #fee5e6;
	}
	.text {
		float: left;
		margin-top: 12px;
		padding-left: 15px;
	}
	.title {
		font-size: 17px;
		font-weight: bold;
	}
	.time {
		font-size: 15px;
		color: #585858;
	}
	.status {
		font-size: 16px;
		color: #F25E5E;
	}
	.cancelBtn {
		color: #fff;
		float: right;
		font-size: 15px;
		font-weight: bold;
		margin-top: 24px;
		margin-right: 15px;
		background-color: #F25E5E;
	}
</style>