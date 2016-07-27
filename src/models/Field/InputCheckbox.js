import Field from './Field'

export default class InputCheckbox extends Field {
  constructor (props) {
    props.type = 'input_checkbox'
    props.length = (props.length) ? props.length : 1
    super(props)
  }
}
