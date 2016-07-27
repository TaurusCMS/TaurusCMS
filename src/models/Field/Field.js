const requiredProps = ['name', 'uuid', 'type']

export default class Field {
  constructor (props) {
    if (this._validateProps(props)) {
      Object.keys(props).map((prop) => {
        this[prop] = props[prop]
      })
    }
  }

  get () {
    return JSON.stringify(this)
  }

  set (props) {
    if (this._validateProps(props)) {
      Object.keys(props).map((prop) => {
        this[prop] = props[prop]
      })
    }
  }

  _validateProps (props) {
    if (typeof props === 'object') {
      requiredProps.map((prop, index) => {
        if (!props.hasOwnProperty(prop) && !this.hasOwnProperty(prop)) {
          throw new Error('Error: Missing required property')
        }
      })
    } else {
      throw new Error('Error: Expecting typeof Object')
    }
    return true
  }
}
