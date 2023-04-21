<template>
	<view class="list">
		<view  v-for="(item,index) in facilityList" :key="item.id">
			<Facility :item="item" @click="toTargetItem(item)"></Facility>
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
				console.log("id is"+item.id);
				this.$emit('myevent', {
				  id: item.id
				})
				uni.navigateTo({
					url:"/pages/facilities/details/index"+"?id="+item.id,
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
						id: res.data.result[i].id,
						name: res.data.result[i].name,
						price: 10,
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
	/* margin-top:30rpx; */
	/* background-color: #faebea; */
}
.facility {
	background-color: #faebea;
}
</style>