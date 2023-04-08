<template>
	<view v-show="ishide" @touchmove.stop.prevent>
		<!-- mask -->
		<view class="mask" :style="maskStyle"></view>
		<!-- content -->
		<view class="tip" :style="tipStyle">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			// control appear or not
			ishide: {
				type: Boolean,
				required: true
			},
			// index of poping up window
			zindex: {
				type: Number,
				default: 99
			},
			// opacity of the background
			opacity: {
				type: Number,
				default: 0.6
			},
			// width
			width: {
				type: String,
				default: '2000rpx'
			},
			// height
			height: {
				type: String,
				default: '2000rpx'
			},
			// radius
			radius: {
				type: String
			},
			// background color
			bgcolor: {
				type: String,
				default: '#FFFFFF'
			}
		},
		computed: {
			// mask style
			maskStyle() {
				return `
					z-index:${this.zindex};
					background:rgba(0,0,0,${this.opacity});
				`
			},
			// content style
			tipStyle() {
				return `
					width:${this.width};
					height:${this.height};
					z-index:${this.zindex+1};
					border-radius:${this.radius};
					background-color:${this.bgcolor};
				`
			}
		}
	}
</script>

<style scoped>
	.mask {
		position: fixed;
		bottom: 0;
		right: 0;
		left: 0;
		top: 0;
	}

	.tip {
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
</style>
