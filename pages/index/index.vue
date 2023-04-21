<template>
	<view class="page-items">
		<Search/>
		<Banner :itemList="itemList"/>
		<uni-notice-bar show-icon scrollable
						text="Sports Center is pretty great!" />			
		<Card :DataList="orderNavbar" name="" extra=""></Card>

		<!-- <TopNavBar :width="width" :height="height" :barNameList="barNameList"></TopNavBar>
		<view style="text-align: center; margin-top: -350rpx; margin-bottom: 25rpx;">
			<uni-datetime-picker type="datetime" style="text-align: center;"></uni-datetime-picker>
			<button type="warn" size="mini"	class="btn">Find Suitable Places</button>
		</view> -->
		<uni-section title="Recommend For You"  padding class="decoration" titleFontSize="30rpx" titleColor="#4c4950"> 
			<Book :activity="recommendActivities[0]"></Book>
			<Book :activity="recommendActivities[1]"></Book>
		</uni-section>
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
	import Book from '@/components/book/index.vue'
	import Time from '@/components/time/index.vue'
	import Config from '@/config.js'
	
	const urlPrefix = Config.urlPrefix
	
	
	const App = getApp()
	const width = "25%"
	const itemList=[
		{id:0, url:'/static/swiper/swiper1.jpg'},
		{id:1, url:'/static/swiper/swiper2.jpg'},
		{id:2, url:'/static/swiper/swiper3.jpg'},
	]
	const orderNavbar = [
	  { id: '0', name: 'Swimming pool', iconpath: '/static/icon/swim.png',url:'../choosefacility/index?type=Swimming pool' },
	  { id: '1', name: 'Fitness room', iconpath: '/static/icon/squash.png',url:'../choosefacility/index?type=Fitness room' },
	  { id: '2', name: 'Squash court', iconpath: '/static/icon/fitness.png',url:'../choosefacility/index?type=Squash court' },
	  { id: '3', name: 'Sports hall', iconpath: '/static/icon/sports.png',url:'../choosefacility/index?type=Sports hall' },
	]
	const barNameList = [
		{name: 'Swim',id: '0'}, 
		{name: 'Fitness',id: '1'}, 
		{name: 'Squash',id: '2'},
		{name: 'Sports',id: '3'},]
	
	let recommendActivities = [
		{
			id: 0,
			capacity: 0,
			facilityId: 0,
			name: '',
			note: '',
			price: '',
			status: '',
			userAmount: 0
		},
		{
			id: 0,
			capacity: 0,
			facilityId: 0,
			name: '',
			note: '',
			price: '',
			status: '',
			userAmount: 0
		},
	]
		
	const barContentList= [
		{
			id:"01",
			title:"To be Paid",
			status:"unused",
			time:"2023-4-1",
			mft_components:"Time"
			
		},
		{
			id:"02",
			title:"Paid",
			status:"1",
			time:"2023-4-2",
			mft_components:"Time"
			
		},
		{
			id:"03",
			title:"Cancelled",
			status:"2",
			time:"2023-4-3",
			mft_components:"Time"
			
		},
		{
			id:"04",
			title:"Cancelled",
			status:"2",
			time:"2023-4-3",
			mft_components:"Time"
			
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
		  TopNavBar,
		  Book,
		  Time
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
			  width,
			  barNameList,
			  barContentList,
			  tabIndex: "ChooseTime",
			  recommendActivities,
			  tabBars:[
			  	{
			  		name: "Swimming",
			  		id: "Swimming"
			  	},
			  	{
			  		name:"Fitness",
			  		id:"Fitness"
			  	},
			  	{
			  		name: "Squash",
			  		id: "Squash"
			  	},
			  	{
			  		name: "Sports",
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
		mounted() {
			uni.request({
				url: urlPrefix + '/user/staffs',
				method: 'GET',
			}).then((res)=>{
				console.log('result', res.data.result)
			})
			uni.request({
				url: urlPrefix + '/activity',
				method: 'GET',
			}).then(res => {
				console.log('activities: ', res.data.result[0])
				this.recommendActivities[0].id = res.data.result[0].id
				this.recommendActivities[0].capacity = res.data.result[0].capacity
				this.recommendActivities[0].facilityId = res.data.result[0].facilityId
				this.recommendActivities[0].name = res.data.result[0].name
				this.recommendActivities[0].note = res.data.result[0].note
				this.recommendActivities[0].price = res.data.result[0].price
				this.recommendActivities[0].status = res.data.result[0].status
				this.recommendActivities[0].userAmount = res.data.result[0].userAmount
				
				this.recommendActivities[1].id = res.data.result[1].id
				this.recommendActivities[1].capacity = res.data.result[1].capacity
				this.recommendActivities[1].facilityId = res.data.result[1].facilityId
				this.recommendActivities[1].name = res.data.result[1].name
				this.recommendActivities[1].note = res.data.result[1].note
				this.recommendActivities[1].price = res.data.result[1].price
				this.recommendActivities[1].status = res.data.result[1].status
				this.recommendActivities[1].userAmount = res.data.result[1].userAmount
			})
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
	// .card{
	// 	// margin-left:30rpx ;
	// }
  .container {
    background: #fff;
  }
  .decoration{
  	  // background-color: #f5d9dd;
	  // background-color: #fbfbfb;
	  background-color: #fbfbfb;
    }
	.btn{
		margin-top:20rpx;
		border-radius: 10rpx;
	}
</style>