<script>
  import { page } from '$app/stores';
  
  const navItems = [
    { name: 'Dashboard', href: '/dashboard', icon: '📊' },
    { name: 'Analytics', href: '/dashboard/analytics', icon: '📈' },
    { name: 'Settings', href: '/dashboard/settings', icon: '⚙️' },
  ];
</script>

<aside class="w-64 bg-white shadow-lg">
  <div class="p-4 border-b">
    <h1 class="text-xl font-bold text-gray-800">Dashboard</h1>
  </div>
  
  <nav class="mt-6">
    {#each navItems as item}
      <a 
        href={item.href}
        class="flex items-center px-6 py-3 text-gray-600 hover:bg-gray-100 {($page.url.pathname === item.href) ? 'bg-gray-100 text-blue-600' : ''}"
      >
        <span class="mr-3">{item.icon}</span>
        {item.name}
      </a>
    {/each}
  </nav>
</aside>
