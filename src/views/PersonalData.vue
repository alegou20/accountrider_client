<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm6>
                <v-text-field
                        single-line
                        outline
                        :label="$t('BSN')"
                        disabled
                ></v-text-field>

                <v-text-field
                        single-line
                        outline
                        v-model="user.name"
                        :label="$t('Name')"
                        disabled
                ></v-text-field>

                <v-text-field
                        single-line
                        outline
                        v-model="user.city"
                        :label="$t('City')"
                ></v-text-field>

                <v-text-field
                        single-line
                        outline
                        v-model="user.postalcode"
                        :label="$t('Postalcode')"
                ></v-text-field>

                <v-text-field
                        single-line
                        outline
                        v-model="user.streetname"
                        :label="$t('Streetname')"
                ></v-text-field>

                <v-text-field
                        single-line
                        outline
                        v-model="user.housenumber"
                        :label="$t('Housenumber')"
                ></v-text-field>

                <v-btn block round color="primary"  @click="update">{{$t('update')}}</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

    export default {
        data() {
            return {
                name: '',
                city: '',
                postcalcode: '',
                streetname: '',
                housenumber: '',
            };
        },

        mounted() {
            this.name = this.$store.getters.user.name
            this.city = this.$store.getters.user.city
            this.postcalcode = this.$store.getters.user.postcalcode
            this.streetname = this.$store.getters.user.streetname
            this.housenumber = this.$store.getters.user.housenumber
        },
        computed: {
            user () {
                return this.$store.getters.user
            }
        },
        methods: {
            update() {
              console.log(this.user)
                this.$store
                    .dispatch("UpdateUser", {user: this.user})
            },
        },
    };
</script>

<style scoped>

</style>
