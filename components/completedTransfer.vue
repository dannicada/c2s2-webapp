<template>
  <div class="col mb-4">
    <!-- Illustrations -->
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <div v-if="transfer.sender === $auth.user.id">
          <h6 class="m-0 font-weight-bold text-primary">
            transfer to user {{ transfer.reciever }}
          </h6>
        </div>
        <div v-if="transfer.reciever === $auth.user.id">
          <h6 class="m-0 font-weight-bold text-primary">
            transfer from user {{ transfer.sender }}
          </h6>
        </div>
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
        <p>encrypted message: {{ transfer.message }}</p>
        <a
          data-toggle="modal"
          data-target="#transferDetailsModal"
          rel="nofollow"
          href=""
          >decrypt message &rarr;</a
        >
      </div>
    </div>
    <transfer-details :transfer='transfer' />
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
import TransferDetails from '@/components/transferDetails.vue'
export default {
    components: {
        TransferDetails,
    },
  props: {
    transfer: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style></style>
