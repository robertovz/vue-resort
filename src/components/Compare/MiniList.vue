<template>
  <div
    class="modal fade bd-example-modal-lg"
    tabindex="-1"
    id="list"
    role="dialog"
    aria-labelledby="myLargeModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content modal-list">
        <div class="modal-header modal-custom-header">
          <div class="font-weight-bold">Items to Compare</div>
          <button type="button" class="close white" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <carousel :perPageCustom="[[0,1],[780,2],[1200,4]]" :autoplay="false" :paginationEnabled="false" :navigation-enabled="true"
          :min-swipe-distance="1" :navigation-next-label="navigationNext" :navigation-prev-label="navigationPrev">
            <slide class="slide p-2 modal-list_slide" v-for="item in this.$store.state.compareItems" :key="item.id">
              <div class="card">
              <img :src="item.img" class="card-img-top" alt="..." width="250px">
                <div class="card-body">
                  <button
                    @click="$store.commit('removeFromCompareItems', item)"
                    class="btn btn-primary-outline d-block text-right"
                  >
                    <i class="fas fa-trash red"></i>
                  </button>
                  <div style="height: 25px;">{{ item.name.substring(0,45) }}
                    <span v-if="(item.name).length > 45">...</span></div>
                  <div>{{ item.price | currency }}</div>
                </div>
              </div>
            </slide>
          </carousel>
        </div>
        <div class="modal-footer">
          <button
            :disabled="(this.$store.state.compareItems.length == 0)"
            data-dismiss="modal" aria-label="Close"
            class="btn btn-dark"
            style="width: 20%"
            data-toggle="modal"
            data-target="#compare"
          >Compare</button>
          <button class="btn btn-primary" style="width: 20%" data-dismiss="modal" aria-label="Close">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
  methods: {
  },
  computed: {
    navigationNext: function() { return `<i class="fas fa-chevron-right"></i>` },
    navigationPrev: function() { return `<i class="fas fa-chevron-left"></i>` },
  },
  created() {
  }
};
</script>

<style lang="scss">
.modal-list_slide {
  visibility: visible;
  flex-basis: 25%;
  width: 25%;
  .card-body {
    background: #fff;
    color: #fff;
  }
}
@media only screen and (max-width: 1200px) {
  .modal-list_slide {
    visibility: visible;
    flex-basis: 50%;
    width: 50%;
  }
  .modal-list .modal-footer .btn {
    width: 30%!important;
  }
}
@media only screen and (max-width: 400px) {
  .modal-list_slide {
    visibility: visible;
    flex-basis: 100%;
    width: 100%;
  }
}
.modal-content.modal-list {
  background: rgba(255, 255, 255, 0.9);
}
</style>