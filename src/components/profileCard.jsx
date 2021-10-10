import '../components/css/Profile.css'
import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react'

const ProfileCard =(props)=>{
  return(
    <div>
      <section className='profile'>
        <div className='row'>
          <div className="imgbox">
            <img src="https://s3-alpha-sig.figma.com/img/792c/65bc/52b72a55a079dca3c59ba0db0eb236aa?Expires=1634515200&Signature=gMfQ6-wjayQvRm6c5oVC8Slh2O8KOP3SeMCSzWd15~app3qlU20iZag3ZyQha67Ks1dyzmgtBabSQIBmU~u6suS6SpepkOEB7jpMU8mNN4qzymf7GzjxBi2rIQv2oPGPXsLxbyQpufRfFMCHD3n9~bwRO37Rj-5XF67QuX9bPTVyL5bzmWahSW~07cbTbih0gACVFDu2KYeF~XSsbpHzTMLu3--lr2PTrzAVihgN3ip0pS5HEcZ-cYvsd8Ws5ZAT0nVIMjwmEf86ImwHLqYyHsFv9jb-AeaRzwYTz1mZzcDgvNNe-XgHtWgGZD5pb4Fh~M2udeI7E2goR8v5K5NaUA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" srcset="" />
          </div>
          <div className='textbox d-flex flex-column'>
            <h3>Louis Tomlinson</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci.</p>
          </div>
          <div className='address d-flex align-items-center'>
            <img src="https://raw.githubusercontent.com/farizian/week20/master/img/map-pin.png" alt="" srcset="" />
            <p>Purwokerto, Jawa Tengah</p>
          </div>
          <div className='textbox2 d-flex align-items-center'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
          </div>
          <div className='skillbox d-flex flex-column p-0'>
            <h3>Skill</h3>
            <div className='skill d-flex'>
              <div className='box'>
                <p>Phyton</p>
              </div>
              <div className='box'>
                <p>Laravel</p>
              </div>
              <div className='box'>
                <p>Golang</p>
              </div>
              <div className='box'>
                <p>JavaScript</p>
              </div>
              <div className='box'>
                <p>PHP</p>
              </div>
              <div className='box'>
                <p>HTML</p>
              </div>
              <div className='box'>
                <p>C++</p>
              </div>
              <div className='box'>
                <p>Kotlin</p>
              </div>
              <div className='box'>
                <p>Swift</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProfileCard