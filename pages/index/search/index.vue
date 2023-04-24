<template>
  
 <view class="diy-search">
	<!-- 搜索框 -->
	<uni-search-bar class="uni-mt-10" radius="100" placeholder="search" clearButton="none" cancelButton="none" @confirm="search" />
   <!-- <view class="inner"  @click="onTargetSearch">
      <view class="search-input">
        <text class="search-icon iconfont icon-search"></text>
        <text>search</text>
      </view>
    </view> -->
  </view>
</template>

<script>
  export default {

    /**
     * 组件的属性列表
     * 用于组件自定义设置
     */
    props: {
      itemIndex: String,
      itemStyle: Object,
      params: Object
    },

    /**
     * 组件的方法列表
     * 更新属性和数据的方法与更新页面数据的方法类似
     */
    methods: {

      /**
       * 跳转到搜索页面
       */
      onTargetSearch() {
        this.$navTo('pages/search/index')
      }

    }

  }
</script>

<style lang="scss" scoped>
	.diy-search {
		background:#FFFFF0;
	}

	.inner {
		height: 60rpx;
		background: #fff;
		overflow: hidden;
		
		&.radius {
			border-radius: 10rpx;
		}

		&.round {
			border-radius: 60rpx;
		}
	}

	.search-input {
		height: 60rpx;
		line-height: 60rpx;
		color: #999;
		padding: 0 20rpx;

		.search-icon {
			margin-right: 8rpx;
		}
	}
</style>
