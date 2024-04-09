<script>
  import Navbar from "$lib/components/navbar.svelte";

  let numbers = [];

  // Generate numbers 1 to 85
  for (let i = 1; i <= 85; i++) {
    numbers.push(i);
  }

  let directions = {
    E: null,
    W: null,
    N: null,
    S: null,
  };

  function handleInputChange(event, direction) {
    const inputValue = event.target.value;
    const regex = /^[EWNS]-\d+$/; // Regular expression to match the format E/W/N/S- followed by numbers

    if (regex.test(inputValue)) {
      directions[direction] = inputValue.split("-")[1];
    } else {
      // If the input format is incorrect, reset the value for this direction
      directions[direction] = null;
    }
  }

  function handleCustomerChange(event) {
    customerName = event.target.value;
    showErrorCustomer = customerName === "";
  }

  function handleAreaChange(event) {
    plotArea = event.target.value;
    showErrorArea = plotArea === "";
  }

  function restrictInputToNumbers(event) {
    // Allow: backspace, delete, tab, escape, enter
    if (
      event.key === "Backspace" ||
      event.key === "Delete" ||
      event.key === "Tab" ||
      event.key === "Escape" ||
      event.key === "Enter" ||
      // Allow: Ctrl+A
      (event.key === "a" && event.ctrlKey === true) ||
      // Allow: home, end, left, right
      event.key === "Home" ||
      event.key === "End" ||
      event.key === "ArrowLeft" ||
      event.key === "ArrowRight"
    ) {
      // Let it happen, don't do anything
      return;
    }
    // Ensure that it is a number and stop the keypress
    if (isNaN(Number(event.key))) {
      event.preventDefault();
    }
  }

  let customerName = "";
  let plotArea = "";
  let showErrorCustomer = false;
  let showErrorArea = false;

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Validate the form fields
    showErrorCustomer = customerName === "";
    showErrorArea = plotArea === "";

    // Check if there are any errors
    if (!showErrorCustomer && !showErrorArea) {
      // Proceed with form submission
      console.log("Form submitted successfully!");
    }
  }
</script>

<Navbar />
<div
  class="bg-gray-100 flex bg-local"
  style="background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/architect.svg')"
>
  <div
    class="bg-gray-100 mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24 mt-4"
  >
    <h2 class="h2 text-center text-[#0B294F] font-bold">Plot - Details</h2>
    <form on:submit={handleSubmit}>
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <!-- Customer Name Field -->
        <div class="-mx-3 md:flex mb-6">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="uppercase tracking-wide text-black text-xs font-bold mb-2"
              for="customer"
            >
              Customer Name*
            </label>
            <input
              class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
              id="company"
              type="text"
              placeholder="Enter your name"
              on:input={handleCustomerChange}
            />
            {#if showErrorCustomer && customerName === ""}
              <div>
                <span class="text-red-500 text-xs italic">
                  Please fill out this field.
                </span>
              </div>
            {/if}
          </div>

          <!-- Plot Area Field -->
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="uppercase tracking-wide text-black text-xs font-bold mb-2"
              for="area"
            >
              Plot Area*
            </label>
            <input
              class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
              id="area"
              type="text"
              placeholder="Enter Plot Area"
              on:input={handleAreaChange}
              on:keydown={restrictInputToNumbers}
            />

            {#if showErrorArea && plotArea === ""}
              <div>
                <span class="text-red-500 text-xs italic">
                  Please fill out this field.
                </span>
              </div>
            {/if}
          </div>
        </div>

        <!-- Plot Measurement Fields -->
        <div class="-mx-3 mb-6">
          <label
            class="uppercase tracking-wide text-black text-xs font-bold mb-2 px-3"
            for="measurment"
          >
            Plot Measurement*
          </label>
          <div class="md:w-full px-3 md:flex justify-between">
            <!-- Input fields for E, W, N, S -->
            <div class="md:w-full px-3 flex justify-between">
              <div class="flex items-center">
                <label for="E" class=" text-black font-semibold">E - </label>
                <input
                  class="w-[80%] bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="E"
                  type="text"
                  placeholder="Enter value for East"
                  on:input={(e) => handleInputChange(e, "E")}
                  on:keydown={restrictInputToNumbers}
                />
              </div>
              <div class="flex items-center">
                <label for="W" class=" text-black font-semibold">W - </label>
                <input
                  class="w-[80%] bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="W"
                  type="text"
                  placeholder="Enter value for West"
                  on:input={(e) => handleInputChange(e, "W")}
                  on:keydown={restrictInputToNumbers}
                />
              </div>
              <div class="flex items-center">
                <label for="N" class=" text-black font-semibold">N - </label>
                <input
                  class="w-[80%] bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="N"
                  type="text"
                  placeholder="Enter value for North"
                  on:input={(e) => handleInputChange(e, "N")}
                  on:keydown={restrictInputToNumbers}
                />
              </div>
              <div class="flex items-center">
                <label for="S" class=" text-black font-semibold">S - </label>
                <input
                  class="w-[80%] bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3"
                  id="S"
                  type="text"
                  placeholder="Enter value for South"
                  on:input={(e) => handleInputChange(e, "S")}
                  on:keydown={restrictInputToNumbers}
                />
              </div>
            </div>
          </div>
        </div>

        <!-- Other Fields -->
        <div class="-mx-3 md:flex mb-2">
          <div class="md:w-1/2 px-3">
            <label
              class="uppercase tracking-wide text-black text-xs font-bold mb-2"
              for="plot"
            >
              Plot Number*
            </label>
            <select
              class="w-full bg-gray-200 border border-gray-200 text-black py-3 px-4 pr-8 rounded overflow-y-scroll max-h-40"
              id="number"
            >
              <option disabled selected>Select Plot number</option>
              {#each numbers as number}
                <option value={number}>P-{number}</option>
              {/each}
            </select>
          </div>
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              class="uppercase tracking-wide text-black text-xs font-bold mb-2"
              for="location"
            >
              Plot Facing*
            </label>
            <div>
              <select
                class="w-full bg-gray-200 border border-gray-200 text-black py-3 px-4 pr-8 mb-3 rounded"
                id="facing"
              >
                <option disabled selected>Select Direction</option>
                <option>North</option>
                <option>East</option>
                <option>West</option>
                <option>South</option>
              </select>
            </div>
          </div>
          <div class="md:w-1/2 px-3">
            <label
              class="uppercase tracking-wide text-black text-xs font-bold mb-2"
              for="status"
            >
              Plot Status*
            </label>
            <div>
              <select
                class="w-full bg-gray-200 border border-gray-200 text-black py-3 px-4 pr-8 mb-3 rounded"
                id="location"
              >
                <option disabled selected>Plot Status</option>
                <option>Sold</option>
                <option>Unsold</option>
              </select>
            </div>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="-mx-3 md:flex mt-2">
          <div class="md:w-full px-3">
            <button
              type="submit"
              class="md:w-full bg-gray-900 text-white text-center font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full"
            >
              SUBMIT DETAILS
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
