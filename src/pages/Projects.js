import Card from "../components/Card";
import React from "react";

function Projects() {

    const [winWidth, setWinWidth] = React.useState(window.innerWidth)
    React.useEffect(() => {

        const handler = () => {
            setWinWidth(window.innerWidth)
        }

        window.addEventListener('resize', handler)

        return () => {window.removeEventListener('resize', handler)}

    })

    let descriptionStyle;
    let textStyle;
    let pageStyle;

    if(winWidth >= 600){

        descriptionStyle = {
            margin: 0,
            position: 'absolute',
            width: '50%',
            right: 0,
            marginTop: '1.5rem',
            marginBottom: '1.5rem'
        };

        textStyle = {
            position: 'fixed',
            width: '50%',
            left: 0,
            margin: 0,
            top: '50%',
            MsTransform: 'translateY(-50%)',
            transform: 'translateY(-50%)'
        };

        pageStyle = {};

    }else{

        descriptionStyle = {};

        textStyle = {};

        pageStyle = {
            display: 'flex',
            flexDirection: 'column',

        }
    }


    return(
        <div className='ProjectPage' style = {pageStyle}>
            <div className='ProjectTextContainer' style = {textStyle}>
                <h1 className='firstHeading'>
                    HERE ARE SOME PROJECTS I'VE DONE
                </h1>
                <p className='BaseParagraph'>
                    When I have time outside of school and everything else I like to do, I like to make little code projects.
                    These projects are in addition to the assignments and projects I do as a part of my degree, the difference is
                    that these are projects attempt to provide a service of some sort that will be useful in someones daily life.
                    This website itself is actually one of the projects I've done. All of my projects are available to view on GitHub.
                    You can visit my GitHub by clicking on the card.
                </p>

            </div>
            <div className='ProjectDescriptionContainer' style = {descriptionStyle}>

                <div className='AlbumPickerDescrip'>
                    <h1 className='firstHeading'>ALBUM PICKER</h1>
                    <p className='BaseParagraph'>
                        This project was born from my own indecisiveness, one day on my way back from a class I was trying to
                        decide what I wanted to listen to. I decided that I didn't want to shuffle an entire playlist but instead
                        I wanted to listen to a whole album. The issue is I didn't know what album I wanted to listen to and
                        found myself wanting a shuffle button for albums so I decided to make one myself. In the process of building
                        this project, I gained experience in how to structure a project using Python and I had to teach myself how
                        to make a GUI using tkinter. Due to the way I designed this project to read a .txt list of albums it can be
                        used for much more than just albums, it can be used for anything you can put in a list. I have used this to
                        decide what to make for dinner and much more. This project is less of an Album Picker and more of a shuffle
                        button for lists.
                    </p>
                    <div className = 'imgContainer'>
                        <img className = 'AlbumPickerImg' src= {process.env.PUBLIC_URL + '/AlbumPickerMain.jpg'} alt = 'Main Page'/>
                        <img className = 'AlbumPickerImg' src= {process.env.PUBLIC_URL + '/AlbumPickerSelection.jpg'} alt = 'Selection Screen'/>
                        <img className = 'AlbumPickerImg' src= {process.env.PUBLIC_URL + '/AlbumPickerView.jpg'} alt = 'View of the list'/>
                    </div>
                </div>

                <div className='ProcessCalDescrip'>
                    <h1 className='firstHeading'>PROCESS CAL</h1>
                    <p className='BaseParagraph'>
                        This project was done as a part of a class I took in my second year at UVic. It takes an .ical file, a format
                        containing information about calendar events that is quite unreadable on it's own, and parses through all the
                        information in the file line by line. It then takes the important information from that line and converts it
                        into a format that is easily readable for humans. Once it has gone through the entire file it then prints out
                        all the events in the file in chronological order. Unfortunately, this project doesn't have a nice GUI as the
                        one above does, it prints and functions exclusively in the command line. This project was done in both Python and C.
                    </p>
                    <div className = 'imgContainer'>
                        <img className = 'ProcessCalImg' src= {process.env.PUBLIC_URL + '/ProcessCALPY.jpg'} alt = 'Project in Python' />
                        <img className = 'ProcessCalImg' src= {process.env.PUBLIC_URL + '/ProcessCALC.jpg'} alt = 'Project in C' />
                    </div>
                </div>

                <div className = 'gitCard'>
                    <Card url = 'https://github.com/charliewager' src = {process.env.PUBLIC_URL + '/Git-Icon.png'}>
                        GITHUB
                    </Card>
                </div>

            </div>
        </div>
    );

}

export default Projects