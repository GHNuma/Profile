import React,{useState} from 'react';
import Skills from "../components/skillComponents/Skills";
import {Slides} from "../components/skillComponents/Slides";
function AboutMe (props){
    const [infoVisibility,setInfoVisibility]=useState("hidden")
    const [shadowStyle,setShadowStyle]=useState("shadowText")
const [indexType,setIndexType]=useState(2)


    function turnOnFullShadow() {
        setShadowStyle("hoveredShadowText")
    }

    function  turnOffFullShadow() {
        setShadowStyle("shadowText")
    }

    function showInfo(){
        setInfoVisibility("visible")
        setIndexType(1)
    }
    function hideInfo(){
        setInfoVisibility("hidden")
        setIndexType(2)
    }
        return (

            <>

                {/*<header>*
                    <div id="welcomeText">
                        <p>Добро пожаловать на мой профиль<br/>
                            Здесь собрана вся информация обо мне</p>
                    </div>
                </header>
                ПЕРЕДУМАЛ ДЕЛАТЬ ТАКОЕ ДЕРЬМО*/}
                <main >
                    <h1 className={shadowStyle} onMouseOver={turnOnFullShadow} onMouseOut={turnOffFullShadow} style={{zIndex:indexType}}>Programmer</h1>

                        <div id="myInfoBorder" style={{visibility:infoVisibility}}>

                            <p className="aboutMy"><strong>ФИО</strong>: Омирзак Нурмухамед</p>
                            <p className="aboutMy"><strong>Возраст</strong>:19</p>
                            <p className="aboutMy"><strong>Статус в обществе</strong>: Студент</p>
                        </div>



                    <Skills slides={Slides}/>
                    <img  id="myPhoto" onMouseOver={showInfo} onMouseOut={hideInfo} src="photoNuma.png" alt="Numa"/>

                </main>

            </>
        );
}

export default AboutMe;