<template>
    <div>
        <v-card v-if="bill" flat color="primary" dark class="mx-auto">
            <v-card-title>
                <v-icon large left>fas fa-file-invoice</v-icon>
                <span class="title font-weight-light">Bill #{{bill.id}}</span>
                <v-spacer></v-spacer>
                <v-btn icon @click="hide()">
                    <v-icon>fas fa-times</v-icon>
                </v-btn>
            </v-card-title>

            <v-card-text class>
                <v-layout row wrap>
                    <v-flex xs6>Total Amount</v-flex>
                    <v-flex xs6>&euro; {{bill.totalAmount}}</v-flex>

                    <v-flex xs6>Date</v-flex>
                    <v-flex xs6>{{bill.createDateFormatted }}</v-flex>

                    <v-flex xs6>Payment Status</v-flex>
                    <v-flex xs6>{{bill.paymentStatus }}</v-flex>

                </v-layout>
                <v-container v-if="bill.problems && bill.problems.length" text-xs-right>
                    <v-list light>
                        <v-list-tile avatar v-for="(problem, index) in bill.problems" :key="index + problem">
                            <v-list-tile-avatar>
                                <v-icon>fas fa-exclamation</v-icon>
                            </v-list-tile-avatar>
                            <v-list-tile-content>
                                <v-list-tile-title>{{problem}}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <paypal-checkout
                        :amount="parseFloat(Math.round(bill.totalAmount * 100) / 100).toFixed(2) + ''"
                        currency="EUR"
                        env="sandbox"
                        @payment-completed="makePayment()"
                        :client="paypal">
                </paypal-checkout>
        </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                paypal: {
                    sandbox: 'AZL__AdhzORKlm5xlESvVMLmFXaQTl-P9CUVJJ5cjVnAHzb_PcmyzwqaAGg7iUJvEMwSDNdegcdnxEUj'
                }
            };
        },
        computed: {
            bill() {
                return this.$store.getters.bill;
            }
        },
        methods: {
            makePayment () {
              this.$store.dispatch('payBill', this.bill).then(() => {
                  this.bill.paymentStatus = "PAYED";
              }).catch(() => {
                  alert('Error paying bill')
              })
            },
            hide() {
                this.$store.commit("setBill", null);
            },
        }
    };
</script>
