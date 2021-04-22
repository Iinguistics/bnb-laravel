<template>
    <div>
        <nav class="navbar bg-white border-bottom navbar-light">
            <router-link class="navbar-brand mr-auto" :to="{ name: 'home' }">Home</router-link>
            <router-link class="btn nav-button" :to="{ name: 'about' }">About</router-link>
        </nav>
        <div class="container my-5">
          <router-view></router-view>
        </div>
    </div>
</template>