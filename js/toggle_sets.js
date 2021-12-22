window.onload = toggle_list();

function toggle_list(){
    let exercises = document.querySelectorAll('.exercise');

    exercises.forEach(item => {
        let hide_button = item.querySelector('.exercise__hide-sets-btn'); // Находим кнопку
        let sets = item.querySelectorAll('.exercise__set');

        hide_button.addEventListener('click', event =>{               // Вешаем слежку
            // Скрываем сеты
            if(sets[0].style.display=='grid') {
                sets.forEach(exercise_set => {
                    exercise_set.style.display = 'none';
                })
            }
            // Показываем сеты
            else{
                sets.forEach(exercise_set => {
                    exercise_set.style.display = 'grid';
                })
            }
        })

        // Для мобильных устройств
        hide_button.addEventListener('touchstart', event =>{               // Вешаем слежку
            // Скрываем сеты
            if(sets[0].style.display=='grid') {
                sets.forEach(exercise_set => {
                    exercise_set.style.display = 'none';
                })
            }
            // Показываем сеты
            else{
                sets.forEach(exercise_set => {
                    exercise_set.style.display = 'grid';
                })
            }
        })
    })
}
