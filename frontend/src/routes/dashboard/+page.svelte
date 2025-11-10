<script>
  import { onMount } from 'svelte';
  
  let stats = [
    { name: 'Total Users', value: '2,345', change: '+12%', changeType: 'increase' },
    { name: 'Revenue', value: '$34,546', change: '+8.2%', changeType: 'increase' },
    { name: 'Active Now', value: '573', change: '-2.5%', changeType: 'decrease' },
  ];
  
  let recentActivity = [
    { id: 1, user: 'Alex Johnson', action: 'created a new project', time: '2m ago' },
    { id: 2, user: 'Sam Wilson', action: 'updated settings', time: '15m ago' },
    { id: 3, user: 'Taylor Swift', action: 'completed task', time: '1h ago' },
  ];
</script>

<div class="space-y-6">
  <div>
    <h1 class="text-2xl font-bold text-gray-900">Dashboard</h1>
    <p class="mt-1 text-gray-500">Welcome back! Here's what's happening with your dashboard today.</p>
  </div>
  
  <!-- Stats -->
  <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {#each stats as stat}
      <div class="bg-white overflow-hidden shadow rounded-lg">
        <div class="p-5">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <div class="w-12 h-12 rounded-md bg-blue-100 flex items-center justify-center">
                <span class="text-blue-600 text-xl">📊</span>
              </div>
            </div>
            <div class="ml-5 w-0 flex-1">
              <dl>
                <dt class="text-sm font-medium text-gray-500 truncate">
                  {stat.name}
                </dt>
                <dd>
                  <div class="text-lg font-medium text-gray-900">
                    {stat.value}
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="bg-gray-50 px-5 py-3">
          <div class="text-sm">
            <span class={stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'}>
              {stat.change}
            </span>
            <span class="text-gray-500"> from last week</span>
          </div>
        </div>
      </div>
    {/each}
  </div>
  
  <!-- Recent Activity -->
  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6 border-b border-gray-200">
      <h3 class="text-lg leading-6 font-medium text-gray-900">Recent Activity</h3>
    </div>
    <div class="bg-white shadow overflow-hidden sm:rounded-b-lg">
      <ul class="divide-y divide-gray-200">
        {#each recentActivity as activity}
          <li class="px-6 py-4">
            <div class="flex items-center">
              <div class="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                <span class="text-gray-600">👤</span>
              </div>
              <div class="ml-4">
                <p class="text-sm font-medium text-gray-900">
                  {activity.user} <span class="text-gray-500 font-normal">{activity.action}</span>
                </p>
                <p class="text-sm text-gray-500">{activity.time}</p>
              </div>
            </div>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>
