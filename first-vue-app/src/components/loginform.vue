<template>
    <form class="form" action="/confirmauth" @submit.prevent="validateForm">


        <div>
            <span v-show="emptyLogin">{{ErrorMsgs[0]}}</span>
        </div>
        <div>
            <label for="login">Login Name</label>
            <input type="text" name="login" id="login" class='input' placeholder="fields should be equal" v-model="login"
                autocomplete="off">
        </div>

        <div>
            <span v-show="emptyPass">{{ErrorMsgs[1]}}</span></div>
        <div><label for="password">Your Password</label>
            <input type="text" placeholder="fields should be equal" class='input' name="password" v-model="password"
                autocomplete="off">
        </div>


        <div>
            <span v-show="notEqualLoginPass">{{ErrorMsgs[2]}}</span></div>
        <div>
            <input type="submit" value="Submit">
        </div>

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
                    'Login name and password should be equal'
                ],

            }
        },
        methods: {
            validateForm() {
                this.$store.state.login = this.login;
                alert(this.$store.state.login);
                if (this.login !== '' && this.password !== '' && this.login === this.password) {
                    this.$router.push({
                        name: 'confirmauth'
                    });
                    alert('all ok');
                    return true;
                }

                if (this.login === '') {
                    alert('empty login');
                    this.emptyLogin = true;
                }

                if (this.password === '') {
                    alert('empty pass');
                    this.emptyPass = true;
                }

                if (this.login !== this.password) {
                    alert('not equal');
                    this.notEqualLoginPass = true;
                }

            }
        },
        computed: {
            login: {
                get() {
                    alert(this.$store.state.login);
                    return this.$store.state.login
                },
                set(newLogin: string) {
                    this.$store.commit('updateLoginValue', newLogin);
                }
            }
        }

    })
</script>