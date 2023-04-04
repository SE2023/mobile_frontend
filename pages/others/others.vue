<template>
	<view>
		<div id="container" :style="container">
			<DiscoveryCard class="items" v-for="item of items" :key="items.id" :post="item" />
		</div>
	</view>
</template>

<script setup>
	import {
		reactive
	} from 'vue'
	import {
		onReachBottom,
		onPullDownRefresh,
	} from '@dcloudio/uni-app'
	import DiscoveryCard from "../../components/discovery-card/index.vue"

	const systemInfo = uni.getSystemInfo()
	let items = reactive([{
			id: 1,
			url: `https://api.yimian.xyz/img?type=wallpaper&id=${Math.ceil(Math.random() * 100)}`,
			author: 'prosperous',
			avator: `https://api.yimian.xyz/img?type=head&id=${Math.ceil(Math.random() * 100)}`,
			title: 'Hello World6!',
			time: '2023-4-5'
		},
		{
			id: 2,
			url: `https://api.yimian.xyz/img?type=wallpaper&id=${Math.ceil(Math.random() * 100)}`,
			author: 'prosperousye',
			avator: `https://api.yimian.xyz/img?type=head&id=${Math.ceil(Math.random() * 100)}`,
			title: 'Hello World5!',
			time: '2023-4-6'
		},
		{
			id: 3,
			url: `https://api.yimian.xyz/img?type=wallpaper&id=${Math.ceil(Math.random() * 100)}`,
			author: 'prosperous125',
			avator: `https://api.yimian.xyz/img?type=head&id=${Math.ceil(Math.random() * 100)}`,
			title: 'Hello World4!',
			time: '2023-4-7'
		},
		{
			id: 4,
			url: `https://api.yimian.xyz/img?type=wallpaper&id=${Math.ceil(Math.random() * 100)}`,
			author: 'Xiaokang',
			avator: `https://api.yimian.xyz/img?type=head&id=${Math.ceil(Math.random() * 100)}`,
			title: 'Hello World3!',
			time: '2023-4-8'
		},
		{
			id: 5,
			url: `https://api.yimian.xyz/img?type=wallpaper&id=${Math.ceil(Math.random() * 100)}`,
			author: 'XiaokangYe',
			avator: `https://api.yimian.xyz/img?type=head&id=${Math.ceil(Math.random() * 100)}`,
			title: 'Hello World2!',
			time: '2023-4-9'
		},
		{
			id: 6,
			url: `https://api.yimian.xyz/img?type=wallpaper&id=${Math.ceil(Math.random() * 100)}`,
			author: 'YouKnowWho',
			avator: `https://api.yimian.xyz/img?type=head&id=${Math.ceil(Math.random() * 100)}`,
			title: 'Hello World1!',
			time: '2023-4-10'
		},
	])

	let container = reactive({
		height: '100vh'
	})
	//下拉加载
	onReachBottom(() => {
		setTimeout(() => {
			let items_new = []
			//这里发送请求
			for (let j = 0; j < 6; j++) {
				let item = items[j]
				let item_copy = {}
				for (let i in item) {
					if (i === "id") {
						item_copy["id"] = item["id"] + items.length
					} else if (i === "url") {
						item_copy["url"] =
							`https://api.yimian.xyz/img?type=wallpaper&id=${Math.ceil(Math.random() * 100)}`
					} else if (i === "avator") {
						item_copy["avator"] =
							`https://api.yimian.xyz/img?type=head&id=${Math.ceil(Math.random() * 100)}`
					} else {
						item_copy[i] = item[i]
					}
				}
				items_new.push(item_copy)
			}
			for (let j = 0; j < 6; j++) {
				items.push(items_new[j])
			}
			console.log(items)
			container.height = String(parseInt(container.height.slice(0, -2)) + 100) + 'vh'
		}, 500)
	})
	onPullDownRefresh(() => {
		setTimeout(() => {
			location.reload()
			uni.stopPullDownRefresh();
		}, 500)
	})
</script>

<style scoped>
	#bottom {
		position: absolute;
		bottom: 10px;
		width: 100%;
		height: 10px;
		background-color: aqua;
	}

	#container {
		position: absolute;
		display: flex;
		flex-wrap: wrap;
		height: 100vh;
		justify-content: space-between;
		margin-right: 1vw;
	}

	.items {
		/* background-color: antiquewhite; */
		width: 48vw;
		/* height: 30vh; */
		margin-left: 1vw;
		margin-top: 1vw;
		border-radius: 15px;
	}

	.items:last-child {
		align-self: flex-start;
	}
</style>