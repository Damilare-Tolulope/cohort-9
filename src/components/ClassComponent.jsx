import React from "react";

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { age: 23}
    }
    
    render() {
        return(
            <div>
                <p>Hello from Class Component</p>
            </div>
        )
    }
}

export default ClassComponent;