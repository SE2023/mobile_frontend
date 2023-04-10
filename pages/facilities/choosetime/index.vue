<template>
	<uni-section title="username" type="line" titleFontSize="18px">
		<view class="example-body" >
			{{order.username}}
		</view>
	</uni-section>
	<uni-section title="activity" type="line" titleFontSize="18px">
		<view class="example-body">
			{{order.activity.name}}
		</view>
	</uni-section>
	<uni-section title="discription" type="line" titleFontSize="18px">
		<view class="example-body">
			{{order.activity.discription}}
		</view>
	</uni-section>
	<uni-section title="price" type="line" titleFontSize="18px">
		<view class="example-body" >
			{{order.activity.price}}
		</view>
	</uni-section>
	
	<uni-section title="choose date" type="line" titleFontSize="18px">
		<uni-datetime-picker type="date" :clear-icon="false" v-model="single" @maskClick="maskClick" />
	</uni-section>
	
	<uni-section title="choose time" type="line" titleFontSize="18px">
		<TimePicker class="picker" @getStartTime="getStartTime" @getEndTime="getEndTime"></TimePicker>
	</uni-section>
	
	<button class="btn" type="warn" @click="order(activity)">Book</button>
</template>

<script>
	import TimePicker from "../../../components/time-picker/index.vue"
	const order = {
		username:"pangyu",
		activity:{
			name:"lesson1",
			price:17,
			discription:"...",
		}
	}
	export default{
		name: 'Card',
		data(){
			return{
				order:{
					username:"pangyu",
					activity:{
						name:"lesson1",
						price:17,
						discription:"...",
					}
				}
			}
		},
		components:{
			TimePicker
		},
		methods: {
			
			getStartTime(e){
				console.log(e)
			},
			getEndTime(e){
					console.log(e)
			},
			order(activity) {
				uni.request({
					url: urlPrefix + '/order',
					method: 'POST',
					data: {
						activityId: activity.id,
						name: activity.name
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
		font-size:30rpx;
		border:1px solid #E5E5E5;
		border-radius:20rpx;
	}
	.btn{
		margin-top:50rpx;
	}
	.picker{
		/* width:700rpx;
		margin-left:40rpx; */
	}
</style>