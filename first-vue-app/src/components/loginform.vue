<template>
    <div>
        <form class="form" action="#" @submit.prevent="validateForm">
            <div class='formfield'>
                <span class='input__error' v-show="emptyMail">{{errorMsgs[0]}}</span>
                <label for=''>Login Name</label>
                <input type="email" class='input' placeholder="yourname@domain.com" name="email" v-model="email"
                    autocomplete="off" required>
            </div>
            <div class='formfield'>
                <span class='input__error' v-show="emptyPass">{{errorMsgs[1]}}</span>
                <label for=''>Your Password</label>
                <input type="password" placeholder="Enter Your Password" class='input' name="password" v-model="password"
                    autocomplete="off" required />
            </div>
            <div class='formfield'>
                <span class='input__error' v-show="notEqualMailPass">{{errorMsgs[2]}}</span>
                <input type='submit' value='Sign In'>
            </div>

        </form>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Router from 'vue-router';


    export default Vue.extend({
        name: 'loginform',
        
        data: {
            
                email: '',
                password: '',
           
        },
        methods: {
            validateForm() {
                const errorMsgs = [
                    'Please enter your login name',
                    'Please enter your password',
                    'Login name and password should be equal',
                ];
                let emptyMail = false;
                let emptyPass = false;
                let notEqualMailPass = false;

                if (this.email !== '' && this.password !== '' && this.email === this.password) {
                    this.email = '';
                    this.password = '';
                    this.$router.push({
                        name: 'confirmAuth'
                    });
                    return true;
                }

                if (this.email === '') {
                    emptyMail = true;
                    return false;
                }
                if (this.password === '') {
                    emptyPass = true;
                    return false;
                }
                if (this.email !== this.password) {
                    notEqualMailPass = true;
                    return false;
                }
            },
        },
    });
</script>