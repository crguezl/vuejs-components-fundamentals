let planItem = {
    template: "#plan-item-template",
    props: {
        name: {
            type: String,
            required: true
        },
    },
    data() {
        return {
            selected: {
                type: Boolean,
                default: false
            }
        }       
    },
    methods: {
        select() {
            this.$emit("select", this.name);
            this.selected = true
        }
    }
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
          ],
          selectedPlan: null
        }
    },
    methods: {
        selectPlan(emittedPlan) {
            this.selectedPlan = emittedPlan
        }
    }
};

new Vue({
    el: "#app",
    components: {
        "plan-picker": planPicker
    }
})