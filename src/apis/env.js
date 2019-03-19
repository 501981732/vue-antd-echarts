let baseUrl = "";
let routerBaseUrl = "";
if (process.env.NODE_ENV == "development") {
    baseUrl = "";
    routerBaseUrl = "";
} else if (process.env.NODE_ENV == "test") {
    baseUrl = "";
    routerBaseUrl = "";
} else if (process.env.NODE_ENV == "production") {
    baseUrl = "";
    routerBaseUrl = "";
}
export { baseUrl, routerBaseUrl };