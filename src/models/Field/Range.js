import Field from './Field'

export default class Range extends Field {
  constructor (props) {
    props.type = 'range'
    props.length = (props.length) ? props.length : 2
    super(props)
  }
}
