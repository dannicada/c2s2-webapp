<template>
  <div class="col mb-4">
    <!-- Illustrations -->
    <div class="card shadow mb-4">
      <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">
          transfer to user {{ transfer.sender }}
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
        <p>
            plain text: {{transfer.message}}
        </p>
        <!-- <a target="_blank" rel="nofollow" href="https://undraw.co/"
          >see details &rarr;</a
        > -->
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
}
</script>

<style></style>
