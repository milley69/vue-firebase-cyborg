<template>
  <form @submit.prevent="submitHandler">
    <h2 class="text-center text-[2em] uppercase transition-colors">
      <router-link class="text-primary-200 hover:text-white" to="/">Cyborg</router-link>
    </h2>
    <div
      class="relative my-7/5 mx-0 w-[310px] border-b-2 border-white"
      :class="{ incorect: v$.username.$error && v$.username.$dirty }"
    >
      <i
        class="bx bx-user absolute right-2 top-5 text-[22px]"
        :class="v$.username.$error && v$.username.$dirty ? 'text-primary-200' : 'text-white'"
      ></i>
      <input
        class="h-[50px] w-full border-0 bg-transparent py-0 pr-[35px] pl-[5px] text-[1em] text-white outline-none"
        type="text"
        v-model.trim="username"
        required
      />
      <label
        class="pointer-events-none absolute top-1/2 left-[5px] -translate-y-1/2 text-[1em] text-white transition-all duration-300"
        for=""
        >Username</label
      >
    </div>
    <div
      class="relative my-7/5 mx-0 w-[310px] border-b-2 border-white"
      :class="{ incorect: v$.email.$error && v$.email.$dirty }"
    >
      <i
        class="bx bx-envelope absolute right-2 top-5 text-[22px]"
        :class="v$.email.$error && v$.email.$dirty ? 'text-primary-200' : 'text-white'"
      ></i>
      <input
        class="h-[50px] w-full border-0 bg-transparent py-0 pr-[35px] pl-[5px] text-[1em] text-white outline-none"
        type="email"
        v-model="email"
        required
      />
      <label
        class="pointer-events-none absolute top-1/2 left-[5px] -translate-y-1/2 text-[1em] text-white transition-all duration-300"
        for=""
        >Email</label
      >
    </div>
    <div
      class="relative my-7/5 mx-0 w-[310px] border-b-2 border-white"
      :class="{ incorect: v$.password.$error && v$.password.$dirty }"
    >
      <!-- <box-icon name="lock-alt" :color="v$.password.$error && v$.password.$dirty ? '#ec6090' : 'white'" /> -->
      <i
        class="bx bx-lock-alt absolute right-2 top-5 text-[22px]"
        :class="v$.password.$error && v$.password.$dirty ? 'text-primary-200' : 'text-white'"
      ></i>

      <input
        class="h-[50px] w-full border-0 bg-transparent py-0 pr-[35px] pl-[5px] text-[1em] text-white outline-none"
        type="password"
        v-model="password"
        required
      />
      <label
        class="pointer-events-none absolute top-1/2 left-[5px] -translate-y-1/2 text-[1em] text-white transition-all duration-300"
        for=""
        >Password</label
      >
    </div>
    <div
      class="relative my-7/5 mx-0 w-[310px] border-b-2 border-white"
      :class="{ incorect: v$.sameAsPassword.$error && v$.sameAsPassword.$dirty }"
    >
      <!-- <box-icon name="lock-alt" :color="v$.password.$error && v$.password.$dirty ? '#ec6090' : 'white'" /> -->
      <i
        class="bx bx-lock-alt absolute right-2 top-5 text-[22px]"
        :class="v$.sameAsPassword.$error && v$.sameAsPassword.$dirty ? 'text-primary-200' : 'text-white'"
      ></i>

      <input
        class="h-[50px] w-full border-0 bg-transparent py-0 pr-[35px] pl-[5px] text-[1em] text-white outline-none"
        type="password"
        v-model="sameAsPassword"
        required
      />
      <label
        class="pointer-events-none absolute top-1/2 left-[5px] -translate-y-1/2 text-[1em] text-white transition-all duration-300"
        for=""
        >Password</label
      >
    </div>

    <button
      class="mt-[1em] h-10 w-full cursor-pointer rounded-[40px] border-0 bg-white text-[1em] font-semibold text-primary-200 outline-none transition-all duration-300 hover:bg-primary-200 hover:text-white"
      type="submit"
    >
      Register
    </button>

    <div class="mt-[25px] mb-[10px] text-center text-[0.9em] text-white">
      <p>
        Have a account?
        <router-link class="font-semibold text-white hover:underline" to="/login">Login</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import useVuelidate from '@vuelidate/core'
import { email, minLength, required, sameAs } from '@vuelidate/validators'

export default {
  setup: () => ({ v$: useVuelidate() }),
  validations() {
    return {
      username: { required, minLength: minLength(3) },
      email: { required, email },
      password: { required, minLength: minLength(6) },
      sameAsPassword: { required, sameAs: sameAs(this.password) },
    }
  },
  data() {
    return {
      username: '',
      email: '',
      password: '',
      sameAsPassword: '',
    }
  },
  methods: {
    async submitHandler() {
      const isFormValid = await this.v$.$validate()
      if (!isFormValid) {
        const error = this.v$.$errors[0]
        switch (error.$validator) {
          case 'required':
            this.$ToastEr(`The ${error.$property} field is ${error.$validator}`, '#ec6090')
            break
          case 'minLength':
            this.$ToastEr(`The ${error.$property} field has a min length (${error.$params.min})`, '#ec6090')
            break
          default:
            this.$ToastEr(`The ${error.$property} field is incorrect.`, '#ec6090')
            break
        }
      } else {
        const userData = {
          username: this.username,
          email: this.email,
          password: this.password,
        }
        try {
          this.$store.dispatch('Register', userData)
          // this.$router.push('/')
        } catch (e) {}
      }
    },
  },
}
</script>

<!-- <script>
import useVuelidate from '@vuelidate/core'
import { email, minLength, required } from '@vuelidate/validators'

import { reactive } from 'vue'
export default {
  setup() {
    const state = reactive({
      username: '',
      email: '',
      password: '',
    })

    const rules = {
      username: { required, minLength: minLength(3) },
      email: { required, email },
      password: { required, minLength: minLength(6) },
    }

    const v$ = useVuelidate(rules, state)

    const submitHandler = async () => {
      const isFormValid = await v$.value.$validate()
      if (!isFormValid) {
        console.log('nope that wrong')
      } else {
        console.log({ ...state })
      }
    }

    return { state, v$, submitHandler }
  },
}
</script> -->

<style scoped lang="scss">
input:focus ~ label,
input:valid ~ label {
  top: -5px;
}
.incorect {
  border-bottom: 2px solid #ec6090;
}
</style>
