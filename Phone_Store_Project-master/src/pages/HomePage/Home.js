import React from 'react'
import { Footer, InfoSection } from '../../components'
import { 
    homeObjFour, 
    homeObjOne, 
    homeObjThree, 
    homeObjTwo 
} from './Data'

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            {/* <InfoSection {...homeObjThree}/>
            <InfoSection {...homeObjFour}/> */}
            <Footer/>
        </>
    )
}

export default Home
