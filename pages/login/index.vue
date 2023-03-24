<template>
	<view>
		<uni-forms ref="form" :modelValue="formData" :rules="rules" labelPosition="top" style="margin: 20rpx;">
			<uni-forms-item label="Username" name="username"><uni-easyinput type="text" v-model="formData.username" @input="binddata('username', formData.username)" /></uni-forms-item>
			<uni-forms-item label="Password" name="password" style="position: relative; bottom: 10px;">
				<uni-easyinput class="input" v-model="formData.password" type="password" @input="binddata('password', formData.password)" ></uni-easyinput>
			</uni-forms-item>
		</uni-forms>
		<button @click="submit" style="margin-left: 20rpx; margin-right: 20rpx; background-color: #f25e5e; color: white; font-weight: bold; height: 45px; position: relative; bottom: 20rpx;">Submit</button>
		<view style="text-align: center; text-decoration: underline; color: #f25e5e; font-size: 25rpx; margin-top: 8rpx;" @click="toRigisterPage">No account? Rigister now -></view>
	</view>
</template>

<script>
import Config from '@/config.js'
const urlPrefix = Config.urlPrefix

export default {
	data() {
		return {
			formData: {
				username: '',
				password: ''
			},
			rules: {
				// 对name字段进行必填验证
				username: {
					rules: [
						{
							required: true,
							errorMessage: 'Please input your username'
						}
					]
				},
				// 对password字段进行必填验证
				password: {
					rules: [
						{
							required: true,
							errorMessage: 'Please input your password'
						},
						{
							minLength: 6,
							maxLength: 20,
							errorMessage: 'The length of your password is between {minLength} and {maxLength}.'
						}
					]
				}
			}
		};
	},
	methods: {
		submit() {
			this.$refs.form
				.validate()
				.then(res => {
					console.log('formData', this.formData)
					uni.request({
						url: urlPrefix + '/login',
						header: {
							'content-type': 'application/json;charset:utf-8',
						},
						method: 'POST',
						data: this.formData,
						success(res) {
							console.log(res)
							if (res.data.code === 0) {
								uni.showModal({
									title: 'Login Successfully!',
									confirmText: 'Confirm',
									showCancel: false,
									success: function(res) {
										if (res.confirm) {
											uni.redirectTo({
												url: '/pages/mine/mine'
											})
										}
									}
								});
							} else {
								uni.showModal({
									title: res.data.message,
									confirmText: 'Confirm',
									showCancel: false
								})
							}
						}
					})
				})
				.catch(err => {
					console.log('Invalid form data：', err);
				});
		},
		toRigisterPage() {
			uni.navigateTo({
				url: '/pages/register/register'
			})
		}
	}
};
=======
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
	input{
	    outline-style: none ;
		height: 70rpx;
		border-radius: 7rpx;
	    border: 1px solid #dcdcdc; 
	}
</style>
