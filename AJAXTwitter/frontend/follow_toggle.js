class FollowToggle {

  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.attr("data-user-id");
    this.followState = this.$el.attr("data-initial-follow-state");
    this.$el.on(
      "click",
      this.handleClick.bind(this)
    );
    this.render();
  }

  render() {
    this.$el.text(this.followState);
  }

  handleClick(event) {
    event.preventDefault();
    if (this.followState === "Click to Follow") {
      $.ajax({
        type: 'POST',
        url: `/users/${this.userId}/follow`,
        dataType: "json"
      }).then((res) => {
        this.followState = "Click to Unfollow";
        this.render();
      });
    } else {
      $.ajax({
        type: 'DELETE',
        url: `/users/${this.userId}/follow`,
        dataType: "json"
      }).then((res) => {
        this.followState = "Click to Follow";
        this.render();
      });
    }
  }
}


module.exports = FollowToggle;
