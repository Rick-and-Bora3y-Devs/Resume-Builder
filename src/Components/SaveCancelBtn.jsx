import React from "react";
import Style from "../Css/SaveCancelBtn.module.css";

function SaveCancelBtn() {
    return (
            <div className={Style.buttons}>
                <button className={Style.cancel}>Cancel</button>
                <button className={Style.save}>Save</button>
            </div>
    );
}

export default SaveCancelBtn;