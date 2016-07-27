import Field from './Field'

export default class InputText extends Field {
  constructor (props) {
    props.type = 'text_area'
    props.length = (props.length) ? props.length : 365
    super(props)
  }
}
