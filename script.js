if (document.readyState !== 'loading') {
    ready();
} else {
    document.addEventListener('DOMContentLoaded', ready);
}

function getDocHeight () {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}

function ready () {

  var chevron = document.querySelector('.ion-ios-arrow-down');
  if (document.body.clientWidth <= 450) {
    chevron.classList.remove('hidden');
  }

  var winheight, docheight, trackLength, throttlescroll;

  function getmeasurements () {
    winheight= window.innerHeight || (document.documentElement || document.body).clientHeight;
    docheight = getDocHeight();
    trackLength = docheight - winheight;
  }

  function amountscrolled () {
    var chevron = document.querySelector('.ion-ios-arrow-down');
    var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    var pctScrolled = Math.floor(scrollTop/trackLength * 100); // gets percentage scrolled (ie: 80 or NaN if tracklength == 0)

    if (pctScrolled > 18) {
      if (!chevron.classList.contains('hidden')) {
        chevron.classList.add('hidden');
      }
    }
    if (pctScrolled < 18) {
      if (chevron.classList.contains('hidden')) {
        chevron.classList.remove('hidden');
      }
    }
  }

  getmeasurements();

  window.addEventListener("resize", function () {
    if (document.body.clientWidth <= 450) {
      getmeasurements();
    }
  }, false)

  window.addEventListener("scroll", function () {
    clearTimeout(throttlescroll);
    throttlescroll = setTimeout(amountscrolled, 20);
  }, false);

  // polyfill
  // Source: https://gist.github.com/k-gun/c2ea7c49edf7b757fe9561ba37cb19ca
}
(function () {
  // helpers
  var regExp = function (name) {
    return new RegExp('(^| )'+ name +'( |$)');
  };
  var forEach = function (list, fn, scope) {
    for (var i = 0; i < list.length; i++) {
      fn.call(scope, list[i]);
    }
  };

  // class list object with basic methods
  function ClassList(element) {
    this.element = element;
  }

  ClassList.prototype = {
    add: function () {
      forEach(arguments, function (name) {
        if (!this.contains(name)) {
          this.element.className += ' ' + name;
        }
      }, this);
    },
    remove: function () {
      forEach(arguments, function (name) {
        this.element.className =
        this.element.className.replace(regExp(name), '');
      }, this);
    },
    toggle: function (name) {
      return this.contains(name)
      ? (this.remove(name), false) : (this.add(name), true);
    },
    contains: function (name) {
      return regExp(name).test(this.element.className);
    },
    // bonus..
    replace: function (oldName, newName) {
      this.remove(oldName), this.add(newName);
    }
  };

  // IE8/9, Safari
  if (!('classList' in Element.prototype)) {
    Object.defineProperty(Element.prototype, 'classList', {
      get: function () {
        return new ClassList(this);
      }
    });
  }

  // replace() support for others
  if (window.DOMTokenList && DOMTokenList.prototype.replace == null) {
    DOMTokenList.prototype.replace = ClassList.prototype.replace;
  }
})();
