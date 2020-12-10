import axios from "axios";

const API = {
    getEmployees: function (num = 10) {
        return axios.get(`https://randomuser.me/api/?results=${num}&nat=us`);
    }
}

export default API;