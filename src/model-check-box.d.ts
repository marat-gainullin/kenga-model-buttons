import CheckBox from 'kenga-buttons/check-box';
import Bound from 'kenga/bound'

export default class ModelCheckBox extends CheckBox implements Bound {
  data: any
  field: string
}
