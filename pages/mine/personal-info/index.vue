<template>
	<view class="main">
		<view class="user-info">
			<!-- 头像 -->
			<view class="user-avatar">
				<avatar-image :url="userInfo.avatar_url" :width="250" />
			</view>
			
			<button size="mini" class="avatar-btn">update your avatar</button>
		</view>
	</view>
	<view class="user-content">
		<uni-row class="row">
			<uni-col :span="10" class="title">Username</uni-col>
			<uni-col :span="14">{{userInfo.username}}</uni-col>
		</uni-row>
		<uni-row class="row">
			<uni-col :span="10" class="title">Email</uni-col>
			<uni-col :span="14">{{userInfo.email}}</uni-col>
		</uni-row>
		<uni-row class="row">
			<uni-col :span="10" class="title">Gender</uni-col>
			<uni-col :span="14">Male</uni-col>
		</uni-row>
	</view> 
	<button type="warn" class="submit-btn">Submit</button>
</template>

<script>
	import AvatarImage from '@/components/avatar-image'
	import Config from '@/config.js'
	
	const urlPrefix = Config.urlPrefix
	
	export default {
		components: {
			AvatarImage,
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
</script>

<style>
	.user-avatar{
		margin-top: 5%;
		border: 1px solid #fff;
		border-radius: 50%;
		background-color: #fff;
		display: flex;
		justify-content: center;
	}
	.avatar-btn{
		margin-top: 5%;
		background: transparent;
		border: 1px solid #F25E5E;
		color: #F25E5E;
		display: flex;
		justify-content: center;
	}
	.user-content{
		margin-left: 15%;
	}
	.main{
		display: flex;
		align-items: center;
	}
	.user-info{
		margin: 20rpx auto ;
	}
	.title{
		color:gray;
		font-size: 18px;
	}
	.content{
		margin-left: 20%;
		/* text-align: right; */
	}
	.row{
		margin: 30rpx auto ;
	}
	.submit-btn{
		margin-top: 10%;
		width: 75%;
		display: flex;
		justify-content: center;
	}
</style>