import Management from "../Components/Management";
import NavBar from "../Components/NavBar";

const Admin = () => {
    return (
        <div style={{background: '#E5E5E5', height: '100%'}}>
            <NavBar isAdmin/>

            <Management />
        </div>
    )
}

export default Admin