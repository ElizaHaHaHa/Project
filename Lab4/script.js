const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        document.body.className = ''; // Xóa tất cả các lớp cũ
        document.body.classList.add(button.classList[1]); // Thêm lớp mới
    });
});
