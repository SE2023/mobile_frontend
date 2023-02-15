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
			<uni-card class="book-card">
				<view>1-hour session</view>
				<view>some description here</view>
				<view>$100</view>
				<button type="warn">Book Now</button>
			</uni-card>
		</uni-section>
	</view>
	
</template>

<script>
	import Banner from '@/components/banner'
	
	const itemList=[
		{id:0, url:'/static/swiper/swiper4.jpg'},
		{id:1, url:'/static/swiper/swiper4.jpg'},
		{id:2, url:'/static/swiper/swiper4.jpg'},
	]
	
	export default {
		components: {
		  Banner,
		  
		},
		data(){
			return{
				itemList
			}
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