function customRender(reactelement, container) {
    const dome = document.createElement(reactelement.type);
    dome.innerHTML = reactelement.children;
    for (let prop in reactelement.props) {
        if (prop === 'children') continue;
        if (reactelement.props.hasOwnProperty(prop)) {
            dome.setAttribute(prop, reactelement.props[prop]);
        }
    }
    container.appendChild(ma);
}

const reactelement = {
    type: 'a',
    props: {
        href: 'http://www.google.com',
        target: '_blank'
    },
    children: 'jkwwk'
};

const ma = document.querySelector('#root');
customRender(reactelement, ma);
