<template>
	<view class="list">
		<view  v-for="(item,index) in FacilityList" :key="item.id" class="" @click="toTargetItem(item)">
			<Facility :item="item"></Facility>
		</view>
	</view>
	
</template>

<script>
	import Facility from '@/components/facility/index.vue'
	const FacilityList=[
		{id:"0",name:"Swimming Pool 1",location:"BodyBuddy",price:15,url:'../facilities/details/index'},
		{id:"1",name:"Swimming Pool 2",location:"BodyBuddy",price:20,url:'../facilities/details/index'},
		{id:"2",name:"Swimming Pool 3",location:"BodyBuddy",price:17,url:'../facilities/details/index'},
		{id:"3",name:"Swimming Pool 4",location:"BodyBuddy",price:15,url:'../facilities/details/index'},
	]
	export default{
		data() {
			return{
				FacilityList,
			}
		},
		components:{
			Facility
		},
		methods: {
			// 跳转到详情页
			toTargetItem(item) {
				uni.navigateTo({
					url:item.url,
					id: item.id
					// url:item.url+"?id="+item.id,
				})
			},
		}
	}
</script>

<style>
.list{
	margin-top:30rpx;
}
</style>