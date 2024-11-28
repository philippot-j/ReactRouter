import { Link } from "react-router-dom"

export const Contacts = () => {
    const users = [1,2,3,4,5]
    return(
        <div className="">
            liste des utilisateurs
            <ul>
                {users.map((user) => (
                    <li key={user}>
                        <Link to={`${user}`}>{user}</Link>
                    </li>
                )
                )}
            </ul>
        </div>
        
    )
}