import React, {useState} from 'react'
import './styles/Portfolio.css'
import List from '../components/List'
import { Link } from 'react-router-dom'

function Portfolio() {

  return (
    <React.Fragment>
      <div className='portfolio'>
        <div className='portfolio-container'>
          <div className='portfolio-header-image'>
            <img src='photo1.jpg' alt='header image' className='portfolio-img' />
          </div>
          <div className='portfolio-description'>
            <h1 className='header'>JERICO JAMES A. RAMOS</h1>
            <h1 className='header'>"RICO"</h1>
            <h3 className='header'>BS COMPUTER SCIENCE</h3>
            <h4 className='pdescription'>Address: Pasonanca Km.5 Zamboanga City, Zamboanga Peninsula, Philippines</h4>
            <h4 className='pdescription'>Phone: 09065153124</h4>
            <h4 className='pdescription'>Email: ramosricojames26@gmail.com</h4>
          </div>
        </div>
        <div className='portfolio-container-two'>
          <div className='portfolio-description-two'>
            <h1>OBJECTIVES</h1>
            <p className='pdescription-two'>Coding in front-end development, creating UI and UX designs for web
            development is my passion. To expand my knowledge and capability, to
            enhance my skills to be a successful Web Developer.</p>
            <p className='pdescription-two'>To land a job in design and development organizations that offers a stimulating
              learning environment for developing and putting into practice new ideas for the company's development.
            </p>
          </div>
        </div>
        <div className='portfolio-container-three'>
          <h1 className='three-header'>Course Related Skills</h1>
          <div className='card-box'>
            <div className='card'>
                <div className='image-container'>
                  <img src='pngvideo.png' alt='this image'/>
                </div>
                <div className='card-content'>
                  <div className='card-title'>
                    <h3>Video editing</h3>
                  </div>
                  <div className='card-body'>
                    <p>Capable of editing videos and pictures with the use of some editing tools</p>
                    <li>Photoshop</li>
                    <li>Capcut</li>
                    <li>Filmora</li>
                  </div>
                </div>
            </div>
            <div className='card'>
                <div className='image-container'>
                  <img src='pngfrontend.png' alt='this image' />
                </div>
                <div className='card-content'>
                  <div className='card-title'>
                    <h3>Front End Development</h3>
                  </div>
                  <div className='card-body'>
                    <p>Capable of designing websites with the use of HTML, CSS , Javascript and also with the help of some Front End frameworks such as ReactJS</p>
                  </div>
                </div>
            </div>
            <div className='card'>
                <div className='image-container'>
                  <img src='pngrepair.png' alt='this image' />
                </div>
                <div className='card-content'>
                  <div className='card-title'>
                    <h3>PC Repair</h3>
                  </div>
                  <div className='card-body'>
                    <p>Competent in PC repair and maintenance</p>
                  </div>
                </div>
            </div>
            <div className='card'>
                <div className='image-container'>
                  <img src='pngprogramming.png' alt='this image' />
                </div>
                <div className='card-content'>
                  <div className='card-title'>
                    <h3>Programming</h3>
                  </div>
                  <div className='card-body'>
                    <p>Capable of developing system applications and softwares with the use of android and visual studio</p>
                    <li>C++</li>
                    <li>C#</li>
                    <li>Php</li>
                  </div>
                </div>
            </div>
          </div>
        </div>
        
        {/*this is the works/4th container*/}
        <div className='portfolio-container-four'>
          <h1 className='fourth-header'>Works</h1>
          <div className='list-items'>
            <a href='https://github.com/RamosJerico/vennco-react' className='link-list'>
            <List 
                  listColor='blue'
                  title='Faculty Loading System'
                  imageFile='pngfaculty.png' />
            </a>
            <a href='http://172.104.56.211/' className='link-list'>
              <List 
                listColor='red'
                title='Agrivance Pro: Yield Prediction'
                imageFile='pngrice.png'  />
            </a>
            <a href='https://github.com/RamosJerico/CC105ACTIVITY_CHAT_UI' className='link-list'>
              <List 
                listColor='yellow'
                title='Chat UI'
                imageFile='pngchat.png' />
            </a>
            <a href='https://github.com/RamosJerico/LoadingSystem' className='link-list'>
              <List 
                listColor='green'
                title='Faculty Loading System v2'
                imageFile='pngfaculty.png' />
            </a>
          </div>
          <h2>Note: I wasn't able to save my videos in the past, but I am entirely interested in being a video editor. Hoping for your consideration, thank you!</h2>
        </div>
      </div>
    </React.Fragment>
  )
}
export default Portfolio