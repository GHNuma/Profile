import React,{useState} from 'react';
import "./footer.css"


function Footer() {
    let [socialButton,setSocialButton]=useState("socialMediaProfile.svg")
    const [socialMediasVisible,setSocialMediasVisible]=useState("none")
    // let [applicationValue,setApplicationValue]=useState("")
    // const [clientOrder, setClientOrder] = useState("Order");

    // const handleChange = (event) => {
    //     setClientOrder(event.target.value)
    // }
    //
    // function changeApplicationValue(event){
    //     setApplicationValue(event.target.value)
    // }
    const styles={
        button:{
            border:"none",
            background:"none",
            fontSize:"2.5vw",
            color:"white",
        },
        nonActiveButton:{
            background:"linear-gradient(135deg,rgba(0,0,0,0.05),grey) ",
            borderRadius:"25%",
            border:"7px outset white",
            padding:"20px",

        },
        activeButton:{
            background:"rgba(255,255,255,0.5)",
            borderRadius:"25%",
            border:"10px inset lightblue",
            padding:"20px",
            boxShadow:"0px 20px 50px 5px lightblue",
        }
    }
    let [socialButtonStyle,setSocialButtonStyle]=useState(styles.nonActiveButton)



    function switchSocialMediaButton(){
        if(socialButton==="socialMediaProfile.svg"){
            setSocialButton("socialMediaProfileOn.svg")
            setSocialButtonStyle(styles.activeButton)
            setSocialMediasVisible("block")
        }

       if(socialButton==="socialMediaProfileOn.svg"){
           setSocialButton("socialMediaProfile.svg")
           setSocialButtonStyle(styles.nonActiveButton)
           setSocialMediasVisible("none")
       }
    }

    let [search,setSearch]=useState("")
function handleSearchSubmit(e){
        e.preventDefault()
    if(search.trim()){

    }
}
    return (
<div>

<form className="finder" style={{display:"flex",justifyContent:"center"}} onSubmit={e=>handleSearchSubmit(e)}>
    <input  style={{fontSize:"2vw",color:"white",width:"40vw"}} placeholder="?????? ???? ???????????" type="text" value={search} onChange={(e)=> setSearch(e.target.value)}/>
    &nbsp;
    &nbsp;
    <button style={styles.button} type="submit" >??????????</button>
</form>
<br/>
    <div style={{display:"flex",justifyContent:"center"}}>




        <div>
{/*        <div className="col s4" style={{display:"grid",justifyContent:"space-around",justifyItems:"center"}}>*/}
{/*            <p style={{fontSize:"2vw",color:"white"}}>???????????????? ????????????:</p>*/}
{/*<form style={{border:"2px solid grey",padding:"5px",width:"30vw"}}>*/}
{/*    <p><b style={{color:"white"}}>???????????????? ???????? ????????????:</b></p>*/}
{/*    <input type="text" placeholder="???????? ??????"/>*/}
{/*    <input type="email" placeholder="??????????"/>*/}
{/*    <label htmlFor="orderReason"><b style={{color:"white"}}>???????? ????????????:</b></label>*/}
{/*    <select value={clientOrder} onChange={handleChange}>*/}
{/*    <option style={{color:"white"}} value="Help">?????????????????? ???????????? ?? ???????? ??????????????????</option>*/}
{/*    <option style={{color:"white"}} value="Order">???????? ?????????????? ??????????</option>*/}
{/*    <option style={{color:"white"}} value="Other">????????????</option>*/}
{/*    </select>*/}
{/*    <p><b style={{color:"white"}}>?????????????? ????????????????</b><br/>*/}
{/*        /!* ???????? ?????????? ???????????? ???????????????? ???? ???????????????????? ??????????*!/*/}
{/*        <textarea style={{maxWidth:"30vw"}} name="messageForNuma" cols="40" rows="3" value={applicationValue} onChange={changeApplicationValue}></textarea></p>*/}

{/*    <button type="submit" style={{color:"white",background:"none",fontSize:"1.25rem",margin:"0 5.5vw"}}>?????????????????? ????????????</button>*/}
{/*    /!*?????????? ???????????????? useState ?????? ?????????? ?????????? ??????????????,?????????? ?? ????*!/*/}

{/*</form>*/}
{/*        </div>*/}

        </div>




        <div className="contactMe">
            <p style={{fontSize:"2vw",color:"white"}}>?????????????????? ???? ????????:</p>
            <span className="material-icons phone" style={{fontSize:"5vw"}}><a style={{color:"green"}} href="tel:+77756433496">call</a></span>
            <span className="material-icons mail" style={{fontSize:"5vw"}}><a style={{color:"white"}} href="mailto:mr.ghnuma@gmail.com">email</a></span>
            <div id="Medias">
                <a href="https://www.instagram.com/mr.ghnuma/" className="socialMedias fa fa-3x fa-instagram instagram" style={{display:socialMediasVisible}} />
                <a href="https://twitter.com/Nurmukh28018713" className="socialMedias fa fa-3x fa-twitter twitter" style={{display:socialMediasVisible}} />
                <a href="https://vk.com/numaom" className="socialMedias fa fa-3x fa-vk vk" style={{display:socialMediasVisible}} />
                <a href="https://www.youtube.com/channel/UCe20AftYCky7i1CoLpP6lIw/playlists" className="socialMedias fa fa-3x fa-youtube youtube" style={{display:socialMediasVisible}} />


            </div>
            <img className="socialMediaButton" onClick={switchSocialMediaButton} src={socialButton} style={socialButtonStyle} alt="MagicButton"/>
        </div>



    </div>
</div>
    );
}

export default Footer;