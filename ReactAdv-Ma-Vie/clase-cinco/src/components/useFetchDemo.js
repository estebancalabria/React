import useFetch from "../hooks/useFetch";


const UseFetchDemo = (props) => {
    let posts = useFetch("https://jsonplaceholder.typicode.com/posts");
    return (<ul>
        {
            posts.map((p) =>(<li key={p.id}>
                {p.title}
            </li>))
        }
    </ul>);
}
 
export default UseFetchDemo;