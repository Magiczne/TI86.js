import Vue from 'vue'
import { VNode } from 'vue/types'

const ButtonWrapper = Vue.extend({
    name: 'c-btn-wrapper',
    functional: true,
    render (h, { data, children }): VNode {
        data.staticClass = (`c-btn-wrapper ${data.staticClass || ''}`).trim()

        return h('div', data, children)
    }
})

const ButtonWrapperAlt = Vue.extend({
    name: 'c-btn-alt',
    functional: true,
    render (h, { data, children }): VNode {
        data.staticClass = (`c-btn-wrapper__alt orange--text text--lighten-3 ${data.staticClass || ''}`).trim()

        return h('span', data, children)
    }
})

const ButtonWrapperSymbol = Vue.extend({
    name: 'c-btn-symbol',
    functional: true,
    render (h, { data, children }): VNode {
        data.staticClass = (`c-btn-wrapper__symbol blue--text text--darken-1 ${data.staticClass || ''}`).trim()

        return h('span', data, children)
    }
})

export {
    ButtonWrapper, ButtonWrapperAlt, ButtonWrapperSymbol
}