class FollowToggle {

  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.attr("data-user-id");
    this.followState = this.$el.attr("data-initial-follow-state");
    this.render();
    this.$el.click(this.handleClick(event));
  }

  render() {
    let buttonText = this.followState ? "Unfollow" : "Follow";
    this.$el.attr('value', buttonText);
    console.log(this.$el.attr('value'));
    console.log(buttonText);
  }
  handleClick(event) {
    event.preventDefault();
    if (this.followState) {
      $.ajax({
        type: 'POST',
        url: `/users/${this.userId}/follow`,
        success(data) {
          console.log("Success follow");
          console.log(data);
        },
        error() {
          console.error("An error1 occurred.");
        },
      });
    } else {
      $.ajax({
        type: 'DELETE',
        url: `/users/${this.userId}/follow`,
        success(data) {
          console.log("Successfully unfollowed");
          console.log(data);
        },
        error() {
          console.error("An error2 occurred.");
        },
      });
    }
    this.render();
  }
}


module.exports = FollowToggle;
