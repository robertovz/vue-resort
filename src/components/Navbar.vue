<template>
  <div class="navbar-wrapper">
    <nav class="navbar nav-top">
      <div class="container">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a
              href="#"
              class="nav-link"
            >Login</a>
          </li>
          <li class="nav-item">
            <a
              href="#"
              class="nav-link"
            >Register</a>
          </li>
        </ul>
      </div>
    </nav>
    <nav class="navbar navbar-expand-lg nav-bottom">
      <div class="container">
        <a class="navbar-brand white" href="#">
          <span class="font-weight-bold">Deluxe</span>Resort
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon">
            <i class="fas fa-bars white"></i>
          </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto">
            <li class="nav-item active">
              <router-link to="/" class="nav-link">
                Home
                <span class="sr-only">(current)</span>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link">Rooms</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Services</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  methods: {
    handleScroll() {
      if (window.scrollY > 120 && window.innerWidth > 768) {
        $(".nav-bottom").css("top", "0");
        $(".nav-bottom").css("background", "rgba(0, 0, 0, 0.9)");
        $(".nav-bottom").css("top", "0");
        $(".nav-bottom").css("top", "0");
        $(".nav-bottom").css("top", "0");
        $(".nav-bottom").css("top", "0");
      } else {
        $(".nav-top").css("top", "0");
        $(".nav-bottom").css("top", "40px");
        $(".nav-bottom").css("background", "transparent");
        $(".navbar-brand").css("color", "#fff");
      }
    },
  },
  created() {
    window.onload = this.handleScroll;
    window.addEventListener("scroll", this.handleScroll);
  }
};
</script>

<style lang="scss">
.navbar-wrapper {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
}
.nav-top {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  right: 0;
  left: 0;
  top: 0;
  height: 40px;
  z-index: 99;
  .navbar-nav,
  .nav-item {
    display: inline-block;
  }
  .nav-link {
    color: #fff !important;
    margin: -10px;
    margin-left: 20px;
  }
}
.nav-bottom {
  position: fixed;
  z-index: 99;
  right: 0;
  left: 0;
  top: 40px;
  background: transparent;
  color: #fff;
  .navbar-brand {
    font-style: italic;
    font-family: "Tangerine", serif;
    font-size: 1.9rem;
  }
  .navbar-nav .nav-link {
    color: #fff;
    text-transform: uppercase;
  }
}
@media only screen and(max-width: 991px) {
  .nav-top {
    position: absolute !important;
    margin-top: 70px !important;
  }
  .nav-bottom {
    background: #111 !important;
    top: 0 !important;
  }
  .nav-link {
    padding: 10px !important;
  }
}
</style>