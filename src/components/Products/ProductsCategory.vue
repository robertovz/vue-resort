<template>
  <div class="container">
    <div class="row my-4">
      <div class="col-12">
        <div
          class="text-primary mb-4 text-capitalize d-flex justify-content-center"
        >{{ text }} Rooms</div>
        <carousel
          :perPageCustom="[[0,1],[768,2],[1200,4]]"
          :autoplay="false"
          :loop="true"
          :paginationEnabled="false"
          :navigation-enabled="true"
          :min-swipe-distance="1"
          :navigation-next-label="navigationNext"
          :navigation-prev-label="navigationPrev"
        >
          <slide class="slide col-lg-3" v-for="product in items" :key="product.id">
            <div class="card product-grid">
              <router-link
                :to="{ name: 'details', 
                    params: { p_name: product.name, p_id: product.id }}"
              >
                <img :src="product.img" class="card-img-top" alt="..." />
                <div class="card-price">
                  {{ product.price | currency }}
                  <div class="price-text">per night</div>
                </div>
                <div class="card-body">
                  <div class="card-name white">{{ product.name }}</div>
                </div>
              </router-link>
              <add-to-compare :p_product="product" class="btn-compare"></add-to-compare>
            </div>
          </slide>
        </carousel>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["category", "text"],
  data() {
    return {
      items: {},
      slickOptions: {
        slidesToShow: 1
        // Any other options that can be got from plugin documentation
      },
    };
  },
  computed: {
    navigationNext: function() {
      return `<i class="fas fa-chevron-right"></i>`;
    },
    navigationPrev: function() {
      return `<i class="fas fa-chevron-left"></i>`;
    }
  },
  methods: {
    loadProducts() {
      this.items = this.$store.state.storeItems;
      if(this.category !== '') {
        this.items = this.$store.state.storeItems.filter(product => product.category === this.category);
      }
    }
  },
  created() {
    this.loadProducts();
  }
};
</script>

<style>
</style>