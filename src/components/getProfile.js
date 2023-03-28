import {useQuery, gql} from "@apollo/client" 
import {GET_PROFILE} from "../GraphQL/Queries"

function getProfile() {
  
  const {loading, data} = useQuery(GET_PROFILE) 

  useEffect(()=> {
    console.log(data)
  }, [data])

    return (
    <div>getProfile</div>
  )
}

export default getProfile