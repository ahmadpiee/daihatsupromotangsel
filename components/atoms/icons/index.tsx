import { IconBaseProps } from 'react-icons'
import { BiChevronRight } from 'react-icons/bi'

interface IconProps extends IconBaseProps {}

export const ChevronRightIcon: React.FC<IconProps> = props => {
  return <BiChevronRight {...props} size={20} />
}
