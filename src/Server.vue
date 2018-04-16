<template>
  <div>	
  <p>Sever Status: {{ status }} </p>
  <br>
  <button @click="changeStatus">Check Server Status</button>
  </div>
</template>

<script>
	export default {
		data: function() {
			return {
				status: 'Normal'
			}
		},
		methods: {
			changeStatus() {
				this.status = 'Critical!';
			}
		}
	}
</script>

