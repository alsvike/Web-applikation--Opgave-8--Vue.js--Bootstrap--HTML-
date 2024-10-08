const app = Vue.createApp({
    data() {
        return {
            text1: '',
            text2: '',
            repeatedText: ''
        }
    },
    methods: {
        repeatText() {
            const times = parseInt(this.text2);
            if (!isNaN(times) && times > 0) {
                this.repeatedText = Array(times).fill(this.text1);
            } else {
                this.repeatedText = [];
            }
        }
        }
    }
);