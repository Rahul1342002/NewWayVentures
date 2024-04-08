<script>
  import Navbar from "$lib/components/navbar.svelte";
</script>

<Navbar />
<section class="bg-gray-50 min-h-[90vh] flex items-center justify-center">
  <!-- login container -->
  <div class="bg-gray-100 flex flex-col md:flex-row rounded-2xl shadow-lg max-w-3xl p-5 items-center ">

    <!-- form -->
    <div class="md:w-[30vw] md:px-8 md:px-16 order-1 md:mr-8">
      <h2 class="font-semibold text-2xl text-[#002D74]">Login</h2>
      <p class="text-xs mt-4 text-[#002D74]">
        For Administrative purposes only, Log into our New Way Ventures
      </p>

      <form action="" class="flex flex-col gap-4">
        <input
          class="p-2 mt-8 rounded-xl border"
          type="email"
          name="email"
          placeholder="Email"
        />
        <div class="relative">
          <input
            class="p-2 rounded-xl border w-full"
            type="password"
            name="password"
            placeholder="Password"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="gray"
            class="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"
            viewBox="0 0 16 16"
          >
            <path
              d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
            />
            <path
              d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
            />
          </svg>
        </div>
        <button
          class="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300 text-center"
        >
          Login
        </button>
      </form>

    </div>

    <!-- image -->
    <div class="md:w-1/2 order-2 md:order-1 mt-8 md:mt-0">
      <img class="rounded-2xl" src="/login.png" alt="Login Image" />
    </div>
  </div>
</section>
