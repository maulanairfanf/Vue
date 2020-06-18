// TestVuelidate.vue
<template>
  <div id="testVuelidate">
    <form @submit.prevent="onSubmit()">
      <div>
        <label for="userMail">Mail</label>
        <input
          class="form-control"
          id="userMail"
          v-model.trim="mail"
          @input="$v.mail.$touch"
          :class="{error: $v.mail.$error, valid: $v.mail.$dirty && !$v.mail.$invalid}"
        />
      </div>
      <div class="error" v-if="$v.mail.$dirty && !$v.mail.required">Mail is required</div>
      <div class="error" v-if="$v.mail.$dirty && !$v.mail.email">Mail is not valid</div>
      <button class="btn btn-primary" type="submit" :disabled="$v.$invalid">Submit</button>
    </form>
  </div>
</template>
<script>
import { required, email } from "vuelidate/lib/validators";
export default {
  name: "TestVuelidate",
  data() {
    return {
      mail: ""
    };
  },
  validations: {
    mail: {
      required,
      email
    }
  },
  methods: {
    onSubmit() {
      if (this.$v.$invalid) return;
    }
  }
};
</script>