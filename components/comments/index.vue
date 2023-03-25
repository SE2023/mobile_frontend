<template>
	
	<view v-for="(item, index) in UserList" :key="index">
		<view class="comment">
			<view class="user-info">
				<view class="user-avatar">
					<avatar-image :url="item.avatar_url" :width="100" />
				</view>
				<view class="user-name">
					{{item.user}}
				</view>
				<view class="comment-date">{{item.date}}</view>
			</view>
			<uni-rate active-color="red" v-model="rateValue" />
			
			<view class="comment-item">{{item.comment}}</view>
		</view>
		
	</view>
	
</template>

<script>
	import AvatarImage from '@/components/avatar-image'
	export default{
		name: 'Comment',
		components: {
			AvatarImage,
		},
		props:{
			UserList:Array,
		},
		
		methods: {
			// 跳转到详情页
			toTargetItem(item) {
				uni.navigateTo({
					url:item.url
				})
			},
		}
	}
</script>

<style>
	.comment{
		border: 1px solid black;
	}
	.user-avatar{
		border: 1px solid #fff;
		border-radius: 50%;
		background-color: #fff;
	}
	.user-info {
	  display: flex;
	  height: 100rpx;
	  z-index: 1;
	  position: relative;
	  top:-30%;
	  left:5%;
	}
</style>