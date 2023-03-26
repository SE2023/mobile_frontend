<template>
	<view class="order-item" v-for="(item, index) in content" :key="item">
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
		<button class="cancelBtn" v-if="item.status!='cancelled'">
			Cancel
		</button>
	</view>
</template>

<script setup>
	const props = defineProps(['content'])
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