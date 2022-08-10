import { projectAuth } from "@/firebase/config"


const logout = async () => {

    await projectAuth.signOut()
}


const logoutUser = () => {

    return { logout }
}

export default logoutUser