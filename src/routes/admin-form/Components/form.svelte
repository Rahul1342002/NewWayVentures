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
    S: null
  };

  function handleChange(event, direction) {
    const inputValue = event.target.value;
    const regex = /^[EWNS]-\d+$/; // Regular expression to match the format E/W/N/S- followed by numbers

    if (regex.test(inputValue)) {
      directions[direction] = inputValue.split("-")[1];
    } else {
      // If the input format is incorrect, reset the value for this direction
      directions[direction] = null;
    }
  }
</script>
<Navbar/>
<div class="bg-gray-100 flex bg-local" style="background: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/architect.svg')">
  <div class="bg-gray-100 mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24 mt-4">
    <!-- <h1>Plot details</h1> -->
    <form>
      <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
        <div class="-mx-3 md:flex mb-6">
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="customer">
              Customer Name*
            </label>
            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="text" placeholder="Enter your name">
            <div>
              <span class="text-red-500 text-xs italic">
                Please fill out this field.
              </span>
            </div>
          </div>
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="area">
              Plot Area*
            </label>
            <input class="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="company" type="text" placeholder="Enter your name">
            
             <div>
              <span class="text-red-500 text-xs italic">
                Please fill out this field.
              </span>
            </div>
          </div>
        </div>
        
        <div class="-mx-3  mb-6">
          <label class="uppercase tracking-wide text-black text-xs font-bold mb-2 px-3" for="measurment">
            Plot Measurement* 
          </label>
          <div class="md:w-full px-3 md:flex justify-between ">
            
            <div class="md:w-full px-3 flex justify-between">
              <div class='flex items-center '>
                <label for="E" class=" text-black  font-semibold">E - </label>
                <input class="w-[80%] bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="E" type="text" placeholder="Enter value for East" on:input={(e) => handleChange(e, 'E')}>            
              </div>
              <div class='flex items-center'>
                <label for="W"  class=" text-black  font-semibold">W - </label>
                <input class="w-[80%] bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="W" type="text" placeholder="Enter value for West" on:input={(e) => handleChange(e, 'W')}>            
              </div>
              <div class='flex items-center'>
                <label for="N"  class=" text-black  font-semibold">N - </label>
                <input class="w-[80%] bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="N" type="text" placeholder="Enter value for North" on:input={(e) => handleChange(e, 'N')}>            
              </div>
              <div class='flex items-center'>
                <label for="S"  class=" text-black  font-semibold">S - </label>
                <input class="w-[80%] bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" id="S" type="text" placeholder="Enter value for South" on:input={(e) => handleChange(e, 'S')}>
              </div>
            </div>
            
          </div>
          
        </div>
        <div class="-mx-3 md:flex mb-2">
          <div class="md:w-1/2 px-3">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="plot">
              Plot Number*
            </label>
            <select class="w-full bg-gray-200 border border-gray-200 text-black  py-3 px-4 pr-8 rounded overflow-y-scroll max-h-40" id="number">
              <option disabled selected>Select a number</option>
              {#each numbers as number}
                <option value="{number}">P-{number}</option>
              {/each}
            </select>
          </div>
          <div class="md:w-1/2 px-3 mb-6 md:mb-0">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="location">
              Plot Facing*
            </label>
            <div>
              <select class="w-full bg-gray-200 border border-gray-200 text-black  py-3 px-4 pr-8 mb-3 rounded" id="facing">
                <option disabled selected>Select Direction</option>
                <option>North</option>
                <option>East</option>
                <option>West</option>
                <option>South</option>
              </select>
            </div>
          </div>
          
          <div class="md:w-1/2 px-3">
            <label class="uppercase tracking-wide text-black text-xs font-bold mb-2" for="status">
              Plot Status*
            </label>
            <div>
              <select class="w-full bg-gray-200 border border-gray-200 text-black  py-3 px-4 pr-8 mb-3 rounded" id="location">
                <option disabled selected>Plot Status</option>
                <option>Sold</option>
                <option>Unslod</option>
                
              </select>
            </div>
          </div>
        </div>
        <div class="-mx-3 md:flex mt-2">
          <div class="md:w-full px-3">
            <button class="md:w-full bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
              Button
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>