import React,{useState} from 'react';



function Footer() {
    let [socialButton,setSocialButton]=useState("socialMediaProfile.svg")
    const [socialMediasVisible,setSocialMediasVisible]=useState("none")
    let [applicationValue,setApplicationValue]=useState("")

    function changeApplicationValue(event){
        setApplicationValue(event.target.value)
    }
    const styles={
        button:{
            border:"none",
            background:"none",
            fontSize:"3vh",
            color:"white"
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
            boxShadow:"0px 0px 50px 5px lightblue",
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

<form style={{display:"flex",justifyContent:"center"}} onSubmit={e=>handleSearchSubmit(e)}>
    <input style={{width:"600px",color:"white"}} placeholder="Что вы ищете?" type="text" value={search} onChange={(e)=> setSearch(e.target.value)}/>
    &nbsp;
    &nbsp;
    <button style={styles.button} type="submit">Найти</button>
</form>
<br/>
    <div className="row">
        <div className="col s4" style={{display:"grid",justifyContent:"space-around",justifyItems:"center"}}>
            <p style={{fontSize:"2rem",color:"white"}}>Оставить заявку:</p>
<form style={{border:"2px solid grey",padding:"5px",width:"30vw"}}>
    <p ><b style={{color:"white"}}>Напишите ваши данные:</b></p>
    <input type="text" placeholder="Ваше ФИО"/>
    <input type="email" placeholder="Почта"/>
    <p><b style={{color:"white"}}>Цель заявки:</b></p>

    <option selected style={{color:"white"}} value="helpProduct">Требуется помощь с моим продуктом</option>
    <option style={{color:"white"}} value="makeOrder">Хочу сделать заказ</option>
    <option style={{color:"white"}} value="other">Другое</option>

    <p><b style={{color:"white"}}>Опишите проблему</b><br/>
        {/* Этот текст должен зависеть от выбранного радио*/}
        <textarea style={{maxWidth:"30vw"}} name="messageForNuma" cols="40" rows="3" value={applicationValue} onChange={changeApplicationValue}></textarea></p>

    <button type="submit" style={{color:"white",background:"none",fontSize:"1.25rem",margin:"0 5.5vw"}}>Отправить заявку</button>
    {/*Нужно добавить useState для полей ввода текстов,почты и др*/}

</form>
        </div>
        <div className="col s4" style={{display:"grid",justifyContent:"space-around",justifyItems:"center",height:"70vh"}}>
            <p style={{fontSize:"2em",color:"white"}}>Связаться со мной:</p>
            <span className="material-icons phone" style={{fontSize:"3rem"}}><a style={{color:"green"}} href="tel:+77756433496">call</a></span>
            <span className="material-icons mail" style={{fontSize:"3rem"}}><a style={{color:"white"}} href="mailto:mr.ghnuma@gmail.com">email</a></span>
            <div id="Medias">
            <a href="https://www.instagram.com/mr.ghnuma/" className="socialMedias fa fa-3x fa-instagram instagram" style={{display:socialMediasVisible}} />
            <a href="https://twitter.com/Nurmukh28018713" className="socialMedias fa fa-3x fa-twitter twitter" style={{display:socialMediasVisible}} />
            <a href="https://vk.com/numaom" className="socialMedias fa fa-3x fa-vk vk" style={{display:socialMediasVisible}} />
            <a href="https://www.youtube.com/channel/UCe20AftYCky7i1CoLpP6lIw/playlists" className="socialMedias fa fa-3x fa-youtube youtube" style={{display:socialMediasVisible}} />
            </div>
            <img className="socialMediaButton" onClick={switchSocialMediaButton} src={socialButton} style={socialButtonStyle} alt="MagicButton"/>
        </div>
        <div className="col s4" style={{display:"grid",justifyContent:"space-around",justifyItems:"center"}}>

        </div>



    </div>
</div>
    );
}

export default Footer;