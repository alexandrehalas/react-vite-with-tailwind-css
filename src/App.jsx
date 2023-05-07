import { useState } from "react";
import ArticleList from "./components/ArticleList/ArticleList";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";

const App = () => {

  const [user, setUser] = useState()
  const hasUser = Boolean(user)

  return (
    <div className="h-screen">
      <Header user={user} />
      {hasUser || <Form onSubmit={setUser} />}
      {hasUser && <ArticleList />}
    </div>
  )
}

export default App;