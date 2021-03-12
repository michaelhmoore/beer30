
count = 1
$(function () {
    const $beerContainer = $('.right-box')

    $.get('http://localhost:3000/api/beers')
    .then((data) => {
        beerData = data
        let beerHtml = renderBeers(data)

        $beerContainer.html(beerHtml)
    })
})

function renderBeers(beerArray){
    const beerHtmlArray = beerArray.map((currBeer) => {

        return `<div>  <a class = "beer_link" href = "#" onclick = "saveToSixPack('${currBeer.id}')" ><img class="beerImg" src="${currBeer.image}" alt=" "> 
        <br> ${currBeer.name}</a>  </div> 
        `
    })

    return beerHtmlArray.join(" ")
}

function saveToSixPack(id) {


    $.get(`http://localhost:3000/api/beers/${id}`)
    .then((data) => {
        beerData = data
    
        const $sixpackBox = $(`.beer-${count}`)
        $sixpackBox.html(`<img class ="beerImg2" src = "${beerData.image}">`)
        count++
    })


}