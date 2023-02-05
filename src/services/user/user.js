const user = {
  loggedIn: false,
  user: null,
  authenticate: function({email, password}, callback) {
    const _this = this;
    fetch(`http://localhost:3001/v1/auth/login`, {
      method: "post", // GET, POST, PUT, DELETE
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({email, password})
    }).then((res) => {
      console.log("raw ...", {res})
      if (!res.ok) {
        // res.status
        console.log("NOTE OK")
      }

      // res.status

      console.log("before login..", {_this})
      res.json().then(data => {
        _this.loggedIn = true;
        _this.user = data.user;
        _this.token = data.tokens.access;
        _this.refresh = data.tokens.refresh;
        console.log("after login..", {_this})
        callback(data, null)
      })

      //return res.json()
      //callback()
    }).catch((error) => {
      // use that err
    })
  },
  logout: () => {},
}

export default user