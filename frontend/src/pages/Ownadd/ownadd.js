import React, { useState } from 'react'
import axios from "axios";
import SolidButton from '../../components/Solidbutton/solidbutton'
import './ownadd.css'
const baseURL = "http://localhost:8000"
  
 

const Ownadd = (props) => {
  const [logdata,setData] = useState({
    Name:"",
    Location:"",
    Type:"",
    Description:"",
    Max_occupant:"",
    Rent:""
})


const addData = (e)=>{
    // console.log(e.target);
    const {name,value} = e.target;
    setData(()=>{
        return{
            ...logdata,
            [name]:value
        }
            
    })
}




async function addProperty(){

    await axios.post(`${baseURL}/owner/${localStorage.getItem('userId')}/listproperty`, {
      Name: logdata.Name,
      Location: logdata.Location,
      Type: logdata.Type,
      Description: logdata.Description,
      Max_occupant: logdata.Max_occupant,
      Rent: logdata.Rent
    })
    .then((response) =>{
      console.log(response);
      
    }).catch(error=>{console.log(error)})


}



  return (
    <div className="ownadd-container">
      <div id="main-section" className="ownadd-main">
        <nav data-role="Header" className="ownadd-navbar">
          <div className="ownadd-right-side">
          </div>
          <div data-role="BurgerMenu" className="ownadd-burger-menu">
            <svg viewBox="0 0 1024 1024" className="ownadd-burger-menu">
              <path d="M810.667 725.333h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 426.667h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
              <path d="M810.667 128h-597.333c-47.061 0-85.333 38.272-85.333 85.333s38.272 85.333 85.333 85.333h597.333c47.061 0 85.333-38.272 85.333-85.333s-38.272-85.333-85.333-85.333z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="ownadd-mobile-menu">
            <div className="ownadd-nav">
              <div className="ownadd-top">
                <h1>Travel</h1>
                <div data-role="CloseMobileMenu" className="ownadd-close-menu">
                  <svg viewBox="0 0 1024 1024" className="ownadd-icon03">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              
            </div>
            <div className="ownadd-follow-container">
              <span className="ownadd-text04">
                Follow us on
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <div className="ownadd-icons-container">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="ownadd-link1"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="ownadd-icon05"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="ownadd-link2"
                >
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="ownadd-icon07"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="ownadd-link3"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="ownadd-icon09"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </nav>
        <h1>Add New Property</h1>
        <span className="ownadd-text06">
          Fill up the below form to list the property
        </span>
        <div className="ownadd-container1">
          <div className="ownadd-container2">
            <div className="ownadd-container3">
              <div className="ownadd-container4">
                <span className="ownadd-text07">
                  Property Name            :
                </span>
                <span className="ownadd-text08">
                  Image URL                    :
                </span>
                <span className="ownadd-text09">
                  Location                        :
                </span>
                <span className="ownadd-text10">
                  Property Type              :
                </span>
                <span className="ownadd-text11">Max no. of Occupants:</span>
                <span className="ownadd-text12">
                  Rent                                :
                </span>
                <span className="ownadd-text13">
                  Description                   :
                </span>
              </div>
              <input
                type="text"
                onChange={addData}
                placeholder=" "
                name= "Name"
                value = {logdata.Name}
                className="ownadd-textinput input"
              />
              <input
                type="text"
                placeholder=" "

                className="ownadd-textinput1 input"
              />
              <input
                type="text"
                placeholder=" "
                onChange={addData}
                name = "Location"
                value = {logdata.Location}
                className="ownadd-textinput2 input"
              />
              <input
                type="text"
                placeholder=" "
                onChange={addData}
                name = "Type"
                value = {logdata.Type}
                className="ownadd-textinput3 input"
              />
              <input
                type="text"
                placeholder=" "
                onChange={addData}
                name = "Max_occupant"
                value = {logdata.Max_occupant}
                className="ownadd-textinput4 input"
              />
              <input
                type="text"
                placeholder=" "
                name = "Rent"
                onChange={addData}
                value = {logdata.Rent}
                className="ownadd-textinput5 input"
              />
              <textarea 
              placeholder = " " 
              onChange={addData}
              name = "Description"
              value = {logdata.Description}
              className="ownadd-textarea textarea">

              </textarea>
            </div>
          </div>
          <button onClick={(e)=>{e.preventDefault();addProperty();window.location.href="/landingpage"}}>Submit</button>
        </div>
      </div>
      <div className="ownadd-footer">
        <div className="ownadd-menu">
          <h1>Roomie</h1>
          <div className="ownadd-links-container1"></div>
          <div className="ownadd-follow-container1">
            <span className="ownadd-text14">
              Follow us on
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <div className="ownadd-icons-container1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="ownadd-link4"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="ownadd-icon11"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer noopener"
                className="ownadd-link5"
              >
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="ownadd-icon13"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="ownadd-link6"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="ownadd-icon15"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ownadd
