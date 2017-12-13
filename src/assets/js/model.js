
export class User {
  /**
   * user Object
   * @param {*} id  userid nologin is 0
   * @param {*} userName uname
   */
  constructor (id, userName) {
    this.id = id
    this.userName = userName
  }

  toString () {
    return `uid:${this.id},uname:${this.userName}`
  }
}
