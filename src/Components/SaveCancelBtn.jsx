import React from "react";
import Style from "../Css/SaveCancelBtn.module.css";

function SaveCancelBtn(props) {
    return (
            <div className={Style.buttons}>
                <button className={Style.cancel} onClick={props.onCancel}>Cancel</button>
                <button onClick={props.onClick} className={Style.save}>Save</button>
            </div>
    );
}

export default SaveCancelBtn;