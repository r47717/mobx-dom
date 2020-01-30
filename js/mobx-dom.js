const { autorun } = mobx;

// bind html

const $$html = (elem, observableValue, filter) => {
    autorun(() => elem.innerHTML = typeof filter === "function" ? filter(observableValue.get()) : observableValue.get());
};


// bind style

const $$style = (elem, styleProp, observableValue, filter) => {
    autorun(() => {
        elem.style[styleProp] = typeof filter === "function" ? filter(observableValue.get()) : observableValue.get();
    });
};


// bind attr

const $$attr = (elem, attrName, observableValue, filter) => {
    autorun(() => {
        elem.setAttribute(attrName, typeof filter === "function" ? filter(observableValue.get()) : observableValue.get());
    });
};


// bind disabled

const $$disabled = (elem, boolObservableValue) => {
    autorun(() => boolObservableValue.get()
        ? elem.setAttribute('disabled', 'disabled')
        : elem.removeAttribute('disabled')
    );
};


// listeners

const $$listen = (elem, event, observableValue, transform) => elem.addEventListener(event, () => observableValue.set(transform(observableValue.get())));
const $$onclick = (elem, observableValue, transform) => $$listen(elem, 'click', observableValue, transform);
