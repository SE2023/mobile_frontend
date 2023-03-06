<template>
	<view>
		<view>
			{{props.item.title}}
		</view>
		<view>
			{{props.item.time}}
		</view>
		<view>
			{{props.item.status}}
		</view>
		<button>
			Cancle
		</button>
	</view>
</template>

<script lang='ts' setup>	
	import { defineProps } from 'vue'
	
	let props = defineProps(['item'])
	
	console.log('item in component', props.item)
</script>

<style>
</style>