import React from "react";
import './About.css';

const About = ()=>{

    return(
        <div>

        <div className="about">

         <h1>About</h1>
         <br/>
       

          <p>
          <h3>Artist:</h3>Hi, I am looking for a dynamic and dedicated production house for my upcoming projects. 
          Do you stand out from the crowd?
          <br/> <br/>
          <h3>ShyamaJu Films:</h3> Yes! You are in the right place. 
         Welcome to Shyamaju Films, where creativity meets opportunity. We are committed to nurturing real talent and sharing stories that not only entertain people but also connect and inspire people from all walks of life.

          <br/> <br/>
          <h3>Artist:</h3>
          That sounds creatively inspired. What kind of projects do you prioritize? 
          <br/> <br/>

          <h3>ShyamaJu Films:</h3> Well! We think stories are the king, whether it's captivating short stories, heartfelt
           songs, interesting podcasts, or more. We believe in providing a creative platform to established or 
           emerging artists for expressing their voice and bringing the vision to life. 
           <br/><br/>



          


        </p>


        </div>

        <h1 id="teamh1">Team Members</h1>
       

        <div className="cards-div">


        <div className="profile-cards">

       <div className="profile-photo" id="photo1">

       </div>

       <div className="profile-details">
       Name :- Amit Soni 
       <br></br>
       Post :- CEO producer
       <br></br>
       {/* mail :- Amit@gamil.com
       <br></br> */}

       </div>


        </div>

        
        <div className="profile-cards">

       <div className="profile-photo" id="photo2">

       </div>

       <div className="profile-details">
       Name :- Sulekha Sharma 
       <br></br>
       Post :- Script Writer
       <br></br>
       {/* mail :- Amit@gamil.com
       <br></br> */}

       </div>


        </div>

        
        <div className="profile-cards">

       <div className="profile-photo">

       </div>

       <div className="profile-details">
       Name :- Jia pandey 
       <br></br>
       Post :- Model Actress
       <br></br>
       {/* mail :- Amit@gamil.com
       <br></br> */}

       </div>


        </div>

{/*         
        <div className="profile-cards">

       <div className="profile-photo">

       </div>

       <div className="profile-details">
       Name :- Amit Soni 
       <br></br>
       Post :- CEO producer
       <br></br>
       mail :- Amit@gamil.com
       <br></br>

       </div>


        </div> */}

        </div>
          
        </div>
    )
}

export default About;