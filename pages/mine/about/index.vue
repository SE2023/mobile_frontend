<template>
	<view class="main">
		<view class="info">
			<!-- logo -->
			<view class="logo">
				<image src="../../../static/logo.jpg" mode="aspectFill" />
			</view>
		</view>
	</view>
	<view class="name">BodyBuddy</view>
	<view class="slogan">EXERCISE MAKE YOU BETTER</view>
	<view class="content">
		<uni-row class="row">
			<uni-col class="title">What's BodyBuddy?</uni-col>
		</uni-row>
		<uni-row class="row">
			<uni-col class="detail">BodyBuddy is designed to help users conveniently book time and facilities to use gymnasiums. This system can be used in various types of facilities, such as gyms, courts, swimming pools, etc.
			The system provides users with an easy-to-use interface through which they can view available facilities and times, and make reservations. 
			Users can choose different facilities and time slots to make reservations, and the system will automatically check the availability and display 
			the order on the user's personal interface.</uni-col>
		</uni-row>
		<uni-row class="row">
			<uni-col class="title">Version Update</uni-col>
		</uni-row>
		<uni-row class="row">
			<uni-col class="detail">v0.1.0 - update in 02/21/2023</uni-col>
			<uni-col class="detail">v1.0.0 - update in 03/12/2023</uni-col>
			<uni-col class="detail">v1.1.0 - update in 03/25/2023</uni-col>
			<uni-col class="detail">v2.0.0 - update in 03/28/2023</uni-col>
			<uni-col class="detail">v2.1.0 - update in 04/03/2023</uni-col>
		</uni-row>
	</view>
	<view class="bottom">
		Copyright ©️ 2022-2023 BodyBuddy. All Rights Reserved.
	</view>
</template>

<script>

</script>

<style>
	.logo {
		margin-top: 10%;
		border: 1px solid #fff;
		background-color: #fff;
		display: flex;
		justify-content: center;
	}
	.name {
		font-size: 20px;
		font-weight: bold;
		color: #ba4039;
		display: flex;
		justify-content: center;
	}
	.slogan {
		font-size: 16px;
		color: #ba4039;
		display: flex;
		justify-content: center;
	}
	.content {
		margin-left: 15%;
		margin-right: 15%;
	}
	.main {
		display: flex;
		align-items: center;
	}
	.info {
		margin: 20rpx auto ;
	}
	.title {
		font-size: 18px;
		margin-top: 30rpx;
		margin-bottom: 10rpx;
	}
	.detail {
		color: gray;
		font-size: 14px;
		margin: 0;
	}
	.bottom {
		font-size: 8px;
		color: gray;
		position: absolute;
		display: flex;
		justify-content: center;
		bottom: 0;
		width: 100%;
		margin-bottom: 10px;
	}
</style>