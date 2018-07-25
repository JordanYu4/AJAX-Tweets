class UsersSearch {
  constructor (el) {
    this.$nav = $(el);
    this.$input = this.$nav.find("input");
    this.$userList = this.$nav.find("ul");
    this.$input.on("keypress", this.handleInput.bind(this));
  }

  handleInput(event) {
    event.preventDefault();
    console.log(this.$input);
    // APIUtil.searchUsers(this.$input.attr("value"), (res)=> {
      // this.$userList.append(res);
      // console.log(res);
    // });
  }
}

module.exports = UsersSearch;
