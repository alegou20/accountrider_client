<template>
    <div id="OwnerCredentials">
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-card width="450" height="300" class="position-relative">

                    <v-toolbar dark flat color="white" >
                        <v-toolbar-title >Sign up</v-toolbar-title>
                    </v-toolbar>

                    <v-card-text>
                        <v-form>

                            <p class="primary--text text-xs-center headline">{{$t('BSNCredentials')}}</p>
                            <v-text-field width="10px" name="BSN" :label="$t('BSN')" id="BSN" v-model="BSN" type="BSN" required></v-text-field>


                            <div class="text-xs-center">
                                <v-btn round class="white--text" large color="orange" @click="onAuthorise">{{$t('Authorize')}}</v-btn>
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
                BSN: null,
            };
        },
        methods: {
            onAuthorise() {
                this.$store
                    .dispatch("Authorise", this.BSN)
                    .then(res => {
                        this.auth = res.data;
                        if(this.auth){
                            this.$router.push({
                                name: 'register'
                            });
                        }
                    });
            },
        },
    };
</script>

<style scoped>
    #OwnerCredentials {
        background: linear-gradient(45deg,#476892,#59355D);
        height: 100%;
        width: 100%;
    }
</style>

