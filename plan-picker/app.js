Vue.component('plan', {
    template: "#plan-template",
    props: {
        name: {
            type: String,
            required: true
        }
    },
})
new Vue({
    el: "#app",
    data: function() {
        return { plans: [{name: "The Hacker", id: 0}, {name: "The Curious", id: 1}, 
        {name: "The Single", id: 2}] }
    }
})