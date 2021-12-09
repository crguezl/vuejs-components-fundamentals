Vue.component('plan-picker', {
    template: "#plan-picker-template",
    data: function() {
        return { plans: [
            {name: "The Hacker", id: 0}, 
            {name: "The Curious", id: 1}, 
            {name: "The Single", id: 2}
          ]}
    }
})

Vue.component('plan-item', {
    template: "#plan-item-template",
    props: {
        name: {
            type: String,
            required: true
        }
    },
})
new Vue({
    el: "#app"
})