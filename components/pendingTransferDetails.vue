<template>
  <div class="col mb-4">
    <!-- Illustrations -->
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">
          transfer from user {{ transfer.sender }}
        </h6>
      </div>
      <div class="card-body">
        <!-- <div class="text-center">
              <img
                class="img-fluid px-3 px-sm-4 mt-3 mb-4"
                style="width: 25rem"
                src="img/undraw_posting_photo.svg"
                alt="..."
              />
            </div> -->
        <div class="form-group">
          <label for="privatekey"
            >Enter your chosen private integer to accept this transfer (maximum
            of four digits)</label
          >
          <input
            id="privateInteger"
            v-model="recieverInteger"
            class="form-control"
            type="number"
            min="1"
            max="9999"
            required
          />
          <div class="invalid-feedback">
            Please proviede a valid email address
          </div>
        </div>
        <!-- <p>plain text: {{ transfer.message }}</p> -->
        <!-- <a target="_blank" rel="nofollow" href="https://undraw.co/"
          >see details &rarr;</a
        > -->
      </div>
      <div class="card-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">
          cancel
        </button>
        <button type="button" class="btn btn-primary" @click="acceptTransfer">
          accept
        </button>
      </div>
    </div>

    <!-- Approach -->
    <!-- <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">Development Approach</h6>
      </div>
      <div class="card-body">
        <p>
          SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order
          to reduce CSS bloat and poor page performance. Custom CSS classes are
          used to create custom components and custom utility classes.
        </p>
        <p class="mb-0">
          Before working with this theme, you should become familiar with the
          Bootstrap framework, especially the utility classes.
        </p>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    transfer: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      recieverInteger: '',
    }
  },
  methods: {
    async acceptTransfer() {
      const formData = await new FormData()
      formData.append('reciever_private_integer', this.recieverInteger)
      try {
        this.$nuxt.$loading.start()

        const response = await this.$axios.put(`/exchange/update/${this.transfer.id}/`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        console.log(response)
        this.$toast.success('Transfer request was accepted successfuly')
        await this.$auth.fetchUser()
        this.$router.push({path: '/dashboard/'})
      } catch (err) {
        console.log(err.response)
      } finally {
        this.$nuxt.$loading.finish()
      }
    },
  },
}
</script>

<style></style>
