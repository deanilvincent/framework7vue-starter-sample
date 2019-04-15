<template>
  <div>
    <f7-block-title>Sample</f7-block-title>
    <f7-card class="demo-card-header-pic">
      <f7-card-header
        class="no-border"
        valign="bottom"
        style="background-image:url(https://cdn.framework7.io/placeholder/nature-1000x600-3.jpg);padding-bottom:100px"
      ></f7-card-header>
      <f7-card-content>
        <p style="font-size:09px">Info Here</p>
      </f7-card-content>
      <f7-card-footer>
        <f7-link @click="$f7router.navigate('/apple/')">Choose</f7-link>
      </f7-card-footer>
    </f7-card>
  </div>
</template>

<script>
export default {};
</script>

