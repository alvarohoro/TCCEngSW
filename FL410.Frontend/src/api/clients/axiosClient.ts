import axios from "axios";

const fl410api = axios.create({
    baseURL:"https://backend.test"
})

export default fl410api