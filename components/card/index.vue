<template>
	<view >
		<uni-card class="card " :is-shadow="true" :extra="extra" :title="name">
				<view class="order-navbar">
					<view class="order-navbar-item" v-for="(item, index) in DataList" :key="index" @click="toTargetItem(item)">
						<view class="img">
							<image class="icons-pay" :src="item.iconpath"></image>
						</view>
						
						<view class="item-name">{{ item.name }}</view>
					</view>		
				</view>
		</uni-card>
	</view>
</template>

<script>
	export default{
		name: 'Card',
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