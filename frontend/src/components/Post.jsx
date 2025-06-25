import { Avatar } from '@radix-ui/react-avatar'
import React from 'react'
import { AvatarFallback, AvatarImage } from './ui/avatar'

const Post = () => {
  return (
    <div>
    <div className='flex items-center gap-2'>
         <Avatar>
            <AvatarImage src="" alt="post_image"/>
            <AvatarFallback>CN</AvatarFallback>
         </Avatar>
         <h1>username</h1>
    </div>
    </div>
  )
}

export default Post