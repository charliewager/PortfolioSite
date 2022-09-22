function Home() {

    return(
        <div className = 'home'>
            <div className = 'HomeTextContainer'>
                <h1 className='firstHeading'>WELCOME!</h1>
                <p className = 'BaseParagraph'>
                    My name is Charlie Wager and currently I am a Software Engineering student going into my third year
                    at the University of Victoria. I grew up on a small golf island of the coast of Vancouver Island and spent
                    the first 19 years of my life on the island and the surrounding areas on Vancouver Island. Due to the small nature
                    of the island I didn't have much access to technology or the internet growing up and this caused me to
                    spend most of my early life outdoors. I became interested in technology and how it's built as soon as I
                    was first exposed to it. My interest in Software Engineering started in my first year at UVic, there was a
                    that I was required to take and about halfway through the course I realized that this is what I can see myself
                    doing as a career. While my degree has me staring at a computer screen most of the day I try and
                    get outside and do something active as often as I can, I particularly enjoy skateboarding, biking, and skiing.
                    These aren't my only hobbies and interests either, whenever I can find the inspiration and time I make music.
                </p>
            </div>
            <div className = 'homeIMGcontainer'>
                <img className = 'homeIMG' src = {process.env.PUBLIC_URL + '/homepage_portrait.JPG'} alt = 'This is me'/>
            </div>
        </div>
    );

}

export default Home