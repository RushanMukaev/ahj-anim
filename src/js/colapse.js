export default class Colapse {
    init() {
        this.container = document.querySelector('.container');
        this.text = document.querySelector('.text-container');
        this.btn = document.querySelector('.btn');
        this.container.addEventListener('mouseover', () => {
            this.container.classList.add('hidden');
        });
        this.container.addEventListener('mouseout', () => {
            this.container.classList.remove('hidden');
        });
        this.btn.addEventListener('click', () => {
            this.container.classList.remove('hidden');
        });
        this.btn.addEventListener('click', () => {
            this.text.classList.toggle('animat');
        });
    }
}
