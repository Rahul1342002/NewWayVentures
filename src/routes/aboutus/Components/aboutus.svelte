
<div id="contact" class="flex w-full min-h-screen justify-center items-center p-2">
  <div
    class="flex flex-col-reverse overflow-hidden md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-[#0B294F] w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white"
  >
    <div class="flex flex-col   space-y-8">
      <div>
        <h1 class="font-bold text-2xl tracking-wide underline text-center mt-4 md:text-left">About Us</h1>
        <p class="pt-2 text-cyan-100 text-sm md:text-base text-justify">
          Welcome to BVR New Way Ventures, your trusted partner in the world of real estate. We specialize in offering prime plots of land that promise not just a place to build, but a canvas for your dreams to take shape. Discover a new way to invest and build your future with us. 
        </p>
      </div>
      <div class="flex flex-col space-y-4">
        
        <div class="flex space-x-2">
          
          <span>

            <p class="font-bold underline text-2xl text-center md:text-left">Our Mission</p>

            <p class="text-sm md:text-base text-cyan-100 pt-2 leading-relaxed  text-justify ">
              Our mission is to empower individuals and families to achieve their real estate goals by offering high-quality plots of land in desirable locations. We believe that owning land is not just a financial investment, but a cornerstone of wealth creation and legacy building.
            </p>
            
          </span>
        </div>
        
      </div>
      
    </div>
    <div class="relative">
      
      <div class="bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80 z-10">
        <img class="rounded-2xl" src="/login.png" alt="Login Image" />
      </div>
    </div>
  </div>
</div>




<section class="about" id="about">
  <div class="container">
    <figure class="about-banner">
      <img
        src="https://images.pexels.com/photos/1838640/pexels-photo-1838640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="House interior"
        class="rounded-3xl"
      />
    </figure>

    <div class="about-content">
      <p class="section-subtitle text-[#0B294F]">About Us</p>

      <h2 class="h2 section-title font-bold">
        Discover Our Story: Pioneering Excellence in Real Estate Development.
      </h2>

      <p class="about-text">
        Elevating lifestyles through visionary real estate solutions, we
        redefine luxury with innovation and integrity. Experience excellence in
        every detail with our distinguished portfolio of properties.
      </p>

      <ul class="about-list">
        <li class="about-item">
          <div class="about-item-icon">
            <i class="fa-solid fa-house text-[#0B294F]"></i>
          </div>

          <p class="about-item-text">Innovative Design</p>
        </li>

        <li class="about-item">
          <div class="about-item-icon">
            <i class="fa-solid fa-leaf"></i>
          </div>

          <p class="about-item-text">Sustainable Development</p>
        </li>

        <li class="about-item">
          <div class="about-item-icon">
            <i class="fa-solid fa-dollar-sign"></i>
          </div>

          <p class="about-item-text">Premium Amenities</p>
        </li>

        <li class="about-item">
          <div class="about-item-icon">
            <i class="fa-solid fa-location-dot"></i>
          </div>

          <p class="about-item-text">Prime Locations</p>
        </li>
      </ul>

      <p class="callout">
        "Crafting Exceptional Living Experiences, Enriching Lifestyles, and
        Redefining Luxury Living Standards."
      </p>

      <a
        href="#contact"
        class="btn"
        on:click={() => (window.location.href = "#contact")}>Know More</a
      >
    </div>
  </div>
</section>



<style>
  .btn {
    position: relative;
    background: var(--orange-soda);
    color: var(--white);
    font-family: var(--ff-poppins);
    font-size: var(--fs-5);
    text-transform: var(--text-transform, capitalize);
    border: 1px solid var(--orange-soda);
    padding: 10px 20px;
    z-index: 1;
  }

  .btn:is(:hover, :focus) {
    background: var(--black);
    color: var(--dark-jungle-green);
    border-color: var(--black);
  }

  .btn::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--white);
    transition: var(--transition);
    z-index: -1;
  }

  .btn:is(:hover, :focus)::before {
    width: 100%;
  }


</style>
