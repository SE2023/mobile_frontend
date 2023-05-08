<template>
	<view>
		{{ coupons }}
	</view>
</template>

<script>
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
					url: urlPrefix + '/coupon/' + 11,
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