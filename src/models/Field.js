export default class Field {
  constructor (props) {
    if (typeof props === 'object') {
      const requiredProps = ['name', 'uuid', 'type']
      requiredProps.map((prop, index) => {
        if (props.hasOwnProperty(prop)) {
          this[prop] = props[prop]
        } else {
          throw new Error('Error: Missing required property')
        }
      })
      if (props.hasOwnProperty('length') && props.length > 0) {
        this.length = props.length
      } else {
        // TODO: replace this with config settings
        this.length = 37
      }
    } else {
      throw new Error('Error: Expecting typeof Object')
    }
  }
  save () {
    return JSON.stringify(this)
  }
}
