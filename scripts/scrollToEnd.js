'use strict';
// Tested with Angular 1.3, 1.4.8
angular.module('scrollToEnd', [])
  /**
   * @ngdoc directive
   * @name scrollToEnd:scrollToEnd
   * @scope
   * @restrict A
   *
   * @description
   * Supply a handler to be called when this element is scrolled all the way to any extreme.
   * The callback must have the following signature:
   * void function (direction:'top'|'bottom'|'left'|'right')
   * If the `bindToWindow` attribute is truthy, the callback will be issued for the window
   * instead of the element that the directive is on.
   *
   * Example usage:
   * `<div scroll-to-end="scrollToEndWindow" bind-to-window="true">`
   * This will call the controller's `scrollToEndWindow` function whenever the window reaches
   * the edges when scrolling. If the div itself is a scrollable element for which the
   * handler should be called instead, remove the bind-to-window attribute entirely.
   *
   * @param {function}	emScrollToEnd   Callback to be invoked
   * @param {boolean}		bindToWindow		Bind to the window instead of the element
   *
   */
  .directive('scrollToEnd', function ($window) {
    // Get the specified element's computed style (height, padding, etc.) in integer form
    function getStyleInt(elem, prop) {
      try {
        return parseInt(window.getComputedStyle(elem, null).getPropertyValue(prop), 10);
      } catch (e) {
        return parseInt(elem.currentStyle[prop], 10);
      }
    }

    // Get the 'innerHeight' equivalent for a non-window element, including padding
    function getElementDimension(elem, prop) {
      switch (prop) {
        case 'width':
          return getStyleInt(elem, 'width') +
          getStyleInt(elem, 'padding-left') +
          getStyleInt(elem, 'padding-right');
        case 'height':
          return getStyleInt(elem, 'height') +
          getStyleInt(elem, 'padding-top') +
          getStyleInt(elem, 'padding-bottom');
        /*default:
          return null;*/
      }
    }
    return {
      restrict: 'A',
      scope: {
        callback: '=scrollToEnd'
      },
      link: function (scope, elem, attr) {
        var callback = scope.callback || function () {};
        var boundToWindow = attr.bindToWindow;
        var boundElement = boundToWindow ? angular.element($window) : elem;
        var oldScrollY = 0;
        var handleScroll = function () {
          // Dimensions of the content, including everything scrollable

          // DOM element case - Populate Dimensions
            var domElement = boundElement[0];
            
            var contentHeight = domElement.scrollHeight;
            
            var viewportHeight = getElementDimension(domElement, 'height');
           
           var scrollY = domElement.scrollTop;
          
          
          var scrollWasInYDirection = oldScrollY !== scrollY;
          
          oldScrollY = scrollY;

           if (scrollWasInYDirection && scrollY > contentHeight - viewportHeight -20) 
            callback('bottom');
           
        };
        boundElement.bind('scroll', handleScroll);
        // Unbind the event when scope is destroyed
        scope.$on('$destroy', function () {
          boundElement.unbind('scroll', handleScroll);
        });
      }
    };
  });