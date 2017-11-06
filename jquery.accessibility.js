// Stylement Inc.
// Takayuki Arai
// http://www.stylement.co.jp
(function($, document, window){
  var
  _style = document.createElement('style');
  document.head.appendChild(_style);
  _style.classList.add('a11y-add-style-visually-hidden');
  _style.textContent = '.visually-hidden{display:block;position:absolute;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px);}';

  var
  // Default settings object.
  _defaults = {
    visuallyHidden: true,
    expandElement: '.jq_a11y--expand'
  },
  // public methods object.
  _methods = {};


  // public methods function
  // initialize
  _methods.init = function( options_ ) {
    var
    _settings = $.extend({}, _defaults, options_);
    _methods.settings = _settings;

    if ( _methods.settings.visuallyHidden == false ) {
      $('.a11y-add-style-visually-hidden').remove();
    }

    var
    tgt,
    fxs = function( expand_ ) {
      expand_.each( function( i_, el_ ) {
        tgt = '';
        tgt = $(el_).attr('aria-controls');
        $(el_).attr('aria-expanded', 'false');
        $('#' + tgt).attr('aria-hidden', 'false');
      });
    };
    if ( this.isFunction ) {
      var
      $expand = $(_methods.settings.expandElement);

      fxs($expand);
    }
    else {
      return this.each( function( i_, el_ ) {
        var
        $this = $(el_),
        $expand = $(_methods.settings.expandElement, $this);

        fxs($expand);
      });
    }
  }

  // expand event
  _methods.expand = function( args_ ) {
    var
    $this = this,
    controlID = $this.attr('aria-controls');

    if ( $this.attr('aria-expanded') == 'false' ) {
      $this.attr('aria-expanded', 'true');
      $('#' + controlID).attr('aria-hidden', 'false');
    }
    else {
      $this.attr('aria-expanded', 'false');
      $('#' + controlID).attr('aria-hidden', 'true');
    }
  }


  $.fn.a11y = $.a11y = function( method_ ){
    if ( _methods[method_] ) {
      return _methods[method_].apply( this, Array.prototype.slice.call( arguments, 1 ));
    }
    else if ( typeof method_ === 'object' || ! method_ ) {
      return _methods.init.apply( this, arguments );
    }
    else {
      $.error( 'Method '+ method_ + ' dose not exist on jQuery.a11y' );
    }
  }
}(jQuery, document, window));
