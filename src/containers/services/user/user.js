const user = {
  logeedIn: false,
  authenticate: function(credentials, cb) {
    const _this = this
    console.log({credentials})
    setTimeout(() => {
      _this.logeedIn = true;
      cb(true)
  }, 1000)
    
  },
  logout: () => {},
}

export default user