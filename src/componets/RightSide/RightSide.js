import "./RightSide.css"

import React from 'react'
import Updates from "../Updates/Updates"
import Review from "./Review/Review"

export default function RightSide() {
  return (
    <div className="right-side">
        <div>
        <h3>Updates</h3>
        <Updates/>
        </div>
        <div>
            <h3>
               Customer Review
            </h3>
            <Review/>
        </div>
    </div>
  )
}
