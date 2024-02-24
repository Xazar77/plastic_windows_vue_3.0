

<script setup>
	import { animate } from '../../helpers/animate'

	import { ref, computed, onUnmounted } from 'vue'


	const isNumber = (e) => {
			let regex = /[0-9]/
			if(!regex.test(e.key)) {
				e.returnValue = false
				if(e.defaultPrevented) e.preventDefault()
			}
	}

	const selectedType = ref('--')
	const selectedMaterial = ref('--')
	const squareValue = ref('')
	let interval = ref(null)
	let calcTotal = ref(null)
	let total = ref(0)

	const totalValue = computed(() => {
		if(selectedType.value !== '--' && selectedMaterial.value !== '--' && squareValue.value !== '') {

			total.value = +selectedType.value * +selectedMaterial.value * +squareValue.value *1000
			interval = setTimeout(() => {
				animate({
					duration: 1000,
					timing(timeFraction) {
						return timeFraction;
					},
					draw(progress) {
						calcTotal.value.placeholder = Math.round(progress * total.value) + ' руб';
					}
				});
			},200);
		} 

	})
	onUnmounted(() => {
		clearTimeout(interval)
	})
</script>

<template>
	<div id="calc" class="section">
    	<div class="container">
    		<div class="section-title">
    			<div class="heading-image"><i class="calc-ico"></i></div>
    			<h2 class="heading white">Калькулятор стоимости</h2>
    		</div>
			<div class="row">
				<div class="col-md-12 col-md-6">
					<div class="form-group">
						<label for="calc-type" class="text-warning">Балкон/Лоджия</label>
						<select v-model="selectedType" name="calc-type" class="form-control form-control-sm" id="calc-type">
						  <option>--</option>
						  <option value="1.2">Балкон</option>
						  <option value="1.3">Лоджия</option>
						</select>
					</div>
				</div>

				<div class="col-md-12 col-md-6">
					<div class="form-group">
						<label for="calc-type-material" class="text-warning">Выберите тип остекления</label>
						<select v-model="selectedMaterial" name="calc-type-material" class="form-control form-control-sm" id="calc-type-material">
						  <option>--</option>
						  <option value="1">Холодное Аллюминием</option>
						  <option value="2">Теплое ПВХ</option>
						</select>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-12 col-md-6">
					<div class="form-group">
						<label for="calc-input" class="text-warning">Площадь (м&sup2;)</label>
						<input 
							v-model="squareValue"
							name="calc-input" 
							type="number" 
							class="form-control" 
							id="calc-input" 
							placeholder="Площадь (м&sup2;)">
					  </div>
				</div>
				<div class="col-md-12 col-md-6">
					<div class="form-group">
						<label for="calc-total" class="text-warning">Итого</label>
						<input
							@keypress="isNumber"
							name="calc-total" 
							type="number" 
							class="form-control" 
							id="calc-total"
							ref="calcTotal" 
							:placeholder="totalValue? totalValue :'Итого'" 
							disabled/>
					  </div>
					  
				</div>
			</div>
    	</div>
    </div>    
</template>

<style scoped>

</style>