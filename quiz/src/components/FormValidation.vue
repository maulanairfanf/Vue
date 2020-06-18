<template>
    <div class="card">
        <h3 class="card-header text-center">Register Area</h3>
        <div class="card-body">
            <form action="">
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="">firstname</label>
                        <input type="text" class="form-control"
                        v-model.trim="$v.firstname.$model" :class="{
                            'is-invalid':$v.firstname.$error, 'is-valid':!$v.firstname.$invalid}">
                        <div class="valid-feedback">your firstname is valid</div>
                        <div class="invalid-feedback">
                            <span v-if="!$v.firstname.required">First name is required</span>
                            <span v-if="!$v.firstname.minLength">First name must have at least{{
                            $v.firstname.$params.minLength.min}} letters.
                            </span>
                            <span v-if="!v.firstname.maxLength">First name must have at most{{
                            V.firstname.$params.maxLength.max}} letters.
                            </span>
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="">lastname</label>
                        <input type="text" class="form-control"
                        v-model.trim="$v.lastname.$model" :class="{
                            'is-invalid':$v.lastname.$error, 'is-valid':!$v.lastname.$invalid}">
                        <div class="valid-feedback">your lastname is valid</div>
                        <div class="invalid-feedback">
                            <span v-if="!$v.lastname.required">last name is required</span>
                            <span v-if="!$v.lastname.minLength">last name must have at least{{
                            $v.lastname.$params.minLength.min}} letters.
                            </span>
                            <span v-if="!v.lastname.maxLength">last name must have at most{{
                            V.lastname.$params.maxLength.max}} letters.
                            </span>
                        </div>
                    </div>
                </div>
            </form>
             <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="">age</label>
                        <input type="text" class="form-control"
                        v-model.trim="$v.age.$model" :class="{
                            'is-invalid':$v.age.$error, 'is-valid':!$v.age.$invalid}">
                        <div class="valid-feedback">your age is valid</div>
                        <div class="invalid-feedback">
                            <span v-if="!$v.age.between">Must be between {{$v.age.$params.between.min}}
                                and {{v.age.$params.between.max}}
                            </span>
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
import {required,minLength,maxLength,between} from 'vuelidate/lib/validators'

export default {
    nae : 'FormValidation',
    data(){
        return{
            firstname: '',
            lastname: '',
            age: 0
        }
    },
    validatons:{
        firstname:{
            required,
            minLength: minLength(3),
            maxLength: maxLength(10),
        },
        lastname:{
            required,
            minLength: minLength(5),
            maxLength: maxLength(12),
        },
        age :{
            between:between(15,40)
        }
    }
    
}
</script>

<style scoped>

</style>