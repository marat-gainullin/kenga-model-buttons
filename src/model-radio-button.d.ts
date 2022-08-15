import RadioButton from 'kenga-buttons/radio-button';
import Bound from 'kenga/bound'

export default class ModelRadioButton extends RadioButton implements Bound {
  data: any;
  field: string;
}
