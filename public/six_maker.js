
count = 1
beerPack = []
$(function () {
    const $beerContainer = $('.right-box')
    const $submit = $('#submit-form')

    $.get('/api/beers')
    .then((data) => {
        beerData = data
        let beerHtml = renderBeers(data)

        $beerContainer.html(beerHtml)
    })

    $submit.on('submit', function (e) {

        const $title = $('#exampleFormControlInput1').val()
        const $description = $('#exampleFormControlTextarea1').val()

        e.preventDefault()
        $.post('/six_maker' , {
            title:$title,
            description: $description,
            beers: beerPack
            
        })
        .then((result) => {
            
        } )
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
    if(count ==7){
        alert("Beer Pack is Full")
        return ""
    }

    $.get(`/api/beers/${id}`)
    .then((data) => {
        beerData = data
        let $sixpackBox = $(`.beer-${count}`)
        while(!($sixpackBox.html() === ''))
        {
            count ++ 
             $sixpackBox = $(`.beer-${count}`)

        }
        $sixpackBox.html(`<button type="button" class="btn btn-danger delete-btn" onclick = "deleteBeer('${count}')">X</button><img class ="beerImg2" src = "${beerData.image}">`)
        count++
        beerPack.push(id)
    })
}



function deleteBeer(box){
    const $beerBox = $(`.beer-${box}`)
    $beerBox.html("")
    beerPack.splice(box-1,1)
    count = box
}