<template>
	<view class="page-items">
		<Search/>
		<Banner :itemList="itemList"/>
		<uni-notice-bar show-icon scrollable
						text="sportscenter真不错" />			
		<Card :DataList="orderNavbar" name="" extra=""></Card>
		<TopNavBar :barNameList="barNameList" :barContentList="barContentList"></TopNavBar>
		<!-- <Tabbar :tabBars="tabBars" @TarTap="TarData" :tabIndex="tabIndex" ></Tabbar>
		<component v-bind:is="currentTabComponent"></component> -->
		<view>Recommend</view>
	</view>
</template>

<script>
	import Search from './search'
	import Banner from '@/components/banner'
	import Card from '@/components/card'
	import Tabbar from '@/components/tabbar'
	import TopNavBar from '@/components/top-navbar/index.vue'
	import Swimming from '@/components/tabbar-component/swimming.vue'
	import Fitness from '@/components/tabbar-component/fitness.vue'
	import Squash from '@/components/tabbar-component/Squash.vue'
	import Sports from '@/components/tabbar-component/Sports.vue'
	
	const App = getApp()
	const itemList=[
		{id:0, url:'/static/swiper/swiper1.jpg'},
		{id:1, url:'/static/swiper/swiper2.jpg'},
		{id:2, url:'/static/swiper/swiper3.jpg'},
	]
	const orderNavbar = [
	  { id: 'all', name: 'Swimming Pool', iconpath: '/static/icon/tobepaid.svg',url:'../facilities/details/index' },
	  { id: 'payment', name: 'Fitness Room', iconpath: '/static/icon/paid.svg' },
	  { id: 'delivery', name: 'Squash Courts', iconpath: '/static/icon/cancelled.svg' },
	  { id: 'delivery', name: 'Sports Hall', iconpath: '/static/icon/cancelled.svg' },
	]
	const barNameList = [
		{name: 'FitnessRoom',id: '0'}, 
		{name: 'SwimmingPool',id: '1'}, 
		{name: 'Squash',id: '2'},
		{name: 'SportsCenter',id: '3'},]
		
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
	export default {
		components: {
		  Search,
		  Banner,
		  Card,
		  Tabbar,
		  Swimming,
		  Fitness,
		  Squash,
		  Sports ,
		  TopNavBar
		},
		data() {
			return {
			  // 页面参数
			  options: {},
			  // 页面属性
			  page: {},
			  // 页面元素
			  items: [],
			  orderNavbar,
			  itemList,
			  barNameList,
			  barContentList,
			  tabIndex: "ChooseTime",
			  tabBars:[
			  	{
			  		name: "SwimmingPool",
			  		id: "Swimming"
			  	},
			  	{
			  		name:"FitnessRoom",
			  		id:"Fitness"
			  	},
			  	{
			  		name: "SquashCourts",
			  		id: "Squash"
			  	},
			  	{
			  		name: "SportsHall",
			  		id: 'Sports'
			  	},
			
			  ],
			  	currentTabComponent: "Swimming"
			  
			}
		},
		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad() {
		  
		},
		methods: {
			TarData(item){
							//设置id，来显示选中那个标签，显示下划线
							this.tabIndex = item.id;
							//显示标签对应的组件内容
							this.currentTabComponent = item.id
						}


		}
	}
</script>

<style lang="scss" scoped>
  .container {
    background: #fff;
  }
</style>
