import { types } from 'react-bricks/rsc'

const Thumbnail: types.Brick = () => {
  return <div className="p-6 text-center">Thumbnail</div>
}

Thumbnail.schema = {
  name: 'thumbnail',
  label: 'Thumbnail',
}

export default Thumbnail