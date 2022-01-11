import axios from "axios"

var httpApi = axios.create({
baseURL: process.env.VUE_APP_API_URL
});
var httpPlacesApi = axios.create({
baseURL: process.env.VUE_APP_PLACES_API
});

export {
httpApi,
httpPlacesApi
}

