<template>
<v-flex class="mt-15" align-self-center>
	<v-card width="600">
  	<v-card-text class="pb-15">
    	<h4 class="text-center">Кем вы являетесь?</h4>
  	</v-card-text>
		<v-card-actions class="d-flex justify-space-around">
			<v-btn to="/neighbors-signup/">Изолированный</v-btn>
			<v-btn to="/volunteers-signup/">Волонтер</v-btn>
		</v-card-actions>
 	</v-card>
</v-flex>
</template>

<script>
export default{
	name: "select-status"
}
</script>
