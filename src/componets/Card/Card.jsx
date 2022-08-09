import "./Card.css"
import {motion, AnimateSharedLayout} from "framer-motion"
import { useState } from "react"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {UilTimes} from "@iconscout/react-unicons"
import Chart from "react-apexcharts"
import { type } from "@testing-library/user-event/dist/type";

export default function Card({title,
    color,
    barValue,
    value,
    png,
    series,
    }) {
    const [expanded, setExpanded]= useState(false)
  return (
    <AnimateSharedLayout>
        {
            expanded?(
                <ExpandedCard value={value} png={png} 
                color={color} barValue={barValue} series={series}
                title={title}
                setExpanded={()=> setExpanded(false)}
                />
                
            ):
            <CompactCard value={value} png={png} 
            color={color} barValue={barValue} series={series}
            title={title}
            setExpanded={()=> setExpanded(true)}
            />
        }
    </AnimateSharedLayout>
  )
}


export function CompactCard({value,png,color,barValue,series,title, setExpanded}) {
    const Png=png
    console.log(value)
  return (
    <motion.div className="compact-card"
    style={{
      background: color.backGround, boxShadow: color.boxShadow
    }}
    onClick={setExpanded}
    layoutId="expandableCard"
    >
        <div className="radial-bar">
            <CircularProgressbar
            value={barValue}
            text={`${barValue}%`}
            />
            <span>{title}</span>
        </div>
        <div className="details">
        <Png/>
        <span>${value}</span>
        <span>Last 24hours</span>
        </div>
    </motion.div>
  )
}



    export function ExpandedCard({value,png,color,barValue,series,title, setExpanded}) {
      const data={
        options:{
          chart:{
            type:'area',
            height:'auto',
          },
          dropShadow:{
            enable:false,
            enableOnSeries: undefined,
            top:0,
            left:0,
            blur:3,
            color:"#000",
            opacity: 0.35,
          },
          fill:{
            color:["#fff"],
            type:"gradient",
          },
          dataLabels:{
            enable:false,
          },
          stroke:{
            curve: 'smooth',
            colors: ["white"]
          },
          tooltip:{
            x:{
              format:'dd/MM/yy HH:mm',
            },
          },
          grid:{
              show:true,
            },
          xaxis:{
              type:"datetime",
              categories:[
                "2021-09-19T00:00:00.000Z",
                "2021-09-19T01:00:00.000Z",
                "2021-09-19T02:00:00.000Z",
                "2021-09-19T03:00:00.000Z",
                "2021-09-19T04:00:00.000Z",
                "2021-09-19T05:00:00.000Z",
                "2021-09-19T06:00:00.000Z",
              ]
            },

        },
      }
      return (
      <motion.div className="expanded-card"
      style={{
        background:color.backGround,
        boxShadow: color.boxShadow
      }}
      layoutId="expandableCard"
      >
        <div style={{alignSelf:"flex-end", cursor:"pointer", color:'white'}}>
          <UilTimes onClick={setExpanded}/>
          
        </div>
        <span>{title}</span>
        <div className="chartContainer">
          <Chart series={series} type="area" options={data.options}/>
        </div>
        <span>
          Last 24 hours
        </span>
      </motion.div>
    )
  }
