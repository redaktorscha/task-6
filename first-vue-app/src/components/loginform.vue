<template>
    <form class="register" action="/confirmauth" @submit.prevent="validateForm">
        <span class='errorMsg' v-show="emptyLogin">{{ErrorMsgs[0]}}</span>
        <div class='input_box'><label for="login" class='input__label'>Login Name</label>
            <input class='input' type="text" name="login" id="login" placeholder="fields should be equal" autocomplete="off" v-model="login"></div>
        <span class='errorMsg' v-show="emptyPass">{{ErrorMsgs[1]}}</span>
        <div class='input_box'><label for="password" class='input__label'>Password</label>
            <input class='input' type="text" placeholder="fields should be equal" name="password" v-model="password"
                autocomplete="off"></div>
        <span class='errorMsg' v-show="notEqualLoginPass">{{ErrorMsgs[2]}}</span>
        <button class='btn btn__submit btn__pink' type="submit"><span class='btn__submit__text'>Submit</span></button>
    </form>

</template>

<script lang="ts">
    import Vue from 'vue';
    import Router from 'vue-router';


    export default Vue.extend({
        name: 'loginform',

        data() {
            return {
                login: '',
                password: '',
                emptyLogin: false,
                emptyPass: false,
                notEqualLoginPass: false,
                ErrorMsgs: ['Please enter your login name',
                    'Please enter your password',
                    'Login name and password should be equal',
                ],

            };
        },
        methods: {
            validateForm(): void {
                this.$store.state.login = this.login;
                if (this.login !== '' && this.password !== '' && this.login === this.password) {
                    this.$router.push({
                        name: 'confirmauth',
                    });
                }

                if (this.login === '') {
                    this.emptyLogin = true;
                }

                if (this.password === '') {
                    this.emptyPass = true;
                }

                if (this.login !== this.password) {
                    this.notEqualLoginPass = true;
                }

            },
        },
        computed: {
            login: {
                get(): string {
                    return this.$store.state.login;
                },
                set(newLogin: string): void {
                    this.$store.commit('updateLoginValue', newLogin);
                },
            },
        },

    });
</script>