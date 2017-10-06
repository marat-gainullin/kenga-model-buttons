import ToggleButton from '../buttons/toggle-button';
import Bound from 'ui/bound';

class ModelToggleButton extends ToggleButton {
    constructor(text, icon, selected, iconTextGap, onActionPerformed) {
        if (arguments.length < 4)
            iconTextGap = 4;
        if (arguments.length < 3)
            selected = null;
        if (arguments.length < 2)
            icon = null;
        if (arguments.length < 1)
            text = '';

        super(text, icon, selected, iconTextGap, onActionPerformed);
        Bound.call(this);
    }
}

export default ModelToggleButton;