let isDOBOpen = false;
let dateOfBirth;

const settingCogE1 = document.getElementById("settingsIcon");
const settingContentE1 = document.getElementById("settingscontent")
const initialTextE1=document.getElementById("initialText")
const afterDOBBtnTxtE1=document.getElementById("afterDOBBtnTxt")
const dobButtonE1=document.getElementById("dobButton")
const dobInputE1=document.getElementById("dobInput")


const toggleDateOfBirthSelector = () =>{

    if (isDOBOpen){
        settingContentE1.classList.add("hide");
    }else{
        settingContentE1.classList.remove("hide");
    }
    isDOBOpen = !isDOBOpen;

    console.log("Toggle", isDOBOpen);
};



const setDOBHandler =() => {

    dateOfBirth = dobInputE1.value;
   console.log("date of birth", dateOfBirth)




}

settingCogE1=addEventListener("click", toggleDateOfBirthSelector);
dobButtonE1=addEventListener("click", setDOBHandler);