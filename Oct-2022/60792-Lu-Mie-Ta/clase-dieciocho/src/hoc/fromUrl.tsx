import axios from "axios"
import { useEffect, useState } from "react"


export default function fromUrl(url: any) {
    return function (mapResponseToProps: any) {
        return function (Child: any) {
            return function (props: any) {
                const [loading, setLoading] = useState(true)
                const [resp, setResp] = useState({});
                useEffect(() => {
                    axios.get(url).then((r) => {
                        setResp(mapResponseToProps(r.data));
                        setLoading(false);
                    })
                }, []);

                return (!loading)
                    ? <Child {...props} {...resp} />
                    : <></>;
            }
        }
    }
}