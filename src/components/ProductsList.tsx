import React from 'react'
import Grid from '@material-ui/core/Grid'
import ProductItem from './ProductItem'

import galaxy01 from '../images/galaxy01.jpg'
import galaxy02 from '../images/galaxy02.jpg'
import galaxy03 from '../images/galaxy03.jpg'
import galaxy04 from '../images/galaxy04.jpg'

type Props = {}

const ProductsList: React.FC<Props> = () => {
  return (
    <Grid container component="section">
      <ProductItem url={galaxy01}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat,
          dui vitae aliquet hendrerit, lorem elit semper dolor, ac aliquet magna
          diam nec nibh. Proin sagittis leo nibh, et finibus erat sollicitudin
          et. Etiam vitae purus sit amet velit eleifend placerat sed eu libero.
          Nullam suscipit ex ante, ac ultrices magna iaculis ac. Vivamus aliquet
          ultrices bibendum. Ut pulvinar condimentum lacinia. Sed finibus
          ultrices neque. Phasellus massa magna, imperdiet a nisi ac, dapibus
          pulvinar libero. Pellentesque rhoncus nunc tortor, a aliquet enim
          eleifend ac.
        </p>
      </ProductItem>
      <ProductItem url={galaxy02}>
        <p>
          Phasellus eget quam risus. Proin ut aliquet felis, quis accumsan
          metus. Duis pretium at lacus id auctor. Quisque vel metus eget leo
          gravida semper non id purus. Phasellus elit lacus, imperdiet sed
          fermentum eget, feugiat quis elit. Morbi urna lacus, cursus at viverra
          id, eleifend vel velit. Praesent molestie at massa at maximus.
        </p>
      </ProductItem>
      <ProductItem url={galaxy03}>
        <p>
          Cras convallis tincidunt metus at cursus. Phasellus iaculis suscipit
          sapien, ut egestas nulla. Suspendisse nec ultricies nunc, sit amet
          feugiat dui. Duis vel luctus risus. Duis eleifend est id ex semper,
          non ullamcorper ligula mattis. Sed varius interdum lacus ac efficitur.
          Maecenas vel diam et nulla luctus ultrices. Donec venenatis molestie
          dolor eget fermentum. Pellentesque eleifend ligula molestie, vulputate
          neque a, cursus elit. Vestibulum id orci quis purus interdum sagittis.
          Donec augue orci, molestie auctor purus vel, rutrum imperdiet turpis.
          Cras quam enim, blandit vitae tincidunt vitae, efficitur nec urna.
          Donec at magna dui.
        </p>
      </ProductItem>
      <ProductItem url={galaxy04}>
        <p>
          Nulla vel velit placerat, aliquet urna nec, lobortis ante. Nam luctus
          nibh eget tincidunt sollicitudin. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Aliquam justo leo, dapibus vel fermentum
          at, tempus non mi. Cras euismod convallis turpis sed tincidunt. Ut
          blandit risus at elit ullamcorper, convallis vehicula nunc euismod.
          Vivamus ipsum nisl, efficitur sit amet pulvinar nec, gravida in ex.
          Phasellus fermentum pellentesque dapibus. Sed non sagittis leo, eu
          accumsan neque. Maecenas ex quam, sodales commodo arcu eu, cursus
          aliquam lorem.
        </p>
      </ProductItem>
    </Grid>
  )
}

export default ProductsList
