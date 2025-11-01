function calculate(){
    let computerturn=["قیچی","سنگ","کاغذ"];
    let random=Math.floor(Math.random()*computerturn.length);
    let computerturnnn=computerturn[random];
    console.log("",computerturnnn);
    let bazikon1=document.querySelector("#nafar1").value;
    console.log(bazikon1);

    let finalcalculate= computerturnnn+"-"+bazikon1
    switch (finalcalculate) {
        case "سنگ-قیچی":
        document.getElementById("result").innerText="سیستم برنده است" 
        break;
        case "کاغذ-قیچی":
        document.getElementById("result").innerText=" بازیکن شماره 2 برنده است"
        break;
        case "قیچی-قیچی":
        document.getElementById("result").innerText="مقادیر وارد شده برابر است"
        break;


        case "قیچی-سنگ":
        document.getElementById("result").innerText="بازیکن شماره 2 برنده است"
        break;
        case "کاغذ-سنگ":
        document.getElementById("result").innerText="سیستم برنده است"
        break;
        case "سنگ-سنگ":
        document.getElementById("result").innerText="مقادیر وارد شده برابر است"
        break;


        case "سنگ-کاغذ":
        document.getElementById("result").innerText="بازیکن شماره 2 برنده است"
        break;
        case "قیچی-کاغذ":
        document.getElementById("result").innerText="  سیستم برنده است"
        break;
        case "کاغذ-کاغذ":
        document.getElementById("result").innerText="مقادیر وارد شده برابر است"
        break;



        default:
            document.getElementById("result").innerText="مقدار وارد شده اشتباه است"
                document.getElementById("result").style.color="red"

            break;
    }


}




