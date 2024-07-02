
import { Link, useNavigate } from "react-router-dom";
import ProductsTable from "../Components/ProductsTable";





function Dashboard() {

  const token = localStorage.getItem("Token");
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem("Token");
    navigate("/login");
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        {/* <button> 
          <Link to={"/login"}>Login</Link>
        </button> &nbsp; */}
        <button data-testid="logout-btn" onClick={handleLogout} >Logout</button>
        <p>
          
          <b data-testid="user-token">
          Token:{token}
          </b>
        </p>

   
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ProductsTable />
      </div>
    </div>
  );
}

export default Dashboard;
