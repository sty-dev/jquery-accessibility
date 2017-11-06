(function($, document, window){

  var
  // Default settings object.
  _defaults = {
    expandElement: '.jq_a11y--expand'
  },
  // public methods object.
  _methods = {};


  // public methods function
  // initialize
  _methods.init = function( options_ ) {
    var _settings = $.extend({}, _defaults, options_);
    _methods.settings = _settings;
    return this.each( function( i_, el_ ) {
      var
      $this = $(el_),
      $element = $(_methods.settings.expandElement, $this),
      tgt;

      $element.each( function( i_i_, el_el_ ) {
        tgt = $(el_el_).attr('aria-controls');
        $(el_el_).attr('aria-expanded', 'false');
        $('#' + tgt).attr('aria-hidden', 'false');
      });
    });
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
