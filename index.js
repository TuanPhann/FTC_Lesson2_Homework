var mod = document.querySelector('.modal')

var one = mod.querySelector('#modal_one')


var elementtour = document.querySelector('#tour_date')

var elementbuy = elementtour.querySelectorAll('.buy')




elementbuy.forEach(function(tickett){

    tickett.onclick =function () {
        mod.classList.add('open')
    }
})

var elementclose =mod.querySelector('.close')
elementclose.onclick= function() {
    mod.classList.remove('open')
}

mod.onclick=function() {
    mod.classList.remove('open')
}

one.onclick=function(e) {
    e.stopPropagation()
}