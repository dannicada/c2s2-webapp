export default function ({ $axios, error: nuxtError }) {
    // $axios.onError((error) => {
    //   nuxtError({
    //     statusCode: error.response.status,
    //     message: error.message,
    //   })
    //   return Promise.resolve(false)
    // })
  
    $axios.setBaseURL('https://c2s2-api.herokuapp.com/')
  }