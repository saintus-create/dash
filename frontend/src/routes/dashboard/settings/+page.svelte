<script>
  let formData = {
    name: 'John Doe',
    email: 'john@example.com',
    notifications: true,
    theme: 'light'
  };
  
  const themes = [
    { value: 'light', label: 'Light' },
    { value: 'dark', label: 'Dark' },
    { value: 'system', label: 'System' }
  ];
  
  function handleSubmit() {
    alert('Settings saved!');
  }
</script>

<div class="space-y-6">
  <div>
    <h1 class="text-2xl font-bold text-gray-900">Settings</h1>
    <p class="mt-1 text-gray-500">Manage your account settings and preferences.</p>
  </div>
  
  <form on:submit|preventDefault={handleSubmit} class="space-y-6">
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <div class="px-4 py-5 sm:px-6 border-b border-gray-200">
        <h3 class="text-lg leading-6 font-medium text-gray-900">Profile</h3>
        <p class="mt-1 text-sm text-gray-500">This information will be displayed publicly.</p>
      </div>
      <div class="px-4 py-5 sm:p-6 space-y-6">
        <div>
          <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            bind:value={formData.name}
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            bind:value={formData.email}
            class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
      </div>
    </div>
    
    <div class="bg-white shadow overflow-hidden sm:rounded-lg">
      <div class="px-4 py-5 sm:px-6 border-b border-gray-200">
        <h3 class="text-lg leading-6 font-medium text-gray-900">Preferences</h3>
      </div>
      <div class="px-4 py-5 sm:p-6 space-y-6">
        <div class="flex items-start">
          <div class="flex items-center h-5">
            <input
              id="notifications"
              type="checkbox"
              bind:checked={formData.notifications}
              class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
            />
          </div>
          <div class="ml-3 text-sm">
            <label for="notifications" class="font-medium text-gray-700">Email notifications</label>
            <p class="text-gray-500">Get notified about updates and new features.</p>
          </div>
        </div>
        
        <div>
          <label for="theme" class="block text-sm font-medium text-gray-700">Theme</label>
          <select
            id="theme"
            bind:value={formData.theme}
            class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            {#each themes as theme}
              <option value={theme.value}>
                {theme.label}
              </option>
            {/each}
          </select>
        </div>
      </div>
    </div>
    
    <div class="flex justify-end">
      <button
        type="submit"
        class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Save changes
      </button>
    </div>
  </form>
</div>
