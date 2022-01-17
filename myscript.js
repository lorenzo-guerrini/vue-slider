let app = new Vue({
    el: "#myApp",
    data: {
        images: [
            {
                item: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },
            {
                item: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.'
            },
            {
                item: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            },
            {
                item: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            },
            {
                item: 'img/05.jpg',
                title: 'Paradise',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            }
        ],
        selected: 0
    },
    methods: {
        isSelected: function (index) {
            return (index == this.selected) ? "selected" : "unselected";
        },
        increasePointer: function () {
            this.selected++;
            if (this.selected > this.images.length - 1) {
                this.selected = 0;
            }
        },
        decreasePointer: function () {
            this.selected--;
            if (this.selected < 0) {
                this.selected = this.images.length - 1;
            }
        }
    },
    mounted: function() {
        setInterval(this.increasePointer, 3000);
    }
});