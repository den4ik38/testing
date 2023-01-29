<template>
  <div class="create-page">
    <div class="title">Create User</div>
    <addUserForm />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import type User from "@/types/User"
import addUserForm from "@/components/addUserForm.vue"
import axios from 'axios'

export default defineComponent({
  name: 'CreateUser',
  components: {
    addUserForm
  },
  data() {
    return {
      name: '',
      username: '',
      email: '',
      phone: '',
      website: '',
      company: '',
      city: '',
      street: '',
      suite: '',
      zipcode: '',
    }
  },
  methods: {
    async createNewUser(){
      let user: User = {
        name : this.name,
        username : this.username,
        email : this.email,
        phone : this.phone,
        website : this.website,
        company : {name: this.company},
        address : {city : this.city, street : this.street, suite : this.suite, zipcode : this.zipcode}
      }
      try {
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', user, {headers: {'Content-type': 'application/json; charset=UTF-8'}})
        if (response.status === 201) {
          this.$router.push('/')
        }
        
      } catch (error) {
        console.log('Что-то пошло не так', error)
        
      }
    }
  }
})
</script>

<style scoped>
  .title {
    font-weight: 800;
    font-size: 40px;
    line-height: 48px;
  }
</style>
