import axios from 'axios'

export default {
    state: {
        bill: null,
        bills: null,
        months: [
            "January",
            "Februari",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December"
        ],
        paymentStatusses: ["OPEN", "PAYED", "CANCELLED"],
    },
    getters: {
        bills(state) {
            return state.bills;
        },
        bill(state) {
            return state.bill;
        },
        paymentStatusses (state) { return state.paymentStatusses },
        months (state) { return state.months }
    },
    mutations: {
        setBills(state, bills) {
            state.bills = bills;
        },
        setBill(state, bill) {
            state.bill = bill;
        },
    },
    actions: {
        payBill(context, bill) {
            var b = JSON.parse(JSON.stringify({...bill}));
            b.paymentStatus = "PAYED";
            axios.put('http://192.168.25.101:8080/BillAdministration/bill',b, {
                headers: {
                    'x-api': ''
                }
            })
        },

        getBills(context) {
                axios.get('http://192.168.25.101:8080/BillAdministration/bill', {
                    headers: {
                        'x-api': ''
                    }
                }).then(res => {
                    context.commit('setBills', res.data)
                    console.log(res.data)
                })
        }
    }
}
