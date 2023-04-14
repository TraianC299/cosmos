import { useEffect, useState } from "react";

const useFetch = (url: string) => {
    const [data, setData] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
        } catch (error) {
            setError("Error fetching data");
        } finally {
            setLoading(false);
        }
        };
    
        fetchData();
    }, [url]);
    
    return { data, error, loading };
    }


export default useFetch;