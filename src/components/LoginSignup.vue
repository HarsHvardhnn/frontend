<template>
  <div class="auth-form-container">
    <div v-if="!isLogIn" class="signup-form">
      <label for="Name">Name</label>
      <input required type="text" id="Name" v-model="Name" />

      <label for="Email">Email</label>
      <input required type="Email" id="Email" v-model="Email" />

      <label for="Password">Password</label>
      <input required='true' type="Password" id="Password" v-model="Password" />

      <button @click="signUp" class="submit-btn">Signup</button>
    </div>

    <div v-else class="login-form">
      <label for="Email">Email</label>
      <input type="Email" id="Email" v-model="Email" />

      <label for="Password">Password</label>
      <input type="Password" id="Password" v-model="Password" />

      <button @click="Login" class="submit-btn">Login</button>
    </div>

    <button @click="isLogIn = !isLogIn" class="toggle-btn">
      Toggle Signup/Login
    </button>
    <p v-if="logined">login succsessfull</p>
    <p v-if="isNotCompleteForm">Please fill all the details </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      isLogIn: false,
      Name: "",
      Email: "",
      Password: "",
      logined:false,
      isNotCompleteForm:false
    };
  },
  methods: {
    signUp() {

       if(!this.Name || !this.Email || !this.Password){
        this.isNotCompleteForm = !this.isNotCompleteForm;
         return;
       }

      axios
        .post("http://localhost:3000/auth/signup", {
          Name: this.Name,
          Email: this.Email,
          Password: this.Password,
        })
        .then((res) => {
          console.log("data snet", res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    Login() {
      axios
        .post("http://localhost:3000/auth/login", {
          Email: this.Email,
          Password: this.Password,
        })
        .then((res) => {
          console.log("data checked and user received is ",res.data, "login succsessfull");
          
        })
        .catch((err) => {
          console.log(err);
        });
        this.logined=!this.logined;
    },
  },
};
</script>

<style scoped>
.auth-form-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.signup-form,
.login-form {
  max-width: 300px;
  width: 100%;
  margin-bottom: 20px;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-btn {
  background-color: #ad51f9;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.submit-btn:hover {
  background-color: #8c2ee4;
}

.toggle-btn {
  background-color: #7eeb36;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.toggle-btn:hover {
  background-color: #2980b9;
}
</style>
