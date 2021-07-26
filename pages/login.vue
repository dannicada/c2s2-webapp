<template>
  <div class="container">
    <!-- Outer Row -->
    <div class="row justify-content-center">
      <div class="col-xl-10 col-lg-12 col-md-9">
        <div class="card o-hidden border-0 shadow-lg my-5">
          <div class="card-body p-0">
            <!-- Nested Row within Card Body -->
            <div class="row">
              <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
              <div class="col-lg-6">
                <div class="p-5">
                  <div class="text-center">
                    <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                  </div>
                  <form class="user">
                    <div class="form-group">
                      <input
                        id="InputEmail"
                        v-model="email"
                        type="email"
                        class="form-control form-control-user"
                        aria-describedby="emailHelp"
                        placeholder="Enter Email Address..."
                      />
                    </div>
                    <div class="form-group">
                      <input
                        id="InputPassword"
                        v-model="password"
                        type="password"
                        class="form-control form-control-user"
                        placeholder="Password"
                      />
                    </div>
                    <div class="form-group">
                      <div class="custom-control custom-checkbox small">
                        <input
                          id="customCheck"
                          type="checkbox"
                          class="custom-control-input"
                        />
                        <label class="custom-control-label" for="customCheck"
                          >Remember Me</label
                        >
                      </div>
                    </div>
                    <a
                      @click="login"
                      class="btn btn-primary btn-user btn-block"
                    >
                      Login
                    </a>
                    <hr />
                    <!-- <a
                      href="index.html"
                      class="btn btn-google btn-user btn-block"
                    >quiz
                      <i class="fab fa-google fa-fw"></i> Login with Google
                    </a>
                    <a
                      href="index.html"
                      class="btn btn-facebook btn-user btn-block"
                    >
                      <i class="fab fa-facebook-f fa-fw"></i> Login with
                      Facebook
                    </a> -->
                  </form>
                  <hr />
                  <div class="text-center">
                    <a class="small" href="forgot-password.html"
                      >Forgot Password?</a
                    >
                  </div>
                  <div class="text-center">
                    <a
                      class="small"
                      @click="
                        $router.push({
                          path: '/register',
                        })
                      "
                      >Create an Account!</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async login() {
      this.$nuxt.$loading.start()
      const formData = await new FormData()
      formData.append('email', this.email)
      formData.append('password', this.password)
      try {
        const response = await this.$auth.loginWith('local', { data: formData })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
      finally{
        this.$nuxt.$loading.finish()
      }
      // this.$axios
      //   .post(`/login/`, formData, {
      //     headers: {
      //       'Content-Type': 'multipart/form-data',
      //     },
      //   })
      //   .then((response) => {
      //     console.log(response)
      //     this.isLoading = false
      //     if (response.status === 200) {
      //       this.$store.commit('setAuthStatus', true)
      //       this.$router.push({
      //         path: '/dashboard',
      //       })
      //     }
      //   })
      //   .catch((error) => {
      //     console.log(error)
      //   })
    },
  },
}
</script>

<style></style>
