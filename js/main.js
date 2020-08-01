require.config({
    paths: {
        "Vue": "https://cdn.jsdelivr.net/npm/vue/dist/vue"
    }
});

// require(['m1', 'm2', 'm3', 'Vue'], function (m1, m2, m3, Vue) {
//     console.log(m1, m2, m3, Vue)
// });

require(['m1'], function (m1) {
    console.log(m1())
});