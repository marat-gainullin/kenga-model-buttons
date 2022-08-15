import ToggleButton from 'kenga-buttons/toggle-button';
import Bound from 'kenga/bound';

export default class ModelToggleButton extends ToggleButton implements Bound {
  data: any;
  field: string;
}
