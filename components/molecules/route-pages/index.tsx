import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { localize } from '@utils/lib/formatter'
import { ChevronRightIcon } from '@components/atoms/icons'

interface RoutePageDirectionProps {
  pagename?: string
  components?: any
  endpoint?: string
}

const RoutePageDirection: React.FC<RoutePageDirectionProps> = props => {
  const { pagename, components, endpoint } = props
  const router = useRouter()

  const { locale } = useRouter()
  return (
    <Breadcrumb separator={<ChevronRightIcon />}>
      <BreadcrumbItem>
        <BreadcrumbLink onClick={() => router.push('/')} cursor="pointer">
          {localize(locale, 'home')}
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink onClick={() => router.push(endpoint)}>
          {pagename}
        </BreadcrumbLink>
      </BreadcrumbItem>
      {components}
    </Breadcrumb>
  )
}

export default RoutePageDirection
