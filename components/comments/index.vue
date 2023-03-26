<template>
	
	<view v-for="(item, index) in UserList" :key="index">
		<view class="comment">
			<view class="user-info">
				<view class="user-avatar">
					<avatar-image :url="item.avatar_url" :width="100" />
				</view>
				<view class="user-text">
					<view class="user-name">
						{{item.user}}
					</view>
					<view class="comment-date">
						{{item.date}}
					</view>
				</view>	
				<uni-rate class="star" active-color="red" v-model="rateValue" />
			</view>

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
		border-top: 1px solid #d1d1d1;
		margin-top:10rpx;
	}
	.user-text{
		margin-top:20rpx;
		margin-left:10rpx;
	}
	.comment-date{
		color:gray;

	}
	.user-name{
		font-size:30rpx;
		font-weight: bold;
	}
	.user-avatar{
		margin-top:5rpx;
		border: 1px solid #fff;
		border-radius: 50%;
		background-color: #fff;
	}
	.star{
		margin-top:20rpx;
		margin-left:150rpx;
		/* float: right; */
	}
	.user-info {
	  display: flex;
	  height: 100rpx;
	  z-index: 1;
	  position: relative;
	  top:-30%;
	  left:5%;
	}
	.comment-item{
		font-size:30rpx;
		margin-left:50rpx;
		margin-top:10rpx;
		
	}
</style>