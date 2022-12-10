import { IconBaseProps } from 'react-icons'
import { BiChevronRight, BiSearch } from 'react-icons/bi'

interface IconProps extends IconBaseProps {}

export const ChevronRightIcon: React.FC<IconProps> = props => {
  return <BiChevronRight {...props} size={20} />
}
export const SearchIcon: React.FC<IconProps> = props => {
  return <BiSearch {...props} size={20} />
}
