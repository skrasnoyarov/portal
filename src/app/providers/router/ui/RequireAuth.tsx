import { getUser } from 'entities/User'
import { FC } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'
import { RoutePath } from 'shared/config/router'

export interface IRequireAuthProps {
  children: JSX.Element
}

const RequireAuth: FC<IRequireAuthProps> = (props) => {
  const user = useSelector(getUser)
  const location = useLocation()

  if (user) {
    return props.children
  }

  return <Navigate to={RoutePath['/']} state={{ from: location }} replace />
}

export default RequireAuth