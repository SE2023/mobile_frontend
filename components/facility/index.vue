<template>
	<view class="facility" >
		<view class="title">
			{{item.name}}
			<uni-rate class="star" active-color="red" :size="18" :value="4.5" />
		</view>
		
		<view class="location">
			[Location: {{item.location}}]
			<view class="price">
				from ￥{{item.price}}/hour
			</view>	
		</view>
		
	</view>
</template>

<script setup>
	import {
		defineProps
	} from 'vue'
	const props = defineProps(['item'])
	console.log('item', props.item)
	let toTargetItem = function(item) {
		uni.navigateTo({
			url:item.url,
			id: item.id
		})
	}
</script>

<style>
	.facility {
		font-size: 14px;
		color: #666;
		line-height: 20px;
		padding-top: 5px;
		padding-bottom: 5px;
		margin-bottom: 2px;
		/* margin: 30rpx auto; */
		/* margin-bottom:50rpx; */
		/* border-bottom: 1rpx solid #F25E5E; */
	}
	
	.location {
		margin:10rpx 20rpx;
	}

	.title {
		font-weight: bold;
		color: #4c4950;
		margin-left:20rpx;
	}

	.star {
		float: right;
		margin-right: 10px;
	}

	.price {
		color:#F25E5E;
		float:right;
	}
</style>