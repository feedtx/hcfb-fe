<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated style="">
      <q-toolbar class="row">

        <q-btn icon="keyboard_backspace" class="btn"></q-btn>

        <q-toolbar-title  class="title">
          [Feed]
        </q-toolbar-title>

        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          class="menu"
          @click="rightDrawerOpen = !rightDrawerOpen"
        />

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="rightDrawerOpen"
      
      side="right" 
      bordered
      content-class="bg-grey-4"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Navigation
        </q-item-label>

        <Navigation
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          :to="link.to"
        />

      </q-list>
      </q-drawer>

      <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import Navigation from "components/Navigation";

export default {
  name: "MainLayout",

  components: {
    Navigation
  },

  data() {
    return {
      rightDrawerOpen: false,
      essentialLinks: [
        {
          title: "Log In",
          caption: "",
          icon: "account_circle",
          to: "/login"
        },
        {
          title: "Settings",
          caption: "",
          icon: "settings",
          to: "/settings"
        },
        {
          title: "Support",
          caption: "",
          icon: "contact_support",
          to: "/support"
        }
      ]
    };
  }
};
</script>

<style scoped>
  .title {
    text-align: center;
    font-size: 45px;
  }

  .btn {
    font-size: 20px;
  }

  .menu {
    font-size: 20px;
  }
</style>