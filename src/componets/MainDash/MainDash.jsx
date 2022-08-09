import Cards from "../Cards/Cards"
import Table from "../Table/Table"
import "./MainDash.css"


export default function mainDash() {
  return (
    <div className="main-dash">
        <h1>Dashboard</h1>
        <Cards/>
        <Table/>
        
    </div>
  )
}
