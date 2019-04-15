<template>
  <div>
    <div class="row">
      <div class="col-50">
        <Sample/>
      </div>
      <div class="col-50">
        <Sample/>
      </div>
    </div>
    <div class="row">
      <div class="col-50">
        <Sample/>
      </div>
      <div class="col-50">
        <Sample/>
      </div>
    </div>
  </div>
</template>
<style>
div[class*="col"] {
  text-align: center;
  color: #000;
  font-size: 12px;
}
</style>

<script>
import Sample from '@/components/Sample.vue'

export default {
  components:{
    Sample
  }
};
</script>
