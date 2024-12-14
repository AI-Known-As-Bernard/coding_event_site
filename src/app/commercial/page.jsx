import React from 'react'

const page = () => {
  return (
    <div><video class="h-full w-full rounded-lg" controls>
      <source
        src="https://docs.material-tailwind.com/demo.mp4"
        type="video/mp4"
      />
      Your browser does not support the video tag.
    </video>
    </div>
  )
}

export default page