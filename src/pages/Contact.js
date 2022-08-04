import Card from "../components/Card";
import React from 'react';

function Contact() {

    const [winwidth, setWinWidth] = React.useState(window.innerWidth)
    let align;
    React.useEffect(() => {
            
            const handler = () => {
                setWinWidth(window.innerWidth)
            }

            window.addEventListener('resize', handler)

            return () => {window.removeEventListener('resize', handler)}

    })

    if(winwidth >= 545){
        align = "space-evenly"
    }else{
        align = "center"
    }

    return(
        <div className= 'contactPage'>
            <div className = 'contactTextContainer'>
                <h1 className= 'firstHeading'>
                    CONTACT ME THROUGH MY SOCIAL MEDIA OR EMAIL
                </h1>
                <p className= 'BaseParagraph'> Email: charlie.wagerr@gmail.com </p>
            </div>
            <div className='CardContainer' style={{justifyContent: align}}>
                <Card url = 'https://twitter.com/CHARLIEWAGER_' src = {process.env.PUBLIC_URL + '/twitter.png'}>
                    TWITTER
                </Card>
                <Card  url = 'https://www.instagram.com/___charliewager___/' src = {process.env.PUBLIC_URL + '/instagram_logo_2022.svg'}>
                    INSTAGRAM
                </Card>
            </div>
        </div>
    );

}

export default Contact