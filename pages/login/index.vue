<template>
	    <view>     
           <!-- <view class="uni-padding-wrap uni-common-mt" v-for="item in itemList">
             <span>{{item.inclination}}</span>
             <span>{{item.weight}}</span>
            </view> -->
	    </view>
</template>

<script>
	// import uniList from "@/components/uni-list/uni-list.vue"
	// import uniListItem from "@/components/uni-list-item/uni-list-item.vue"
	export default {
		// components: {uniList,uniListItem},
		data() {
			return {
				// productList: [],
			};
		},
		onLoad() {
			this.getList();
		},
		methods: {          
			getList() {         
				uni.request({
					url: "https://unidemo.dcloud.net.cn/api/news",                  
					method: 'get',
					dataType: 'json',
					success: (res) => {
						console.log(res.data);
						// this.productList = res.data;
					},                  
				});
			},
		}
	}   
	// export default {
	// 	data() {
	// 		return {
               
	// 		}
	// 	},
	// 	onLoad() {
 //             // this.getList();
	// 	},
	// 	// 测试mock.js
	// 	created() {
	// 	 	this.fetchData()
	// 	},
	// 	methods: {
	// 		fetchData(){
	// 			console.log('自我测试')
	// 			uni.request({
	// 			    url: 'http://localhost:8080/getResource/getData', //仅为示例，并非真实接口地址。
	// 			    success: (res) => {
	// 			        console.log(res.data);
	// 			        this.text = 'request success';
	// 			    }
	// 			});
	// 			// uni.request('http://localhost:8080/getResource/getData')
	// 		},
	// 	}		
	// }
</script>
<style>
</style>
