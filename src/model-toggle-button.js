import ToggleButton from 'kenga-buttons/toggle-button';
import Bound from 'kenga/bound';

class ModelToggleButton extends ToggleButton {
    constructor(text, icon, selected, iconTextGap, onAction) {
        if (arguments.length < 4)
            iconTextGap = 4;
        if (arguments.length < 3)
            selected = null;
        if (arguments.length < 2)
            icon = null;
        if (arguments.length < 1)
            text = '';

        super(text, icon, selected, iconTextGap, onAction);
        Bound.call(this);
    }
}

export default ModelToggleButton;