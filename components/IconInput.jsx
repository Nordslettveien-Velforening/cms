import React from "react";
import * as BiIcons from "react-icons/bi"
import {PatchEvent, set} from 'part:@sanity/form-builder/patch-event'
import FormField from 'part:@sanity/components/formfields/default'
import styles from "./IconInput.css"

const Icon = ({iconName}) => {
    const icon = React.createElement(BiIcons[iconName]);
    return <div className={styles.icon}>{icon}</div>
};

const IconInput = React.forwardRef((props, ref) => {
    const { type, onChange } = props

    let icons = [];
    for (let i in BiIcons) {
        icons.push(i)
    }

    function onValueChange(event) {
        onChange(PatchEvent.from(set(event.target.value)))
    }

    return(
        <FormField label={type.title} description={type.description}>
            <div className={styles.iconContainer}>
                { icons.map(i =>
                    <div className={styles.iconSelect} key={i}>
                        <input
                            id={"radio_"+i}
                            type="radio"
                            className={styles.iconRadio}
                            value={i}
                            checked={props.value === i}
                            onChange={onValueChange}
                        />
                        <label className={styles.iconButton} htmlFor={"radio_"+i}>
                            <Icon iconName={i}/>
                        </label>
                    </div>
                )}
            </div>
        </FormField>
    )

})

export default IconInput;
