<template>

	<uni-row class="demo-uni-row" :width="nvueWidth">
		<uni-col :span="3" class="text">
			From 
		</uni-col>
		<uni-col :span="9">
			<picker class="start" mode="time" @change="bindsTimeChange">
				<view>{{ stime }}</view>
			</picker>
		</uni-col>
		<uni-col :span="2" class="text">
			To 
		</uni-col>
		<uni-col :span="9">
			<picker class="start" mode="time" @change="bindeTimeChange">
				<view>{{ etime }}</view>
			</picker>
		</uni-col>
	</uni-row>
	
</template>
<script>
export default {
	name:"TimePicker",
	data() {
		return {
			stime: 'choose start time',
			etime: 'choose end time',
			gutter: 0,
			nvueWidth: 730
		};
	},
	methods: {
		bindsTimeChange: function(e) {
			this.stime = e.detail.value;
			this.$emit("getStartTime",this.stime);
		},
		bindeTimeChange: function(e) {
			this.etime = e.detail.value;
			this.$emit("getEndTime",this.etime);
		}
	}
};
</script>

<style>
.start{
	height:50rpx;
	border: 1px solid  gainsboro;
	color:gray;
	text-align: center;
	border-radius:15rpx;
	}
.text{
	color: gray;
	text-align: center;
	
}
</style>

