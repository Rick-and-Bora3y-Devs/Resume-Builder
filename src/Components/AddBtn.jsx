
const testStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
}

const buttonStyle = {
    fontSzize: "1.5rem",
    padding: "1rem 1rem",
    color: "#2B6681",
    borderStyle: "solid",
    borderWidth: "2px",
    borderColor: "#2B6681"
}


function AddBtn(){
    return(
        <div style={testStyle}>
            <button style={buttonStyle}>Add A Professional Summary</button>
        </div>
    )
}


export default AddBtn;