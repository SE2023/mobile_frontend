<template>
	<view>
		<Banner :itemList="itemList"/>
		<uni-section title="Swimming Pool" type="line" padding>
			<uni-rate active-color="red" v-model="rateValue" @change="onChange" />
		</uni-section>
		<view class="detail">
			<view>Opening Hours: 10:00-22:00</view>
			<view>Coach: San Zhang</view>
			<view>Contact: 18833000000</view>
		</view>
		<uni-section title="Activites" type="line" padding>
			<Book></Book>
			<Book></Book>
		</uni-section>
		<uni-section title="Comments" type="line" padding>
			<Comment :UserList="UserList"></Comment>
		</uni-section>
	</view>
	
</template>

<script>
	import Banner from '@/components/banner'
	import Book from '@/components/book/index.vue'
	import Comment from '@/components/comments/index.vue'
	
	const itemList=[
		{id:0, url:'/static/swiper/swiper4.jpg'},
		{id:1, url:'/static/swiper/swiper4.jpg'},
		{id:2, url:'/static/swiper/swiper4.jpg'},
	]
	const UserList=[
		{user:"Test",date:"2023-4-1",comment:"That's great!",avatar_url:"/static/default-avatar.png"},
		{user:"Test",date:"2023-4-1",comment:"That's great!",avatar_url:"/static/default-avatar.png"},
		{user:"Test",date:"2023-4-1",comment:"That's great!",avatar_url:"/static/default-avatar.png"}
	]
	export default {
		components: {
		  Banner,
		  Book,
		  Comment
		},
		data(){
			return{
				itemList,
				UserList
			}
		},
		method:{
			toTargetItem() {
				console.log('ok')
				uni.navigateTo({
					url:"./facilities/index"
				})
			},
		}
		
	}
</script>

<style>
	.detail{
		color:gray;
		padding:10rpx;
		font-size: 15rpx;
		border-top: 1px solid gray;
		border-bottom:1px solid gray ;
	}
	.book-card{
		background-color: #FFC1C1;
	}
</style>