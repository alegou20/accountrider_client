<template>
    <div id="login">
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-card round width="450" height="600" class="position-relative">

                    <v-toolbar dark flat color="white" >
                    </v-toolbar>

                    <v-card-text>
                        <v-form>

                            <p class="indigo--text text-xs-center headline">{{$t('loginHoofdtekst')}}</p>
                            <p class="indigo--text text-xs-center headline font-weight-bold">Accountrider ID</p>
                            <v-text-field width="10px" name="username" :label="$t('username')" id="username" v-model="username" type="username" required></v-text-field>
                            <v-text-field name="password" :label="$t('password')" id="password" v-model="password" type="password" required></v-text-field>

                            <div class="text-xs-center">
                                <v-btn :to="{name:'owner'}" round class="white--text" large color="orange">{{$t('Signup')}}</v-btn>
                                <v-btn round class="white--text" large color="#099CEC" @click="onSignin">{{$t('Signin')}}</v-btn>
                            </div>

                        </v-form>
                    </v-card-text>
                </v-card>
            </v-layout>
        </v-container>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                username: null,
                password: null,
                auth: '',
            };
        },
        methods: {
            onSignin() {
                this.$store
                    .dispatch("LOGIN", {username: this.username, password: this.password})
                    .then(res => {
                        if(res.data != null){
                            this.$store.dispatch("SetUserOutOfToken", {data: res.data})
                            this.$store.dispatch("GetOwnercredentials")
                                .then(res => {
                                    localStorage.ownercredentials = JSON.stringify(res.data)
                                })
                            this.$router.push({
                                name: 'bills'
                            });
                        }
                        else{
                            alert('wrong credentials')
                        }
                    });
            },
                    },
    };
</script>

<style scoped>
    #login {
        background: radial-gradient(690px at 50% 50%,rgba(9,156,236,.87) 0,rgba(6,109,165,.87) 100%);
        height: 100%;
        width: 100%;
    }
</style>

