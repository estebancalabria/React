
export default function Loading({display}){
    return <div style={{
        margin:"0px",
        padding:"0px",
        position:"fixed",
        right:"0px",
        top:"0px",
        width:"100%",
        height:"100%",
        zIndex:30000,
        opacity:0.9,
        filter:"alpha(opacity=50)",
        display:display,
        background : "#E0E1E2 url('Loading.gif') no-repeat center"
    }}>
    </div>
}