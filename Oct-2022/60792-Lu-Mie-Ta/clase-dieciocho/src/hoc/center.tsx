import "bootstrap/dist/css/bootstrap.css"

export default function center(Child:any){
    return function(props:any){
        return <div className="alert alert-info text-center">
            <Child {...props} />
        </div>
    }
}