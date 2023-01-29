<template>
  <div class="container">
    <div class="add-form">
      <div class="input__box">
        <label class="input__label">Name</label>
        <MyInput v-model="name" />
      </div>
      <div class="input__box">
        <label class="input__label">Username</label>
        <MyInput v-model="username" />
      </div>
      <div class="input__box">
        <label class="input__label">Email</label>
        <MyInput v-model="email" />
      </div>
      <div class="input__box">
        <label class="input__label">Phone</label>
        <MyInput v-model="phone" />
      </div>
      <div class="input__box">
        <label class="input__label">Website</label>
        <MyInput v-model="website" />
      </div>
      <div class="input__box">
        <label class="input__label">Company</label>
        <MyInput v-model="company" />
      </div>
      <div class="input__box">
        <label class="input__label">City</label>
        <MyInput v-model="city" />
      </div>
      <div class="input__box">
        <label class="input__label">Street</label>
        <MyInput v-model="street" />
      </div>
      <div class="input__box input__box_flex">
        <div class="input__box input__box_low-width">
          <label class="input__label">Suite</label>
          <MyInput v-model="suite" />
        </div>
        <div class="input__box input__box_low-width">
          <label class="input__label">Zipcode</label>
          <MyInput v-model="zipcode" />
        </div>
      </div>
    </div>
    <MyButton @click.prevent="createNewUser">
      Create user
    </MyButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import type User from "@/types/User"
import MyButton from "@/components/UI/MyButton.vue"
import MyInput from "@/components/UI/MyInput.vue"
import axios from 'axios'

export default defineComponent({
  name: 'CreateUser',
  components:{
    MyInput,
    MyButton
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
  .add-form {
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin: 48px 0;
    gap: 20px;
  }
  .input__box {
    display: flex;
    flex-direction: column;
    width: calc((100% - 40px)/3);
  }
  .input__label {
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
  }
  .input__box_flex {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    gap: 20px;
  }
  .input__box_low-width {
    width: calc((100% - 20px)/2);
    margin: 0;
  }


  @media screen and (max-width:800px) {
    .input__box {
      width: calc((100% - 20px)/2);
    }
    .input__box_flex {
      width: 100%;
    }
  }
  @media screen and (max-width:500px) {
    .input__box {
      width: 100%;
    }
    .input__box_flex {
      width: 100%;
    }
  }
  @media screen and (max-width:390px) {
    .add-form {
      margin: 32px 0;
    }
    .input__box_flex {
      flex-direction: column;
    }
    .input__box_low-width {
      width: auto;
    }
  }
</style>
