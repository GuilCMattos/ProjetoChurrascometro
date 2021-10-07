// Carne - 400 gr por pessoa + de 6 horas - 650
// Cerveja - 1200ml por pessoa + 6 horas - 2000 ml
// Refrigerante/água - 1000 ml por pessoa + 6 horas 1500 ml
// crianças valem por 0,5

function calcular() {
    let adultos = document.getElementById("adultos")
    let criancas = document.getElementById("criancas")
    let duracao = document.getElementById("duracao")
    let res = document.getElementById("res")

    let a = Number(adultos.value)
    let c = Number(criancas.value)
    let d = Number(duracao.value)

    if (a == 0 && c == 0 && d == 0) { 
        alert("Está faltando algum dado para continuar")
    } else if (d == 0 ) { 
        alert("Está faltando algum dado para continuar")
    } else { 

        if (d <= 6) { 
            let CarnAdulto = a * 0.4
            let CarnCrianca = c * 0.2
            let CarnRes = CarnCrianca + CarnAdulto
            
            let refriAdult = a * 0.5
            let refriCrian = c * 0.25
            let refriRes = refriAdult + refriCrian

            let cerveja = a * 3.5

            res.innerHTML = ""
            res.innerHTML += `<p>${CarnRes.toFixed(1)} Kg de Carne</p>`
            res.innerHTML += `<p>${Math.round(cerveja)} Latas de cerveja</p>`
            res.innerHTML += `<p>${Math.round(refriRes)} Garrafas de 2 L de Bebida</p>`

        } else { 
            let CarnAdulto = a * 0.6
            let CarnCrianca = c * 0.4
            let CarnRes = CarnCrianca + CarnAdulto

            let refriAdult = a * 1
            let refriCrian = c * 0.5
            let refriRes = refriAdult + refriCrian
            

            let cerveja = a * 7

            res.innerHTML = ""
            res.innerHTML += `<p>${CarnRes.toFixed(1)} Kg de Carne</p>`
            res.innerHTML += `<p>${cerveja} Latas de cerveja</p>`
            res.innerHTML += `<p>${Math.floor(refriRes)} Garrafas de 2 L de Bebida</p>`
        }
        

      
    }
}



