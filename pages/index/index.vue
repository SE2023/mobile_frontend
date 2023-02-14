<template>
	<view class="container">
		<Search/>
		<Banner/>
		<uni-notice-bar show-icon scrollable
						text="sportscenter真不错" />
		<!-- <Window :itemStyle="item.style" :params="item.params" :dataList="item.data" /> -->
	</view>
</template>

<script>
	import Search from './search'
	import Banner from './banner'
	// import Window from './window'
	
	const App = getApp()
	export default {
		components: {
		  Search,
		  Banner,
		  // Window
		},
		data() {
			return {
			  // 页面参数
			  options: {},
			  // 页面属性
			  page: {},
			  // 页面元素
			  items: []
			}
		},
		/**
		 * 生命周期函数--监听页面加载
		 */
		onLoad() {
		  
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
  .container {
    background: #fff;
  }
</style>
