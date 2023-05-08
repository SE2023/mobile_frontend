<template>
	<view>
		<view class="order-item" v-for="(item, index) in coupons" :key="item.id">
			<view class="text">
				<view class="title">
					Discount for ¥ {{item.discount}}
				</view>
				<view class="time">
					Expired on {{item.expire_time}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		defineProps
	} from 'vue'
	import TopNavBar from '@/components/top-navbar/index.vue'
	import Config from '@/config.js';
	const props = defineProps(['content'])
	import {
		onBeforeMount,
		onMounted,
		reactive,
	} from "vue";
	import {
		onShow,
	} from '@dcloudio/uni-app';
	const urlPrefix = Config.urlPrefix;
	const width = "33.3%"
	
	export default {
		data() {
			return {
				userId: 0,
				coupons: []
			}
		},
		onLoad(options) {
			this.userId = options.id
		},
		methods: {
			request_coupons() {
				uni.request({
					url: urlPrefix + '/coupon/' + this.userId,
					methods: 'GET'
				}).then(res => {
					console.log(res.data.result)
					this.coupons = res.data.result
				})
			}
		},
		mounted() {
			this.request_coupons()
		}
	}
</script>


<style>
	#tab {
		width: 100%;
		display: flex;
	}

	.order-item {
		margin-top: 5px;
		height: 90px;
		background-color: #fee5e6;
	}

	.text {
		float: left;
		margin-top: 12px;
		padding-left: 15px;
	}
	
	.title {
		font-size: 17px;
		font-weight: bold;
	}
	
	.time {
		margin-top: 15rpx;
		font-size: 15px;
		color: #585858;
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