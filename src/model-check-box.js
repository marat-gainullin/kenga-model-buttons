import CheckBox from 'kenga-buttons/check-box';
import Bound from 'kenga/bound';

class ModelCheckBox extends CheckBox {
    constructor(text, selected, onAction) {
        if (arguments.length < 2)
            selected = null;
        if (arguments.length < 1)
            text = '';

        super(text, selected, onAction);
        Bound.call(this);
    }
}

export default ModelCheckBox;