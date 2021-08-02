<template>
  <div class="container">
    <div class="card o-hidden border-0 shadow-lg my-5">
      <div class="card-body p-0">
        <!-- Nested Row within Card Body -->
        <div class="row">
          <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
          <div class="col-lg-7">
            <div class="p-5">
              <div class="text-center">
                <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
              </div>
              <form class="user">
                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <input
                      v-model="first_name"
                      type="text"
                      class="form-control form-control-user"
                      id="exampleFirstName"
                      placeholder="First Name"
                    />
                  </div>
                  <div class="col-sm-6">
                    <input
                      v-model="last_name"
                      type="text"
                      class="form-control form-control-user"
                      id="exampleLastName"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div class="form-group">
                  <input
                    v-model="email"
                    type="email"
                    class="form-control form-control-user"
                    id="InputEmail"
                    placeholder="Email Address"
                  />
                </div>
                <div class="form-group row">
                  <div class="col-sm-6 mb-3 mb-sm-0">
                    <input
                      v-model="password"
                      type="password"
                      class="form-control form-control-user"
                      id="InputPassword"
                      placeholder="Password"
                    />
                  </div>
                  <div class="col-sm-6">
                    <input
                      type="password"
                      class="form-control form-control-user"
                      id="RepeatPassword"
                      placeholder="Repeat Password"
                    />
                  </div>
                </div>
                <a @click="register" class="btn btn-primary btn-user btn-block">
                  Register Account
                </a>
                <hr />
                <!-- <a href="index.html" class="btn btn-google btn-user btn-block">
                  <i class="fab fa-google fa-fw"></i> Register with Google
                </a>
                <a
                  href="index.html"
                  class="btn btn-facebook btn-user btn-block"
                >
                  <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                </a> -->
              </form>
              <hr />
              <div class="text-center">
                <a class="small" href="forgot-password.html"
                  >Forgot Password?</a
                >
              </div>
              <div class="text-center">
                <a class="small" href="login.html"
                  >Already have an account? Login!</a
                >
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
      first_name: '',
      last_name: '',
    }
  },
  methods: {
    async register() {
      this.isLoading = true
      this.$nuxt.$loading.start()
      const formData = await new FormData()
      formData.append('email', this.email)
      formData.append('password', this.password)
      formData.append('first_name', this.first_name)
      formData.append('last_name', this.last_name)

      this.$axios
        .post(`/register/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((response) => {
          console.log(response)
          this.$nuxt.$loading.finish()
          this.isLoading = false
          if (response.status === 201) {
            this.$router.push({
              path: '/login',
            })
          }
        })
        .catch((error) => {
          this.$nuxt.$loading.finish()
          console.log(error)
        })
    },
  },
}
</script>

<style></style>
