<template>
  <div
    id="newTransferModal"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Create a new encrypted transfer request
          </h5>
          <button
            id="close"
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form class="needs-validation" novalidate>
            <div class="form-group">
              <label for="exampleFormControlInput1"
                >reciepients email address</label
              >
              <input
                id="exampleFormControlInput1"
                v-model="recieverEmail"
                type="email"
                class="form-control"
                placeholder="name@example.com"
                required
              />
              <div class="invalid-feedback">
                Please proviede a valid email address
              </div>
            </div>
            <!-- <div class="form-group">
              <label for="exampleFormControlSelect1">Example select</label>
              <select class="form-control" id="exampleFormControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div> -->
            <div class="form-group">
              <label for="privatekey"
                >Enter your chosen private integer (maximum of four
                digits)</label
              >
              <input
                id="privateInteger"
                v-model="privateInteger"
                class="form-control"
                type="number"
                min="1"
                max="9999"
                required
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1"
                >Message to be encrypted</label
              >
              <textarea
                id="plainText"
                v-model="message"
                class="form-control"
                required
              ></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            cancel
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="getUserIdFromEmail"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewTransfer',
  data() {
    return {
      recieverEmail: '',
      recieverId: '',
      message: '',
      privateInteger: '',
      errors: {
        email: '',
      },
    }
  },
  methods: {
    async submitRequest() {
      this.$nuxt.$loading.start()
      const formData = await new FormData()
      formData.append('reciever', this.recieverId)
      formData.append('sender_private_integer', this.privateInteger)
      formData.append('message', this.message)
      try {
        const response = await this.$axios.post(`/exchange/create/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        console.log(response)
        // $('#myModal').modal('toggle')
        this.$toast.success('Transfer request was created successfuly')
        document.getElementById('close').click()
      } catch (err) {
        console.log(err.response)
      } finally {
        this.$nuxt.$loading.finish()
      }
    },
    async getUserIdFromEmail() {
      if (this.recieverEmail === '') {
        this.$toast.error('please enter email address')
        return
      }
      if (this.privateInteger === '') {
        this.$toast.error('please enter private integer')
        return
      }
      if (this.message === '') {
        this.$toast.error('please enter message to be encrypted')
        return
      }
      this.$nuxt.$loading.start()
      const formData = await new FormData()
      try {
        const response = await this.$axios.get(
          `users/search/${this.recieverEmail}/`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        )
        console.log(response)
        if (response.status === 200) {
          this.recieverId = response.data.id
          this.submitRequest()
        }
      } catch (err) {
        console.log(err.response)
        if (err.response.status === 404) {
          this.$toast.error('User with that email does not exist')
        } else {
          this.$toast.error('An error occured')
        }
      } finally {
        this.$nuxt.$loading.finish()
      }
    },
  },
}
</script>

<style></style>
