<template>
	<view>
		<!-- tab name -->
		<scroll-view id="tab" scroll-x="true">
			<view v-for="(item,index) in barNameList" :key="item.id" class="tabName" :data-current="index"
				@click="ontabtap" :style="{width:width}">
				<text class="tabName_text" :class="tabIndex == index?'active_text':''">{{item.name}}</text>
			</view>
		</scroll-view>
		<!-- tab content -->
		<swiper class="swiper-item" id="tabContent" :current="tabIndex" @change="tabChange">
			<swiper-item v-for="(item,index) in barContentList" :key="item.id">

				<component :is="item.mft_components" :content="item.content"></component>

			</swiper-item>
		</swiper>

	</view>

</template>

<script>
	import OrderItem from '@/components/order-item/index.vue'
	import Time from '@/components/time/index.vue'
	export default {
		name: 'TopNavBar',
		props: {
			barNameList: Array,
			barContentList: Array,
			width: {
				type: String,
				// default:"33.33%"
			}
		},
		components: {
			OrderItem,
			Time
		},
		data() {
			return {
				tabIndex: 0,
			}
		},
		methods: {
			// scroll-view 点击 tab 时 改变下标
			ontabtap(e) {
				let index = e.target.dataset.current || e.currentTarget.dataset.current;
				this.switchTab(index);
			},
			switchTab(index) {
				if (this.tabIndex == index) {
					return
				}
				this.tabIndex = index;
			},
			// swiper滑动时改变下标
			tabChange(e) {
				let index = e.target.current || e.detail.current; // 获取到当前移动到第几个
				this.switchTab(index);
			},
			// scroll-view 点击 tab 时 改变下标
			ontabtap(e) {
				let index = e.target.dataset.current || e.currentTarget.dataset.current;
				this.switchTab(index);
			},
		}
	}
</script>


<style>
	/* $dist_menu: var(--dist-menu); */
	#tab {
		width: 100%;
		display: flex;
	}
	.tabName {
		text-align: center;
		/* width: $dist_menu; */
		/* margin-left:30rpx; */
		display: inline-block;
		height: 80rpx;
		line-height: 80rpx;
		white-space: break-word;
	}
	.tabName_text {
		display: inline-block;
		width: 100%;
	}
	.active_text {
		/* background-color: #FDDD9B; */
		color: #F25E5E;
		border-bottom: 2px solid #F25E5E;
	}
	#tabContent {
		width: 100%;
	}
	.swiper-item {
		height: 80vh;
	}
</style>