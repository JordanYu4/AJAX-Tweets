const APIUtil = {
  followUser: (id, type) => {
    return $.ajax({
      type: type,
      url: `/users/${id}/follow`,
      dataType: "json"
    });
  },
  searchUsers: (queryVal, success) => {
    return $.ajax({
      type: 'GET',
      url: "users/search",
      data: queryVal,
      dataType: "json"
    }).then((res) => res);
  }
};


module.exports = APIUtil;
