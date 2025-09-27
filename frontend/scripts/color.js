export const getColor_CO = (number)=>{
    if(number == undefined || number == null){
        return ""
    }
    else if(number>=34680){
        return "red"
    }
    else if(number>=17641){
        return "pink"
    }
    else if(number>=14192){
        return "orange"
    }
    else if(number>=10744){
        return "yellow"
    }
    else if(number>=5038){
        return "greenyellow"
    }
    else{
        return "green"
    }
}

export const getColor_NO2 = (number)=>{
    if(number == undefined || number == null){
        return ""
    }
    else if(number>=2340){
        return "red"
    }
    else if(number>=1250){
        return "pink"
    }
    else if(number>=751){
        return "orange"
    }
    else if(number>=201){
        return "yellow"
    }
    else if(number>=101){
        return "greenyellow"
    }
    else{
        return "green"
    }
}

export const getColor_O3 = (number)=>{
    if(number == undefined || number == null){
        return ""
    }
    else if(number>=800){
        return "red"
    }
    else if(number>=266){
        return "pink"
    }
    else if(number>=216){
        return "orange"
    }
    else if(number>=161){
        return "yellow"
    }
    else if(number>=101){
        return "greenyellow"
    }
    else{
        return "green"
    }
}


export const getColor_SO2 = (number)=>{
    if(number == undefined || number == null){
        return ""
    }
    else if(number>=1592){
        return "red"
    }
    else if(number>=804){
        return "pink"
    }
    else if(number>=491){
        return "orange"
    }
    else if(number>=197){
        return "yellow"
    }
    else if(number>=92){
        return "greenyellow"
    }
    else{
        return "green"
    }
}

export const getColor_PM2_5 = (number)=>{
    if(number == undefined || number == null){
        return ""
    }
    else if(number>=250.4){
        return "red"
    }
    else if(number>=150.5){
        return "pink"
    }
    else if(number>=55.5){
        return "orange"
    }
    else if(number>=35.5){
        return "yellow"
    }
    else if(number>=12.1){
        return "greenyellow"
    }
    else{
        return "green"
    }
}

export const getColor_PM10 = (number)=>{
    if(number == undefined || number == null){
        return ""
    }
    else if(number>=424){
        return "red"
    }
    else if(number>=355){
        return "pink"
    }
    else if(number>=255){
        return "orange"
    }
    else if(number>=155){
        return "yellow"
    }
    else if(number>=55){
        return "greenyellow"
    }
    else{
        return "green"
    }
}

export const getColor_AQI = (number)=>{
    if(number == undefined || number == null){
        return ""
    }
    else if(number==6){
        return "red"
    }
    else if(number==5){
        return "pink"
    }
    else if(number==4){
        return "orange"
    }
    else if(number==3){
        return "yellow"
    }
    else if(number==2){
        return "greenyellow"
    }
    else{
        return "green"
    }
}

export const getColor_Temperature = (number)=>{
    if(number == undefined || number == null){
        return ""
    }
    else if(number>=40){
        return "red"
    }
    else if(number>=37){
        return "pink"
    }
    else if(number>=34){
        return "orange"
    }
    else if(number>=30){
        return "yellow"
    }
    else if(number>=25){
        return "greenyellow"
    }
    else if(number>=16){
        return "green"
    }
    else if(number>=1){
        return "blue"
    }
    else{
        return "violet"
    }
}

export const getColor_Rainfall = (number)=>{
    if(number == undefined || number == null){
        return ""
    }
    else if(number>=75){
        return "red"
    }
    else if(number>=35.1){
        return "pink"
    }
    else if(number>=20){
        return "orange"
    }
    else if(number>=7.6){
        return "yellow"
    }
    else if(number>=2.5){
        return "greenyellow"
    }
    else if(number>0){
        return "green"
    }
    else{
        return "gray"
    }
}

export const getColor_Humidity = (number)=>{
    if(number == undefined || number == null){
        return ""
    }
    else if(number>=99){
        return "red"
    }
    else if(number>=91){
        return "pink"
    }
    else if(number>=71){
        return "orange"
    }
    else if(number>=61){
        return "yellow"
    }
    else if(number>=51){
        return "greenyellow"
    }
    else if(number>=30){
        return "green"
    }
    else if(number>=1){
        return "blue"
    }
    else{
        return "violet"
    }
}

export const getColor_Pressure = (number)=>{
    if(number == undefined || number == null){
        return ""
    }
    else if(number>=1040){
        return "red"
    }
    else if(number>=1021){
        return "orange"
    }
    else if(number>=1001){
        return "green"
    }
    else if(number>=980){
        return "blue"
    }
    else{
        return "violet"
    }
}

export const getColor_DewPoint = (number)=>{
    if(number == undefined || number == null){
        return ""
    }
    else if(number>=30){
        return "red"
    }
    else if(number>=25){
        return "orange"
    }
    else if(number>=21){
        return "greenyellow"
    }
    else if(number>=11){
        return "green"
    }
    else if(number>=1){
        return "blue"
    }
    else{
        return "violet"
    }
}

export const getColor_Visibility = (number)=>{
    if(number == undefined || number == null){
        return ""
    }
    else if(number>=10){
        return "green"
    }
    else if(number>=7){
        return "greenyellow"
    }
    else if(number>=5){
        return "yellow"
    }
    else if(number>=3){
        return "orange"
    }
    else if(number>=1){
        return "pink"
    }
    else{
        return "red"
    }
}

export const getColor_UV_Index = (number)=>{
    if(number == undefined || number == null){
        return ""
    }
    else if(number>=11){
        return "red"
    }
    else if(number>=9){
        return "pink"
    }
    else if(number>=7){
        return "orange"
    }
    else if(number>=5){
        return "yellow"
    }
    else if(number>=3){
        return "greenyellow"
    }
    else if(number>=1){
        return "green"
    }
    else{
        return "blue"
    }
}

export const getColor_Gust = (number)=>{
    if(number == undefined || number == null){
        return ""
    }
    else if(number>=100){
        return "red"
    }
    else if(number>=81){
        return "pink"
    }
    else if(number>=61){
        return "orange"
    }
    else if(number>=41){
        return "yellow"
    }
    else if(number>=21){
        return "greenyellow"
    }
    else if(number>=1){
        return "green"
    }
    else{
        return "blue"
    }
}


export const getColor_Snow = (number)=>{
    if(number == undefined || number == null){
        return ""
    }
    else if(number>=50){
        return "red"
    }
    else if(number>=30){
        return "pink"
    }
    else if(number>=20){
        return "orange"
    }
    else if(number>=7.6){
        return "yellow"
    }
    else if(number>=2.5){
        return "greenyellow"
    }
    else if(number>0){
        return "green"
    }
    else{
        return "gray"
    }
}
