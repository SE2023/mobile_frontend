<template>
	<view>
		<uni-forms ref="form" :modelValue="formData" :rules="rules" labelPosition="top" style="margin: 20rpx;">
			<uni-forms-item label="Username" name="username">
				<uni-easyinput v-model="formData.username" @input="binddata('username', formData.username)"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item label="Email" name="email" style="position: relative; bottom: 10px;">
				<uni-row class="demo-uni-row">
					<uni-col :span="18"><uni-easyinput v-model="formData.email" @input="binddata('email', formData.email)"></uni-easyinput></uni-col>
					<uni-col :span="5" :offset="1">
						<button style="height: 37px; background-color: #f25e5e; color: #ffffff; font-size: 30rpx;" @click="getCaptcha" :disabled="captchaDisabled">
							{{ getCaptchaText }}
						</button>
					</uni-col>
				</uni-row>
			</uni-forms-item>
			<uni-forms-item label="Captcha" name="confirmCode" style="position: relative; bottom: 20px;">
				<uni-easyinput v-model="formData.confirmCode" @input="binddata('confirmCode', formData.confirmCode)"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item label="Password" name="password" style="position: relative; bottom: 30px;">
				<uni-easyinput type="password" v-model="formData.password" @input="binddata('password', formData.password)"></uni-easyinput>
			</uni-forms-item>
			<uni-forms-item label="ConfirmedPassword" name="confirmedPassword" style="position: relative; bottom: 40px;">
				<uni-easyinput type="password" v-model="formData.confirmedPassword" @input="binddata('confirmedPassword', formData.confirmedPassword)"></uni-easyinput>
			</uni-forms-item>
		</uni-forms>
		<button
			@click="submitData"
			style="margin-left: 20rpx; margin-right: 20rpx; background-color: #f25e5e; color: white; font-weight: bold; height: 45px; position: relative; bottom: 50rpx;"
		>
			Submit
		</button>
	</view>
</template>

<script>
import Config from '@/config.js';
const urlPrefix = Config.urlPrefix;

export default {
	data() {
		return {
			formData: {
				username: '',
				email: '',
				confirmCode: '',
				password: '',
				confirmedPassword: ''
			},
			getCaptchaText: 'Captcha',
			countNumber: 60,
			captchaDisabled: false,
			rules: {
				username: {
					rules: [
						{
							required: true,
							errorMessage: 'Please input your username'
						}
					]
				},
				email: {
					rules: [
						{
							required: true,
							errorMessage: 'Please input your email'
						},
						{
							format: 'email',
							errorMessage: 'The email is invalid'
						}
					]
				},
				confirmCode: {
					rules: [
						{
							required: true,
							errorMessage: 'Please input the captcha'
						},
						{
							length: 6,
							errorMessage: 'The length should be 4'
						}
					]
				},
				password: {
					rules: [
						{
							required: true,
							errorMessage: 'Please input your password'
						},
						{
							minLength: 6,
							maxLength: 20,
							errorMessage: 'The length of your password is between {minLength} and {maxLength}.'
						}
					]
				},
				confirmedPassword: {
					rules: [
						{
							required: true,
							errorMessage: 'Please input your password'
						}
						// {
						// 	validateFunction: function(rule, value, data, callback) {
						// 		if (value !== this.formData.password) {
						// 			callback('The 2 passwords does not match');
						// 		}
						// 		return true;
						// 	}
						// }
					]
				}
			}
		};
	},
	methods: {
		submitData() {
			console.log('sadf');
			this.$refs.form
				.validate()
				.then(res => {
					console.log('valid form data: ', res);
					uni.request({
						url: urlPrefix + '/Consumer',
						method: 'POST',
						data: this.formData
					})
						.then(res => {
							console.log('res.data.code: ', res);
							if (res.data.code === 0) {
								uni.showModal({
									title: 'Registered successfully!',
									confirmText: 'Confirm',
									cancelText: 'Cancel',
									success: function(res) {
										if (res.confirm) {
											uni.navigateTo({
												url: '/pages/login/index'
											})
										}
									}
								});
							} else {
								uni.showModal({
									title: 'Failed',
									confirmText: 'Confirm',
									cancelText: 'Cancel',
								});
							}
						})
						.catch(error => {
							console.log('error: ', error);
						});
				})
				.catch(err => {
					console.log('Invalid form data:', err);
				});
		},
		getCaptcha() {
			this.countNumber = 60;
			setInterval(() => {
				if (this.countNumber !== 0) {
					this.countNumber--;
					this.getCaptchaText = this.countNumber + 's';
					this.captchaDisabled = true;
				} else {
					this.getCaptchaText = 'Captcha';
					this.captchaDisabled = false;
				}
			}, 1000);
			uni.request({
				url: urlPrefix + '/Consumer/' + this.formData.email,
				method: 'POST'
			})
				.then(res => {
					console.log(res);
				})
				.catch(e => {
					console.log(e);
				});
		}
	}
};
</script>

<style></style>
