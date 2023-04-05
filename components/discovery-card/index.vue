<template>
	<view :style="card_style">
		<div id="image">
			<image :src="post.url" mode="aspectFill" id="cover_image" :style="cover_style" />
		</div>
		<div id="info" :style="info_style">
			<div id="title">
				{{post.title}}
			</div>
			<div id="author">
				<div id="avator">
					<image :src="post.avator" mode="aspectFill" id="avator_image" />
				</div>
				<div id="name">
					{{post.author}}
				</div>
				<div id="like" @click="like()">
					<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 -13 50 58">
						<path :fill="fill" :stroke="stroke" stroke-linecap="round" stroke-linejoin="round"
							stroke-width="8"
							d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.987 10.987 0 0 0 15 8Z" />
					</svg>{{like_count}}
				</div>
			</div>
		</div>
	</view>
</template>

<script setup>
	import {
		defineProps,
		onMounted,
		reactive,
		ref
	} from 'vue'
	const props = defineProps(['post'])
	// console.log(props.post.url)
	let like_count = ref(Math.ceil(Math.random() * 99))
	let fill = ref('none')
	let stroke = ref('currentColor')
	let cover_style = reactive({})
	let card_style = reactive({})
	let info_style = reactive({})
	const like = () => {
		if (fill.value != 'Red') {
			like_count.value += 1
			fill.value = 'Red'
			stroke.value = 'Red'
		} else {
			like_count.value -= 1
			fill.value = 'none'
			stroke.value = 'currentColor'
		}
	}
	if (props.post.id % 6 === 2) {
		cover_style['height'] = '180px'
		card_style['height'] = '228px'
		card_style['bottom'] = '0px'
	} else if (props.post.id % 6 === 4) {
		cover_style['height'] = '240px'
		card_style['position'] = 'relative'
		card_style['bottom'] = '60px'
		card_style['height'] = '288px'
	} else if (props.post.id % 6 === 3) {
		card_style['height'] = '288px'
	} else if (props.post.id % 6 === 0) {
		cover_style['height'] = '240px'
		card_style['height'] = '288px'
		card_style['position'] = 'relative'
		card_style['bottom'] = '60px'
		card_style['align-self'] = ''
	} else if (props.post.id % 6 === 5) {
		card_style['height'] = '288px'
	}
	if (props.post.id % 2 === 0) {
		card_style['position'] = 'relative'
		let mul = Math.floor((props.post.id - 1) / 6)
		console.log(props.post.id, mul)
		card_style['bottom'] = String(parseInt(card_style['bottom']) + 60 * mul) + 'px'
	}
</script>

<style scoped>
	#image {
		width: 100%;
	}

	#cover_image {
		width: 100%;
		border-radius: 10px;
	}

	#avator {
		width: 10%;
		margin-right: 5px;
	}

	#avator_image {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	#info {
		padding-left: 4%;
	}

	#title {
		height: 5%;
		font-weight: 600;
		display: inline;
	}

	#name {
		width: 70%;
	}

	#author {
		margin-top: 2px;
		color: gray;
		display: flex;
		flex-direction: row;
		font-size: 90%;
	}

	#like {
		width: 20%;
		align-self: flex-end;
	}

	view {
		overflow: hidden;
		display: flex;
		flex-direction: column;
		height: auto;
	}
</style>