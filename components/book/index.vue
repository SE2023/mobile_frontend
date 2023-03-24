<template>
	<uni-card class="book-card">
		<view>1-hour session</view>
		<view>some description here</view>
		<view>$100</view>
		<navigator url="../find/index">
			<button type="warn">Book Now</button>
		</navigator>
	</uni-card>
</template>

<script>
	export default{
		name: 'Book',
		props:{
			DataList:Array,
			name:String,
			extra:String,
			
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

<style lang="scss" scoped>
	.card{
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
		.img{
			text-align: center;
		}
		.icons-pay{
			  display:inline-block;
			  margin:0 auto;
			  width:70rpx;
			  height: 70rpx;
			  
		}
	    .item-name {
		  width:100% ;
	      font-size: 28rpx;
	      color: #545454;
	      text-align: center;
	    
	    }
	
	  }
	}
</style>