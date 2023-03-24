<template>
	<view class="example-body">
		<uni-datetime-picker type="date" :clear-icon="false" v-model="single" @maskClick="maskClick" />
	</view>
	<view>
		<button class="time-btn" @click="openTime">choose specific time</button>
	</view>
	<button type="warn" size="mini"	class="btn">Find Suitable Places</button>
</template>

<script>
	import timeSlot from "@/components/wanghexu-timeslot/wanghexu-timeslot"
	
	export default {
		name:"Time",
		components:{
			timeSlot
		},
		data() {
			return {
				time: '',
				single: '',
				datetimesingle: '',
				range: [Date.now(), '2026-08-08'],
				datetimerange: [],
				start: Date.now() - 1000000000,
				end: Date.now() + 1000000000
			}
		},
		onLoad() {
		
		},
		watch: {
			datetimesingle(newval) {
				console.log('Choose one:', this.datetimesingle);
			},
			range(newval) {
				console.log('Choose period:', this.range);
			},
			datetimerange(newval) {
				console.log('Choose period:', this.datetimerange);
			}
		},
		mounted() {
			setTimeout(() => {
				this.datetimesingle = Date.now()
				this.single = ''
				this.datetimerange = ["2022-10-12 0:01:10", "2026-08-08 23:59:59"]
			},3000)
		},
		methods:{
			//点击吊起弹窗
			openTime(){
				this.$refs.timeslot.open()
			},
			//确认
			confirmTime(e){
				console.log(e)
				this.time = e.start.hour+":"+e.start.min+"~"+e.end.hour+":"+e.end.min
			},
			change(e) {
				this.single = e
				console.log('Event change:', this.single = e);
			},
			changeLog(e) {
				console.log('Event change:', e);
			},
			maskClick(e){
				console.log('Event maskClick:', e);
			}
		}
	}
</script>


<style lang="scss">
	.example-body {
		width: 100%;
		background-color: #fff;
		text-align: center;
		// padding: 10px;
	}
	.content{
		width: 686rpx;
		margin: 0 auto;
	}
	.time-btn{
		height: 70rpx;
		width: 100%;
		font-size: 30rpx;
		background-color: #fff;
		color: #555555;
		border-radius: 10rpx;
		display: flex;
		justify-content: center;
	}
	.btn{
		margin-left:225rpx;
		// margin-top:10rpx;
		border-radius: 10rpx;
	}
</style>
