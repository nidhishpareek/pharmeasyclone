const axios = require("axios");
require("dotenv").config();

class GithubAuth { 
  async accessToken(code) {
    console.log('access githubauth function')
    try { 
      let GIT_CLIENT_ID = process.env.GIT_CLIENT_ID;
      let GIT_CLIENT_SECRET = process.env.GIT_CLIENT_SECRET;
      let url = `https://github.com/login/oauth/access_token?client_id=${GIT_CLIENT_ID}&client_secret=${GIT_CLIENT_SECRET}&code=${code}`;
      // https://github.com/login/oauth/access_token?client_id=ab76271b8143f19ff35d&client_secret=1c8ecd4f1eef9f3d44fb988eba9f2b1d05f77511&code=
      let response = await axios.post(url);
      const result = new URLSearchParams(response.data);
      if (result.get("error")) {
        throw new Error(result.get("error_description"));
      }
      return result.get("access_token");
    } catch (err) {
      console.error(err);
      throw err;
    }
  } 

  async getUser(code) {
    console.log('get user called', code)
    try {
      const token = await this.accessToken(code);
      let url = "https://api.github.com/user";
    console.log('token got is', token)

      let response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    console.log('responsedata  got is', response.data)
      return response.data;
    } catch (err) {
      console.error(err.message);
      throw err;
    }
  }
}

module.exports = GithubAuth;
