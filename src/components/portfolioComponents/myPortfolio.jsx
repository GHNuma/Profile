import React,{useState} from 'react';
import "./portfolio.css"

function MyPortfolio({when,...projects}) {
    const [fullInfo,setFullInfo]=useState(false)
    return (
        <div  className="projectsBtnBlock">
            <button className="projectsBtn"  onClick={() => setFullInfo(!fullInfo)}>{when}</button>
            <div className={fullInfo ? "allProjects" : "allProjects hide" } >
            {projects.list.map((project,index)=>

                    <div className="allProjects-body">
                        <a target="_blank" rel="noreferrer" href={project.info}>{project.name}</a>

                    </div>

            )}
                </div>
        </div>
    );
}

export default MyPortfolio;