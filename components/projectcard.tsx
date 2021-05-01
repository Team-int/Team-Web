import Image from 'next/image'
export type ProjectProps = {
  name: string
  image: string
  desc: string
  url: string
}
const ProjectCard: React.FC<ProjectProps> = ({ name, image, desc, url }: ProjectProps) => {
  return (
    <div className="p-2 mx-2 h-72  rounded-xl shadow-lg transition hover:-translate-y-1 duration-200 transform border border-gray-100 hover:shadow-2xl pt-4">
      <div className="flex-col flex justify-center items-center  ">
        <div className="flex-shrink-0">
          <a href={url} className="block ">
            <Image
              src={image}
              width={100}
              height={100}
              layout="fixed"
              alt="profile"
              className=" bg-white rounded-lg"
            />
          </a>
        </div>
        <div className="mt-2 text-center flex flex-col">
          <a href={url} className="text-gray-700 dark:text-white text-2xl capitalize">
            {name}
          </a>
          <span className="text-gray-600 text-md dark:text-gray-300 font-light">{desc}</span>
        </div>
      </div>
    </div>
  )
}
export default ProjectCard