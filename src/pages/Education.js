import React from 'react'
import './styles/Education.css'

function Education() {
  return (
    <React.Fragment>
      <div className='education'>
        <div className='education-container'>
          <div className='first-container'>
            <div className='image--box'>
              <a href='http://wmsu.edu.ph/' className='school-link'>
                <img src='wmsu_logo.png' alt='wmsu' className='imgFile' />
              </a>
            </div>
            <div className='desc'>
              <h1>Western Mindanao State University</h1>
              <h3>Mission</h3>
              <p>The Western Mindanao State University, set in a culturally diverse environment, shall pursue a vibrant socio-economic agenda that include:
• A relevant instruction paradigm in the education and training of competent and responsive human resource for societal and industry needs;
• A home for intellectual formation that generates knowledge for people empowerment, social transformation and sustainable development; and,
• A hub where science, technology and innovation flourish, enriched by the wisdom of the Arts and Letters, and Philosophy.</p>
              <h3>Vision</h3>
              <p>The University of Choice for higher learning with strong research orientation that produces professionals who are socially responsive to and responsible for human development; ecological sustainability; and, peace and security within and beyond the region  </p>
              <h3>Grade School</h3>
              <p>2006-2012</p>
              <h3>Junior High School</h3>
              <p>2012-2016</p>
              <h3>BS Computer Science</h3>
              <p>2018-2022</p>
            </div>
          </div>
          <div className='second-container'>
            <div className='desc'>
              <h1>Ateneo de Zamboanga University</h1>
              <h3>Mission</h3>
              <p>AdZU is committed to the mission of educating and forming students to be leaders who will work for social transformation based on FIlipino, Catholic, and Jesuit values, culture, and tradition, and who will dedicate themselves in the service of God and country (pro Deo et patria).</p>
              <h3>Vision</h3>
              <p>We envision AdZU to be a leading University in Mindanao committed to: peace and sustainable development, knowledge generation, responsive and community-based education, institutional sustainability, and community empowerment especially among the poor and marginalized like the indigenous and displaced peoples.</p>
              <h3>Senior High School</h3>
              <p>2016-2018</p>
            </div>
            <div className='image--box-two'>
              <a href='https://www.adzu.edu.ph/' className='school-link'>
                <img src='adzu_logo.png' alt='adzu logo' className='imgFile-two' />
              </a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Education