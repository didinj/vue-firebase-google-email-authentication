<template>
  <v-container class="fill-height" fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="4">
        <v-card>
          <v-card-title class="text-h5 text-center">Login</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="loginWithEmail">
              <v-text-field
                v-model="email"
                label="Email"
                type="email"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                required
              ></v-text-field>
              <v-btn type="submit" color="primary" block>Login</v-btn>
            </v-form>

            <v-divider class="my-4"></v-divider>

            <v-btn color="red darken-1" block @click="loginWithGoogle">
              <v-icon start>mdi-google</v-icon> Login with Google
            </v-btn>

            <v-alert type="error" v-if="error" class="mt-4">{{ error }}</v-alert>
          </v-card-text>
          <v-card-actions class="justify-center">
            <router-link to="/register">Don't have an account? Register</router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import { auth, provider } from '../firebase'
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const loginWithEmail = async () => {
  try {
    await signInWithEmailAndPassword(auth, email.value, password.value)
    router.push('/dashboard')
  } catch (err) {
    error.value = err.message
  }
}

const loginWithGoogle = async () => {
  try {
    await signInWithPopup(auth, provider)
    router.push('/dashboard')
  } catch (err) {
    error.value = err.message
  }
}
</script>
