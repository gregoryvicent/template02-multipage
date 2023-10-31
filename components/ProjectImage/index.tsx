import Image from 'next/image';
import ProjectImagePropsType from '@/types/projectImagepropsType';

const ProjectImage: React.FC<ProjectImagePropsType> = ({src, title, subtitle}) => {
  return (
    <article>
      <Image
        src={ src }
        alt={ title }
      />
      <div>
        <span>{ title }</span>
        <span>{ subtitle }</span>
      </div>
    </article>
  );
}

export default ProjectImage;