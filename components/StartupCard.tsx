import { formatDate } from '@/lib/utils';
import {EyeIcon} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const { _createdAt, views, author: { _id: authorId, name}, title, category, _id, image, description} = post;

  return (
    <li className="startup-card group">
        <div className='flex-between'>
            <p className='startup_card_date'>
                {formatDate(_createdAt)}
            </p>

            <div>
              <EyeIcon className='size-6 text-primary' />
              <span className='text-16-medium'>{views}</span>
            </div>

            <div className='flex-between met-5 gap-5'>
              <Link href={`/user/${authorId}`}>
                <p className='text-16-medium line-clamp-1'>
                  {name}
                </p>
              </Link>
              <Link href={`/startup/${_id}`}>
                <h3 className='text-26-semibold line-clam-1'>{title}</h3>
              </Link>
              <Link href={`/user/$authorId}`}>
                <Image src="https://placehold.co/48x48" alt="placeholder" width={48} height={48} className="rounded-full"/>
              </Link>

              <Link href={`/startup/${_id}`}>
                <p className='startup-card_desc'>
                  {description}
                </p>
                <img src={image} alt="placeholder" className='startup-card_img' />
              </Link>

              <div className='flex-between gap-3 mt-5'>
                <Link href={`/?query${category.toLowerCase()}`}>

                </Link>
              </div>
            </div>
        </div>
    </li>
  )
}

  // 2:01:03

export default StartupCard