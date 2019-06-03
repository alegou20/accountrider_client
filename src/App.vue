<template>
  <v-app id="inspire">
    <div v-if="!user">

    </div>

    <div v-if="user">
          <v-toolbar color="#FAFAFA" app flat>

              <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                      <v-btn
                              color="primary"
                              dark
                              v-on="on"
                              flat
icon
                      >
                              <flag :iso="currentLocale" />
                      </v-btn>
                  </template>

                  <v-list>
                      <v-list-tile
                              v-for="(locale, index) in locales" :key="locale + index"
                              @click="currentLocale = locale.id"
                      >
                          <v-list-tile-title>{{ locale.name }}</v-list-tile-title>
                      </v-list-tile>
                  </v-list>
              </v-menu>

              <v-toolbar-title  class="primary--text" dark >

          Accountrider
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <div v-if="user">
            <v-btn
                    round
                    color="primary"
                    flat
                    v-for="item in items"
                    :key="item.title"
                    :to="item.link">
                <v-icon left dark>{{ item.icon }}</v-icon>
                {{ item.title }}
            </v-btn>

          <v-btn round color="primary"  @click="onProfile">{{$t('profile')}}</v-btn>
          <v-btn round color="primary"  @click="onLogout">{{$t('logout')}}</v-btn>

        </div>

      </v-toolbar>
    </div>

      <v-content>
          <router-view></router-view>

      </v-content>

  </v-app>
</template>

<script>
    import i18n from '@/translations/config'

  export default {
    name: 'App',
    data() {
      return {
          currentLocale: null,
          locales: [ {id: 'gb', name: 'English'}, {id: 'nl', name: 'Nederlands'}]
      };
    },
    computed : {
      user(){
          return {
              email:  "alegou20@hotmail.com"
          };

        // return this.$store.getters.user
      },
        items () {
          return [
              { icon: 'lock_open', title: this.$t('bills'), link: '/' },
              { icon: 'directions_car', title: this.$t('vehicle'), link: '/vehicle' },
              { icon: 'face', title: this.$t('personal_data'), link: '/personalData' },
          ]
        } ,
        locale(){
          return this.$store.getters.locale;
        }
    },

      watch: {
        currentLocale(val) {
            if (val) {
                i18n.locale = val;
                this.$store.commit('setLocale', val)
            }
        }
      },

    methods: {
      onLogout () {
        this.$store.dispatch('logout').then(() =>  {
          this.$router.push({
            name: 'login'
          });
        });
      },
      onProfile () {
        this.$router.push({
          name: 'profile'
        });
      }
    },
      mounted() {
        this.currentLocale = this.locale;
      }
  };
</script>

<style>
  .position-relative {
    position: relative;
  }

</style>
