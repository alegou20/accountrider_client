import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
// import JwtService from "@/common/jwt.service";
import { API_URL } from "@/common/config";

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
    Vue.axios.defaults.headers.common[
        "Authorization"
        ] = `Bearer ${'A21AAHaWX3miAvxJUXHRmWZ2I3rGvColt7IQaO93Yrnw1f6GmsSCNQYdSyEFw6cpH5yGqHIOh8e4jdHSWd7ovH98whx2JBWsA'}`;
  },

  get(resource, slug = "") {
    return Vue.axios.get(`${resource}/${slug}`).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },

  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  delete(resource) {
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  }
};

export default ApiService;

export const ProductService = {
  get() {
    return ApiService.get("item");
  },
  getById(id) {
    return ApiService.get("item", `${id}`);
  },
};

