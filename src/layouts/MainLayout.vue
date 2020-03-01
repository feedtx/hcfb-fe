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
      show-if-above
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

        <!-- Don't delete Navigation component code, debugging routes issue -->
        <!-- <Navigation
          v-for="link in essentialLinks"
          :key="link.title"
          :to="link.to"
          v-bind="link"
        /> -->

      <q-item
        v-for="link in essentialLinks"
        :key="link.title"
        :to="link.to"
        clickable
        >

        <q-item-section
          v-if="link.icon"
          avatar
          >
          <q-icon :name="link.icon" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ link.title }}</q-item-label>
          <q-item-label caption>
            {{ link.caption }}
          </q-item-label>
        </q-item-section>

      </q-item>

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