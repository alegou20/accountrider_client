import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";


const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    // Vue.axios.defaults.baseURL = API_URL;
    Vue.axios.defaults.headers.common[
        "Authorization"
        ] = `Bearer ${'A21AAHaWX3miAvxJUXHRmWZ2I3rGvColt7IQaO93Yrnw1f6GmsSCNQYdSyEFw6cpH5yGqHIOh8e4jdHSWd7ovH98whx2JBWsA'}`;
  },
};

export default ApiService;



