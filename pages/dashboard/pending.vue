<template>
  <div class="container-fluid">
    <div class="d-sm-flex align-items-center justify-content-between mb-4">
      <h1 class="h3 mb-0 text-gray-800">Recieved Transfers (pending)</h1>
      <a
        href="#"
        class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        data-toggle="modal"
        data-target="#newTransferModal"
        ><i class="fas fa-plus fa-sm text-white-50"></i> New Transfer</a
      >
    </div>
    <div v-for="(transfer,key) in recievedTransfers" :key="key" class="row">
        <pending-transfer-details :transfer='transfer'/>
    </div>
  </div>
</template>

<script>
import pendingTransferDetails from '@/components/pendingTransferDetails.vue'
export default {
  components: {
    pendingTransferDetails
  },
  data() {
    return {
    }
  },
  computed: {
    // sentTransfers() {
    //   return this.$auth.user.sent_exchange
    // },
    sentTransfers() {
      const transfers = this.$auth.user.sent_exchange
      const newTransfers = transfers.filter(
        (item) =>item.reciever_private_integer === null
      )
      return newTransfers
    },
    // recievedTransfers() {
    //   return this.$auth.user.recieved_exchange
    // },
    recievedTransfers() {
      const transfers = this.$auth.user.recieved_exchange
      const newTransfers = transfers.filter(
        (item) =>item.reciever_private_integer === null
      )
      return newTransfers
    },
  },
  
}
</script>

<style></style>
