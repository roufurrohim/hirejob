import '../components/css/Profile.css'
import "bootstrap/dist/css/bootstrap.min.css"
import { API_URL } from "../helpers/env";
import React from 'react'

const ProfileCard =({data, skill})=>{

  return(
    <div>
      <section className='profile'>
        <div className='row'>
          <div className="imgbox">
            <img src={`${API_URL}uploads/${data.image}`} alt="" srcset="" />
          </div>
          <div className='textbox d-flex flex-column'>
            <h3 className="text-capitalize">{data.name}</h3>
            <p>{!data.special_skill?`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci.`:data.special_skill}</p>
          </div>
          <div className='address d-flex align-items-center'>
            <img src="https://raw.githubusercontent.com/farizian/week20/master/img/map-pin.png" alt="" srcset="" />
            <p>{data.city}</p>
          </div>
          <div className='textbox2 d-flex align-items-center'>
            <p>{!data.descriptions?`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.`:data.descriptions}</p>
          </div>
          <div className='skillbox d-flex flex-column p-0'>
            <h3>Skill</h3>
            <div className='skill d-flex'>
              {skill.map((e, i) => (
                <div key={i} id={`skill${i}`} className='box'>
                  <p className="text-capitalize">{e.name_skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProfileCard
