<template>
	<view>
		<scroll-view id="tab" scroll-x="true">
				<view v-for="(item,index) in barNameList" :key="item.id" class="tabName" :data-current="index" @click="ontabtap">
					<text class="tabName_text" :class="tabIndex == index?'active_text':''">{{item.name}}</text>
				</view>
		</scroll-view>
		<swiper id="tabContent" :current="tabIndex" @change="tabChange">
			<swiper-item v-for="(item,index) in barContentList" :key="item.id">
				<view>
					<text>{{item.title}}</text>
					<text>{{item.statusLabal}}</text>
					<text>{{item.content}}</text>
				</view>
			</swiper-item>
		</swiper>
	
	</view>

</template>

<script> 			
	export default{
		name:'OrderSwiper',
		props:{
			barNameList:Array,
			barContentList:Array,	
		},
		data(){
			return{
				tabIndex:0,	
			}
		},
		methods:{
			// scroll-view 点击 tab 时 改变下标
			ontabtap(e){
				let index = e.target.dataset.current || e.currentTarget.dataset.current;
				this.switchTab(index);
			},
			switchTab(index){
				if(this.tabIndex == index){
					return
				}
				this.tabIndex = index;
			},
			// swiper滑动时改变下标
			tabChange(e){
				let index = e.target.current || e.detail.current;  // 获取到当前移动到第几个
				this.switchTab(index);
			},
			// scroll-view 点击 tab 时 改变下标
			ontabtap(e){
				let index = e.target.dataset.current || e.currentTarget.dataset.current;
				this.switchTab(index);
			},			
			
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