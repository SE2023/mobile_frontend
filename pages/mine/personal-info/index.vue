<template>
	<view class="main">
		<view class="user-info">
			<!-- 头像 -->
			<view class="user-avatar">
				<avatar-image :url="userInfo.avatar_url" :width="250" />
			</view>
			<button size="mini" class="avatar-btn" :loading="loading" :disabled="disabled" @click="upload">update your avatar</button>
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
	<!-- <button type="warn" class="submit-btn">Submit</button> -->
</template>

<script>
	import AvatarImage from '@/components/avatar-image'
	import Config from '@/config.js'
	
	const urlPrefix = Config.urlPrefix
	var _self;
	
	export default {
		components: {
			AvatarImage,
		},
		data() {
			return{
				userInfo: {
					id:0,
					username:'Username',
					email:'Email'
				},
				imgList: [],
				imgsID: [],
				percent:0,
				loading:false,
				disabled:false
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
						console.log('ID: ', res.data.result.id)
						console.log('username: ', res.data.result.username)
						console.log('email: ', res.data.result.email)
						this.userInfo.username = res.data.result.username
						this.userInfo.email = res.data.result.email
						this.userInfo.id = res.data.result.id
					} else {
						uni.showToast({
							title: 'Get info failed',
							duration: 2000
						})
					}
				})
			},
			// upload image
			upload() {
				var _self = this;
				// choose the image, just 1
				uni.chooseImage({
					count: 1,
					sizeType: ['original'], // original or compressed
					sourceType: ['album'], // choose from album
					success: function (res) {
						console.log('res:', res)
						_self.curTotal++;
						_self.imgList.push(res.tempFilePaths[0]);
						const tempFilePaths = res.tempFilePaths[0];
						// upload file
						const uploadTask = uni.uploadFile({
							url : 'http://localhost:8880/icon/load' + _self.userInfo.id, // post请求地址
						    filePath: tempFilePaths,
						    name: 'file',  // need to be comfirmed
							method: 'POST',
						    header: {
								'Authorization': getApp().globalData.token || 'Basic YXBwOmFwcA=='
							},
							success: function (uploadFileRes) {
								console.log('Success:', uploadFileRes);
								console.log('type: ', typeof uploadFileRes)
								// _self.imgsID.push(JSON.parse(uploadFileRes.data).data.fileId);
								console.log('_self.imgsID:', _self.imgsID)
							},
							fail: function (uploadFileFail) {
								console.log('Error:', uploadFileFail.data);
							},
							complete: ()=> {
								console.log('Complete:');
							}
						});
					},
					error : function(e){
						console.log(e);
					}
			   });
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