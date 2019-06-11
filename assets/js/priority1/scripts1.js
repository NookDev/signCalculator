/* Council Regulations */
$("#regulations").bind("change", function() {
	theIndex = $(this).prop('selectedIndex') + 1;
	$(".regulation").removeClass("active");
	$(".regulation:nth-of-type(" + theIndex + ")").addClass("active");
});

! function (t) {
	var i = {};

	function o(e) {
		if (i[e]) return i[e].exports;
		var n = i[e] = {
			i: e,
			l: !1,
			exports: {}
		};
		return t[e].call(n.exports, n, n.exports, o), n.l = !0, n.exports
	}
	o.m = t, o.c = i, o.d = function (e, n, t) {
		o.o(e, n) || Object.defineProperty(e, n, {
			enumerable: !0,
			get: t
		})
	}, o.r = function (e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, o.t = function (n, e) {
		if (1 & e && (n = o(n)), 8 & e) return n;
		if (4 & e && "object" == typeof n && n && n.__esModule) return n;
		var t = Object.create(null);
		if (o.r(t), Object.defineProperty(t, "default", {
				enumerable: !0,
				value: n
			}), 2 & e && "string" != typeof n)
			for (var i in n) o.d(t, i, function (e) {
				return n[e]
			}.bind(null, i));
		return t
	}, o.n = function (e) {
		var n = e && e.__esModule ? function () {
			return e.default
		} : function () {
			return e
		};
		return o.d(n, "a", n), n
	}, o.o = function (e, n) {
		return Object.prototype.hasOwnProperty.call(e, n)
	}, o.p = "/dist", o(o.s = 2)
}([function (e, n) {
	e.exports = jQuery
}, function (e, n, t) {}, function (e, n, t) {
	"use strict";
	t.r(n);
	var i = t(0),
		c = t.n(i),
		u = "simple-menu";

	function o(e, n) {
		for (var t = 0; t < n.length; t++) {
			var i = n[t];
			i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
		}
	}
	var a = {
			align: "horizontal",
			context: null,
			checkable: null,
			autoOpen: !1,
			keepOpen: !1
		},
		l = function () {
			function t(e) {
				var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
				! function (e, n) {
					if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
				}(this, t), this.options = c.a.extend(!0, {}, a, n), this.$menu = c()(e), this.$context = c()(this.options.context), this.uid = (new Date).getTime() + Math.random(), this.active = !1, this.init()
			}
			var e, n, i;
			return e = t, i = [{
				key: "getDefaults",
				value: function () {
					return a
				}
			}, {
				key: "setDefaults",
				value: function (e) {
					c.a.extend(!0, a, e)
				}
			}], (n = [{
				key: "init",
				value: function () {
					if (this.$menu.addClass("".concat(u, " menu-").concat(this.options.align)), this.$menu.find("ul").addClass("menu-vertical"), this.$menu.find("li:has(>ul)").addClass("menu-openable"), this.options.context && this.$menu.addClass("menu-context").hide(), this.options.checkable) {
						var e = this.$menu.find(this.options.checkable);
						e.find("li").addClass("menu-space"), e.find("li:not(:has(>ul))").addClass("menu-checkable")
					}
					this.unbind(), this.bind()
				}
			}, {
				key: "bind",
				value: function () {
					var t = this;
					this.options.context && this.bindContext(), this.options.autoOpen ? this.bindHover() : this.bindClick(), this.$menu.on("click.".concat(u), "a", function (e) {
						var n = c()(e.target).parent();
						n.hasClass("menu-checkable") && (t.toggleCheck(n), e.preventDefault()), n.hasClass("menu-openable") && e.preventDefault()
					})
				}
			}, {
				key: "bindClick",
				value: function () {
					var t = this;
					this.$menu.on("click.".concat(u), "> li", function (e) {
						
						
						e.stopPropagation();
						
						var n = c()(e.currentTarget).children("ul");
						
						n.length && (t.isOpened(n) ? t.options.keepOpen || (t.close(n), t.active = !1) : (t.open(n), t.active = !0))
					}).on("mouseenter.".concat(u), "> li", function (e) {
						
						if (t.active) {
							
							t.closeAll();
							
							var n = c()(e.currentTarget).children("ul");
							n.length && t.open(n)
						}
						
					}), 
						
						c()(document).on("click.".concat(u, "-").concat(this.uid), function (e) {
						t.closeAll(), t.active = !1
					});
					
					clickToClose();
							
				}
			}, {
				key: "bindHover",
				value: function () {
					var t = this;
					this.$menu.on("mouseenter.".concat(u), "> li", function (e) {
						var n = c()(e.currentTarget).children("ul");
						n.length && t.open(n)
					}).on("mouseleave.".concat(u), "> li", function (e) {
						var n = c()(e.currentTarget).children("ul");
						n.length && t.close(n)
					}), this.options.keepOpen || this.$menu.on("click.".concat(u), "> li", function (e) {
						var n = c()(e.currentTarget).children("ul");
						n.length && t.close(n)
					})
				}
			}, {
				key: "bindContext",
				value: function () {
					var n = this;
					this.$context.on("contextmenu.".concat(u), function (e) {
						e.preventDefault(), n.$menu.css({
							display: "flex",
							position: "absolute",
							top: "".concat(e.pageY + 1, "px"),
							left: "".concat(e.pageX + 1, "px")
						})
					}), this.$menu.on("click.".concat(u), "a", function (e) {
						n.$menu.hide()
					}), c()(document).on("click.".concat(u, "-").concat(this.uid), function (e) {
						n.$menu.hide()
					})
				}
			}, {
				key: "unbind",
				value: function () {
					this.$menu.off(".".concat(u)), this.$context.off(".".concat(u)), c()(document).off(".".concat(u, "-").concat(this.uid))
				}
			}, {
				key: "toggle",
				value: function (e) {
					this.isOpened(e) ? this.close(e) : this.open(e)
				}
			}, {
				key: "isOpened",
				value: function (e) {
					return e.parent().hasClass("menu-opened")
				}
			}, {
				key: "open",
				value: function (e) {
					this.closeAll(), e.parent().addClass("menu-opened"), e.css("display", "flex")
				}
			}, {
				key: "close",
				value: function (e) {
					e.parent().removeClass("menu-opened"), e.css("display", "none")
				}
			}, {
				key: "closeAll",
				value: function () {
					var t = this;
					this.$menu.find("> li > ul").each(function (e, n) {
						t.close(c()(n))
					})
				}
			}, {
				key: "toggleCheck",
				value: function (e) {
					this.isChecked(e) ? this.uncheck(e) : this.check(e)
				}
			}, {
				key: "isChecked",
				value: function (e) {
					return e.hasClass("menu-checked")
				}
			}, {
				key: "check",
				value: function (e) {
					e.addClass("menu-checked"), this.$menu.trigger("menu:checked", [e])
				}
			}, {
				key: "uncheck",
				value: function (e) {
					e.removeClass("menu-checked"), this.$menu.trigger("menu:unchecked", [e])
				}
			}]) && o(e.prototype, n), i && o(e, i), t
		}();
	t(1);
	c.a.fn.simpleMenu = function (o) {
		return this.each(function (e, n) {
			var t = c()(n);
			if (!t.data(u)) {
				var i = new l(t, o);
				t.data(u, i)
			}
		})
	}, c.a.SimpleMenu = l
}]);

function clickToClose(){
	
	//var timesClicked = 0;
	var menuButton = $('.submenu-heading');
	
	var timesClicked = 0;
	
	//debugging
	//console.log('GLOBAL ' + timesClicked);
	
	//show submenu
	menuButton.each(function() {
	//$('.submenu-heading').click(function(e) {
		
		//define
		timesClicked = 0;
		
		//debugging
		//console.log('LOCAL ' + timesClicked);
		
		$(this).click(function(e){
		
			e.preventDefault();

			var element = $(this);	

			//change bg colour to selected 
			element.parent("li").css({
			
				background: "rgba(255,255,255,0.2)"		
			});
			
			
			//clear all other backgrounds
			element.parent("li").siblings().css({
				background: "#0f1d2d"		
			});


			//mark as clicked
			timesClicked++;
			
			//debugging
			//console.log('CLICK : ' + timesClicked);
			//console.log('this : ' + element);
			

			//hide submenu if second click
			if (timesClicked > 1) {		
	
				setTimeout(function(){ 

					//reset class for next click
					element.parent().removeClass("menu-opened");

					//reset global var for each button
					/*menuButton.each(function(){	*/	
						//reset
					timesClicked = 0;
	
					/*});*/
					
					//debugging
					//console.log('RESET loop: ' + timesClicked);

					//hide submenu
					element.siblings(".submenu").css({
						display: "none"	
					});	
					
				
				}, 0);	
				
				//reset background to unselected			
				element.parent("li").css({
					background: "unset"		
				});
				
			};
		})
	});
};



/*function removeSubmenu(){
			
	setTimeout(function(){ 

		//reset class for next click
		element.parent().removeClass("menu-opened");

		//unmarked as clicked
		timesClicked = 0;
		console.log('RESET : ' + timesClicked);

		//hide submenu
		element.siblings(".submenu").css({
			display: "none"	
		});		
		//reset background to unselected
		element.parent("li").css({
			background: "#0f1d2d"		
		});
		//remove bg applied by hover
		$(".navbar-nav>li a:hover").css({
			background: "unset"			
		});

	}, 1);
};*/

// Adds and removes settingS based on screen width.
function screenWidth() {
    if($(window).innerWidth() < 769) {
									  
        $('#dropdown-nav').simpleMenu({	
			autoOpen:false/*,
			keepOpen:true*/
				
		});
		
    } else {

        $('#dropdown-nav').simpleMenu({
			autoOpen: true,
			keepOpen: true
					
    	});
	}
};
screenWidth();

// And recheck when window gets resized.
$(window).bind('resize',function(){	
    screenWidth();
});


/**
* jquery-match-height master by @liabru
* http://brm.io/jquery-match-height/
* License: MIT
*/

;(function(factory) { // eslint-disable-line no-extra-semi
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof module !== 'undefined' && module.exports) {
        // CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Global
        factory(jQuery);
    }
})(function($) {
    /*
    *  internal
    */

    var _previousResizeWidth = -1,
        _updateTimeout = -1;

    /*
    *  _parse
    *  value parse utility function
    */

    var _parse = function(value) {
        // parse value and convert NaN to 0
        return parseFloat(value) || 0;
    };

    /*
    *  _rows
    *  utility function returns array of jQuery selections representing each row
    *  (as displayed after float wrapping applied by browser)
    */

    var _rows = function(elements) {
        var tolerance = 1,
            $elements = $(elements),
            lastTop = null,
            rows = [];

        // group elements by their top position
        $elements.each(function(){
            var $that = $(this),
                top = $that.offset().top - _parse($that.css('margin-top')),
                lastRow = rows.length > 0 ? rows[rows.length - 1] : null;

            if (lastRow === null) {
                // first item on the row, so just push it
                rows.push($that);
            } else {
                // if the row top is the same, add to the row group
                if (Math.floor(Math.abs(lastTop - top)) <= tolerance) {
                    rows[rows.length - 1] = lastRow.add($that);
                } else {
                    // otherwise start a new row group
                    rows.push($that);
                }
            }

            // keep track of the last row top
            lastTop = top;
        });

        return rows;
    };

    /*
    *  _parseOptions
    *  handle plugin options
    */

    var _parseOptions = function(options) {
        var opts = {
            byRow: true,
            property: 'height',
            target: null,
            remove: false
        };

        if (typeof options === 'object') {
            return $.extend(opts, options);
        }

        if (typeof options === 'boolean') {
            opts.byRow = options;
        } else if (options === 'remove') {
            opts.remove = true;
        }

        return opts;
    };

    /*
    *  matchHeight
    *  plugin definition
    */

    var matchHeight = $.fn.matchHeight = function(options) {
        var opts = _parseOptions(options);

        // handle remove
        if (opts.remove) {
            var that = this;

            // remove fixed height from all selected elements
            this.css(opts.property, '');

            // remove selected elements from all groups
            $.each(matchHeight._groups, function(key, group) {
                group.elements = group.elements.not(that);
            });

            // TODO: cleanup empty groups

            return this;
        }

        if (this.length <= 1 && !opts.target) {
            return this;
        }

        // keep track of this group so we can re-apply later on load and resize events
        matchHeight._groups.push({
            elements: this,
            options: opts
        });

        // match each element's height to the tallest element in the selection
        matchHeight._apply(this, opts);

        return this;
    };

    /*
    *  plugin global options
    */

    matchHeight.version = 'master';
    matchHeight._groups = [];
    matchHeight._throttle = 80;
    matchHeight._maintainScroll = false;
    matchHeight._beforeUpdate = null;
    matchHeight._afterUpdate = null;
    matchHeight._rows = _rows;
    matchHeight._parse = _parse;
    matchHeight._parseOptions = _parseOptions;

    /*
    *  matchHeight._apply
    *  apply matchHeight to given elements
    */

    matchHeight._apply = function(elements, options) {
        var opts = _parseOptions(options),
            $elements = $(elements),
            rows = [$elements];

        // take note of scroll position
        var scrollTop = $(window).scrollTop(),
            htmlHeight = $('html').outerHeight(true);

        // get hidden parents
        var $hiddenParents = $elements.parents().filter(':hidden');

        // cache the original inline style
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.data('style-cache', $that.attr('style'));
        });

        // temporarily must force hidden parents visible
        $hiddenParents.css('display', 'block');

        // get rows if using byRow, otherwise assume one row
        if (opts.byRow && !opts.target) {

            // must first force an arbitrary equal height so floating elements break evenly
            $elements.each(function() {
                var $that = $(this),
                    display = $that.css('display');

                // temporarily force a usable display value
                if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
                    display = 'block';
                }

                // cache the original inline style
                $that.data('style-cache', $that.attr('style'));

                $that.css({
                    'display': display,
                    'padding-top': '0',
                    'padding-bottom': '0',
                    'margin-top': '0',
                    'margin-bottom': '0',
                    'border-top-width': '0',
                    'border-bottom-width': '0',
                    'height': '100px',
                    'overflow': 'hidden'
                });
            });

            // get the array of rows (based on element top position)
            rows = _rows($elements);

            // revert original inline styles
            $elements.each(function() {
                var $that = $(this);
                $that.attr('style', $that.data('style-cache') || '');
            });
        }

        $.each(rows, function(key, row) {
            var $row = $(row),
                targetHeight = 0;

            if (!opts.target) {
                // skip apply to rows with only one item
                if (opts.byRow && $row.length <= 1) {
                    $row.css(opts.property, '');
                    return;
                }

                // iterate the row and find the max height
                $row.each(function(){
                    var $that = $(this),
                        style = $that.attr('style'),
                        display = $that.css('display');

                    // temporarily force a usable display value
                    if (display !== 'inline-block' && display !== 'flex' && display !== 'inline-flex') {
                        display = 'block';
                    }

                    // ensure we get the correct actual height (and not a previously set height value)
                    var css = { 'display': display };
                    css[opts.property] = '';
                    $that.css(css);

                    // find the max height (including padding, but not margin)
                    if ($that.outerHeight(false) > targetHeight) {
                        targetHeight = $that.outerHeight(false);
                    }

                    // revert styles
                    if (style) {
                        $that.attr('style', style);
                    } else {
                        $that.css('display', '');
                    }
                });
            } else {
                // if target set, use the height of the target element
                targetHeight = opts.target.outerHeight(false);
            }

            // iterate the row and apply the height to all elements
            $row.each(function(){
                var $that = $(this),
                    verticalPadding = 0;

                // don't apply to a target
                if (opts.target && $that.is(opts.target)) {
                    return;
                }

                // handle padding and border correctly (required when not using border-box)
                if ($that.css('box-sizing') !== 'border-box') {
                    verticalPadding += _parse($that.css('border-top-width')) + _parse($that.css('border-bottom-width'));
                    verticalPadding += _parse($that.css('padding-top')) + _parse($that.css('padding-bottom'));
                }

                // set the height (accounting for padding and border)
                $that.css(opts.property, (targetHeight - verticalPadding) + 'px');
            });
        });

        // revert hidden parents
        $hiddenParents.each(function() {
            var $that = $(this);
            $that.attr('style', $that.data('style-cache') || null);
        });

        // restore scroll position if enabled
        if (matchHeight._maintainScroll) {
            $(window).scrollTop((scrollTop / htmlHeight) * $('html').outerHeight(true));
        }

        return this;
    };

    /*
    *  matchHeight._applyDataApi
    *  applies matchHeight to all elements with a data-match-height attribute
    */

    matchHeight._applyDataApi = function() {
        var groups = {};

        // generate groups by their groupId set by elements using data-match-height
        $('[data-match-height], [data-mh]').each(function() {
            var $this = $(this),
                groupId = $this.attr('data-mh') || $this.attr('data-match-height');

            if (groupId in groups) {
                groups[groupId] = groups[groupId].add($this);
            } else {
                groups[groupId] = $this;
            }
        });

        // apply matchHeight to each group
        $.each(groups, function() {
            this.matchHeight(true);
        });
    };

    /*
    *  matchHeight._update
    *  updates matchHeight on all current groups with their correct options
    */

    var _update = function(event) {
        if (matchHeight._beforeUpdate) {
            matchHeight._beforeUpdate(event, matchHeight._groups);
        }

        $.each(matchHeight._groups, function() {
            matchHeight._apply(this.elements, this.options);
        });

        if (matchHeight._afterUpdate) {
            matchHeight._afterUpdate(event, matchHeight._groups);
        }
    };

    matchHeight._update = function(throttle, event) {
        // prevent update if fired from a resize event
        // where the viewport width hasn't actually changed
        // fixes an event looping bug in IE8
        if (event && event.type === 'resize') {
            var windowWidth = $(window).width();
            if (windowWidth === _previousResizeWidth) {
                return;
            }
            _previousResizeWidth = windowWidth;
        }

        // throttle updates
        if (!throttle) {
            _update(event);
        } else if (_updateTimeout === -1) {
            _updateTimeout = setTimeout(function() {
                _update(event);
                _updateTimeout = -1;
            }, matchHeight._throttle);
        }
    };

    /*
    *  bind events
    */

    // apply on DOM ready event
    $(matchHeight._applyDataApi);

    // use on or bind where supported
    var on = $.fn.on ? 'on' : 'bind';

    // update heights on load and resize events
    $(window)[on]('load', function(event) {
        matchHeight._update(false, event);
    });

    // throttled update heights on resize events
    $(window)[on]('resize orientationchange', function(event) {
        matchHeight._update(true, event);
    });
	
});

$(function(){
	$('.well').matchHeight();
	
	$('.image-MatchHeight').matchHeight();
});
