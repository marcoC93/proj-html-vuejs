var app = new Vue({
  el: '#root',
  data: {
    message: 'Hello Vue!' ,
    headerList : ['courses','zoom','pages','bundles','course formats','add course','demos'],
    footerList: ['blog','home','shortcodes','courses','membership','typografy']
    },
    mounted () {
        console.log(this.headerList);
    }

})
