<template>
	<Search/>
	<view>
		<view style="padding: 20rpx;">
			<pp-waterfall-flow :value="list" @clickImage="toDiscoveryDetail" @clickItem="toDiscoveryDetail"></pp-waterfall-flow>
		</view>
	</view>
</template>

<script setup>
    const list = [{
        desc: "Swimming can provide numerous benefits for both physical and mental health, as well as enhance your lifestyle and property value.",
        image: "../../static/discovery/21.png",
        title: "Swimming Pool"
    },{
        desc: "Fitness rooms can offer a multitude of benefits for individuals looking to improve their physical health and well-being. With the convenience of having a dedicated space for exercise in your own home, you can easily incorporate regular physical activity into your daily routine.",
        image: "../../static/discovery/22.png",
        title: "Fitness Room"
    },{
        desc: "Squash is a high-intensity sport that requires quick reflexes, agility, and endurance, making it an excellent way to improve cardiovascular health and build strength.",
        image: "../../static/discovery/23.png",
        title: "Squash Court"
    },{
        desc: "Sports halls can provide a versatile space for a wide range of physical activities and sports, making them a valuable asset to schools, community centers, and sports clubs. ",
        image: "../../static/discovery/24.png",
        title: "Sports Hall"
    }]
	
	const toDiscoveryDetail = (e) => {
		uni.navigateTo({
			url: '/pages/others/discoveryDetail/discoveryDetail?id=' + e
			
		})
	}
</script>

<!-- <script setup>
	import {
		reactive
	} from 'vue'
	import {
		onReachBottom,
		onPullDownRefresh,
	} from '@dcloudio/uni-app'
	import DiscoveryCard from "../../components/discovery-card/index.vue"
	import Search from './search'

	const systemInfo = uni.getSystemInfo()
	let items = reactive([{
			id: 1,
			url: `../../static/discovery/${Math.ceil(Math.random() * 20)}.png`,
			author: 'prosperous',
			avator: `https://api.yimian.xyz/img?type=head&id=${Math.ceil(Math.random() * 100)}`,
			title: 'Hello World6!',
			time: '2023-4-5'
		},
		{
			id: 2,
			url: `../../static/discovery/${Math.ceil(Math.random() * 20)}.png`,
			author: 'prosperousye',
			avator: `https://api.yimian.xyz/img?type=head&id=${Math.ceil(Math.random() * 100)}`,
			title: 'Hello World5!',
			time: '2023-4-6'
		},
		{
			id: 3,
			url: `../../static/discovery/${Math.ceil(Math.random() * 20)}.png`,
			author: 'prosperous125',
			avator: `https://api.yimian.xyz/img?type=head&id=${Math.ceil(Math.random() * 100)}`,
			title: 'Hello World4!',
			time: '2023-4-7'
		},
		{
			id: 4,
			url: `../../static/discovery/${Math.ceil(Math.random() * 20)}.png`,
			author: 'Xiaokang',
			avator: `https://api.yimian.xyz/img?type=head&id=${Math.ceil(Math.random() * 100)}`,
			title: 'Hello World3!',
			time: '2023-4-8'
		},
	])

	let container = reactive({
		height: '864px'
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
							`../../static/discovery/${Math.ceil(Math.random() * 20)}.png`
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
			container.height = String(parseInt(container.height.slice(0, -2)) + 864) + 'px'
		}, 500)
	})
	onPullDownRefresh(() => {
		setTimeout(() => {
			location.reload()
			uni.stopPullDownRefresh();
		}, 500)
	})
</script> -->

<style scoped>
	/* #bottom {
		position: absolute;
		bottom: 10px;
		width: 100%;
		height: 10px;
		background-color: aqua;
	} */

	/* #container {
		position: absolute;
		display: flex;
		flex-wrap: wrap;
		height: 864px;
		justify-content: space-around;
		margin-right: 1vw;
	} */

	/* .items {
		background-color: ghostwhite;
		width: 48vw;
		margin-left: 1vw;
		margin-top: 1vw;
		border-radius: 15px;
	} */

	/* .items:last-child {
		align-self: flex-start;
	} */
</style>