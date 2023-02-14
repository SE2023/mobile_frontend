<template>
    <view class="uni-margin-wrap">
  			<swiper class="swiper" circular :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :style="{ height: `${imgHeights[imgCurrent]}px` }"
  				:duration="duration">
  				<swiper-item>
  					<view class="swiper-item uni-bg-red">
						<image src="../../../static/swiper1.jpg" mode=""></image>
					</view>
  				</swiper-item>
  				<swiper-item>
  					<view class="swiper-item uni-bg-green">B</view>
  				</swiper-item>
  				<swiper-item>
  					<view class="swiper-item uni-bg-blue">C</view>
  				</swiper-item>
  			</swiper>
  	</view>
</template>

<script>

  export default {
    name: 'Banner',

    /**
     * 组件的属性列表
     * 用于组件自定义设置
     */
    // props: {
    //   itemIndex: String,
    //   itemStyle: Object,
    //   params: Object,
    //   dataList: Array
    // },


    data() {
            return {
				imgHeights: [], // 图片的高度
                background: ['color1', 'color2', 'color3'],
                indicatorDots: true,
                autoplay: true,
                interval: 2000,
                duration: 500
            }
        },
    methods: {
			_imagesHeight({ detail }) {
			  const app = this;
			  // 获取图片真实宽度
			  const { width, height } = detail;
			  // 宽高比
			  const ratio = width / height;
			  // 计算的高度值
			  const viewHeight = app.windowWidth / ratio;
			  // 把每一张图片的高度记录到数组里
			  app.imgHeights.push(viewHeight);
			},
            changeIndicatorDots(e) {
                this.indicatorDots = !this.indicatorDots
            },
            changeAutoplay(e) {
                this.autoplay = !this.autoplay
            },
            intervalChange(e) {
                this.interval = e.target.value
            },
            durationChange(e) {
                this.duration = e.target.value
            }
    }

    // created() {
    //   const app = this;
    //   uni.getSystemInfo({
    //     success({ windowWidth }) {
    //       app.windowWidth = windowWidth > 750 ? 750 : windowWidth;
    //     }
    //   });
    // },

    /**
     * 组件的方法列表
     * 更新属性和数据的方法与更新页面数据的方法类似
     */
    // methods: {
    //   /**
    //    * 计算图片高度
    //    */
    //   _imagesHeight({ detail }) {
    //     const app = this;
    //     // 获取图片真实宽度
    //     const { width, height } = detail;
    //     // 宽高比
    //     const ratio = width / height;
    //     // 计算的高度值
    //     const viewHeight = app.windowWidth / ratio;
    //     // 把每一张图片的高度记录到数组里
    //     app.imgHeights.push(viewHeight);
    //   },

    //   /**
    //    * 记录当前指针
    //    */
    //   _bindChange(e) {
    //     this.imgCurrent = e.detail.current;
    //   }
    // }
  };
</script>

<style lang="scss" scoped>
  .uni-margin-wrap {
  		width: 690rpx;
  		width: 100%;
  	}
  	.swiper {
  		height: 300rpx;
  	}
  	.swiper-item {
  		display: block;
  		height: 300rpx;
  		line-height: 300rpx;
  		text-align: center;
  	}
  	.swiper-list {
  		margin-top: 40rpx;
  		margin-bottom: 0;
  	}
  	.uni-common-mt {
  		margin-top: 60rpx;
  		position: relative;
  	}
  	.info {
  		position: absolute;
  		right: 20rpx;
  	}
  	.uni-padding-wrap {
  		width: 550rpx;
  		padding: 0 100rpx;
  	}
</style>
