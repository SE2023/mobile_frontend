<template>
	<uni-collapse  accordion v-model="accordionVal" @change="change">
		<uni-collapse-item title="BodyBuddy ID">
			<view class="content">
				<text class="text">{{userInfo.username}}</text>
			</view>
		</uni-collapse-item>
		<uni-collapse-item title="Email">
			<view class="content">
				<text class="text">{{userInfo.email}}</text>
			</view>
		</uni-collapse-item>
		<uni-collapse-item title="Emergency Contacts">
			<view class="content">
				<text class="text">Not set</text>
			</view>
		</uni-collapse-item>
		<uni-collapse-item title="Devices">
			<view class="content">
				<text class="text">-current device</text>
			</view>
		</uni-collapse-item>
		<uni-collapse-item title="More Setting">
			<view class="content">
				<text class="text">No more currently</text>
			</view>
		</uni-collapse-item>
	</uni-collapse>
</template>

<script>
	import Config from '@/config.js'
	
	const urlPrefix = Config.urlPrefix
	
	export default {
		components: {
			
		},
		data() {
			return{
				userInfo: {
					username:'Username',
					email:'Email'
				},
			}
		},
		methods:{
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
						this.userInfo.username = res.data.result.username
						this.userInfo.email = res.data.result.email
					} else {
						uni.showToast({
							title: 'Get info failed',
							duration: 2000
						})
					}
				})
			}
		},
		mounted() {
			console.log('token', uni.getStorageSync('token'))
			if (uni.getStorageSync('token') !== null) {
				console.log('asdfsdfsad')
				this.getUserInfo()
			}
		}
	}
	// export default {
	// 	components: {},
	// 	data() {
	// 		return {
	// 			value:['0'],
	// 			accordionVal:'1',
	// 			content: 'Collapse content, can be customized, click on can change the style of the content.',
	// 			extraIcon: {
	// 				color: '#4cd964',
	// 				size: '26',
	// 				type: 'image'
	// 			},
	// 		}
	// 	},
	// 	methods: {
	// 		add() {
	// 			if (this.content.length > 35) {
	// 				this.content = 'Collapse content, can be customized, click on can change the style of the content.'
	// 			} else {
	// 				this.content = 'Click again it will be reinitialized.'
	// 			}
	// 			// TODO resize update by hand in miniprogram
	// 			// #ifdef MP
	// 			this.$nextTick(() => {
	// 				this.$refs.collapse.resize()
	// 			})
	// 			// #endif
	// 		},
	// 		onClick(e) {
	// 			uni.showToast({
	// 				title: 'Clicked'
	// 			})
	// 		},
	// 		change(e) {
	// 			console.log(e);
	// 		}
	// 	}
	// }
</script>


<style>
	.example-body {
		flex-direction: column;
		flex: 1;
	}

	.content {
		padding: 15px;
	}

	.text {
		font-size: 14px;
		color: #666;
		line-height: 20px;
	}

	.button {
		margin-top: 10px;
		margin: 10px;
		margin-bottom: 0;
	}
</style>