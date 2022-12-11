import React from 'react'
import Router from 'next/router'

// A type for the props that the PrivateRoute component will receive
type PrivateRouteProps = {
  // The roles that are allowed to access the protected page
  allowedRoles: string[]
  // The component to render if the user is authorized
  component: React.ElementType
}

// The PrivateRoute component that will wrap the protected page
const PrivateRoute = ({
  allowedRoles,
  component: Component,
  ...rest
}: PrivateRouteProps) => {
  const dummyUser = {
    role: 'public',
  }
  // Get the current user from the `useAuth` hook
  const user = dummyUser

  // If the user is not logged in, redirect them to the login page
  if (!user) {
    Router.push('/auth/login')
    return null
  }

  // If the user is logged in but does not have any of the allowed roles,
  // redirect them to the unauthorized page
  if (!allowedRoles.some(role => user.role.includes(role))) {
    Router.push('/unauthorized')
    return null
  }

  // If the user is logged in and has at least one of the allowed roles,
  // render the protected page
  return <Component {...rest} />
}

export default PrivateRoute
