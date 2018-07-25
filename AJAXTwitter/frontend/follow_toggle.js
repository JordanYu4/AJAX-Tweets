const APIUtil = require("./api_util.js");
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

  render(str) {
    this.$el.text(this.followState);
    this.$el.prop("disabled", false);
    if (str) {
      this.$el.prop("disabled", true);
    }
  }

  handleClick(event) {
    event.preventDefault();
    if (this.followState === "Click to Follow") {
      this.render("load");
      APIUtil.followUser(this.userId, 'POST').then(() => {
        this.followState = "Click to Unfollow";
        this.render();
      });
    } else {
      this.render("load");
      APIUtil.followUser(this.userId, 'DELETE').then(() => {
        this.followState = "Click to Follow";
        this.render();
      });
    }
  }
}


module.exports = FollowToggle;
