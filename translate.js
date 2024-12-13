const translations ={
    fre:{
        connect: "Se connceter avec facebbok",
        mdp:"Mot de passe oublié ?",
        account:"Vous n’avez pas de compte ?",
        signup: "Inscrivez-vous",
        getapp:"Télechargez l'application",
        seconn:"Se connecter",
        inp:"Num,téléphone,nom de profil ou e-mail",
        inp1:"Mot de passe",
        meta:"Meta",
        propos:"À propos",
        blog:"Blog",
        emplois:"Emplois",
        aide:"Aide",
        api:"API",
        confidentialité:"Confidentilité",
        conditions:"Conditions",
        lieux:"Lieux",
        instagram:"Instgram Lite",
        threads:"Threads",
        importation:"Importation des contacts et non-utilisateurs",
        verified:"Meta Verified",
        copyright:"© 2024 Instagram par Meta"



    },


    eng:{
        connect: "Log in with Facebook",
        mdp:"Forgot password ?",
        account:"Don't have an account",
        signup: "Sign up",
        getapp:"Get the app",
        seconn:"Login",
        inp:"Phone number,username, or email",
        inp1:"Password",
        meta:"Meta",
        propos:"About",
        blog:"Blog",
        emplois:"Jobs",
        aide:"Help",
        api:"API",
        confidentialité:"Privacy",
        conditions:"Terms",
        lieux:"Locations",
        instagram:"Instgram Lite",
        threads:"Threads",
        importation:"Contact Uploading & Non-Users",
        verified:"Meta Verified",
        copyright:"© 2024 Instagram from Meta"
    }


}

const languageSelectop = document.querySelector("select");
let connecte=document.getElementById("connect")
let mdpp=document.getElementById("mdp")
let pp=document.getElementById("p")
let inscritt=document.getElementById("inscrit")
let telechargezz=document.getElementById("telechargez")
let btnj=document.getElementById("btnj")
let input=document.getElementById("inp1")
let input2=document.getElementById("password")
let text1=document.getElementById("a1")
let text2=document.getElementById("a2")
let text3=document.getElementById("a3")
let text4=document.getElementById("a4")
let text5=document.getElementById("a5")
let text6=document.getElementById("a6")
let text7=document.getElementById("a7")
let text8=document.getElementById("a8")
let text9=document.getElementById("a9")
let text10=document.getElementById("a10")
let text11=document.getElementById("a11")
let text12=document.getElementById("a12")
let text13=document.getElementById("a13")
let text14=document.getElementById("a14")

languageSelectop.addEventListener("change",(event)=>{
    setLanguage(event.target.value)
})

const setLanguage =(language) =>{
    if (language=="eng"){
        connecte.innerText =translations.eng.connect
        mdpp.innerText =translations.eng.mdp
        pp.innerText =translations.eng.account
        inscritt.innerText =translations.eng.signup
        telechargezz.innerText =translations.eng.getapp
        btnj.innerText=translations.eng.seconn
        input.setAttribute("placeholder", translations.eng.inp);
        input2.setAttribute("placeholder", translations.eng.inp1);
        text1.innerText=translations.eng.meta
        text2.innerText=translations.eng.propos
        text3.innerText=translations.eng.blog
        text4.innerText=translations.eng.emplois
        text5.innerText=translations.eng.aide
        text6.innerText=translations.eng.api
        text7.innerText=translations.eng.confidentialité
        text8.innerText=translations.eng.conditions
        text9.innerText=translations.eng.lieux
        text10.innerText=translations.eng.instagram
        text11.innerText=translations.eng.threads
        text12.innerText=translations.eng.importation
        text13.innerText=translations.eng.verified
        text14.innerText=translations.eng.copyright

    }else if(language =="fre"){
        connecte.innerText =translations.fre.connect
        mdpp.innerText =translations.fre.mdp
        pp.innerText =translations.fre.account
        inscritt.innerText =translations.fre.signup
        telechargezz.innerText =translations.fre.getapp
        btnj.innerText=translations.fre.seconn
        input.setAttribute("placeholder", translations.fre.inp);
        input2.setAttribute("placeholder", translations.fre.inp1);
        text1.innerText=translations.fre.meta
        text2.innerText=translations.fre.propos
        text3.innerText=translations.fre.blog
        text4.innerText=translations.fre.emplois
        text5.innerText=translations.fre.aide
        text6.innerText=translations.fre.api
        text7.innerText=translations.fre.confidentialité
        text8.innerText=translations.fre.conditions
        text9.innerText=translations.fre.lieux
        text10.innerText=translations.fre.instagram
        text11.innerText=translations.fre.threads
        text12.innerText=translations.fre.importation
        text13.innerText=translations.fre.verified
        text14.innerText=translations.fre.copyright

    }
}