<section class="about" id="about">
  <div class="container">
    <figure class="about-banner">
      <img
        src="https://www.bbgindia.com/data/media_attachments/our-purpose/our-purpose.png"
        alt="House interior"
        class="rounded-3xl"
      />
    </figure>

    <div class="about-content">
      <p class="section-subtitle text-[#0B294F]">Our Purpose</p>

      <h2 class="h2 section-title font-bold">
        New Way Ventures: Empowering Everygirl's Future
      </h2>

      <p class="about-text">
        At New Way Ventures, we're dedicated to shaping a brighter future for
        every girl child. With a goal to impact 2 million lives by 2040, we
        strive to provide opportunities for families to secure their futures
        through land ownership, in line with Gandhi's vision of
        community-centered business.
      </p>

      <!-- <ul class="about-list">
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
      </ul> -->

      <p class="callout">
        "Empowering girls and families through land ownership for a brighter
        tomorrow."
      </p>

      <!-- <a
        href="#contact"
        class="btn"
        on:click={() => (window.location.href = "#contact")}>Know More</a
      > -->
    </div>
  </div>
</section>

<div
  id="contact"
  class="flex w-full min-h-screen justify-center items-center p-2"
>
  <div
    class="flex flex-col-reverse overflow-hidden md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-[#0B294F] w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white"
  >
    <div class="flex flex-col space-y-8">
      <div>
        <h1
          class="font-bold text-2xl tracking-wide underline text-center mt-4 md:text-left"
        >
          Our Vision
        </h1>
        <p class="pt-2 text-cyan-100 text-sm md:text-base text-justify">
          Our vision at New Way Ventures is to empower individuals and families
          to realize their real estate aspirations by providing premium land
          plots in sought-after locations. We envision land ownership as more
          than just a financial asset, but as a fundamental step towards
          creating wealth and leaving a lasting legacy.
        </p>
      </div>
      <div class="flex flex-col space-y-4">
        <div class="flex space-x-2">
          <span>
            <p class="font-bold underline text-2xl text-center md:text-left">
              Our Mission
            </p>

            <p
              class="text-sm md:text-base text-cyan-100 pt-2 leading-relaxed text-justify"
            >
              Our mission is to empower individuals and families to achieve
              their real estate goals by offering high-quality plots of land in
              desirable locations. We believe that owning land is not just a
              financial investment, but a cornerstone of wealth creation and
              legacy building.
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

<!-- <div id="contact" class="flex w-full min-h-screen justify-center items-center md:mt-[-90px]">
  <div
    class="flex flex-col overflow-hidden md:flex-row md:space-x-6 md:space-y-0 space-y-6  w-full max-w-4xl p-8 sm:p-12 rounded-xl  text-[#0B294F]"
  >
  <div class="relative">
      
      <div class="bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80 z-10">
        <img class="rounded-2xl" src="/login.png" alt="Login Image" />
      </div>
    </div>
    <div class="flex flex-col   ">
      <p class=" text-fs-5 font-light py-1 px-5 bg-blue-300 inline-block rounded-full mb-4 mr-auto text-[#0B294F] ">Leadership</p>

      <h2 class="text-xl  font-bold">
        Discover Our Story: Pioneering Excellence in Real Estate Development.
      </h2>

      <p class="about-text text-justify">
        Elevating lifestyles through visionary real estate solutions, we
        redefine luxury with innovation and integrity. Experience excellence in
        every detail with our distinguished portfolio of properties.
      </p>

      

      <p class="callout-1">
        "Crafting Exceptional Living Experiences, Enriching Lifestyles, and Redefining Luxury Living Standards."
      </p>
      

      
    </div>
  </div>
</div> -->

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
