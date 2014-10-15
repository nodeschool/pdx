var d = React.DOM
window.addEventListener('DOMContentLoaded', function () {
  var main = React.createClass(
    { render: function () {
        return d.div({}
          , d.h1({'data-am-title': ''}, 'PDXNodeSchool')
          , d.h2({'data-am-title': ''}, 'coming soon')
          , d.div({'data-am-title': ''}
            , d.a(
              {href: 'https://docs.google.com/forms/d/1jLbqymJ57VFL05rzBZp2BQ7ksY2MVmY_lVg4xzEMJD8/viewform'}
              , 'When are you avalible to mentor?'
              )
            )
          )
      }
    })
  React.renderComponent(main({}), document.body)
})

