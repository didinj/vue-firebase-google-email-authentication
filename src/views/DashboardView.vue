<template>
  <v-container>
    <v-card class="pa-4 text-center">
      <v-card-title>Welcome, {{ user?.email }}</v-card-title>
      <v-card-text>
        <v-btn color="primary" @click="logout">Logout</v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script setup>
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'

const user = ref(null)
const router = useRouter()

onMounted(() => {
  user.value = auth.currentUser
})

const logout = async () => {
  await signOut(auth)
  router.push('/login')
}
</script>
