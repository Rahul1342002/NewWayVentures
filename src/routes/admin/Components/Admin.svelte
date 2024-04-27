<script>
    export let plotData;
    const items = Object.values(plotData).map((item, index) => {
        return {
            ...item,
            plotId: index + 1
        };
    });
    const soldItems = items.filter(item => item.is_sold);
    const unsoldItems = items.filter(item => !item.is_sold);

    let status = "sold";
    let searchValue = "customerName"

    $: soldVisible = status === "sold";
    $: unsoldVisible = status === "unsold";

    let searchQuery = '';

    function handleSearch(event) {
        searchQuery = event.target.value.trim().toLowerCase();
    }

    $: filteredItems = () => {
        if (!searchQuery) {
            if (soldVisible === true) {
                return soldItems
            } else if (unsoldVisible === true) {
                return unsoldItems
            }
        }

        if (soldVisible && searchValue === "customerName") {
            return soldItems.filter(item => item.name.toLowerCase().includes(searchQuery));
        } else if (unsoldVisible && searchValue === "customerName") {
            return unsoldItems.filter(item => item.name.toLowerCase().includes(searchQuery));
        } else if (soldVisible && searchValue === "plotNo") {
            return soldItems.filter(item => item.plotId.toString() === searchQuery);
        } else if (unsoldVisible && searchValue === "plotNo") {
            return unsoldItems.filter(item => item.plotId.toString() === searchQuery);
        }
        return Object.values(items).filter(item =>
            Object.values(item).some(value =>
                value.toString().toLowerCase().includes(searchQuery)
            )
        );
    };

    function toggleDiv() {
        soldVisible = status === "sold";
        unsoldVisible = status === "unsold";
    }
</script>

