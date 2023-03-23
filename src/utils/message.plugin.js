import Toastify from 'toastify-js'

export default {
  install: (Vue, options) => {
    Vue.config.globalProperties.$Toast = function (
      text,
      styleBg = 'linear-gradient(to right, #00b09b, #96c93d)',
      styleColor = 'white'
    ) {
      Toastify({
        text: text,
        duration: 3000,
        newWindow: true,
        gravity: 'top',
        position: 'right',
        style: {
          background: styleBg,
          color: styleColor,
        },
      }).showToast()
    }
    Vue.config.globalProperties.$ToastEr = function (text, stylebg = 'linear-gradient(to right, red, orange)') {
      Toastify({
        text: `[Error]: ${text}`,
        duration: 3000,
        newWindow: true,
        gravity: 'top',
        position: 'right',
        style: {
          background: stylebg,
        },
      }).showToast()
    }
  },
}
