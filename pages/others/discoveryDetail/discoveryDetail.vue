<template>
	<view>
		<Banner :itemList="itemLists[id]"/>
		<uni-section title="INTRODUCTION" type="line"></uni-section>
		<uni-card margin="8px" padding="5px">
			<text class="uni-body">{{ introductions[id] }}</text>
		</uni-card>
		<uni-section title="BENIFIT" type="line"></uni-section>
		<uni-section class="mb-10" :title="benifitLists[id][0].title" :sub-title="benifitLists[id][0].desc">
			<template v-slot:decoration>
			  <view class="decoration"></view>
			</template>
		</uni-section>
		<uni-section class="mb-10" :title="benifitLists[id][1].title" :sub-title="benifitLists[id][1].desc">
			<template v-slot:decoration>
			  <view class="decoration"></view>
			</template>
		</uni-section>
		<uni-section class="mb-10" :title="benifitLists[id][2].title" :sub-title="benifitLists[id][2].desc">
			<template v-slot:decoration>
			  <view class="decoration"></view>
			</template>
		</uni-section>
		
		<uni-section title="NOTE" type="line"></uni-section>
		<uni-section class="mb-10" :title="noteLists[id][0]">
			<template v-slot:decoration>
			  <view class="danger"></view>
			</template>
		</uni-section>
		<uni-section class="mb-10" :title="noteLists[id][1]">
			<template v-slot:decoration>
			  <view class="danger"></view>
			</template>
		</uni-section>
		<uni-section class="mb-10" :title="noteLists[id][2]">
			<template v-slot:decoration>
			  <view class="danger"></view>
			</template>
		</uni-section>
	</view>
</template>

<script>
	import Banner from '@/components/banner'
	export default {
		components: {
			Banner,
		},
		data() {
			return {
				id: 0,
				itemLists: [
					[{url:'/static/discovery/4.png'}, {url:'/static/discovery/21.png'}, {url:'/static/discovery/6.png'}],
					[{url:'/static/discovery/8.png'}, {url:'/static/discovery/9.png'}, {url:'/static/discovery/10.png'}],
					[{url:'/static/discovery/26.jpeg'}, {url:'/static/discovery/27.jpg'}, {url:'/static/discovery/28.jpg'}],
					[{url:'/static/discovery/11.png'}, {url:'/static/discovery/12.png'}, {url:'/static/discovery/14.png'}],
				],
				introductions: [
					'A swimming pool is a structure designed for recreational or competitive swimming. It is typically a large, artificial basin filled with water and equipped with filters, pumps, and other equipment to maintain water quality and circulation.',
					'A facility that offers various exercise equipment and programs for individuals to improve their physical fitness. Fitness rooms can be found in a variety of settings, including schools, workplaces, hotels, and community centers.',
					'An enclosed indoor court used for playing the racquet sport of squash. The court is typically made of plaster, concrete, or wood and has four walls and a front wall with a small rectangular target known as the "tin."',
					'A large indoor space designed for a variety of sports and physical activities. Sports halls can be found in schools, colleges, community centers, and other recreational facilities.'
				],
				benifitLists: [
					[{'title': 'Cardiovascular health', 'desc': 'Improve cardiovascular health by increasing heart rate and strengthening the heart muscle.'}, {'title': 'Muscle strength and toning', 'desc': 'Engage all major muscle groups in the whole body, including the arms, legs, core, and back.'}, {'title': 'Stress reduction', 'desc': 'Swimming can be a relaxing and meditative activity that helps reduce stress and anxiety.'}],
					[{'title': 'Weight management', 'desc': 'Exercise can help with weight loss and weight management by burning calories and increasing metabolism.'}, {'title': 'Improved mental health', 'desc': 'Exercise is known to reduce stress and anxiety, improve mood, and promote overall mental well-being.'}, {'title': 'Reduced risk of chronic diseases', 'desc': 'Help reduce the risk of chronic diseases such as heart disease, diabetes, and certain types of cancer.'}],
					[{'title': 'Improved hand-eye coordination', 'desc': 'Improve hand-eye coordination and reaction time.'}, {'title': 'Muscle strength and toning', 'desc': 'Engage all major muscle groups in the whole body, including the arms, legs, core, and back.'}, {'title': 'Mental focus', 'desc': 'Squash requires concentration and quick decision-making, leading to improved mental focus and agility.'}],
					[{'title': 'Cardiovascular health', 'desc': 'Improve cardiovascular health by increasing heart rate and strengthening the heart muscle.'}, {'title': 'Muscle strength and toning', 'desc': 'Engage all major muscle groups in the whole body, including the arms, legs, core, and back.'}, {'title': 'Stress reduction', 'desc': 'Swimming can be a relaxing and meditative activity that helps reduce stress and anxiety.'}]
				],
				noteLists: [
					['Never swim alone. Always swim in a group.', 'Avoid diving into shallow water or water of unknown depth.', 'Never swim under the influence of drugs or alcohol.'],
					['Use equipment properly and follow instructions carefully.', 'Wear appropriate clothing and footwear.', "Don't push yourself too hard and listen to your body's signals."],
					['Always warm up and stretch properly before playing.', 'Use appropriate equipment.', 'Stay hydrated by drinking water before, during, and after playing.'],
					['Stay hydrated by drinking water before, during, and after playing.', 'Be mindful of other players and avoid actions that could cause harm to yourself or others.', 'Follow the rules of the sport and play in a controlled manner.']
				]
			}
		},
		onLoad(options) {
			this.id = options.id;
		}
	}
</script>

<style>
/* .mb-10 {
	margin-bottom: 10px;
}
	 */
.decoration {
    width: 6px;
    height: 6px;
	margin-right: 4px;
    border-radius: 50%;
	background-color: #18bc37;
}

.danger {
    width: 6px;
    height: 6px;
	margin-right: 4px;
    border-radius: 50%;
	background-color: red;
}
</style>
