<style lang="scss">
  .markdown__wrapper {
    height: 80%;
    position: relative;
    textarea, .compiled {
      box-sizing: border-box;
      position: absolute;
      height: 100%;
      width: 100%;
      font-size: 1em;
      padding: 0 45px;
    }
    .compiled {
      h2 {
        border-bottom: 1px solid #eaecef;
        margin-top: 24px;
        margin-bottom: 16px;
        font-weight: 600;
        line-height: 1.25;
        padding-bottom: 0.3em;
        font-size: 1.5em;
      }
      ul {
        padding-left: 2em;
        margin-top: 0;
        margin-bottom: 16px;
        li {
          cursor: pointer;
        }
      }
      h3 {
        margin-top: 24px;
        margin-bottom: 16px;
        font-weight: 600;
        line-height: 1.25;
        font-size: 1.25em;
      }
    }
  }
</style>
<template>
  <div class="markdown__wrapper">
    <textarea id="editor" :value="input" @input="update" @keyup.27="toggleEditor" v-show="edit"></textarea>
    <div class="compiled" v-html="compiledMarkdown" @click="toggleStatus" v-show="!edit"></div>
  </div>
</template>
<script>
  import marked from 'marked';

  export default {
    props: {
      text: {
        default: '',
      },
      week: {
        default: 0,
      },
      year: {
        default: 0,
      },
    },
    data() {
      return {
        edit: false,
        input: '',
      };
    },
    computed: {
      compiledMarkdown() {
        return marked(this.input, { sanitize: true, breaks: true });
      },
    },
    methods: {
      update(e) {
        this.input = e.target.value;
      },
      toggleEditor() {
        this.edit = !this.edit;
        if (this.edit === false) {
          const options = {
            number: this.week,
            year: this.year,
            content: this.input,
          };
          this.$store.dispatch('week/saveActualWeek', options);
        }
      },
      toggleStatus(e) {
        let newInput = '';
        const text = e.target.textContent;
        if (e.metaKey) {
          this.toggleEditor();
          const editor = document.getElementById('editor');
          setTimeout(() => {
            setTimeout(() => {
              editor.focus();
            }, 100);
            editor.setSelectionRange(this.input.search(text), this.input.search(text) + text.length);
          }, 200);
          return;
        }
        const children = e.target.children;
        if (e.target.tagName === 'LI') {
          newInput = this.input.replace(text, `~~${text}~~`);
          if (children.length !== 0 && children[0].tagName === 'DEL') {
            newInput = this.input.replace(`~~${text}~~`, text);
          }
        } else {
          newInput = this.input.replace(`~~${text}~~`, text);
        }
        this.input = newInput;
        const options = {
          number: this.week,
          year: this.year,
          content: this.input,
        };
        this.$store.dispatch('week/saveActualWeek', options);
      },
    },
    watch: {
      text() {
        this.input = this.text;
      },
    },
  };
</script>
