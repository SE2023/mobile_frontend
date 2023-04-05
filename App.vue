<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	body {
		font-family: regular;
	}

	@font-face {
		font-family: regular;
		src: url("./static/font/OpenSans-Regular.ttf");
	}
</style>