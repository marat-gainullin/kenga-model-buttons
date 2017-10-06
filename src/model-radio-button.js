import RadioButton from '../buttons/radio-button';
import Bound from 'ui/bound';

class ModelRadioButton extends RadioButton {
    constructor(text, selected, onActionPerformed) {
        if (arguments.length < 2)
            selected = null;
        if (arguments.length < 1)
            text = '';

        super(text, selected, onActionPerformed);
        Bound.call(this);
    }
}

export default ModelRadioButton;