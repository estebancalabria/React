import "bootstrap/dist/css/bootstrap.css";

export default function Lista({items}:any){
    return <ul>
        {
            items.map((item:any,index:number)=>(
                <li key={index}>{item}</li>
            ))
        }
    </ul>
}