const characters =[
    "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S",
    "T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l",
    "m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", 
    "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")",
    "_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"
];

function toggleTheme(){
    console.log("Toggle Theme")
    let toggleButton = document.getElementById("theme-btn")
    let rootEl = document.documentElement

    if(rootEl.classList.contains("dark")){
        toggleButton.textContent = "🌙"
        rootEl.classList.remove("dark")
        rootEl.classList.add("light")
    } else {
        toggleButton.textContent = "☀️"
        rootEl.classList.remove("light")
        rootEl.classList.add("dark")
    }
}

function getRandomNumber(){
    return Math.floor(Math.random() * characters.length)
}

function generateRandomPass(){
    //15 chars
    let password = ""
    for(let i = 0; i < 15; i++){
        password += characters[getRandomNumber()]
    }

    return password
}

function setInputsPasswords(){
    let passwordInput1 = document.getElementById("generatedPass1")
    let passwordInput2 = document.getElementById("generatedPass2")

    console.log(generateRandomPass())
    passwordInput1.value = generateRandomPass()
    passwordInput2.value = generateRandomPass()

    
}