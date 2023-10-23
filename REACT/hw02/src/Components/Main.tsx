function Main() {
    //   const themeCont = useContext(ThemeContext);
    //   const colorFont =
    //     themeCont == "dark" ? "modal show  text-light" : "modal show text-dark" text="danger";
      return (
        <div >
        <h1 > Основное окно!</h1>
        <br />
        <h2>
          Реализованны 2 HOC компонента
        </h2>
        <p>
          Один. withCard, оборачивает компонент в элемент Card bootstarp.
          <br />
          Второй. withTheme, оборачивает компонент для переключения в дневгую или ночную схему.
        </p>
        <h2>
          Реализованны 2 Context компонента
        </h2>
        <p>
          Один. Для авторизации.
          <br />
          Второй. Для переключения в дневную или ночную схему.
        </p>
        </div>
      );
    }
    
    export default Main;