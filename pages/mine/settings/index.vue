<template>
	<view class="main">
		<uni-list v-for="(item, index) in itemList" :key="index" @click="toTargetItem(item)">
			<uni-list-item class="choice" :title="item.name" ></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	const itemList = [
	  { id: 'security', name: 'Account Security' ,url:'../security/index' },
	  { id: 'language', name: 'Language', url:'' },
	  { id: 'textsize', name: 'Text Size', url:'' },
	  { id: 'helpfeedback', name: 'Help & Feedback', url:'../help/index' },
	  { id: 'aboutBodyBuddy', name: 'About BodyBuddy', url:'../about/index' },
	]
	
	export default {
		data() {
			return {
			itemList
			}
		},
		methods: {
			// 跳转到详情页
			toTargetItem(item) {
				uni.navigateTo({
					url:item.url
				})
			},
		}
	}
</script>

<style>
</style>