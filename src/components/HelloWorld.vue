<template>
  <div>
    <div v-if="!isLogIn">
      <label for="name">Name</label>
      <input type="text" id="name" v-model="name">

      <label for="email">Email</label>
      <input type="email" id="email" v-model="email">

      <label for="password">Password</label>
      <input type="password" id="password" v-model="password">
      
      <button @click="submitForm">Signup</button>
    </div>

    <div v-else>
      <label for="email">Email</label>
      <input type="email" id="email" v-model="email">

      <label for="password">Password</label>
      <input type="password" id="password" v-model="password">
      
      <button @click="submitForm">Login</button>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      isLogIn: false,
      name: '', // Add name property for signup
      email: '',
      password: '',
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
      if (this.isLogIn) {
        // Logic for login
        console.log('Logging in:', this.email, this.password);
      } else {
        // Logic for signup
        console.log('Signing up:', this.name, this.email, this.password);
      }
    },
  },
};
</script>
