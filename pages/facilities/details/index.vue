<template>
	<view>
		<Banner :itemList="itemList" />
		<uni-section title="Swimming Pool" type="line" padding>
			<uni-rate active-color="red" v-model="rateValue" @change="onChange" />
		</uni-section>
		<view class="detail">
			<view>Opening Hours: 10:00-22:00</view>
			<view>Coach: San Zhang</view>
			<view>Contact: 18833000000</view>
		</view>
		<uni-section title="Activites" type="line">
			<Book :ActivityList="ActivityList" />
		</uni-section>
		<uni-section title="Comments" type="line" padding>
			<Comment :UserList="UserList"></Comment>
		</uni-section>
	</view>

</template>
<script setup>
	import {
		reactive,
		ref,
	} from 'vue'
	import { onLoad} from "@dcloudio/uni-app"
	import Banner from '@/components/banner'
	import Book from '@/components/book/index.vue'
	import Comment from '@/components/comments/index.vue'
	import config from '@/config.js'
	onLoad(options => {  
	  console.log('page onLoad: ', options) 
	  name = options.id
	   console.log('facility is: ',options.id)  
	});
	
	const urlPrefix = config.urlPrefix
   
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
	const FacilityId = 2
	let ActivityList = ref([{
		name: "lecture No.1",
		date: "2023-3-28",
		starttime: "14:00",
		endtime: "15:00",
		id: 1,
		price: "$10"
	}, {
		name: "lecture No.2",
		date: "2023-3-28",
		starttime: "15:00",
		endtime: "16:00",
		id: 2,
		price: "$20"
	}, ])
	// uni.request({
	// 	url: urlPrefix + '/activity/facility/' + FacilityId,
	// 	method: 'GET',
	// }).then((res) => {
	// 	let res_list = res.data.result
	// 	console.log(res)
	// 	res_list.forEach((value) => {
	// 		console.log(value.activity)
	// 		for (let s in value.activity) {
	// 			value[s] = value.activity[s]
	// 		}
	// 		delete value.activity
	// 	})
	// 	ActivityList.value = res_list
	// })
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
</script>

<style>
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
</style>