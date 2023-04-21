<template>
	<uni-card class="book-card">
		<view style="font-size: 150%;color:black;font-weight:bold;">{{props.activity.name}}</view>
		<view style="color:dimgrey;font-size:110%">{{props.activity.price}}</view>
		<button id="order_btn" type="warn" @click="toBookPage(props.activity)">
			Book Now
		</button>
	</uni-card>
</template>

<script setup>
	import config from '@/config.js'
	import {
		defineProps
	} from 'vue'
	const props = defineProps(['activity'])
	console.log("props.activity is"+props.activity)
	let toBookPage = function(item) {
		uni.navigateTo({
			url:"/pages/facilities/choosetime/index"+"?id="+item.id,
		})
	}
</script>

<style lang="scss" scoped>
	.book-card {
		background-color: lightpink;
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
				font-size: 28rpx;
				color: #545454;
				text-align: center;

			}

		}
	}
</style>