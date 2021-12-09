let planItem = {
    template: "#plan-item-template",
    props: {
        name: {
            type: String,
            required: true
        }
    },
};

let planPicker = {
    template: "#plan-picker-template",
    components: {
        "plan-item": planItem
    },
    data: function() {
        return { plans: [
            {name: "The Hacker", id: 0}, 
            {name: "The Curious", id: 1}, 
            {name: "The Single", id: 2}
          ]}
    }
};

new Vue({
    el: "#app",
    components: {
        "plan-picker": planPicker
    }
})