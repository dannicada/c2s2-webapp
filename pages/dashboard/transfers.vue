<template>
  <div class="container-fluid">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Completed Transfers</h1>
      <a
        href="#"
        class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        data-toggle="modal"
        data-target="#newTransferModal"
        ><i class="fas fa-plus fa-sm text-white-50"></i> New Transfer</a
      >
    </div>
    <div v-for="(transfer,key) in completedTransfers" :key="key" class="row">
        <completed-transfers :transfer='transfer'/>
    </div>
  </div>
</template>

<script>
// import TransferDetails from '@/components/transferDetails.vue'
import CompletedTransfers from '@/components/completedTransfer.vue'
export default {
  components: {
    // TransferDetails,
    CompletedTransfers,
  },
  data() {
    return {
    }
  },
  computed: {
    sentTransfers() {
      return this.$auth.user.sent_exchange
    },
    recievedTransfers() {
      return this.$auth.user.recieved_exchange
    },
    completedTransfers() {
      const transfers = this.sentTransfers.concat(this.recievedTransfers);
      const newTransfers = transfers.filter(item => item.sender_private_integer && item.reciever_private_integer);
      return newTransfers
    }
  },
  
  // async fetch() {
  //     this.mountains = await this.$axios.get(
  //       '/me/'
  //     ).then(res => res.json())
  //   }
}
</script>

<style></style>
