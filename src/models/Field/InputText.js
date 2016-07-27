import Field from './Field'

export default class InputText extends Field {
  constructor (props) {
    props.type = 'input_text'
    props.length = (props.length) ? props.length : 75
    super(props)
  }
}
