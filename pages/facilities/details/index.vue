<template>
	<view>
		<Banner :itemList="itemList" />
		<uni-section title="Swimming Pool" type="line" padding>
			<uni-rate active-color="red" v-model="rateValue" @change="onChange" />
		</uni-section>
		<view class="detail">
			<view>Opening Hours: {{item.opening_time}}</view>
			<view>Coach: {{item.coach}}</view>
			<view>Contact: {{item.contact}}</view>
		</view>
		<uni-section title="Activites" type="line">
			<view  v-for="(item,index) in ActivityList" :key="item.id">
				<Book :activity="item.activity"></Book>
			</view>
		</uni-section>
		<uni-section title="Comments" type="line" padding>
			<Comment :UserList="UserList"></Comment>
		</uni-section>
	</view>

</template>
<script>
	import Banner from '@/components/banner'
	import Comment from '@/components/comments/index.vue'
	import Book from '@/components/book/index.vue'
	import config from '@/config.js'
	
	var facility_id = 0
	const item = {opening_time:"9:00-10:00",coach:"Sam",contact:"130000000"}
	const itemList = [{
			id: 0,
			url: '/static/swiper/swiper4.jpg'
		},
		{
			id: 1,
			url: '/static/swiper/swiper4.jpg'
		},
		{
			id: 2,
			url: '/static/swiper/swiper4.jpg'
		},
	]
	
	const UserList = [{
			user: "XJY",
			date: "2023-3-24",
			comment: "That's great!",
			avatar_url: "/static/icon/avatar1.jpg"
		},
		{
			user: "CPC",
			date: "2023-3-25",
			comment: "Many guys exercise there!",
			avatar_url: "/static/icon/avatar3.jpg"
		},
		{
			user: "LPY",
			date: "2023-3-25",
			comment: "I have a nice day there!",
			avatar_url: "/static/icon/avatar2.jpg"
		}
	]
	export default{
		data() {
			return{
				itemList,
				UserList,
				facility_id,
				item,
				ActivityList: [],
			}
		},
		components:{
			Banner,
			Comment,
			Book
		},
		onLoad(option) {
			this.facility_id = option.id	
		},
		mounted(){
			const urlPrefix = config.urlPrefix
			uni.request({
				url: urlPrefix + '/activity/facility/' + this.facility_id,
				method: 'GET',
			}).then((res) => {
				this.ActivityList = res.data.result
				console.log(this.ActivityList)
			})
		},
	}
</script>

<style lang="scss" scoped>
	.detail {
		color: gray;
		padding: 18rpx;
		font-size: 30rpx;
		border-top: 1px solid gray;
		border-bottom: 1px solid gray;
	}

	.book-card {
		background-color: #FFC1C1;
	}
	.book-card {
		background-color: lightpink;
	}
	
	.card {
		width: 80%;
		z-index: 1;
		border-radius: 50rpx;
	}
	
	.order-navbar {
		display: flex;
		width: 100%;
		border-radius: 5rpx;
		background: #fff;
	
		&-item {
			width: 33%;
			margin: auto 10rpx;
	
			.img {
				text-align: center;
			}
	
			.icons-pay {
				display: inline-block;
				margin: 0 auto;
				width: 70rpx;
				height: 70rpx;
	
			}
	
			.item-name {
				width: 100%;
				font-size: 28rpx;
				color: #545454;
				text-align: center;
	
			}
	
		}
	}
</style>