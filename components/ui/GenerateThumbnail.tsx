
import { useState } from 'react'
import { Button } from './button'
import { cn } from '@/lib/utils';

export const GenerateThumbnail = () => {
  const [isAiThumnail, setIsAiThumnail] = useState(false);
  return (
    <>
    <div className="generate_thumbnail">
      <Button

      type="button"
      variant = "plain"
      onClick={() => setIsAiThumnail(true)}
      className = {cn('', {
        'bg-black-6': isAiThumnail
      })}
      
      
      >
        Use AI to generate thumbnail
        
      </Button>

      <Button

      type="button"
      variant = "plain"
      onClick={() => setIsAiThumnail(false)}
      className = {cn('', {
        'bg-black-6': !isAiThumnail
      })}


       >
        Upload custom image
  
      </Button>
    </div>
    </>
  )
}

export default GenerateThumbnail