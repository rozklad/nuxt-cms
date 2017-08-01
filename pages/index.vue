<template>
  <div class="weeker__wrapper">
    <div class="header">
      <h1>Týden: {{ weekNumber }}</h1>
    </div>
    <markdown :text="content" :year="year" :week="weekNumber" v-if="week"></markdown>
  </div>
</template>

<script>
import Markdown from '../components/markdown.vue';

export default {
  components: {
    Markdown,
  },
  data() {
    return {
    };
  },
  computed: {
    content() {
      let result = '';
      if (typeof this.week.content !== 'undefined') {
        result = this.week.content;
      }
      return result;
    },
    week() {
      return this.$store.state.week.actualWeek;
    },
    weekNumber() {
      const d = new Date();
      d.setHours(0, 0, 0, 0);
      d.setDate((d.getDate() + 4) - (d.getDay() || 7));
      return Math.ceil((((d - new Date(d.getFullYear(), 0, 1)) / 8.64e7) + 1) / 7);
    },
    year() {
      const d = new Date();
      return d.getFullYear();
    },
  },
  methods: {
  },
  created() {
    this.$store.dispatch('week/getActualWeek', { year: 2017, number: 31 });
  },
};
</script>

<style lang="scss">
  .weeker__wrapper {
    width: 100vw;
    height: 100vh;
    .header {
      height: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
