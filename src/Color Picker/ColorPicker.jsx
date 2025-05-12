import React, { useState } from "react";
import styles from "./ColorPicker.module.css";

function ColorPicker() {
    const [colors, setColors] = useState("#4812fe");

    function handleColorChange(event) {
        setColors(event.target.value);
    }

    return (
        <div className={styles.colorPicker}>
            <h1>Color Picker</h1>
            
            <div className={styles.colorDisplay} style={{ backgroundColor: colors }}>
                <div className={styles.colorResult}>
                    <span>Selected Color:</span>
                    <p className={styles.hexValue}>{colors}</p>
                </div>
                
                <div className={styles.inputContainer}>
                    <label>Select a Color</label>
                    <input 
                        type="color" 
                        value={colors} 
                        onChange={handleColorChange} 
                        className={styles.colorInput}
                    />
                </div>
            </div>
        </div>
    );
}

export default ColorPicker;