import { FC, memo } from "react";
import { Route, Switch } from "react-router";
import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout"
import { homeRoutes } from './HomeRoutes'
import { LoginUserProvider } from '../providers/LoginUserProvider'

export const Router: FC = memo(() => {
  return (
    <>
      <Switch>
        <LoginUserProvider>
          <Route exact path='/'>
            <Login></Login>        
          </Route>
          <Route
            path="/home"
            render={({ match: { url } }) => (
              
              <Switch>
                {homeRoutes.map((route) => (
                  <Route
                    key={route.path}
                    exact={route.exact}
                    path={`${url}${route.path}`}
                  >
                    <HeaderLayout>{route.children}</HeaderLayout>
                  </Route>
                ))}
              </Switch>
            )}
          />
        </LoginUserProvider>
        <Route path="*">
          <Page404 />
        </Route>
      </Switch>
    </>
  )
})
