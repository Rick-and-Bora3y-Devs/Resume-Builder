import React from "react";
import Style from "../Css/SaveCancelBtn.module.css";

function SaveCancelBtn({onSave , onCancel}) {
    return (
            <div className={Style.buttons}>
                <button className={Style.cancel} onClick={onCancel}>Cancel</button>
                <button className={Style.save} onClick={onSave}>Save</button>
            </div>
    );
}

export default SaveCancelBtn;