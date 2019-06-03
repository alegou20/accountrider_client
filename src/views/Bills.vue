<template>
    <v-container>
        <v-card  class="mt-5 pa-3 elevation-12" light flat>
            <v-container fluid grid-list-md>
                <h1 class="headline">Filter bills</h1>
                <v-layout class="mb-3" align-center justify-center wrap row>
                    <v-flex xs12 sm6>
                        <v-select
                                clearable
                                :items="paymentStatusses"
                                v-model="filters.paymentStatus"
                                label="Payment status"
                        ></v-select>
                    </v-flex>
                    <v-flex xs12 sm6 >
                        <v-select clearable :items="months" v-model="filters.month" label="Select month"></v-select>
                    </v-flex>
                </v-layout>
            </v-container>

            <div v-if="billsFiltered">
                <v-data-table :headers="headers" :items="billsFiltered" light class="elevation-1">
                    <template v-slot:items="props">
                        <tr @click="selectBill(props.item)">
                            <td>{{ props.item.id }}</td>
                            <td>{{ props.item.ownerCredentials.name }}</td>
                            <td>&euro; {{ props.item.totalAmount }}</td>
                            <td>{{ props.item.createDateFormatted }}</td>
                            <td>{{ props.item.monthName }}</td>
                            <td>{{ props.item.paymentStatus }}</td>
                        </tr>
                    </template>
                </v-data-table>
                <bill class="mt-4"></bill>
            </div>
            <div v-else>
                <p>No bills found</p>
            </div>
        </v-card>
    </v-container>
</template>

<script>
    import Bill from '@/components/Bill'
    export default {
        components: {Bill},
        data() {
            return {

                headers: [
                    { text: "ID #", value: "id" },
                    { text: "Billed to", value: "ownerCredentials" },
                    { text: "Total Amount", value: "totalAmount" },
                    { text: "Create date", value: "createDate" },
                    { text: "Month", value: "monthName" },
                    { text: "Payment Status", value: "paymentStatus" }
                ],
                filters: {
                    carTracker: null,
                    ownerCredentials: null,
                    paymentStatus: null,
                    month: null
                }
            };
        },
        computed: {
            billsFiltered() {
                return this.filterBills(this.$store.getters.bills);
            },
            months() {
                return this.$store.getters.months;
            },
            paymentStatusses() {
                return this.$store.getters.paymentStatusses;
            },
            carTrackers() {
                return this.$store.getters.carTrackers;
            },
            ownerCredentials() {
                return this.$store.getters.ownerCredentials;
            }
        },
        methods: {
            selectBill(bill) {
                this.$store.commit("setBill", bill);
            },
            filterBills(bills) {
                let self = this;
                if (this.filters.carTracker)
                    bills = bills.filter(x => x.carTracker.id === self.filters.carTracker);
                if (this.filters.ownerCredentials)
                    bills = bills.filter(
                        x => x.ownerCredentials.id === self.filters.ownerCredentials
                    );
                if (this.filters.paymentStatus)
                    bills = bills.filter(
                        x => x.paymentStatus === self.filters.paymentStatus
                    );
                if (this.filters.month)
                    bills = bills.filter(x => x.monthName === self.filters.month);
                return bills;
            }
        },
        created() {
            // get from store or props
            this.$store.dispatch("getBills")
        }
    };
</script>

<style>
</style>
