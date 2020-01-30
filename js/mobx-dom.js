(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
      typeof define === 'function' && define.amd ? define(['exports'], factory) :
        (global = global || self, factory(global.$$dom = {}));
}(this, function (exports) {
    'use strict';

    const { autorun } = mobx;

    // bind html

    const $$_html = (elem, observableValue, filter) => {
        autorun(() => elem.innerHTML = typeof filter === "function" ? filter(observableValue.get()) : observableValue.get());
    };

    const $i_html = (id, observableValue, filter) => $$_html(document.getElementById(id), observableValue, filter);
    const $c_html = (clazz, observableValue, filter) => $$_html(document.getElementsByClassName(clazz)[0], observableValue, filter);

    // bind style

    const $$_style = (elem, styleProp, observableValue, filter) => {
        autorun(() => {
            elem.style[styleProp] = typeof filter === "function" ? filter(observableValue.get()) : observableValue.get();
        });
    };

    const $i_style = (id, styleProp, observableValue, filter) => $$_style(document.getElementById(id), styleProp, observableValue, filter);
    const $c_style = (clazz, styleProp, observableValue, filter) => $$_style(document.getElementsByClassName(clazz)[0], styleProp, observableValue, filter);

    const $$_show = (elem, boolObservableValue) => {
        autorun(() => elem.style.display = boolObservableValue.get() ? 'block' : 'none');
    };
    const $i_show = (id, boolObservableValue) => $$_show(document.getElementById(id), boolObservableValue);
    const $c_show = (clazz, boolObservableValue) => $$_show(document.getElementsByClassName(clazz)[0], boolObservableValue);

    const $$_hide = (elem, boolObservableValue) => {
        autorun(() => elem.style.display = boolObservableValue.get() ? 'none' : 'block');
    };
    const $i_hide = (id, boolObservableValue) => $$_hide(document.getElementById(id), boolObservableValue);
    const $c_hide = (clazz, boolObservableValue) => $$_hide(document.getElementsByClassName(clazz)[0], boolObservableValue);

    // bind attr

    const $$_attr = (elem, attrName, observableValue, filter) => {
        autorun(() => {
            elem.setAttribute(attrName, typeof filter === "function" ? filter(observableValue.get()) : observableValue.get());
        });
    };

    const $i_attr = (id, attrName, observableValue, filter) => $$_attr(document.getElementById(id), attrName, observableValue, filter);
    const $c_attr = (clazz, attrName, observableValue, filter) => $$_attr(document.getElementsByClassName(clazz)[0], attrName, observableValue, filter);


    // bind disabled

    const $$_disabled = (elem, boolObservableValue) => {
        autorun(() => boolObservableValue.get()
          ? elem.setAttribute('disabled', 'disabled')
          : elem.removeAttribute('disabled')
        );
    };

    const $i_disabled = (id, boolObservableValue) => $$_disabled(document.getElementById(id), boolObservableValue);
    const $c_disabled = (clazz, boolObservableValue) => $$_disabled(document.getElementsByClassName(clazz)[0], boolObservableValue);


    // listeners

    const $$_listen = (elem, event, observableValue, transform) => elem.addEventListener(event, () => observableValue.set(transform(observableValue.get())));
    const $$_onclick = (elem, observableValue, transform) => $$_listen(elem, 'click', observableValue, transform);
    const $i_onclick = (id, observableValue, transform) => $$_listen(document.getElementById(id), 'click', observableValue, transform);
    const $c_onclick = (clazz, observableValue, transform) => $$_listen(document.getElementsByClassName(clazz)[0], 'click', observableValue, transform);


////////

    exports.$$_html = $$_html;
    exports.$i_html = $i_html;
    exports.$c_html = $c_html;
    exports.$$_style = $$_style;
    exports.$i_style = $i_style;
    exports.$c_style = $c_style;
    exports.$$_show = $$_show;
    exports.$i_show = $i_show;
    exports.$c_show = $c_show;
    exports.$$_hide = $$_hide;
    exports.$i_hide = $i_hide;
    exports.$c_hide = $c_hide;
    exports.$$_attr = $$_attr;
    exports.$i_attr = $i_attr;
    exports.$c_attr = $c_attr;
    exports.$$_disabled = $$_disabled;
    exports.$i_disabled = $i_disabled;
    exports.$c_disabled = $c_disabled;
    exports.$$_listen = $$_listen;
    exports.$$_onclick = $$_onclick;
    exports.$i_onclick = $i_onclick;
    exports.$c_onclick = $c_onclick;

}));

