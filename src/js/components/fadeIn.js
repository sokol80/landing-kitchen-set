export default () => ({
  show: false,
  init() {
    this.$nextTick(() => {
      this.show = true;
    });
  },
});
