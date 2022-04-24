import Image from "next/image"
import Link from "next/link";

interface IProps {
  clubLink: string;
  imgSource: string;
  altText: string;
}

export default function Logo(props:IProps) {
  return (
    <li className="px-[10px]">
      <Link href={props.clubLink}>
        <a className="border-none">
          <Image 
            src={props.imgSource} 
            width={30} 
            height={30} 
            alt={props.altText} 
          />
        </a>
      </Link>
    </li>
  )
}
