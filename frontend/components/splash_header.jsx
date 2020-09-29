import { Link } from 'react-router-dom';
import React from 'react';


class SplashPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            submitted: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state).then(() => {
            return this.props.history.push('/signup');
        });
    }
    render() {
        return (
            <div className="splash-div">
                <div> 
                     <div className="firstcol"> 
         
                        <h1 className="splash-hq">
                            6lack is where collaborations happens
                        </h1> 

                        <div className="team">
                            With channels in 6lack, you and your team know where to go to ask questions, share updates and stay in the loop on your music.
                        </div>
                        <br/>
                        <form className="splash-form" onSubmit={this.handleSubmit}>
                            <input type="submit" className="splash-started" value="TRY FOR FREE" /> </form>
                        <br/>

                        <video className="video"
                            autoPlay
                            loop
                            src="https://a.slack-edge.com/9b527/marketing/img/homepage/hp-prospect/hero/desktop/mp4/hero-image.mp4"
                            type="video/mp4"
                            id="animation1"
                            muted/>
        
                        
                    </div> 

                    
                    </div>
                <div className="header-div-2">
                    <h2 className="better-way">A better way to share your art</h2>
                <p className="unlike-text">
                        Unlike email, conversations in 6lack are easy to follow. And they’re more than conversations — you can make calls, share music files, and even connect with other musicians on apps.
              </p>
                    <div>
                        <video className="animation-1"
                            autoPlay
                            loop
                            src="https://a.slack-edge.com/5f6f2/marketing/img/homepage/hp-prospect/channels/bring-your-team-together-in-channels.mp4"
                            type="video/mp4"
                            id="animation2"
                            muted
                        />
                    </div>
                    <form className="splash-form" onSubmit={this.handleSubmit}>
                        <input type="submit" className="splash-started2" value="SEE ALL FEATURES" />
                    </form>
                </div>
  

                <div className="header-div-3">
                    <h2 className="better-way-2">Over 750,000 companies use 6lack to get work done</h2>
                    <div>
                        <img src="http://www.eastatlantaloveletter.com/sites/g/files/aaj2156/f/styles/suzuki_breakpoints_image_tablet/public/news/201809/1e68b060-dcfe-483d-b9d8-d03c76025c27.jpg?itok=7_VscGzn" className="splash-picture3" />
                    </div>
                    <br/>
                    <p className="unlike-text-2">
                        “I help share my sound from the studio to others, and all around the world” Valentine explains. “[With 6lack] there’s no wasted time or wasted music because you’re able to communicate things right away.”
                        Ricardo Valdez Valentine
                        Artist, East Atlanta
                    </p>
                </div>

                
                </div>



                
                
    
            

            
        );
    }
}

export default SplashPage;