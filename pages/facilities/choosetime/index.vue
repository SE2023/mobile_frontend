<template>
	<uni-section title="activity" type="line" titleFontSize="18px">
		<view class="example-body">
			{{activity.name}}
		</view>
	</uni-section>
	<uni-section title="discription" type="line" titleFontSize="18px">
		<view class="example-body">
			{{activity.note}}
		</view>
	</uni-section>
	<uni-section title="price" type="line" titleFontSize="18px">
		<view class="example-body">
			{{activity.price}}
		</view>
	</uni-section>

	<uni-section title="choose date" type="line" titleFontSize="18px">
		<uni-datetime-picker type="date" :clear-icon="false" v-model="single" @change="change" />
	</uni-section>

	<uni-section title="choose time" type="line" titleFontSize="18px">
		<TimePicker :timeList="timeList" class="picker" @time="time"></TimePicker>
	</uni-section>

	<button class="btn" type="warn" @click="isshow=!isshow">Book</button>
	<zwy-popup :ishide='isshow' width="600rpx" height="760rpx" radius="16rpx">
		<!-- basic layout -->
		<view class="content">
			<view class="title">Choose the Coupon</view>
			<view class="text">Please select the coupon you want to use:</view>
			<view class="amount-box-2" v-for="(item,index) in couponList" :key="item.id">
				<button class="amount-btn" @click="use_coupon(item)" :style="coupon_style">¥ {{item.discount}}</button>
			</view>
			<view>Final Price is : ¥{{price}}</view>
			<view class="info">Hint: You can become a member of BodyBuddy by topping up ¥100 once a time!</view>
			<button class="btn" @click="order(activity)">Confirm</button>
		</view>
		<!-- close button -->
		<view class="close" @click="payFail(activity)">✕</view>

	</zwy-popup>

</template>

<script>
	import TimePicker from "../../../components/time-picker/index.vue"
	import config from '@/config.js'
	var activity_id = 0
	export default {
		data() {
			return {
				coupon_style: {},
				coupon_id: -1,
				couponed: false,
				activity: Object,
				activity_id,
				single: '',
				timeList: [],
				isshow: false,
				chosen_date: '',
				couponList: [],
				user_id: 0,
				price: 10,

			}
		},
		components: {
			TimePicker
		},
		onLoad(option) {
			this.activity_id = option.id
		},
		mounted() {
			const urlPrefix = config.urlPrefix
			uni.request({
				url: urlPrefix + '/activity/' + this.activity_id,
				method: 'GET',
			}).then((res) => {
				this.activity = res.data.result
			})
			uni.request({
				url: urlPrefix + '/user',
				method: 'GET',
				header: {
					'Authorization': uni.getStorageSync('token')
				}
			}).then(res => {
				console.log(res)
				if (res.data.code === 0) {
					this.user_id = res.data.result.id
					uni.request({
						url: urlPrefix + '/coupon/' + this.user_id,
						method: 'GET',
						header: {
							'Authorization': uni.getStorageSync('token')
						}
					}).then((res) => {
						for (let i = 0; i < res.data.result.length; i++) {
							var coupon = res.data.result[i]
							this.couponList.push(coupon)
						}
						console.log(this.couponList)
					})
				} else {
					uni.showToast({
						title: 'Get info failed',
						duration: 2000,
						icon: 'error'
					})
				}
			})

		},
		methods: {
			time(val) {
				this.chosen_date = val
			},
			use_coupon(item) {
				console.log(123)
				let val = parseInt(item.discount)
				let id = item.id
				console.log(this.coupon_syle)
				if (this.couponed) {
					if (id == this.coupon_id) {
						this.couponed = false
						this.price = String(parseInt(this.price) + val)
						this.coupon_style['background-color'] = 'white'
					} else {
						return
					}
				} else {
					this.coupon_style['background-color'] = 'pink'
					this.couponed = true
					this.coupon_id = id
					this.price = this.price - val
				}
			},
			change(e) {
				this.single = e
				const urlPrefix = config.urlPrefix
				uni.request({
					url: urlPrefix + '/activity/date/' + this.single + '/activity/' + this.activity_id,
					method: 'GET',
				}).then((res) => {
					for (let i = 0; i < res.data.result.length; i++) {
						var time = res.data.result[i].startTime + "-" + res.data.result[i].endTime
						this.timeList.push(time)
					}
				})


			},
			payFail(activity){
				this.isshow=false
				var nowDate = new Date()
				var date = nowDate.getDate()
				var time = nowDate.getHours() + ":" + nowDate.getMinutes() + ":" + nowDate.getSeconds()
				const urlPrefix = config.urlPrefix
				uni.request({
					url: urlPrefix + '/order',
					method: 'POST',
					data: {
						activityId: this.activity_id,
						name: this.activity.name,
						userId: this.user_id,
						payMoney: this.price,
						Time: date + time,
						status: "unpaid",
						remark: "unpaid"
					},
					header: {
						'Authorization': uni.getStorageSync('token')
					}
				}).then((res) => {
					if (res.statusCode === 200) {
						uni.showToast({
							title: 'Order Success!',
							duration: 2000
						})
						setTimeout(() => {
							uni.redirectTo({
								url: '/pages/order/index'
							})
						}, 1500)
					} else {
						uni.showToast({
							title: res.data.message.split(';')[0],
							duration: 2000,
							icon: 'error'
						})
					}
					console.log(res)
				}).catch((error) => {
					uni.showToast({
						title: 'Order Failed!',
						duration: 2000,
						icon: 'error'
					})
				})
				
			},
			order(activity) {
				var nowDate = new Date()
				var date = nowDate.getDate()
				var time = nowDate.getHours() + ":" + nowDate.getMinutes() + ":" + nowDate.getSeconds()

				const urlPrefix = config.urlPrefix
				uni.request({
					url: urlPrefix + '/order',
					method: 'POST',
					data: {
						activityId: this.activity_id,
						name: this.activity.name,
						userId: this.user_id,
						payMoney: this.price,
						Time: date + time,
						status: "paid",
						remark: "paid"
					},
					header: {
						'Authorization': uni.getStorageSync('token')
					}
				}).then((res) => {
					if (res.statusCode === 200) {
						uni.showToast({
							title: 'Order Success!',
							duration: 2000
						})
						setTimeout(() => {
							uni.redirectTo({
								url: '/pages/order/index'
							})
						}, 1500)
					} else {
						uni.showToast({
							title: res.data.message.split(';')[0],
							duration: 2000,
							icon: 'error'
						})
					}
					console.log(res)

				}).catch((error) => {
					uni.showToast({
						title: 'Order Failed!',
						duration: 2000,
						icon: 'error'
					})
				})
			}
		}
	}
</script>

<style>
	.example-body {
		padding: 12px;
		background-color: #FFFFFF;
		font-size: 30rpx;
		border-bottom: 1px solid #E5E5E5;
	}

	.btn {
		margin-top: 50rpx;
	}

	.picker {
		/* width:700rpx;
		margin-left:40rpx; */
	}

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

	.topup-btn {
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
		outline-style: solid;
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