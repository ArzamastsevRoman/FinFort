import '../index.css'
import '../../vendor/normalize.css'

import '../../blocks/main/main.css'
import '../../blocks/search/search.css'
import '../../blocks/body/body.css'
import '../../blocks/checkbox/checkbox.css'
import '../../blocks/header/header.css'
import '../../blocks/cause/cause.css'
import '../../blocks/description/description.css'
import '../../blocks/finance/finance.css'
import '../../blocks/success/success.css'
import '../../blocks/feedback/feedback.css'
import '../../blocks/footer/footer.css'

import Validate from './validate/validate'
const search = document.querySelector('.search');
const validate = new Validate (search);

const imageLink = document.querySelector('.search__image');
const searchLink = document.querySelector('.search__link');

searchLink.addEventListener('mouseover', function() {
    imageLink.setAttribute('src', './images/clipsGreen.png');
})

searchLink.addEventListener('mouseout', function() {
    imageLink.setAttribute('src', './images/clips.png');
})

searchLink.addEventListener('mousedown', function() {
    imageLink.setAttribute('src', './images/clipsViolet.png');
})