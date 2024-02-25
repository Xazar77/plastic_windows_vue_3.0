<script setup>
    import InputMask from 'primevue/inputmask';
    import ResponseMessageModalComponent from '../modals/ResponseMessageModalComponent.vue';
    import { ref, computed } from 'vue'
    import { useRoute } from 'vue-router';
    
    const route = useRoute()


    const props = defineProps({
        nameAttbr:{
            type: String
        },
        className: {
            type: String
        },
        buttonText: {
            type: String
        },
        classBtn: {
            type: String
        }
    })
    
   
    const name = ref('')
    const phone = ref('')
    const isOpen = ref(false)
   


    const isNumber = (e) => {
        let regex = /[0-9]/
        if(!regex.test(e.key)) {
            e.returnValue = false
            if(e.defaultPrevented) e.preventDefault()
        }
    }


    const isValidName = computed(() => {
        return  /[а-яё-]{2,24}/gi.test(name.value)
    })

    const isValidPhone = computed(() => {
        const value = phone.value.substring(17)
        return value === ''? false : value !=='_'? true : false
        
    })

    const validForm = computed(() => {
        
        return isValidName.value && isValidPhone.value
       
    })
    
    const pageName = computed(() => {
        return route.name
    })
  

    const resetInput = () => { 
        name.value = (name.value.charAt(0).toUpperCase() + name.value.substring(1).toLowerCase()).replace(/[^а-яё-]/gi, '')
    }

    // console.log(calcTotal.value.placeholder)

    const submit = () => {
  
      if (!validForm) {
     
        return
    };
            
        let newFormData = {
            name: name.value,
            phone: phone.value
        };

        if(pageName.value === 'balconies') {
            if(document.getElementById('calc-total').placeholder !== 'Итого') {
                newFormData['total'] = document.getElementById('calc-total').placeholder

            } else {
                newFormData['total'] = 0
            }
            
        }

        fetch("http://localhost:2601/contacts", {
        method: "POST",
        body: JSON.stringify(newFormData),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res) => {
        if (res.ok) {
          document.querySelector('form').reset();
            name.value = ''
            phone.value = ''
            // isOpen.value = true
        }
      });

    }



    
    


</script>

<template>


    <form :name="nameAttbr" :class="className ?? ''"  @submit.prevent="submit" >
        <div class="form-group">
            <div class="col-sm-12" v-if="nameAttbr === 'action-form'">
                <input type="text" 
                    name="fio"
                    class="form-input" 
                    :class="isValidName? 'form-control' : 'error'" 
                    placeholder="ваше имя"
                    v-model="name"
                    @input="resetInput"
                    />
                    
            </div>
            <input v-else type="text" 
                name="fio"
                class="form-input"
                :class="isValidName? 'form-control' : 'error'"  
                placeholder="ваше имя"
                v-model="name"
                @input="resetInput"
                /> 
                
            </div>
            
            <div class="form-group">
                <div class="col-sm-12" v-if="nameAttbr === 'action-form'">
                    <InputMask type="text"
                    v-model="phone" mask="+7 (999) 999-99-99" 
                    name="phone" 
                    class="form-input"
                    :class="isValidPhone? 'form-control' : 'error'"   
                    placeholder="ваш телефон" 
                    @keypress="isNumber"
                    />
                                                                                                                                                                                                                                                                                                                                                

            </div>
            <InputMask v-else type="text"
                v-model="phone" mask="+7 (999) 999-99-99" 
                name="phone" 
                class="form-input"
                :class="isValidPhone? 'form-control' : 'error'"   
                placeholder="ваш телефон"
                @keypress="isNumber"
                />

        </div>
        <div class="form-group" v-if="nameAttbr === 'action-form'">
            <div class="col-sm-12">
                <div class="order-form-button">
                    <input type="hidden" name="page" value="Окна">
                    <button type="submit" class="btn btn-warning btn-block feedback">Получить скидку!</button>
                </div>
            </div>
        </div>
        <div class="form-action" v-else>
            <div class="text-center">
                <button type="submit" :disabled="!validForm" class="btn  feedback" :class="classBtn">{{ buttonText }}</button>
            </div>
        </div>
        <div class="form-policy" v-if="nameAttbr === 'action-form'">
            <span class="help-block">Мы гарантируем 100% онфиденциальность. Ваша информация не будет распространяться.</span>
        </div>
        <input type="hidden" name="page" value="Окна" v-else>
        <input type="hidden" name="subject" value="Стандартные ПВХ-окна" v-if="nameAttbr === 'application-form' && nameAttbr !== 'action-form'">
    </form>


</template>

