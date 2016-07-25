export default class Field {
  constructor (props) {
    if (typeof props === 'object') {
      const requiredProps = ['name', 'uuid']
      requiredProps.map((prop, index) => {
        if (props.hasOwnProperty(prop)) {
          this[prop] = props[prop]
        } else {
          throw new Error('Error: Missing required property')
        }
      })
    } else {
      throw new Error('Error: Expecting typeof Object')
    }
  }
}
