
export class User {
  // id = 0
  // userName = '游客'
  constructor (id, userName) {
    this.id = id
    this.userName = userName
  }

  toString () {
    return `uid:${this.id},uname:${this.userName}`
  }
}
