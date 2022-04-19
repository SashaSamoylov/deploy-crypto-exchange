<template>
  <div>
    <Loader v-if="loading" />
    <div v-else class="app-main-layout flex">

      <!-- <Sidebar /> -->

      <SidebarAdmin />

      <main class="app-content">

        <Navbar />

        <div class="app-page">
          <router-view />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/app/Navbar'
import Sidebar from '@/components/app/Sidebar'
import SidebarAdmin from '@/components/app/SidebarAdmin'

export default {
  name: 'main-layout',
  data: () => ({
    loading: false
  }),
  components: {
    Navbar,
    // Sidebar,
    SidebarAdmin
  }
}
</script>
