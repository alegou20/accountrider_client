<template>
    <div id="register">
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-card round width="450" height="600" class="position-relative">

                    <v-toolbar dark flat color="white" >
                    </v-toolbar>

                    <v-card-text>
                        <v-form>

                            <p class="primary--text text-xs-center headline">{{$t('registerHoofdtekst')}}</p>
                            <p class="primary--text text-xs-center headline font-weight-bold">Accountrider ID</p>
                            <v-text-field width="10px" name="email" :label="$t('email')" id="email" v-model="email" type="email" required></v-text-field>
                            <v-text-field name="password" :label="$t('password')" id="password" v-model="password" type="password" required></v-text-field>

                            <div class="text-xs-center">
                                <v-btn round class="white--text" large color="primary" @click="onSignUp">{{$t('Signup')}}</v-btn>
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
                email: '',
                password: null,
                auth: ''
            };
        },
        methods: {
            onSignUp() {
                this.$store
                    .dispatch("REGISTER", {email: this.email, password: this.password})
                    .then(res => {
                        this.auth = res.data;
                        if(this.auth){
                            this.$router.push({
                                name: 'login'
                            });
                        }
                    });
            },
        },
    };
</script>

<style scoped>
    #register {
        background: linear-gradient(45deg,#6FE594,#27A47C);
        height: 100%;
        width: 100%;
    }
</style>

