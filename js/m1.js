define('m1', ['m2', 'm3'], function (m2, m3) {
    return function m1() {
        console.log('m1')
        m2()
        m3()
        return 'm1'
    }
});
