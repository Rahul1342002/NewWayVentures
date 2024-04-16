<section class="hero bg-blue-100" id="home">
  <div class="p-7 flex justify-center main lg:items-center gap-5">
    <div class="hero-content">
      <p class="hero-subtitle">
        <i class="fa-solid fa-house text-[#00ADED]"></i>

        <span>Real Estate Agency</span>
      </p>

      <h2 class="h1 hero-title font-bold">
        <span class="text-[42px]"> New Way Ventures presents</span>
        <span
          class="text-[#00ADED] project sm:text-[90px] text-[43px] leading-[90px]"
          >Aero Commercial</span
        ><span class="text-2xl">Where Luxury Meets Affordability.</span>
      </h2>

      <p class="hero-text font-medium project">
        Explore Aero Commercial by New Way Ventures, Where Luxury and
        Affordability Converge Seamlessly.
      </p>

      <button class="btn" on:click={() => (window.location.href = "#contact")}
        >Make An Enquiry</button
      >
    </div>

    <figure class="hero-banner">
      <img
        src="https://codewithsadee.github.io/homeverse/assets/images/hero-banner.png"
        alt="Modern house model"
        class="w-100"
      />
    </figure>
  </div>
</section>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap");
  .project {
    font-family: "Dancing Script", cursive;
  }

  @media screen and (max-width: 991px) {
    .main {
      display: flex;
      flex-direction: column;
    }
  }
</style>
