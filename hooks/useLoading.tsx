import React from 'react'

const useLoading = () => {
  const [loading, setLoading] = React.useState<Boolean>(true)

  const time: number = 800

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, time)
  }, [])

  return { loading, setLoading }
}

export default useLoading
