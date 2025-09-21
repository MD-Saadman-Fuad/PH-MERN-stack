import { use } from "react"
export default function Users({fetchUser}){
    const users = use(fetchUser)
    return(
        <div className="card">
            <h3>Users: {users.length}</h3>
        </div>
    )

}