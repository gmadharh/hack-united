import { useContext } from 'react'
//import { useUsers } from "../controllers/fetchUsers";

import { AuthContext } from '../contexts/AuthContext'

const Home = () => {
  //   const { name } = useContext(AuthContext);

  return (
    <div className="container mx-auto mt-24">
      <h2 className="text-5xl text-white font-bold heading">Hello World!</h2>
    </div>
  )
}

export default Home
