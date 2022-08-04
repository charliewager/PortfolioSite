import Card from "../components/Card";
import React from 'react';

function Music() {

    const [winwidth, setWinWidth] = React.useState(window.innerWidth)
    let align;
    React.useEffect(() => {

        const handler = () => {
            setWinWidth(window.innerWidth)
        }

        window.addEventListener('resize', handler)

        return () => {window.removeEventListener('resize', handler)}

    })

    if(winwidth > 545){
        align = "space-evenly"
    }else{
        align = "center"
    }

    return(
        <>
            <div className='MusicTextContainer'>
                <h1 className='firstHeading'>
                    CHECK OUT MY MUSIC
                </h1>
                <p className='BaseParagraph'>
                    When I have the time I enjoy creating and releasing music under the name
                    CHARLIEWAGER. I started off making music by just messing around in GarageBand
                    and as I gained more interest in creating music, which was something I had never even
                    thought I had the capacity to do until I tried, I learned more and more and eventually
                    upgraded to Logic Pro. I taught myself to do everything from making the beats to mixing
                    and mastering an entire song through YouTube videos and trail and error. I try to avoid confining
                    myself to one genre with my music even though all the music I have made so far has been closer
                    to hip-hop or rap than any other genre. Currently I have released one 7 song album called "DON'T
                    WORRY ABOUT ME I'LL BE JUST FINE" that is entirely hip-hop/rap and is a project that is very close
                    my heart. As I create more music I try and branch out into new genres and create my own style.
                </p>
            </div>
            <div className='CardContainer' style={{justifyContent: align}}>
                <Card url = 'https://open.spotify.com/artist/43wiX1odaTyjt135Xxo9YL' src ={process.env.PUBLIC_URL + '/Spotify_App_Logo.svg.png'}>
                    SPOTIFY
                </Card>
                <Card url = 'https://music.apple.com/us/artist/charliewager/1604941786' src = {process.env.PUBLIC_URL + '/apple_music_logo.jpg'}>
                    APPLE MUSIC
                </Card>
            </div>
        </>
    );

}

export default Music