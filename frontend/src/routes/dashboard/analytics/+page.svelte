<div class="space-y-6">
  <div>
    <h1 class="text-2xl font-bold text-gray-900">Analytics</h1>
    <p class="mt-1 text-gray-500">View your analytics and performance metrics.</p>
  </div>
  
  <div class="bg-white shadow rounded-lg p-6">
    <div class="h-64 bg-gray-100 rounded-md flex items-center justify-center">
      <p class="text-gray-500">Analytics Chart Placeholder</p>
    </div>
    
    <div class="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {#each [1, 2, 3] as item}
        <div class="bg-gray-50 p-4 rounded-lg">
          <h3 class="font-medium text-gray-900">Metric {item}</h3>
          <p class="mt-2 text-gray-500">Detailed analytics data will be displayed here.</p>
          <div class="mt-4 h-2 bg-gray-200 rounded-full">
            <div class="h-2 bg-blue-500 rounded-full" style="width: {60 + item * 10}%"></div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
