export default function ({ $axios, error: nuxtError }) {
    // $axios.onError((error) => {
    //   nuxtError({
    //     statusCode: error.response.status,
    //     message: error.message,
    //   })
    //   return Promise.resolve(false)
    // })
  
    $axios.setBaseURL('http://127.0.0.1:8000')
  }