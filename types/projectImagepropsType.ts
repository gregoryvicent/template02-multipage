import { StaticImageData } from 'next/image'

type ProjectImagePropsType = {
  src:StaticImageData | string
  title: string
  subtitle: string
}

export default ProjectImagePropsType;
