import React, { useEffect , useState } from 'react'
import jwt from 'jsonwebtoken'
import { useHistory } from 'react-router-dom'

const Home = () => {

    const history = useHistory()
    const [fullname, setFullname] = useState('')

    async function populateUserInfo(){
        const req = await fetch('http://localhost:1600/register' , {
            headers: {
                'x-access-token' : localStorage.getItem('token'),
            },
        })

        const data = req.json()
        if(data.status  === 'ok'){
            setFullname(data.fullname)
        }
        console.log(data)
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(token){
            const user = jwt.decode(token)
            if(!user){
                localStorage.removeItem('token')
                history.replace('/login')
            }else{
                populateUserInfo()
            }
        }
    }, [])

    return (
        <>
            <h1>Welcome to Homepage which is only visible when you are logged in {fullname}</h1>
        </>
    )
}
export default Home