<template>
  <div
    id="transferDetailsModal"
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
            decrypted message
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
            decrytped message : {{transfer.message}}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            close
          </button>
          <!-- <button
            type="button"
            class="btn btn-primary"
            @click="getUserIdFromEmail"
          >
            Submit
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// // Example starter JavaScript for disabling form submissions if there are invalid fields
// ;(function () {
//   'use strict'
//   window.addEventListener(
//     'load',
//     function () {
//       // Fetch all the forms we want to apply custom Bootstrap validation styles to
//       const forms = document.getElementsByClassName('needs-validation')
//       // Loop over them and prevent submission
//       // eslint-disable-next-line no-unused-vars
//       const validation = Array.prototype.filter.call(forms, function (form) {
//         form.addEventListener(
//           'submit',
//           function (event) {
//             if (form.checkValidity() === false) {
//               event.preventDefault()
//               event.stopPropagation()
//             }
//             form.classList.add('was-validated')
//           },
//           false
//         )
//       })
//     },
//     false
//   )
// })()
export default {
  name: 'TransferDetails',
  props:{
      transfer: {
          type: Object,
          required: true,

      }
  },
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
        document.getElementById('close').click();
        this.$toast.success('Transfer request was created successfuly')
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
