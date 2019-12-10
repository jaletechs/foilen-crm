Vue.component('client-select', function(resolve, reject) {

  const url = 'components/client-select.html'

  jQuery.get(url).done(function(htmlTemplate) {

    resolve({
      data : function() {
        return {
          items : [],
        }
      },
      props : [ 'id', 'value' ],
      computed : {},
      methods : {
        changed : function(event) {
          this.$emit('input', event.target.value)
        },
        search : function(event) {
          var searchFor = null
          if (event) {
            searchFor = event.target.value
          }
          console.log('Search', searchFor)
          this.$emit('input', searchFor)

          var c = this
          console.log('Clients - Load', searchFor)
          httpGetQueries('/api/client/listAll', {
            search : searchFor,
          }, function(data) {
            c.items = data.items
            if (c.items == null) {
              c.items = []
            }
          })
        },
        selected : function(sid) {
          console.log('Selected', sid)
          this.$emit('input', sid)
        }
      },
      mounted : function() {
        refreshTypeahead()
        this.search()
      },
      template : htmlTemplate,
    })

  }).fail(function(jqXHR, textStatus, errorThrown) {
    var escapedResponseText = new Option(jqXHR.responseText).innerHTML;
    var error = 'Could not get the template ' + url + ' . Error: ' + textStatus + ' ' + errorThrown + '<br/>' + escapedResponseText;
    errorShow(error)
    reject(error)
  })

})

Vue.component('error-results', function(resolve, reject) {
  
  const url = 'components/error-results.html'
    
    jQuery.get(url).done(function(htmlTemplate) {
      
      resolve({
        data : function() {
          return {}
        },
        props : [ 'formResult' ],
        computed : {},
        methods : {
        },
        template : htmlTemplate,
      })
      
    }).fail(function(jqXHR, textStatus, errorThrown) {
      var escapedResponseText = new Option(jqXHR.responseText).innerHTML;
      var error = 'Could not get the template ' + url + ' . Error: ' + textStatus + ' ' + errorThrown + '<br/>' + escapedResponseText;
      errorShow(error)
      reject(error)
    })
    
})

Vue.component('pagination', function(resolve, reject) {

  const url = 'components/pagination.html'

  jQuery.get(url).done(function(htmlTemplate) {

    resolve({
      data : function() {
        return {}
      },
      props : [ 'pagination' ],
      computed : {},
      methods : {
        previous : function() {
          this.$emit('changePage', {
            pageId : this.pagination.currentPageUi - 1,
          })
        },
        next : function() {
          this.$emit('changePage', {
            pageId : this.pagination.currentPageUi + 1,
          })
        },
      },
      template : htmlTemplate,
    })

  }).fail(function(jqXHR, textStatus, errorThrown) {
    var escapedResponseText = new Option(jqXHR.responseText).innerHTML;
    var error = 'Could not get the template ' + url + ' . Error: ' + textStatus + ' ' + errorThrown + '<br/>' + escapedResponseText;
    errorShow(error)
    reject(error)
  })

})

Vue.component('table-header-search', function(resolve, reject) {

  const url = 'components/table-header-search.html'

  jQuery.get(url).done(function(htmlTemplate) {

    resolve({
      data : function() {
        return {}
      },
      props : [ 'title', 'value', 'width' ],
      computed : {},
      methods : {
        changed : function(event) {
          if (event.keyCode === 13) {
            this.$emit('input', event.target.value)
          }
        }
      },
      template : htmlTemplate,
    })

  }).fail(function(jqXHR, textStatus, errorThrown) {
    var escapedResponseText = new Option(jqXHR.responseText).innerHTML;
    var error = 'Could not get the template ' + url + ' . Error: ' + textStatus + ' ' + errorThrown + '<br/>' + escapedResponseText;
    errorShow(error)
    reject(error)
  })

})

Vue.component('technical-support-select', function(resolve, reject) {

  const url = 'components/technical-support-select.html'

  jQuery.get(url).done(function(htmlTemplate) {

    resolve({
      data : function() {
        return {
          items : [],
        }
      },
      props : [ 'id', 'value' ],
      computed : {},
      methods : {
        changed : function(event) {
          this.$emit('input', event.target.value)
        },
        search : function(event) {
          var searchFor = null
          if (event) {
            searchFor = event.target.value
          }
          console.log('Search', searchFor)
          this.$emit('input', searchFor)

          var c = this
          console.log('Technical Supports - Load', searchFor)
          httpGetQueries('/api/technicalSupport/listAll', {
            search : searchFor,
          }, function(data) {
            c.items = data.items
            if (c.items == null) {
              c.items = []
            }
          })
        },
        selected : function(sid) {
          console.log('Selected', sid)
          this.$emit('input', sid)
        }
      },
      mounted : function() {
        refreshTypeahead()
        this.search()
      },
      template : htmlTemplate,
    })

  }).fail(function(jqXHR, textStatus, errorThrown) {
    var escapedResponseText = new Option(jqXHR.responseText).innerHTML;
    var error = 'Could not get the template ' + url + ' . Error: ' + textStatus + ' ' + errorThrown + '<br/>' + escapedResponseText;
    errorShow(error)
    reject(error)
  })

})