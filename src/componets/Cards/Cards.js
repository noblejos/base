import "./Cards.css"
import { CardsData } from "../../Data/Data"
import Card from "../Card/Card"

export default function Cards() {
  console.log(CardsData)
  return (
    <div className="cards">
        {CardsData.map((card,index)=>(
            <div className="parent">
                <Card
                title={card.title}
                color={card.color}
                barValue={card.barValue}
                value={card.value}
                png={card.png}
                series={card.series}
                
                />
                
            </div>
        ))}
    </div>
  )
}
