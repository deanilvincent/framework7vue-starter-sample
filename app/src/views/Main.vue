<template>
  <div>
    <f7-page :page-content="false">
      <f7-navbar title="Home">
        <f7-nav-right>
          <f7-link
            icon-ios="f7:reload"
            icon-aurora="f7:reload"
            icon-md="material:compare_arrows"
          ></f7-link>
        </f7-nav-right>
      </f7-navbar>
      <f7-toolbar
        tabbar
        labels
        :position="'bottom'"
      >
        <f7-link
          tab-link="#tab-1"
          tab-link-active
          text="Home"
          icon-ios="f7:home_fill"
          icon-aurora="f7:home_fill"
          icon-md="material:home"
        ></f7-link>
        <f7-link
          tab-link="#tab-2"
          text="Tab 2"
          icon-ios="f7:today_fill"
          icon-aurora="f7:today_fill"
          icon-md="material:today"
        ></f7-link>
        <f7-link
          tab-link="#tab-3"
          text="Tab 3"
          icon-ios="f7:cloud_fill"
          icon-aurora="f7:cloud_fill"
          icon-md="material:file_upload"
        ></f7-link>
      </f7-toolbar>

      <f7-tabs>
        <f7-tab
          id="tab-1"
          class="page-content"
          tab-active
        >
          <home/>
        </f7-tab>
        <f7-tab
          id="tab-2"
          class="page-content"
        >
          <f7-block>
            <p>Tab 2 content</p>
            ...
          </f7-block>
        </f7-tab>
        <f7-tab
          id="tab-3"
          class="page-content"
        >
          <f7-block>
            <p>Tab 3 content</p>
            ...
          </f7-block>
        </f7-tab>
      </f7-tabs>
    </f7-page>
  </div>
</template>

<script>
import Home from "@/views/Home.vue";

export default {
  components: {
    Home
  },
  data: () => ({
    isBottom: true
  })
};
</script>