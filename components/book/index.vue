<template>
	<view v-for="activity in ActivityList" :key="activity">
		<uni-card class="book-card">
			<view style="font-size: 150%;color:black;font-weight:bold;">{{activity.name}}</view>
			<view style="color:dimgrey;font-size:110%">{{activity.price}}</view>
			<!-- <view style="display: flex;padding-bottom:0.2rem;color:azure;font-weight: 800;font-size: 110%;">
				<view style="flex: 1 1 500px">{{activity.date}}</view>
				<view style="flex: 1 1 500px;text-align:right">{{activity.starttime}} - {{activity.endtime}}</view>
			</view> -->
			<!-- 		<navigator url="../find/index">
				<button type="warn">Book Now</button>
			</navigator> -->
			<button id="order_btn" type="warn" @click="toTargetItem(activity)">
				Book Now
			</button>
		</uni-card>
	</view>
</template>

<script setup>
	import {
		defineProps
	} from 'vue'
	import config from '@/config.js'

	const urlPrefix = config.urlPrefix
	const props = defineProps(['ActivityList'])

	function toTargetItem(item) {
				uni.navigateTo({
					url:"/pages/facilities/choosetime/index"
					// url:item.url+"?id="+item.id,
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