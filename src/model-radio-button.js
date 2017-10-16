import RadioButton from 'kenga-buttons/radio-button';
import Bound from 'kenga/bound';

class ModelRadioButton extends RadioButton {
    constructor(text, selected, onAction) {
        if (arguments.length < 2)
            selected = null;
        if (arguments.length < 1)
            text = '';

        super(text, selected, onAction);
        Bound.call(this);
    }
}

export default ModelRadioButton;