
function About() {
    //   const themeCont = useContext(ThemeContext);
    //   const colorFont =
    //     themeCont == "dark" ? "modal show  text-light" : "modal show text-dark" text="danger";
      return (
        <div>
<h1>Домашнее задание</h1>
<h3>Роутинг и управление стейтом с React</h3>

<h2>Цель:</h2>
<p>
Научиться писать сложный фронтенд с роутингом и управлением стейтом
Разобраться с подключением сторонних плагинов и UI компонентов
</p>

<h3>Описание: Пошаговая инструкция выполнения домашнего задания:</h3>
<p>
Установить react-router;
Добавить отдельные компоненты страниц - Login / Register / HomePage / 404;
Добавить стейт-менеджемент с Redux;
Найти возможное дублирование кода и применить HOC паттерн.
</p>
<h3>Критерии оценки:</h3>
<p>
4 балла: В React проект добавлен react-router;
2 балла: В React проект добавлен Redux;
2 балла: В React проект добавлена библиотека UI компонентов (Bootstrap / material design);
1 балл: Сделано 2 CodeReview;
1 балл: CodeStyle, грамотная архитектура, все замечания проверяющего исправлены.
</p>
<h2>Минимальный проходной балл: 8</h2>
</div>
);
}

export default About;