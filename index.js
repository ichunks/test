export class Plugin {
  constructor () {

  }
  // 配置
  _config = {

  }
  get config () {
    return this._config
  }
  // 销毁实例
  destory () {
    // 销毁实例
    // 获取当前日期
    let date = new Date()
    let year = date.getFullYear()
    let month = date.getMonth() + 1
  }
}