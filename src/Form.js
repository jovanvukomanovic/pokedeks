import React from "react"
import { useState } from "react";


const IndexPage = () => {
    const [formStep, setFormStep] = useState(0);    

    const completeFormStep =()=> {
        setFormStep (cur => cur + 1)
    }

    const renderButton =() => {
        if (formStep > 2) {
            return undefined
        }else if(formStep===2){
          return <p>Proceed to home Page</p>
        } else {
            return ( <button onClick={completeFormStep} type="button" >Next</button> )
        }
    }

  return (
    <div className="multi-form">
      <div className="form-header">
        <h1 >  Welcome to Pokedex </h1>
        <p > Login in 3 easy steps </p>
      </div>
      <div >
        <div >
          <form className="form">
            {/* first section */}
            {formStep>=0 && (
            <section style={formStep ===0 ? {display:"block"} : {display: "none"}}>
              <h2 > Personal Information: </h2>
              <div>
                {/* <label htmlFor="name">Name</label> */}
                <input  type="text" id="name" placeholder="name"/>
              </div>
              <div>
                {/* <label htmlFor="lastName">Last Name</label> */}
                <input  type="text" id="lastName"name="lastName"className="text-input" placeholder="Last Name"  />
              </div>
             </section>)}

             {/* second section */}
             {formStep>=1 && (
             <section style={formStep ===1? {display:"block"} : {display: "none"}}>
                <div>
                   <h2 c>Password</h2>
                   {/* <label htmlFor="password">Password</label> */}
                   <input type="password"id="password" name="password"className="text-input" placeholder="Password"/>
                </div>
                <div>
                  {/* <label htmlFor="confirmPassword">Confirm password</label> */}
                  <input type="password" id="confirmPassword" name="confirmPassword"className="text-input" placeholder="Confirm Password"/>
                </div>
            </section>)}

                {/* third section */}
                {formStep===2 && (
            <section style={formStep ===2 ? {display:"block"} : {display: "none"}} className="third-section">
              <h2 className="confirm">Confirm:</h2>
              <div >
                <input name="toc"type="checkbox" />
                <span className="accept"> I accept the: <a  href="/"> Terms of Service</a> </span>
              </div>
              <button > Login </button>
            </section>)}
            {renderButton()}
          </form>
        </div>
      </div>
    </div>
  )
}

export default IndexPage