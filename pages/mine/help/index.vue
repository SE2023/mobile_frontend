<template>
	<uni-collapse  accordion v-model="accordionVal" @change="change">
		<uni-collapse-item title="Why don't I have the Pay feature?">
			<view class="content">
				<text class="text">Currently, our BodyBuddy only simulates the payment process, 
				and does not actually realize the payment operation. Because payment involves 
				connecting with other third-party service software. The BodyBuddy will do this later.</text>
			</view>
		</uni-collapse-item>
		<uni-collapse-item title="Is it necessary to use an email address for registration?">
			<view class="content">
				<text class="text">Currently, account registration can only allow users to use email 
				addresses to register, because BodyBuddy can send verification codes by sending emails 
				to provide a safer way to protect user privacy. Later BodyBuddy may expand to use a 
				phone number for registration, which requires to establish a connection with a third-party 
				service for SMS delivery.</text>
			</view>
		</uni-collapse-item>
		<uni-collapse-item title="Why are there so few facilities?">
			<view class="content">
				<text class="text">BodyBuddy has only established contact with a small number of facilities
				 for the convenience of management. When our operation level continues to improve, we will 
				 consider expanding more.</text>
			</view>
		</uni-collapse-item>
	</uni-collapse>
</template>

<script>
	// export default {
	// 	components: {},
	// 	data() {
	// 		return {
	// 			value:['0'],
	// 			accordionVal:'1',
	// 			content: 'Collapse content, can be customized, click on can change the style of the content.',
	// 			extraIcon: {
	// 				color: '#4cd964',
	// 				size: '26',
	// 				type: 'image'
	// 			},
	// 		}
	// 	},
	// 	methods: {
	// 		add() {
	// 			if (this.content.length > 35) {
	// 				this.content = 'Collapse content, can be customized, click on can change the style of the content.'
	// 			} else {
	// 				this.content = 'Click again it will be reinitialized.'
	// 			}
	// 			// TODO resize update by hand in miniprogram
	// 			// #ifdef MP
	// 			this.$nextTick(() => {
	// 				this.$refs.collapse.resize()
	// 			})
	// 			// #endif
	// 		},
	// 		onClick(e) {
	// 			uni.showToast({
	// 				title: 'Clicked'
	// 			})
	// 		},
	// 		change(e) {
	// 			console.log(e);
	// 		}
	// 	}
	// }
</script>


<style>
	.example-body {
		flex-direction: column;
		flex: 1;
	}

	.content {
		padding: 15px;
	}

	.text {
		font-size: 14px;
		color: #666;
		line-height: 20px;
	}

	.button {
		margin-top: 10px;
		margin: 10px;
		margin-bottom: 0;
	}
</style>