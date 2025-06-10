import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const useCurrencies = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['currencies'],
        queryFn: ()=>{
            return axios.get('https://api.frankfurter.app/currencies').then(res=>res.data);
        }
    })
  return {  currencies : data, currenciesLoading : isLoading, currenciesError : isError };
}

export default useCurrencies