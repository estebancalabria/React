import React from "react";

/*export default function red(Child){
    return class extends React.Component{
        render(){
            return (<div style={{backgroundColor:'red'}}>
                <Child {...this.props}></Child>
            </div>)
        }
    }
}*/

export default function red(Child) {
    return function (props) {
        return (<div style={{ backgroundColor: 'red' }}>
            <Child {...props}></Child>
        </div>);
    }
}