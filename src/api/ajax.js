import axios from 'axios'


const instance = axios.create({

    timeout: 5000,//todo 请求超时时间
})


export default instance