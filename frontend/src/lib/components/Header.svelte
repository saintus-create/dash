<script>
  import { page } from '$app/stores';
  
  let userMenuOpen = false;
  
  const toggleUserMenu = () => {
    userMenuOpen = !userMenuOpen;
  };
</script>

<header class="bg-white shadow-sm">
  <div class="flex items-center justify-between px-6 py-4">
    <h2 class="text-xl font-semibold text-gray-800">
      {#if $page.url.pathname === '/dashboard'}
        Dashboard
      {:else if $page.url.pathname.includes('analytics')}
        Analytics
      {:else if $page.url.pathname.includes('settings')}
        Settings
      {/if}
    </h2>
    
    <div class="relative">
      <button 
        on:click={toggleUserMenu}
        class="flex items-center space-x-2 focus:outline-none"
      >
        <div class="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
          <span class="text-gray-600">👤</span>
        </div>
        <span class="text-gray-700">User</span>
      </button>
      
      {#if userMenuOpen}
        <div class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
          <a href="/profile" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Your Profile</a>
          <a href="/dashboard/settings" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
          <a href="/logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
        </div>
      {/if}
    </div>
  </div>
</header>
