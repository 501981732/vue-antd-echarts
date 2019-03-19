import ax from "./axiosConfig.js";

let url = {}

if (process.env.NODE_ENV === "development") {
    url = {
        login: "",
        userInfo: ""

    };
} else if (process.env.NODE_ENV === "test") {
    url = {
        login: "",
        userInfo: ""

    };
} else if (process.env.NODE_ENV === "production") {
    url = {
        cate: "",
        userInfo: ""

    };
}



const userInfo = data => ax.get(url.userInfo, { params: data });

const login = data => ax.post(url.login, data);


export default {
    userInfo,
    login
};
