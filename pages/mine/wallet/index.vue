<template>
	<view class="main">
		<view class="balance-btn">
			<button>Balance</button>
		</view>
		<view class="discount-btn">
			<button>Discount Coupon</button>
		</view>
	</view>
	<button type="warn" class="topup-btn">Top Up</button>
</template>

<script>
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
</style>