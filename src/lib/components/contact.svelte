<script>
  // import { useState } from 'svelte';

  let isLoading = false;

  async function handleSubmit(event) {
    event.preventDefault();
    isLoading = true;

    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
      });

      if (response.ok) {
        alert("Thank you! Your message has been sent successfully.");
        form.reset();
      } else {
        alert("Oops! Something went wrong. Please try again later.");
      }
    } catch (error) {
      console.error('Error:', error);
      alert("Oops! Something went wrong. Please try again later.");
    } finally {
      isLoading = false;
    }
  }
</script>

{#if isLoading}
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div class="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-white"></div>
  </div>
{/if}

<div id="contact" class="flex w-full min-h-screen justify-center items-center p-2">
  <div
    class="flex flex-col overflow-hidden md:flex-row md:space-x-6 md:space-y-0 space-y-6 bg-[#0B294F] w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white"
  >
    <div class="flex flex-col justify-between space-y-8">
      <div>
        <h1 class="font-bold text-4xl tracking-wide">Contact Us</h1>
        <p class="pt-2 text-cyan-100 text-sm">
          Reach out to us today for personalized assistance with your real estate needs. Our dedicated team is here to guide you every step of the way.
        </p>
      </div>
      <div class="flex flex-col space-y-4">
        <div class="flex space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-cyan-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clip-rule="evenodd"
            />
          </svg>
          <span>
            <p class="font-bold underline">Venture Address</p>
            <p class="section-text">Ravada,Bhogapuram Vizianagaram(Dt.) Andhrapradesh.</p>
          </span>
        </div>
        <div class="flex space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-cyan-300"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clip-rule="evenodd"
            />
          </svg>
          <span>
            <p class="font-bold underline">Office Address</p>
            <p class="section-text">53-23-9/1, Hasansha Arcade, Beside Kakatiya Function Hall NH-5 Maddilapalem, Visakhapatnam 530013</p>
          </span>
        </div>
      </div>
      <div class="flex space-x-4 text-lg">
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-linkedin"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
    <div class="relative">
      <div
        class="absolute z-0 w-40 h-40 bg-[#00ADED] rounded-full -right-28 -top-28"
      ></div>
      <div
        class="absolute z-0 w-40 h-40 bg-[#00ADED] rounded-full -left-32 -bottom-16"
      ></div>
      <div class="bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-80 z-10">
        <form on:submit={handleSubmit} method="post" action="https://script.google.com/macros/s/AKfycbywp6l-zCZc_7XRcUc_S90tQb8dFoEha2Xx-2idIT6GzVXahmu_jZQvym5lsaTl3uuD/exec" class="flex flex-col space-y-4">
          <div>
            <label for="" class="text-sm">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              class="mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
            />
          </div>
          <div>
            <label for="" class="text-sm">Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              class="mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
            />
          </div>
          <div class="flex flex-col">
            <label for="" class="text-sm">Message</label>
            <textarea
              class="mt-2 ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300"
              placeholder="Message"
              name="message"
              rows="4"
            ></textarea>
          </div>
          <button type="submit" class="btn text-center w-full">Send Message</button>
        </form>
      </div>
    </div>
  </div>
</div>





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
