<template>
	<view class="order-item" v-for="(item, index) in content" :key="item.id">
		<view class="text">
			<view class="title">
				{{item.name}}
			</view>
			<view class="time">
				{{item.time}}
			</view>
			<view class="status">
				{{item.status}}
			</view>
		</view>
		<button class="cancelBtn" v-if="item.status==='unused'" @click="cancelOrder(item.id)">
			Cancel
		</button>
	</view>
</template>

<script setup>
	import {
		defineProps
	} from 'vue'
	import Config from '@/config.js';
	const props = defineProps(['content'])
	const urlPrefix = Config.urlPrefix

	function cancelOrder(id) {
		uni.request({
			method: 'DELETE',
			url: urlPrefix + '/order/' + id
		}).then(() => {
			setTimeout(() => {
				uni.showModal({
					title: 'Calcel Successfully!',
					confirmText: 'Confirm',
					showCancel: false
				})
				uni.reLaunch({
					url: '/pages/order/index'
				})
			}, 200)
		}).catch(() => {
			uni.showModal({
				title: 'Calcel Failed!',
				showCancel: false
			})
		})
	}
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