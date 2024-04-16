<script>
  import { onMount } from "svelte";

  let navbarOpen = false;
  let headerActive = false;

  function toggleNavbar() {
    navbarOpen = !navbarOpen;
  }

  function toggleHeader() {
    headerActive = window.scrollY >= 400;
  }

  onMount(() => {
    // window.addEventListener("scroll", toggleHeader);

    const navCloseBtn = document.querySelector("[data-nav-close-btn]");
    const navOpenBtn = document.querySelector("[data-nav-open-btn]");
    const navbarLinks = document.querySelectorAll("[data-nav-link]");

    const navElemArr = [navCloseBtn, navOpenBtn, ...navbarLinks];

    navElemArr.forEach((elem) => {
      elem.addEventListener("click", toggleNavbar);
    });

    return () => {
      window.removeEventListener("scroll", toggleHeader);
      navElemArr.forEach((elem) => {
        elem.removeEventListener("click", toggleNavbar);
      });
    };
  });
</script>

<!-- HTML structure for navbar and header -->
<header class="header shadow-lg" class:active={headerActive}>
  <div class="overlay" data-overlay></div>

  <div class="header-bottom">
    <div class="flex justify-around items">
      <a href="#home" class="logo">
        <img class="w-[95px]" src="/logo.png" alt="Homeverse logo" />
      </a>

      <nav class="navbar" class:active={navbarOpen}>
        <div class="navbar-top">
          <a href="#" class="logo">
            <img src="/logo.png" alt="Homeverse logo" />
          </a>

          <button
            class="nav-close-btn"
            data-nav-close-btn
            aria-label="Close Menu"
          >
            <i class="fa-solid fa-xmark text-3xl mr-7"></i>
          </button>
        </div>

        <div class="navbar-bottom">
          <ul class="navbar-list">
            <li>
              <a href="https://new-way-ventures.vercel.app/#home" class="navbar-link" data-nav-link>Home</a>
            </li>

            <li>
              <a href="/aboutus" class="navbar-link" data-nav-link>About</a>
            </li>

            <li>
              <a href="https://new-way-ventures.vercel.app/#pricing" class="navbar-link" data-nav-link>Pricing</a>
            </li>

            <li>
              <a href="https://new-way-ventures.vercel.app/#property" class="navbar-link" data-nav-link>Property</a
              >
            </li>

            <li>
              <a href="https://new-way-ventures.vercel.app/#aminities" class="navbar-link" data-nav-link
                >Aminities</a
              >
            </li>

            <li>
              <a href="https://new-way-ventures.vercel.app/#contact" class="navbar-link" data-nav-link>Contact</a>
            </li>
          </ul>
        </div>
      </nav>

      <div class="header-bottom-actions">
        <!-- <button
          class="header-bottom-actions-btn rounded-2xl"
          aria-label="Search"
          on:click={() => (window.location.href = "/Login-Register")}
        >
          <i class="fa-solid fa-right-to-bracket md:ml-3 3xs:ml-1 text-xl"></i>

          <span>Login</span>
        </button> -->

        <button
          id="button"
          class="btn p-3"
          on:click={() => (window.location.href = "#contact")}>Book Now</button
        >

        <button
          class="header-bottom-actions-btn rounded-2xl"
          data-nav-open-btn
          aria-label="Open Menu"
          on:click={toggleNavbar}
        >
          <i class="fa-solid fa-bars md:ml-4 3xs:ml-2 text-xl"></i>

          <span>Menu</span>
        </button>
      </div>
    </div>
  </div>
</header>

<style>
  @media screen and (max-width: 1200px) {
    .items {
      gap: 40%;
    }
  }
</style>
