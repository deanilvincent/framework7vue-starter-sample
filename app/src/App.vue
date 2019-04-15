<template>
  <div id="app">
    <f7-app :params="f7params">
      <f7-view
        tab
        main
        url="/home/"
      >
      </f7-view>
    </f7-app>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/icon?family=Material+Icons");
</style>

<script>
import routes from "./router";
export default {
  data: () => ({
    f7params: {
      name: "My App",
      id: "com.myapp.test",
      theme: "auto",
      routes: routes
    }
  })
};
</script>
