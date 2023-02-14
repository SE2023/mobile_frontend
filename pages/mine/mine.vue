<template>
	<view class="container">
		<view class="main-header" :style="{ height: platform == 'H5' ? '260rpx' : '320rpx', paddingTop: platform == 'H5' ? '0' : '80rpx' }">
			<view class="bgc"></view>
			<!-- <image class="bg-image" src="/static/background/user-header2.png" mode="scaleToFill"></image> -->
			<!-- 用户信息 -->
			<view v-if="isLogin" class="user-info">
				<!-- 头像 -->
				<view class="user-avatar">
					<avatar-image :url="userInfo.avatar_url" :width="100" />
				</view>
				<!-- 信息 -->
				<view class="user-content">
					<view class="nick-name oneline-hide">{{ userInfo.nick_name }}</view>
					<view class="mobile">{{ userInfo.mobile }}</view>
				</view>    
			</view>
			<view v-else class="user-info" @click="handleLogin">
				<view class="user-avatar">
				      <avatar-image :width="100" />
				</view>
				<view class="user-content">
				      <view class="nick-name">未登录</view>
				      <view class="login-tips">点击登录账号</view>
				</view>
			</view>
		</view>	
		<!-- 订单操作 -->
			<uni-card :is-shadow="false" extra >
				<view>
					<text>我的订单</text>
					
				</view>
				<view class="order-navbar">
					
							<view class="order-navbar-item" v-for="(item, index) in orderNavbar" :key="index" @click="onTargetOrder(item)">
								<view class="item-icon">
									<text class="iconfont" :class="[`icon-${item.icon}`]"></text>
								</view>
								<view class="item-name">{{ item.name }}</view>
								<view class="item-badge" v-if="item.count && item.count > 0">
									<text v-if="item.count <= 99" class="text">{{ item.count }}</text>
									<text v-else class="text">99+</text>
								</view>
							</view>
				</view>
			</uni-card>
	
		
		<!-- 其他 -->
		<view>
			<uni-list  v-for="(item, index) in itemList" :key="index" @click="onTargetItem(item)">
				<uni-list-item :title="item.name" link to="/pages/vue/index/index" @click="onClick($event,1)" ></uni-list-item>
			
			</uni-list>
			
		</view>
	</view>
		
	
	
</template>

