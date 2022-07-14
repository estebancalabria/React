export default function background(color){
    return function(Child){
        return function(props){
            return <div style={{backgroundColor:color}}>
                <Child {...props}></Child>
                </div>
        }
    }
}