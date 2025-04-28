import someHtml from './some.html'
import css from '!!raw-loader!/temp/main.css';
var jQLoaded = setInterval(() => {
    console.log('interval working')
    if (typeof jQuery !== 'undefined') {
        clearInterval(jQLoaded)
        document.body.addEventListener('click', () => {
            console.log('click function es5')
        })
    }
});
console.log(someHtml)

let spzStyles = document.createElement('style')
spzStyles.id = 'spz-styles'
spzStyles.innerHTML = css
document.body.appendChild(spzStyles) // choose selector where you want to apply styles tag