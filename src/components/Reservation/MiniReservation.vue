<template>
  <div>
    <button class="btn bcustom-primary" @click="openModal">Book this</button>
    <!-- Modal -->
    <div
      class="modal fade"
      id="reservation"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalScrollableTitle"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
          <div class="modal-header modal-custom-header">
            <h5 class="modal-title" id="exampleModalScrollableTitle">Book this room</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true" class="white">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-md-6">
                <form class="form-group">
                  <label for="inputName" class="col-sm-10 control-label">Name</label>
                  <div class="col-sm-12">
                    <input type="text" class="form-control" id="inputName" placeholder="Enter Name" />
                  </div>
                </form>
              </div>
              <div class="col-md-6">
                <form class="form-group">
                  <label for="inputEmail" class="col-sm-10 control-label">Email</label>
                  <div class="col-sm-12">
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail"
                      placeholder="Enter Email"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <form class="form-group">
                  <label for="inputCheckIn" class="col-sm-10 control-label">Dates</label>

                  <div class="col-sm-12">
                    <HotelDatePicker
                      @check-in-changed="setCheckIn"
                      @check-out-changed="setCheckOut"
                      :disabledDates="disabledDates"
                      :key="disabledDates.length"
                    />
                  </div>
                </form>
              </div>
              <div class="col-md-6">
                <form class="form-group">
                  <label for="inputCheckOut" class="col-sm-10 control-label">Total Price</label>

                  <div class="col-sm-12">
                    <div class="form-control" aria-readonly="true">{{ price | currency}}</div>
                  </div>
                </form>
              </div>
            </div>
            <form class="form-group">
              <label for="inputMessage" class="col-sm-10 control-label">Message</label>
              <div class="col-sm-12">
                <textarea
                  type="text"
                  class="form-control"
                  id="inputMessage"
                  placeholder="Enter a message"
                  style="height: 150px;"
                />
              </div>
            </form>
            <form class="form-group">
              <div class="col-sm-offset-2 col-sm-12">
                <button
                  type="submit"
                  class="btn bcustom-primary"
                  @click.prevent="createReservation"
                >Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HotelDatePicker from "vue-hotel-datepicker";
export default {
  components: {
    HotelDatePicker
  },
  props: {
    pId: 0,
    pPrice: 0
  },
  data() {
    return {
      products: {},
      grid: true,
      orders: {},
      disabledDates: [],
      check_in: "",
      check_out: "",
      price: ""
    };
  },
  methods: {
    createReservation() {
      $("#reservation").modal("hide");
      var content = document.createElement('div');
      toast.fire({
        title: "Reservation request sent successfully!",
        text: "We will confirm to you shortly.",
        icon: "success"
      });
    },
    openModal() {
      $("#reservation").modal("show");
    },
    setCheckIn(date) {
      this.check_in = date;
    },
    setCheckOut(date) {
      const duration = date - this.check_in;
      const day = 1000 * 60 * 60 * 24;
      const days = Math.floor(duration / day);
      const result = this.pPrice * days;
      if (result > 0) {
        this.price = result;
      } else {
        this.price = 0;
      }
      this.check_out = date;
    }
  },
  created() {}
};
</script>