<template>
  <div class="wrapper">
    <Headers></Headers>
    <Sidebar></Sidebar>
    <transition name="move" mode="out-in" keep-alive>
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
import Headers from '../components/Headers'
import Sidebar from '../components/Sidebar'
export default {
  name: 'Home',
  data() {
    return {

    }
  },
  components: {
    Headers,
    Sidebar
  }
}
</script>
