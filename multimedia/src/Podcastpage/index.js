import './index.css'
const Podcastpage = () =>{
    return(
        <div>

            <div id= 'podcastlanding'>

            <div id = 'landingtext'>
                <h1>Podcast</h1>
                <h2>Where Stories Find Their Voices </h2>
            </div>

            <div className = 'hero'>
                <div>
                    <h3>Explore latest top-notch stories from world wide community and verified tech creators</h3>
                    <p>A podcast to discuss all the things related to the workplace and beyond.Examining the future of work, analyzing the potential impact of technological advancements and preparing listeners for the evolving nature of employment. Through insightful interviews with experts and successful professionals, the podcast aims to offer a well-rounded perspective on navigating the complexities of the modern workplace.</p>
                    

                </div>

                <div>
                    <img src = '/Images/pod.png' className = 'pod'/>
                </div>

            </div>

            <div className = 'firstset'>

            <div className = 'content'>
                <div>
                    <img src = '/Images/podcast.png' className = 'mic'/>
                </div>
                <div id = 'text'>
                    <h4>Skills Of The Future</h4>
                    <p>Episode 1: Discussion about the skills required for the future success</p>
                    <img src = '/Images/playIcons.png' className = 'playicons'/>
                </div>
                </div>

                <div className = 'content'>

                <div>
                    <img src = '/Images/podcast.png' className = 'mic2'/>
                </div>
                <div id = 'secondtext'>
                    <h4>Skills Of The Future</h4>
                    <p>Episode 2: Discussion about the skills required for the future success</p>
                    <img src = '/Images/playIcons.png' className = 'playicons'/>
                </div>
                </div>

            
            
            </div>

            <div className = 'secondset'>

<div className = 'content'>
    <div>
        <img src = '/Images/podcast.png' className = 'mic'/>
    </div>
    <div id = 'text'>
        <h4>Skills Of The Future</h4>
        <p>Episode 1: Discussion about the skills required for the future success</p>
        <img src = '/Images/playIcons.png' className = 'playicons'/>
    </div>
    </div>

    <div className = 'content'>

    <div>
        <img src = '/Images/podcast.png' className = 'mic2'/>
    </div>
    <div id = 'secondtext'>
        <h4>Skills Of The Future</h4>
        <p>Episode 2: Discussion about the skills required for the future success</p>
        <img src = '/Images/playIcons.png' className = 'playicons'/>
    </div>
    </div>



</div>
            
            </div>
        </div>

    );
}
export default Podcastpage