<script>
	import AvatarImage from '@/components/avatar-image'
	
	// 订单操作
	const orderNavbar = [
	  { id: 'all', name: '全部预约', icon: 'qpdingdan' },
	  { id: 'payment', name: '待支付', icon: 'daifukuan', count: 0 },
	  { id: 'delivery', name: '待使用', icon: 'daifahuo', count: 0 },
	  { id: 'received', name: '已完成', icon: 'daishouhuo', count: 0 },
	]
	
	const itemList = [
		{ id: 'all', name: '修改信息', icon: 'qpdingdan' },
		{ id: 'payment', name: '会员专享', icon: 'daifukuan', count: 0 },
		{ id: 'delivery', name: '我的收藏', icon: 'daifahuo', count: 0 },
		{ id: 'received', name: '设置', icon: 'daishouhuo', count: 0 },
	]
	
	export default {
		components: {
			AvatarImage
		},
		data() {
			return {
			text:'nihao',
			userInfo: {
				nick_name:'test',
				mobile:'12345'
			},
			orderNavbar,
			itemList
			}
		},
		methods: {
			// 获取当前用户信息
			getUserInfo() {
			  const app = this
			  return new Promise((resolve, reject) => {
			    !app.isLogin ? resolve(null) : UserApi.info({}, { load: app.isFirstload })
			      .then(result => {
			        app.userInfo = result.data.userInfo
			        resolve(app.userInfo)
			      })
			      .catch(err => {
			        if (err.result && err.result.status == 401) {
			          app.isLogin = false
			          resolve(null)
			        } else {
			          reject(err)
			        }
			      })
			  })
			},
			
			// 跳转到登录页
			handleLogin() {
				!this.isLogin && uni.navigateTo({
					url:'/pages/login/index'
				})
			},
			
			// 跳转到订单页
			onTargetOrder(item) {
				uni.navigateTo({
					url:'/pages/order/index'
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	
  // 页面头部
  .main-header {
    background-color: #fff;
    // background-image: url('/static/background/user-header.png');
    position: relative;
    width: 100%;
    height: 280rpx;
    background-size: 100% 100%;
    overflow: hidden;
    display: flex;
    align-items: center;
    
	.bgc{
		position: absolute;
		top:-40%;
		left:-10%;
		width:120%;
		height:480rpx ;
		background-color: #F25E5E;
		border-radius: 50%;
		z-index: 0;
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

      .user-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 30rpx;
        color: #c59a46;
		z-index: 1;

        .nick-name {
          font-size: 34rpx;
          font-weight: bold;
          max-width: 270rpx;
		  z-index: 1;
        }

        .mobile {
          margin-top: 15rpx;
          font-size: 28rpx;
		  z-index: 1;
        }

        .user-grade {
          align-self: baseline;
          display: flex;
          align-items: center;
          background: #3c3c3c;
          margin-top: 12rpx;
          border-radius: 10rpx;
          padding: 4rpx 12rpx;

          .user-grade_icon .image {
            display: block;
            width: 32rpx;
            height: 32rpx;
          }

          .user-grade_name {
            margin-left: 5rpx;
            font-size: 26rpx;
            color: #EEE0C3;
          }

        }

        .login-tips {
          margin-top: 12rpx;
          font-size: 30rpx;
        }

      }
    }
  }

  // 角标组件
  .item-badge {
    position: absolute;
    top: 0;
    right: 55rpx;
    background: #fa2209;
    color: #fff;
    border-radius: 100%;
    min-width: 38rpx;
    height: 38rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rpx;
    font-size: 24rpx;
  }

  // 我的钱包
  .my-asset {
    display: flex;
    background: #fff;
    padding: 40rpx 0;

    .asset-right {
      width: 200rpx;
      border-left: 1rpx solid #eee;
    }

    .asset-right-item {
      text-align: center;
      color: #545454;

      .item-icon {
        font-size: 44rpx;
      }

      .item-name {
        margin-top: 14rpx;
        font-size: 28rpx;
      }

    }

    .asset-left-item {
      max-width: 183rpx;
      text-align: center;
      color: #666;
      padding: 0 16rpx;

      .item-value {
        font-size: 34rpx;
        color: red;
      }

      .item-name {
        margin-top: 6rpx;
      }

      .item-name {
        margin-top: 14rpx;
        font-size: 28rpx;
      }
    }

  }

  // 订单操作
  .order-navbar {
    display: flex;
    margin: 20rpx auto 20rpx auto;
    padding: 20rpx 0;
    width: 94%;
    box-shadow: 0 1rpx 5rpx 0px rgba(0, 0, 0, 0.05);
    font-size: 30rpx;
    border-radius: 5rpx;
    background: #fff;

    &-item {
      position: relative;
      width: 25%;

      .item-icon {
        text-align: center;
        margin: 0 auto;
        padding: 10rpx 0;
        color: #545454;
        font-size: 44rpx;
      }

      .item-name {
        font-size: 28rpx;
        color: #545454;
        text-align: center;
        margin-right: 10rpx;
      }

    }
  }

  // 我的服务
  .my-service {
    margin: 22rpx auto 22rpx auto;
    padding: 22rpx 0;
    width: 94%;
    box-shadow: 0 1rpx 5rpx 0px rgba(0, 0, 0, 0.05);
    border-radius: 5rpx;
    background: #fff;

    .service-title {
      padding-left: 24rpx;
      margin-bottom: 20rpx;
      font-size: 30rpx;
    }

    .service-content {

      margin-bottom: -20rpx;

      .service-item {
        position: relative;
        width: 25%;
        float: left;
        margin-bottom: 30rpx;

        .item-icon {
          text-align: center;
          margin: 0 auto;
          padding: 14rpx 0;
          color: #ff3800;
          font-size: 44rpx;
        }

        .item-name {
          font-size: 28rpx;
          color: #545454;
          text-align: center;
          margin-right: 10rpx;
        }

      }
    }
  }

  // 退出登录
  .my-logout {
    display: flex;
    justify-content: center;
    margin-top: 50rpx;

    .logout-btn {
      width: 60%;
      margin: 0 auto;
      font-size: 28rpx;
      color: #616161;
      border-radius: 20rpx;
      border: 1px solid #dcdcdc;
      padding: 16rpx 0;
      text-align: center;
    }
  }
</style>
