<!-- src/App.vue -->
<template>
  <!-- Navbar -->
  <div class="w3-top">
    <div class="w3-bar w3-black w3-card">
      <a
        class="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right"
        href="javascript:void(0)"
        onclick="myFunction()"
        title="Toggle Navigation Menu"
        ><i class="fa fa-bars"></i
      ></a>
      <a href="#" class="w3-bar-item w3-button w3-padding-large">HOME</a>
      <a href="#band" class="w3-bar-item w3-button w3-padding-large w3-hide-small">BAND</a>
      <a href="#tour" class="w3-bar-item w3-button w3-padding-large w3-hide-small">TOUR</a>
      <a href="#contact" class="w3-bar-item w3-button w3-padding-large w3-hide-small">CONTACT</a>
      <div class="w3-dropdown-hover w3-hide-small">
        <button class="w3-padding-large w3-button" title="More">
          MORE <i class="fa fa-caret-down"></i>
        </button>
        <div class="w3-dropdown-content w3-bar-block w3-card-4">
          <a href="#" class="w3-bar-item w3-button">Merchandise</a>
          <a href="#" class="w3-bar-item w3-button">Extras</a>
          <a href="#" class="w3-bar-item w3-button">Media</a>
        </div>
      </div>
      <a href="javascript:void(0)" class="w3-padding-large w3-hover-red w3-hide-small w3-right"
        ><i class="fa fa-search"></i
      ></a>
    </div>
  </div>

  <!-- Navbar on small screens (remove the onclick attribute if you want the navbar to always show on top of the content when clicking on the links) -->
  <div
    id="navDemo"
    class="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top"
    style="margin-top: 46px"
  >
    <a href="#band" class="w3-bar-item w3-button w3-padding-large" onclick="myFunction()">BAND</a>
    <a href="#tour" class="w3-bar-item w3-button w3-padding-large" onclick="myFunction()">TOUR</a>
    <a href="#contact" class="w3-bar-item w3-button w3-padding-large" onclick="myFunction()"
      >CONTACT</a
    >
    <a href="#" class="w3-bar-item w3-button w3-padding-large" onclick="myFunction()">MERCH</a>
  </div>

  <!-- Page content -->
  <div class="w3-content" style="max-width: 2000px; margin-top: 46px">
    <!-- Automatic Slideshow Images -->
    <Hero />

    <!-- The Band Section -->
    <div class="w3-container w3-content w3-center w3-padding-64" style="max-width: 800px" id="band">
      <h2 class="w3-wide">THE BAND</h2>
      <p class="w3-opacity"><i>We love music</i></p>
      <p class="w3-justify">
        We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>

    <!-- The Tour Section -->
    <div class="w3-black" id="tour">
      <div class="w3-container w3-content w3-padding-64" style="max-width: 800px">
        <h2 class="w3-wide w3-center">TOUR DATES</h2>
        <p class="w3-opacity w3-center"><i>Remember to book your tickets!</i></p>
        <br />

        <div class="w3-row-padding w3-padding-32" style="margin: 0 -16px">
          <div class="w3-third w3-margin-bottom">
            <img
              src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg"
              alt="New York"
              style="width: 100%"
              class="w3-hover-opacity"
            />
            <div class="w3-container w3-white">
              <p><b>New York</b></p>
              <p class="w3-opacity">Fri 27 Nov 2016</p>
              <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
              <button
                class="w3-button w3-black w3-margin-bottom"
                onclick="document.getElementById('ticketModal').style.display='block'"
              >
                Buy Tickets
              </button>
            </div>
          </div>
          <div class="w3-third w3-margin-bottom">
            <img
              src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg"
              alt="Paris"
              style="width: 100%"
              class="w3-hover-opacity"
            />
            <div class="w3-container w3-white">
              <p><b>Paris</b></p>
              <p class="w3-opacity">Sat 28 Nov 2016</p>
              <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
              <button
                class="w3-button w3-black w3-margin-bottom"
                onclick="document.getElementById('ticketModal').style.display='block'"
              >
                Buy Tickets
              </button>
            </div>
          </div>
          <div class="w3-third w3-margin-bottom">
            <img
              src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg"
              alt="San Francisco"
              style="width: 100%"
              class="w3-hover-opacity"
            />
            <div class="w3-container w3-white">
              <p><b>San Francisco</b></p>
              <p class="w3-opacity">Sun 29 Nov 2016</p>
              <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
              <button
                class="w3-button w3-black w3-margin-bottom"
                onclick="document.getElementById('ticketModal').style.display='block'"
              >
                Buy Tickets
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Ticket Modal -->

    <!-- The Contact Section -->
    <Contact></Contact>
    <!-- End Page Content -->
  </div>

  <!-- Image of location/map -->
  <img
    src="https://images.pexels.com/photos/10619952/pexels-photo-10619952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    class="w3-image w3-greyscale-min"
    style="width: 100%"
  />

  <Footer />
</template>

<script lang="ts" setup>
import Footer from './components/Footer.vue'
import Hero from './components/Hero.vue'
import Contact from './components/Contact.vue'
import sanityClient from './sanity-client'

const query = `*[_type == "post"] { ..., author-> }`

sanityClient.fetch(query).then((posts) => {
  console.log(posts)
})
</script>

<style scoped>
.image-filter {
  width: 100%;
  filter: grayscale(50%);
}
</style>
