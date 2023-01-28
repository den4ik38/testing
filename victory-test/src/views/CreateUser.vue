<template>
  <div class="create-page">
    <div class="title">Create User</div>
    <div class="container">
      <div class="input__box">
        <label class="input__label">Name</label>
        <input v-model="name"
          type="text"
          class="user__input">
      </div>
      <div class="input__box">
        <label class="input__label">Username</label>
        <input v-model="username"
          type="text"
          class="user__input">
      </div>
      <div class="input__box">
        <label class="input__label">Email</label>
        <input v-model="email"
          type="text"
          class="user__input">
      </div>
      <div class="input__box">
        <label class="input__label">Phone</label>
        <input v-model="phone"
          type="text"
          class="user__input">
      </div>
      <div class="input__box">
        <label class="input__label">Website</label>
        <input v-model="website"
          type="text"
          class="user__input">
      </div>
      <div class="input__box">
        <label class="input__label">Company</label>
        <input v-model="company"
          type="text"
          class="user__input">
      </div>
      <div class="input__box">
        <label class="input__label">City</label>
        <input v-model="city"
          type="text"
          class="user__input">
      </div>
      <div class="input__box">
        <label class="input__label">Street</label>
        <input v-model="street"
          type="text"
          class="user__input">
      </div>
      <div class="input__box input__box_flex">
        <div class="input__box input__box_low-width">
          <label class="input__label">Suite</label>
          <input v-model="suite"
            type="text"
            class="user__input">
        </div>
        <div class="input__box input__box_low-width">
          <label class="input__label">Zipcode</label>
          <input v-model="zipcode"
            type="text"
            class="user__input">
        </div>
      </div>
    </div>
    <button @click.prevent="createNewUser"
class="create__btn">Create user</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import type User from "@/types/User"
import axios from 'axios'

export default defineComponent({
  name: 'CreateUser',
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
  .container {
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
  .user__input {
    background: #FFFFFF;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.1);
    border: none;
    height: 40px;
    box-sizing: border-box;
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
  .create__btn {
    box-sizing: border-box;
    padding: 8px 16px;
    width: 110px;
    height: 40px;
    border: 1px solid #000000;
    font-size: 14px;
    line-height: 24px;
    margin: 10px;
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
    .container {
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
