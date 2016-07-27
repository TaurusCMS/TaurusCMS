import Field from './Field'

export default class InputRadio extends Field {
  constructor (props) {
    props.type = 'input_radio'
    props.length = (props.length) ? props.length : 2
    super(props)
  }
}
