<script>
  import Sidebar from '$lib/components/Sidebar.svelte';
  import Header from '$lib/components/Header.svelte';
</script>

<div class="flex h-screen bg-gray-50">
  <Sidebar />
  
  <div class="flex-1 flex flex-col overflow-hidden">
    <Header />
    
    <main class="flex-1 overflow-y-auto p-6 bg-gray-50">
      <slot />
    </main>
  </div>
</div>
