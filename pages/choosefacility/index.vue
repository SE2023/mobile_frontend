<template>
	<view class="list">
		<view  v-for="(item,index) in facilityList" :key="item.id" class="" @click="toTargetItem(item)">
			<Facility :item="item"></Facility>
		</view>
	</view>
	
</template>

<script>
	import Facility from '@/components/facility/index.vue'
	import Config from '@/config.js'
	const urlPrefix = Config.urlPrefix

	export default{
		data() {
			return{
				facilityList: [],
				type: '',
			}
		},
		components:{
			Facility
		},
		onLoad(option) {
			this.type = option.type;
		},
		methods: {
			// 跳转到详情页
			toTargetItem(item) {
				uni.navigateTo({
					url:item.url,
					id: item.id
					// url:item.url+"?id="+item.id,
				})
			}
		},
		mounted() {
			uni.request({
				url: urlPrefix + '/facilities/' + this.type,
				method:'GET'
			}).then(res => {
				console.log(res);
				for (let i = 0; i < res.data.result.length; i++) {
					this.facilityList.push({
						id: i,
						name: res.data.result[i].name,
						price: 0,
						location: "BodyBuddy",
					})
					console.log(this.facilityList)
				}
			})
		}
	}
</script>

<style>
.list{
	margin-top:30rpx;
}
</style>