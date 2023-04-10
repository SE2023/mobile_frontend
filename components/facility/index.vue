<template>
	<view class="facility" @click="toTargetItem(item)">
		<view class="title">
			{{item.name}}
			<uni-rate class="star" active-color="red" />
		</view>
		
		<view class="location">
			[Location:{{item.location}}]
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
			url:item.url
		})
	}
</script>

<style>
.facility{
	font-size: 14px;
	color: #666;
	line-height: 20px;
	margin: 30rpx auto;
	/* margin-bottom:50rpx; */
	border-bottom: 1rpx solid #F25E5E;
}
.location{
	margin:10rpx 20rpx;
}
.title{
	font-weight: bold;
	margin-left:20rpx;
}
.star {
		margin-top: -50rpx;
		margin-left: 295rpx;
		/* float: right; */
	}
.price{
	color:#F25E5E;
	float:right;
}
</style>
