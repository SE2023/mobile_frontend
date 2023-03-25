<template>
	<view>
		<TopNavBar :width="width" :barNameList="barNameList" :barContentList="barContentList"></TopNavBar>

	</view>
</template>

<script>
	import TopNavBar from '@/components/top-navbar/index.vue'
	const barNameList = [
		{name: 'To be Paid',id: '0'}, 
		{name: 'Paid',id: '1'}, 
		{name: 'Cancelled',id: '2'},]
		
	const barContentList= [
		{
			id:"01",
			title:"To be Paid",
			status:"unused",
			time:"2023-4-1",
			
		},
		{
			id:"02",
			title:"Paid",
			status:"1",
			time:"2023-4-2",
			
		},
		{
			id:"03",
			title:"Cancelled",
			status:"2",
			time:"2023-4-3",
			
		},]
		const width = "33.3%"
		
	export default{
		components:{
			TopNavBar
		},
		data(){
			return{
				barNameList,
				barContentList,
				width,
			}
		},
		methods:{
			
		}
	}
</script>


<style>
	#tab{
		width: 100%;
		display: flex;
	}
	.tabName{
		text-align: center;
		width: 33.33%;
		display: inline-block;
		height: 80rpx;
		line-height: 80rpx;
		white-space: nowrap;
	}
	.tabName_text{
		display: inline-block;
		width: 100%;
		height: 100%;
	}
	.active_text{
		/* background-color: #FDDD9B; */
		color: #FA8072;
		border-bottom: 2px solid #FA8072;
	}
	#tabContent{
		width: 100%;
	}
</style>
