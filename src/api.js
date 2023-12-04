const makeURL = (path) =>
  `https://fictional-journey-q65wpxq5jww3997r-3001.app.github.dev${path}`;

const Authorization =
  "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE3LCJpYXQiOjE3MDE3MTE4NDE5MjEsImV4cCI6MTcwMTcxMTkyODMyMX0.OAZL_lCLDkwvNXJNETqt2Wmq8ix4dupOywC_PYxbZiqw7ojuq5t33l2amudfdqeqnk3F2CTYMuDvFG4SSfkgtlDX0yQYXSJLzmhRWbbjkMiPYDj8o4uZwcCcp7__LZcz08V9BuPTaZat2m5ymMronFzxKIUI8UJzAPvA6d7I-EglLTuLKQyCLtTtGco67csPdlvpOOvkKVKKwSdpfGFtQW2ZBE0ovuoKxdQobWwC8GnkVffNKYGhBfUj751tjOe8v3vKxfV6aQsQh3m7WWw6aS1FPkinAry1M88yk1Dwu59hG8pA6N9SO0w7vhCM4ulNCmAlNvdmXYMZnR6FhMZS1VDWGpJqbqDc6xFHVwOGZ9vdPXLSL9ZNcCOGkOYWdbo9dho5sTpVz4f3FQx1KeCep9bqh_MlAwDa_eqvk4wigPnoTuYjBpDNQUNlxMVWnm6Lz28EourLzldon_wdL98WdPKWKKIoOLxxnMpWYD46V-JCVIVPxZjLc8wm9LJp8C1M6WZfzDGpwPXgiY3xq_x-7_VcQxPAbbfEwdwtlJjszrCMJNqEj6Sxy3FeoQESpaAK6Oz_3SsiHe6ZeqWPdJNsQBzhOaEwQipnFNfC3pWwA4Dnp8cWAEE7bZP78I47YO55K_O91vn7pySHxQ1h2eos75y0swvqmxrniUGZzsOdHOE";

export const API = {
  getTeachers: () =>
    fetch(makeURL("/users/search"), {
      method: "GET",
      headers: {
        Authorization,
      },
    }),
  getPendingUserList: (studentId) =>
    fetch(makeURL("/matcch/" + studentId), {
      method: "GET",
      headers: {
        Authorization,
      },
    }),
  getUserById: (id) =>
    fetch(makeURL("/users/" + id), {
      method: "GET",
      headers: {
        Authorization,
      },
    }),
  makeRequestToTeacher: ({ recipientId, senderId }) =>
    fetch(makeURL("/matcch/request"), {
      method: "POST",
      headers: {
        Authorization,
      },
      body: JSON.stringify({
        recipientId,
        senderId,
      }),
    }),
};
