import React from 'react'
import NorthIslandButton from '../components/Buttons/NorthIslandButton'
import SouthIslandButton from '../components/Buttons/SouthIslandButton'
import ViewAllButton from '../components/Buttons/ViewAllButton'
import { useAuth0} from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

// STRETCH GOAL: have a 'advanced search' button at the bottom of the button list which takes you to an advanced search page

function Home () {
  const { isLoading, isAuthenticated, user } = useAuth0()
  const [ourUser, setOurUser] = useState([])
  useEffect(() => {
    getUser(user.sub) // function name is an estimate
      .then(results => {
        setOurUser(results)
        return null
      })
      .catch(err => console.log(err))
  }, [])
  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <>
      {isAuthenticated &&
      <div>
        <h1>Safehouse Search Options:</h1>
        {ourUser.houseId &&
          <Link to={`/house/manage/${ourUser.houseId}`}>MANAGE MY HOUSE</Link>
        }
        <NorthIslandButton />
        <SouthIslandButton />
        <ViewAllButton />
      </div>}
    </>
  )
}

export default Home
