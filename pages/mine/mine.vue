<template>
	<view class="container">
		<view class="main-header"
			:style="{ height: platform == 'H5' ? '260rpx' : '320rpx', paddingTop: platform == 'H5' ? '0' : '80rpx' }">
			<view class="bgc"></view>
			<!-- 用户信息 -->
			<view v-if="isLogin" class="user-info">
				<!-- 头像 -->
				<view class="user-avatar">
					<avatar-image :url="userInfo.avatar_url" :width="100" />
				</view>
				<!-- 信息 -->
				<view class="user-content" v-if="!isLogin">
					<view class="nick-name oneline-hide">Login</view>
					<view class="mobile">Click here to login</view>
				</view>
				<view class="user-content" v-if="isLogin">
					<view class="nick-name oneline-hide">
						{{ userInfo.username }}
						<text 
							v-if="userInfo.membership == 1"
							style="background-color: #f6e0b5; padding-right: 20rpx; padding-left: 20rpx; color: #947a57; border-radius: 5px; font-size: 30rpx;"
						>
							VIP
						</text>
					</view>
					<view class="mobile">{{ userInfo.email }}</view>
				</view>
			</view>
			<view v-else class="user-info" @click="handleLogin">
				<view class="user-avatar">
					<avatar-image :width="100" />
				</view>
				<view class="user-content">
					<view class="nick-name">Sign In</view>
					<view class="login-tips">Click here to sign in</view>
				</view>
			</view>
		</view>

		<!-- 订单操作 -->
		<Card :DataList="orderNavbar" name="Order" extra="more >" class="cards"></Card>

		<!-- 其他 -->
		<view>
			<uni-list v-for="(item, index) in itemList" :key="index" @click="handleService(item.url)">
				<uni-list-item :title="item.name"></uni-list-item>
			</uni-list>
			<uni-list @click="logout">
				<uni-list-item title="Logout"></uni-list-item>
			</uni-list>
		</view>
	</view>
</template>

<script>
	import AvatarImage from '@/components/avatar-image'
	import Card from '@/components/card'
	import Config from '@/config.js'

	const urlPrefix = Config.urlPrefix


	// 订单操作
	const orderNavbar = [{
			id: 'all',
			name: 'To Be Paid',
			iconpath: '/static/icon/tobepaid.svg',
			url: '../order/index'
		},
		{
			id: 'payment',
			name: 'Paid',
			iconpath: '/static/icon/paid.svg',
			url: '../order/index'
		},
		{
			id: 'delivery',
			name: 'Cancelled',
			iconpath: '/static/icon/cancelled.svg',
			url: '../order/index'
		},
	]

	const itemList = [{
			id: 'all',
			name: 'Personal Info',
			icon: 'qpdingdan',
			url: './personal-info/index'
		},
		{
			id: 'payment',
			name: 'Wallet',
			icon: 'daifukuan',
			url: './wallet/index'
		},
		{
			id: 'received',
			name: 'Settings',
			icon: 'daishouhuo',
			url: './settings/index'
		},
	]

	export default {
		components: {
			AvatarImage,
			Card
		},
		data() {
			return {
				text: 'nihao',
				userInfo: {
					id: null,
					username: null,
					email: null,
					isVIP: false
				},
				orderNavbar,
				itemList,
				isLogin: false,
			}
		},
		methods: {
			// 获取当前用户信息
			async getUserInfo() {
				uni.request({
					url: urlPrefix + '/user',
					method: 'GET',
					header: {
						'Authorization': uni.getStorageSync('token')
					}
				}).then(res => {
					if (res.data.code === 0) {
						console.log('username: ', res.data.result.username)
						console.log('email: ', res.data.result.email)
						this.isLogin = true
						this.userInfo.id = res.data.result.id
						this.userInfo.username = res.data.result.username
						this.userInfo.email = res.data.result.email
						this.userInfo.membership = res.data.result.membership
					} else {
						uni.showToast({
							title: 'Get info failed',
							duration: 2000,
							icon: 'error'
						})
					}
				})
			},
			handleService(url) {
				uni.navigateTo({
					url: url + "?id=" + this.userInfo.id
				})
				// this.$navTo(url)
			},
			// 跳转到登录页
			handleLogin() {
				!this.isLogin && uni.navigateTo({
					url: '/pages/login/index'
				})
			},
			logout() {
				console.log('logout')
				uni.setStorageSync('token', null)
				this.isLogin = false
			}
		},
		mounted() {
			console.log('token', uni.getStorageSync('token'))
			if (uni.getStorageSync('token') !== null) {
				this.getUserInfo()
			}
		},
	}
</script>

<style lang="scss" scoped>
	// 页面头部
	.main-header {
		background-color: #fff;
		position: relative;
		width: 100%;
		height: 280rpx;
		background-size: 100% 100%;
		overflow: hidden;
		display: flex;
		align-items: center;

		.bgc {
			position: absolute;
			top: -40%;
			left: -10%;
			width: 120%;
			height: 580rpx;
			background-color: #F25E5E;
			border-radius: 40%;
			z-index: 0;
		}

		.user-avatar {
			border: 1px solid #fff;
			border-radius: 50%;
			background-color: #fff;
		}

		.user-info {
			display: flex;
			height: 100rpx;
			z-index: 1;
			position: relative;
			top: -30%;
			left: 5%;

			.user-content {
				display: flex;
				flex-direction: column;
				justify-content: center;
				margin-left: 30rpx;
				color: #fff;
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

	.cards {
		margin-left: 20rpx;
		margin-top: -150rpx;
	}

	//角标组件
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
				width: 5rpx;
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