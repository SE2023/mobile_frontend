<template>
	<view class="main">
		<uni-list v-for="(item, index) in itemList" :key="index" @click="handleService(item.url)">
			<uni-list-item :title="item.name" ></uni-list-item>
		</uni-list>
	</view>
</template>

<script>
	const itemList = [
	  { id: 'security', name: 'Account Security' ,url:'' },
	  { id: 'language', name: 'Language', url:'' },
	  { id: 'textsize', name: 'Text Size', url:'' },
	  { id: 'information', name: 'Information', url:'' },
	  { id: 'helpfeedback', name: 'Help & Feedback', url:'' },
	]
	
	export default {
		data() {
			return {
			itemList
			}
		}
	}
</script>

<style>
</style>