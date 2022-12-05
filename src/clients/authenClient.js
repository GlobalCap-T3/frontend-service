import jwtDecode from "jwt-decode"
import * as moment from "moment"
import axios from "axios"

export default class AuthenClient {
	constructor(config) {
		this.config = {
			...config
		}
		this.apiClient = this.getApiClient(this.config);
	}

  localStorageTokenInterceptor(config) {
    let headers = {}
    const tokenString = localStorage.getItem("token")

    if (tokenString) {
      const token = JSON.parse(tokenString)
      const decodedAccessToken = jwtDecode(token.access_token)
      const isAccessTokenValid =
        moment.unix(decodedAccessToken.exp).toDate() > new Date()
      if (isAccessTokenValid) {
        headers["Authorization"] = `Bearer ${token.access_token}`
      } else {
        alert('Your login session has expired. Please login again.')
      }
    }
    config["headers"] = headers
    return config;
  }

	getApiClient(config) {
		let initialConfig = { baseURL: `${config.authenUrl}`, timeout: 1000 }
		let client = axios.create(initialConfig);
		client.interceptors.request.use(this.localStorageTokenInterceptor);
		return client;
	}

  async signup(data) {
    return await this.apiClient.post("/signup", data);
  }

  async login(data) {
    const params = new URLSearchParams();
    data["grant_type"] = "password";
    console.log(data);
    for (var key in data) {
      params.append(key, data[key]);
    }
    return await this.apiClient
      .post("/login", params)
      .then((resp) => {
        localStorage.setItem("token", JSON.stringify(resp.data));
        return this.fetchUser();
      });
  }

  fetchUser() {
    return this.apiClient.get("/user/me").then(({data}) => {
        localStorage.setItem("user", JSON.stringify(data));
        return data
    })
  }
}