let questionFormItem = document.querySelectorAll('.question-form-item');

function allCloseRemover(item) {
    questionFormItem.forEach(clickedElement => {
        if (clickedElement.dataset.order !== item.dataset.order) {
            clickedElement.classList.remove('question-show-On');
        } else {
            clickedElement.classList.toggle('question-show-On');
        }
    })
}

questionFormItem.forEach((item) => {
    item.addEventListener('click', function () {
        allCloseRemover(item)
    })
})