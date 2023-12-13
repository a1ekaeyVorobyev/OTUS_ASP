import * as actionTypes from "./actionTypes"
import { ArticleAction, ArticleState, IArticle } from "./type"

const initialState: ArticleState = {
  articles: [
    {
      id: 1,
      title: "Пост 1",
      body:
        " Релиз дистрибутива Red Hat Enterprise Linux 9.3 (85 –3)",
    },
    {
      id: 2,
      title: "Пост 2",
      body:
        " Разработчики кодека AV1 представили формат IAMF для объёмного звука ",
    },
  ],
}

const reducer = (
    state: ArticleState = initialState,
    action: ArticleAction
  ): ArticleState => {
    switch (action.type) {
      case actionTypes.ADD_ARTICLE:
        const newArticle: IArticle = {
          id: Math.random(), // not really unique
          title: action.article.title,
          body: action.article.body,
        }
        return {
          ...state,
          articles: state.articles.concat(newArticle),
        }
      case actionTypes.REMOVE_ARTICLE:
        const updatedArticles: IArticle[] = state.articles.filter(
          article => article.id !== action.article.id
        )
        return {
          ...state,
          articles: updatedArticles,
        }
    }
    return state
  }
  
  export default reducer