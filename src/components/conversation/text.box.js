import React, {Component} from 'react'; 


class TextBox extends Component { 
    render() {
        return <div className="input-group m-1" style={{"height" : "40px"}}>
                <textarea className="form-control"></textarea>
                <button className="btn btn-outline-secondary" type="submit" >Send</button>
        </div>
    }
}

export default TextBox;
