import React from 'react'
import './measure.css'
const Measure = () => {
  return (
    <div className='measure-page'>
      <h1>Fill in your Measurements</h1>
      
      <form action="" className='measure-form'>
        <label htmlFor="">Bust</label><input type="text" />
        <label htmlFor="">Waist</label><input type="text" />
        <label htmlFor="">Upper Waist</label><input type="text" />
        <label htmlFor="">Neck</label><input type="text" />
        <label htmlFor="">Upper Hip</label><input type="text" />
        <label htmlFor="">Shoulder</label><input type="text" />
        <label htmlFor="">Arm</label><input type="text" />
        <label htmlFor="">Wrist</label><input type="text" />
        <label htmlFor="">Front Bodice</label><input type="text" />
        <label htmlFor="">Back bodice</label><input type="text" />
        <label htmlFor="">Hip to Knee</label><input type="text" />
        <label htmlFor="">Inseam</label><input type="text" />
        <label htmlFor="">Hip to Ankle</label><input type="text" />
        <button>Save</button>
      </form>
      <div className="measure-sample">
        <img src="https://thefoldline.com/wp-content/uploads/2018/12/Body-measurement-chart-full-5.png" alt="" />
      </div>
      
    </div>
  )
}

export default Measure
