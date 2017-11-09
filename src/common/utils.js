//这里存放公用的js
export default {

    get (key) {
        let value = sessionStorage.getItem(key) || '';
        if (value.startsWith('{') || value.startsWith('[')) {
            value = JSON.parse(value);
        }
        return value;
    },
    set (key, val) {
        if (typeof val === 'object') {
            val = JSON.stringify(val);
        }
        sessionStorage.setItem(key, val);
    }
}