<!-- component -->
<div class="antialiased font-sans bg-gray-200 ">
    <div class="container mx-auto px-4 sm:px-8">
        <div class="py-8">
            <div>
                <h2 class="text-2xl font-bold leading-tight">PLOT DETAILS</h2>
            </div>
            <div class="my-2 flex sm:flex-row flex-col">
                <div class="flex flex-row mb-1 sm:mb-0">
                    <div class="relative">
                        <select
                                bind:value={status}
                                on:change={toggleDiv}
                                class="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        >
                            <option value="sold">Sold</option>
                            <option value="unsold">Unsold</option>
                        </select>
                        <div
                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                        >
                            <svg
                                    class="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                            >
                                <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                />
                            </svg>
                        </div>
                    </div>
                    <div class="relative">
                        <select
                                class="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
                                bind:value={searchValue}
                        >
                            <option value="customerName">Customer Name</option>
                            <option value="plotNo">Plot No</option>
                        </select>
                        <div
                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
                        >
                            <svg
                                    class="fill-current h-4 w-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                            >
                                <path
                                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="block relative">
          <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
            <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
              <path
                      d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"
              >
              </path>
            </svg>
          </span>
                    <input
                            on:input={handleSearch}
                            placeholder="Search"
                            class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
                    />
                </div>
            </div>
            {#if soldVisible}
                <div id="sold" class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div
                            class="inline-block min-w-full shadow rounded-lg overflow-hidden"
                    >
                        <table class="min-w-full leading-normal">
                            <thead>
                            <tr>
                                <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                >
                                    Customer Name
                                </th>
                                <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                >
                                    Plot No
                                </th>
                                <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                >
                                    Plot Facing
                                </th>
                                <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                >
                                    Status
                                </th>
                                <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                >
                                    Status
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {#each filteredItems() as item}
                                <tr>
                                    <td
                                            class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                    >
                                        <div class="flex items-center">
                                            <div class="flex-shrink-0 w-10 h-10">
                                                <img
                                                        class="w-full h-full rounded-full"
                                                        src="/user.svg"
                                                        alt=""
                                                />
                                            </div>
                                            <div class="ml-3">
                                                <p class="text-gray-900 whitespace-no-wrap">
                                                    {item.name}
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td
                                            class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                    >
                                        <p class="text-gray-900 whitespace-no-wrap">P-{item.plotId}</p>
                                    </td>
                                    <td
                                            class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                    >
                                        <p class="text-gray-900 whitespace-no-wrap">{item.facing}</p>
                                    </td>
                                    <td
                                            class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                    >
                      <span
                              class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                      >
                        <span
                                aria-hidden
                                class="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                        ></span>
                        <span class="relative">Sold</span>
                      </span>
                                    </td>
                                    <td
                                            class="px-5 py-5 bg-white border-b border-gray-200 text-sm"
                                    >
                                        <a href={`/admin-form?name=${item.name}&area=${item.area}&measurement=${item.measurement}&plot_id=${item.plotId}&facing=${item.facing}&is_sold=${item.is_sold === true ? "1": "0"}`}
                                           class="relative inline-block px-3 py-1 font-semibold text-black leading-tight"
                                        >
                                            <div class="flex">
                                                <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke-width="1.5"
                                                        stroke="currentColor"
                                                        class="w-4 h-4"
                                                >
                                                    <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                                                    />
                                                </svg>

                                                <span
                                                        aria-hidden
                                                        class="absolute inset-0 bg-blue-400 opacity-50 rounded-full"
                                                ></span>
                                                <span class="relative">Edit</span>
                                            </div>
                                        </a>
                                    </td>
                                </tr>
                            {/each}
                            </tbody>
                        </table>
                        <div
                                class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-center"
                        >
              <span
                      class="text-xs xs:text-sm text-gray-900 mx-aauto font-bold text-blue-800"
              >
                New Way Ventures - Aero Commercial
              </span>
                        </div>
                    </div>
                </div>
            {/if}

            {#if unsoldVisible}
                <div id="unsold" class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                    <div
                            class="inline-block min-w-full shadow rounded-lg overflow-hidden"
                    >
                        <table class="min-w-full leading-normal">
                            <thead>
                            <tr>
                                <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                >
                                    Plot No
                                </th>
                                <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                >
                                    Plot Facing
                                </th>
                                <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                >
                                    Status
                                </th>
                                <th
                                        class="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                                >
                                    Status
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            {#each filteredItems() as item}
                                <tr>
                                    <td
                                            class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                    >
                                        <p class="text-gray-900 whitespace-no-wrap">P-{item.plotId}</p>
                                    </td>
                                    <td
                                            class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                    >
                                        <p class="text-gray-900 whitespace-no-wrap">{item.facing}</p>
                                    </td>
                                    <td
                                            class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
                                    >
                    <span
                            class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                    >
                      <span
                              aria-hidden
                              class="absolute inset-0 bg-red-200 opacity-50 rounded-full"
                      ></span>
                      <span class="relative">Unsold</span>
                    </span>
                                    </td>
                                    <td
                                            class="px-5 py-5 bg-white border-b border-gray-200 text-sm"
                                    >
                                        <a href={`/admin-form?name=${item.name}&area=${item.area}&measurement=${item.measurement}&plot_id=${item.plotId}&facing=${item.facing}&is_sold=${item.is_sold === true ? "1": "0"}`}
                                                class="relative inline-block px-3 py-1 font-semibold text-black leading-tight"
                                        >
                                            <div class="flex">
                                                <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        stroke-width="1.5"
                                                        stroke="currentColor"
                                                        class="w-4 h-4"
                                                >
                                                    <path
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                            d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                                                    />
                                                </svg>

                                                <span
                                                        aria-hidden
                                                        class="absolute inset-0 bg-blue-400 opacity-50 rounded-full"
                                                ></span>
                                                <span class="relative">Edit</span>
                                            </div>
                                        </a>
                                    </td>
                                </tr>
                            {/each}

                            </tbody>
                        </table>
                        <div
                                class="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-center"
                        >
              <span
                      class="text-xs xs:text-sm text-gray-900 mx-aauto font-bold text-blue-800"
              >
                New Way Ventures - Aero Commercial
              </span>
                        </div>
                    </div>
                </div>
            {/if}
        </div>
    </div>
</div>
