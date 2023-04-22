<template>
	<uni-card class="book-card">
		<view style="font-size: 35rpx;color:#4c4950;font-weight:bold;">{{props.activity.name}}</view>
		<view style="color:dimgrey;font: size 28rpx;">Price: {{props.activity.price}}</view>
		<view style="color:dimgrey;font: size 28rpx;">Capacity: {{props.activity.capacity}}</view>
		<view style="color:dimgrey;font: size 28rpx;">Status: {{props.activity.status}}</view>
		<view style="color:dimgrey;font: size 28rpx;">Note: {{props.activity.note}}</view>
		<view style="color:dimgrey;font: size 28rpx;">User Amount: {{props.activity.userAmount}}</view>
		<button id="order_btn" type="warn" @click="toBookPage(props.activity)">
			Book Now
		</button>
	</uni-card>
</template>

<script setup>
	import config from '@/config.js'
	import {
		defineProps, onMounted, ref
	} from 'vue'
	
	const props = defineProps(['activity'])
	console.log("props.activity is"+props.activity)
	let toBookPage = function(item) {
		uni.navigateTo({
			url:"/pages/facilities/choosetime/index"+"?id="+item.id,
		})
	}
	
	const activityToShow = ref({
		id: 0
	})
	
	const setActivity = (param) => {
		console.log("asdfsfd: ", param)
		// activityToShow.value.id = param.id
	}
	
	// const activities = []
	// console.log(props.activity)
	// for (let i = 0; i < props.activity.length; i++) {
	// 	activities.push({
	// 		id: props.activity[i].id,
	// 		manager_id: props.activity[i].manager_id,
	// 		manager_tel: props.activity[i].manager_tel,
	// 		name: props.activity[i].name,
	// 		sportsCentreId: props.activity[i].sportsCentreId,
	// 		status: props.activity[i].status,
	// 		type: props.activity[i].type,
	// 	})
	// }
	
</script>

<style lang="scss" scoped>
	.book-card {
		background-color: white;
	}

	.card {
		width: 80%;
		z-index: 1;
		border-radius: 50rpx;
	}

	// 订单操作
	.order-navbar {
		display: flex;
		width: 100%;
		border-radius: 5rpx;
		background: #fff;

		&-item {
			width: 33%;
			margin: auto 10rpx;

			.img {
				text-align: center;
			}

			.icons-pay {
				display: inline-block;
				margin: 0 auto;
				width: 70rpx;
				height: 70rpx;

			}

			.item-name {
				width: 100%;
				font-size: 20rpx;
				color: #545454;
				text-align: center;

			}

		}
	}
</style>