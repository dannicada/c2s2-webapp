<template>
  <div
    class="modal fade"
    id="newTransferModal"
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
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form class="needs-validation was-validated" novalidate>
            <div class="form-group">
              <label for="exampleFormControlInput1"
                >reciepients email address</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
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
                >Enter your desired private key for encryption</label
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
            Close
          </button>
          <button @click="submitRequest" type="button" class="btn btn-primary">
            Save changes
          </button>
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
  name: 'NewTransfer',
  data() {
    return {
      message: '',
      privateInteger: '',
    }
  },
  methods:{
    submitRequest() {
      this.$nuxt.$loading.start()

    }
  }
}
</script>

<style></style>
