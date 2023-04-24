<template>
	<view class="main">
		<view class="balance-btn">
			<button>Balance</button>
		</view>
		<view class="discount-btn">
			<button>Discount Coupon</button>
		</view>
	</view>
	<button type="warn" class="topup-btn" @click="isshow=!isshow">Top Up</button>
	<!-- Use the component -->
	<zwy-popup :ishide='isshow' width="600rpx" height="760rpx" radius="16rpx">
		<!-- basic layout -->
		<view class="content">
			<view class="title">Top Up Your Account</view>
			<view class="text">Please select the amount you want to recharge:</view>
			<view class="amount-box-2">
				<button class="amount-btn">¥ 10</button>
				<button class="amount-btn">¥ 15</button>
				<button class="amount-btn">¥ 20</button>
			</view>
			<view class="amount-box-1">
				<button class="amount-btn">¥ 30</button>
				<button class="amount-btn">¥ 50</button>
				<button class="amount-btn">¥ 90</button>
			</view>
			<view class="input">
				<input class="cus-input" type="digit" placeholder="Custom Input (Unit: ¥)" />
			</view>
			<view class="info">Hint: You can become a member of BodyBuddy by topping up ¥100 once a time!</view>
			<button class="btn" @click="isshow=false">Confirm</button>
		</view>
		<!-- close button -->
		<view class="close" @click="isshow=false">✕</view>
	</zwy-popup>
</template>

<script>
	export default {
		data() {
			return {
				isshow: false
			}
		}
	}
</script>


<style>
	.main button::after {
		border: none;
	}
	
	.main button {
		height: 200rpx;
		background-color: #F25E5E;
		color: #fff;
		border-radius: 0%;
		vertical-align: middle;
		line-height: 200rpx;
	}
	
	.balance-btn {
	  margin: 5rpx auto 10%;
	  float: left;
	  width: 50%;
	}
	
	.discount-btn {
	  margin: 5rpx auto 10%;
	  float: right;
	  width: 50%;
	}
	
	.topup-btn{
		width: 75%;
		display: flex;
		justify-content: center;
	}
	
	.content {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: center;
	}
	
	.title {
		font-weight: bold;
		font-size: 35rpx;
		margin: 0 0 30rpx 0;
	}
	
	.text {
		font-size: 32rpx;
		width: 450rpx;
	}
	
	.amount-box-1 {
		margin: 20rpx 0 20rpx 0;
		flex-flow: row;
		justify-content: flex-start;
		display: flex;
	}
	
	.amount-box-2 {
		margin: 20rpx 0 0 0;
		flex-flow: row;
		justify-content: flex-start;
		display: flex;
	}
	
	.amount-btn {
		font-size: 30rpx;
		font-weight: bold;
		width: 130rpx;
		margin: 0 15rpx;
	}
	
	.amount-btn:hover {
		outline-color: transparent;
		outline-style:solid;
		box-shadow: 0 0 0 2px #F25E5E;
	}
	
	.amount-btn:active {
		background-color: #F25E5E;
		color: #fff;
	}
	
	.input {
		height: 80rpx;
		width: 450rpx;
		background-color: #f7f7f7;
		display: flex;
		align-items: center;
	}
	
	.cus-input {
		padding-left: 20rpx;
	}
	
	.info {
		margin: 30rpx 0;
		font-size: 24rpx;
		color: #DC8311;
		text-align: center;
		background: #fae00030;
		border-radius: 16rpx;
		padding: 16rpx 20rpx;
	}
	
	.btn {
		width: 300rpx;
		height: 70rpx;
		font-size: 32rpx;
		color: #fff;
		font-weight: bold;
		line-height: 60rpx;
		text-align: center;
		border-radius: 30rpx;
		background: linear-gradient(-90deg, #C32C2C, #F25E5E);
	}
	
	.close {
		width: 60rpx;
		height: 60rpx;
		color: #FFFFFF;
		line-height: 60rpx;
		text-align: center;
		border-radius: 50%;
		border: 1px solid #FFFFFF;
		position: relative;
		bottom: -10%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>