<template>
	<view>
		<TopNavBar :width="width" :barNameList="barNameList" :barContentList="reqContentList" />
	</view>
</template>

<script setup>
	import TopNavBar from '@/components/top-navbar/index.vue'
	import OrderItem from '@/components/order-item/index.vue'
	import Config from '@/config.js';
	import {
		onBeforeMount,
		onMounted,
		reactive,
	} from "vue";
	import {
		onShow,
	} from '@dcloudio/uni-app';
	onMounted(() => {
		request_orders()
	})
	const urlPrefix = Config.urlPrefix;
	const barNameList = [{
			name: 'To be Paid',
			id: '0'
		},
		{
			name: 'Paid',
			id: '1'
		},
		{
			name: 'Cancelled',
			id: '2'
		},
	]
	let orders = []
	const reqContentList = reactive([])
	const request_orders = function() {
		uni.request({
			url: urlPrefix + '/order/token/',
			methods: 'GET',
			header: {
				'Authorization': uni.getStorageSync('token')
			}
		}).then(res => {
			orders = res.data.result
			reqContentList.push({
				content: orders.filter(order => {
					return order.status === 'unpaid'
				}),
				mft_components: "OrderItem"
			})
			reqContentList.push({
				content: orders.filter(order => {
					return order.status === 'paid'
				}),
				mft_components: "OrderItem"
			})
			reqContentList.push({
				content: orders.filter(order => {
					return order.status === 'cancelled'
				}),
				mft_components: "OrderItem"
			})
			console.log(reqContentList)
		})
	}

	const barContentList = [{
			content: [{
					id: "01",
					title: "To be Paid",
					status: "unpaid",
					time: "2023-4-1 10:00-11:00",
				},
				{
					id: "02",
					title: "To be Paid",
					status: "unpaid",
					time: "2023-4-1 11:00-12:00",
				},
			],
			mft_components: "OrderItem"

		},
		{
			content: [{
				id: "02",
				title: "Paid",
				status: "unused",
				time: "2023-4-2 10:00-11:00",
			}, ],

			mft_components: "OrderItem"

		},
		{
			content: [{
				id: "03",
				title: "Cancelled",
				status: "used",
				time: "2023-4-3 10:00-11:00",
				mft_components: "OrderItem"
			}, ],
			mft_components: "OrderItem"

		}
	]
	const width = "33.3%"
</script>


<style>
	#tab {
		width: 100%;
		display: flex;
	}

	.tabName {
		text-align: center;
		width: 33.33%;
		display: inline-block;
		height: 80rpx;
		line-height: 80rpx;
		white-space: nowrap;
	}

	.tabName_text {
		display: inline-block;
		width: 100%;
		height: 100%;
	}

	.active_text {
		/* background-color: #FDDD9B; */
		color: #FA8072;
		border-bottom: 2px solid #FA8072;
	}

	#tabContent {
		width: 100%;
	}
</style>