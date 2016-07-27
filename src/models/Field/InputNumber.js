import Field from './Field'

export default class InputNumber extends Field {
  constructor (props) {
    props.type = 'input_number'
    props.length = (props.length) ? props.length : 75
    super(props)
  }
}
