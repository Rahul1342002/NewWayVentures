<!-- src/components/LoadingScreen.svelte -->
<script>
  import { onMount } from "svelte";

  let loading = true;

  // Simulate loading completion after a delay
  onMount(() => {
    setTimeout(() => {
      loading = false;
    }, 3000); // Adjust the delay as needed
  });
</script>

{#if loading}
  <!-- Loading screen content -->
  <div class="loading-screen font-bold text-3xl">
    <!-- Your loading animation or message here -->
    <img class="w-[140px]" src="/logo.png" alt="" />
  </div>
{/if}

<style>
  /* Styles for the loading screen */
  .loading-screen {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #ffffff; /* Semi-transparent white background */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }
</style>
