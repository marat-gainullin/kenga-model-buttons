import CheckBox from '../buttons/check-box';
import Bound from 'ui/bound';

class ModelCheckBox extends CheckBox {
    constructor(text, selected, onActionPerformed) {
        if (arguments.length < 2)
            selected = null;
        if (arguments.length < 1)
            text = '';

        super(text, selected, onActionPerformed);
        Bound.call(this);
    }
}

export default ModelCheckBox;