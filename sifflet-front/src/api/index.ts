const apiBaseUrl = "/api";

const apiRoutes = {
  login: "/login/",
  users: "/users/",
  logout: "/logout/",
};

const xhrClient = {
  getJson(url: string, options?: any): Promise<any> {
    return fetch(url, options)
      .then((res) => res.json())
      .catch((err) => err);
  },
  getUsers (id? : number) {
    return xhrClient.getJson(apiBaseUrl + apiRoutes.users + id)
  },
  login() {
    return xhrClient.getJson(apiBaseUrl + apiRoutes.login);
  },
  logout() {
    return xhrClient.getJson(apiBaseUrl + apiRoutes.logout);
  }
};

export { xhrClient };
