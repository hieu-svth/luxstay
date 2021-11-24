const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

// header search
const app = $('.app')
const inputSearch = $('input[type=text]')
let showInput = false
let showPopuver = false
console.log(showInput)
const headerLocation = $('.header-search__location')
inputSearch.onclick = function () {
    if (showInput) {
        headerLocation.classList.add('active')
        inputSearch.focus()
    } else {
        headerLocation.classList.remove('active')
    }
}
app.onclick = () => {
    showInput = !showInput
}

// header popuver 

const headerItemActive = $('.header-item-active')
const popuver = $('.popover')
headerItemActive.onclick = () => {
    showPopuver = !showPopuver
    if (showPopuver) {
        popuver.style.display = 'flex';
    } else {
        popuver.style.display = 'none';

    }
}

// slider 

const sliderMain = $('.slider-main')
const sliderDot = $$('.slider-dot')
const sliders = $$('.slider')
const dotPrev = $('.slider-dot__1')
const dotNext = $('.slider-dot__2')
const positionX = sliders[0].offsetWidth;
console.log(positionX)
const zero = 0


// Place 

let index = 0
const next = () => {
    index++
    if (index < 2) {
        sliderMain.style.left = `${zero - positionX}px`
    } else {
        index = 0
        sliderMain.style.left = `${zero}px`
    }
    console.log(index)
}
const prev = () => {
    index--
    if (index <= 0) {
        sliderMain.style.left = `${zero}px`
    }
    console.log(index)
}
setInterval(() => {
    next()
}, 5000)
/* next and prev */
const prevBtn = $('.prev-place')
const nextBtn = $('.next-place')
const prevSuggestion = $('.prev-suggestion')
const nextSuggestion = $('.next-suggestion')

// main
const btnActive = $('.btn-active')
const placeItems = $$('.place__1')
const suggestionItem = $$('.l-3')
const mainPlaces = $$('.content-wrapper__main')
let counter = 0;
let counter1 = 0;
const offsetWidthPlace = placeItems[0].offsetWidth
const offsetWidthSuggestion = suggestionItem[0].offsetWidth

nextBtn.onclick = function () {
    if (counter < 3) {
        counter++;
        mainPlaces[0].style.transition = 'transform 0.4s ease-in-out'
        mainPlaces[0].style.transform = 'translateX(' + (-offsetWidthPlace * counter) + 'px)'
        showBtn()
    }
}

nextSuggestion.onclick = function () {
    if (counter1 < 3) {
        counter1++;
        mainPlaces[2].style.transition = 'transform 0.4s ease-in-out'
        mainPlaces[2].style.transform = 'translateX(' + (-offsetWidthSuggestion * counter1) + 'px)'
        showBtn()
    }
}

prevBtn.onclick = function () {
    if (counter <= 0) return
    counter--;
    mainPlaces[0].style.transition = 'transform 0.4s ease-in-out'
    mainPlaces[0].style.transform = 'translateX(' + (-offsetWidthPlace * counter) + 'px)'
    showBtn()
}
prevSuggestion.onclick = function () {
    if (counter1 <= 0) return
    counter1--;
    mainPlaces[2].style.transition = 'transform 0.4s ease-in-out'
    mainPlaces[2].style.transform = 'translateX(' + (-offsetWidthSuggestion * counter1) + 'px)'
    showBtn()
}

function showBtn() {

    if (counter > 0) {
        prevBtn.classList.add('btn-active')
    } else {
        prevBtn.classList.remove('btn-active')
    }
    if (counter >= 3) {
        nextBtn.classList.remove('btn-active')
    }
    else {
        nextBtn.classList.add('btn-active')
    }
    if (counter1 > 0) {
        prevSuggestion.classList.add('btn-active')
    } else {
        prevSuggestion.classList.remove('btn-active')
    }
    if (counter1 >= 3) {
        nextSuggestion.classList.remove('btn-active')
    }
    else {
        nextSuggestion.classList.add('btn-active')
    }
}


// function next() {
//     if (counter < 3) {
//         counter++;
//         mainPlaces[0].style.transition = 'transform 0.4s ease-in-out'
//         mainPlaces[0].style.transform = 'translateX(' + (-offsetWidthPlace * counter) + 'px)'
//         showBtn()
//     }
// }

// function prev() {
//     if (counter <= 0) return
//     counter--;
//     mainPlaces[0].style.transition = 'transform 0.4s ease-in-out'
//     mainPlaces[0].style.transform = 'translateX(' + (-offsetWidthPlace * counter) + 'px)'
//     showBtn()
// }


// modal

const modalList = $('.header-icon-list')
const modal = $('.modal')
const modalContainer = $('.modal-container')
const modalIcon = $('.modal-icon')


function showModal() {
    modal.style.display = 'block'

}
function hideModal() {
    modal.style.display = 'none'
}
modalList.addEventListener('click', showModal)
modal.addEventListener('click', hideModal)
modalIcon.onclick = (e) => {
    e.stopPropagation()
    const headerMenu = $('.header-menu')
    modal.style.display = 'none'
}
modalContainer.addEventListener('click', function (e) {
    e.stopPropagation()
})