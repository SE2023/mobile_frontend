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
		<view class="row">
			<text class="title">Username</text>
			<text class="content">{{ userInfo.nick_name }}</text>
		</view>
		<view class="row">
			<text class="title">Phone</text>
			<text class="content">{{ userInfo.mobile }}</text>
		</view>
		<view class="row">
			<text class="title">Gender</text>
			<text class="content">{{ userInfo.mobile }}</text>
		</view>	
	</view> 
	<button type="warn" class="submit-btn">Submit</button>
</template>

<script>
	import AvatarImage from '@/components/avatar-image'
	
	export default {
		components: {
			AvatarImage,
		},
		data() {
			return{
				userInfo: {
					nick_name:'test',
					mobile:'12345'
				},
			}
		},
		methods:{
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
		text-align: right;
	}
	.row{
		margin: 20rpx auto ;
	}
	.submit-btn{
		margin-top: 10%;
		width: 75%;
		display: flex;
		justify-content: center;
	}
</style>