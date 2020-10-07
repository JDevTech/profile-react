import React from 'react'
import { Main, Row, Column, Card, Image, Button, FileInput } from "../../components"

import { useDispatch, connect } from "react-redux"
import { saveImage, getAllImages, deleteImageById } from "../../store/actions/gallery"

const GalleryPage = (props) => {

  const { images } = props;
  const dispatch = useDispatch();
  const [allowSelectImage, setAllowSelectImage] = React.useState(true);

  React.useEffect(() => {
    dispatch(getAllImages());
  },[dispatch]);

  const onSelectedImage = async(ev) => {
    if (ev.target.files[0]) {
      const image = ev.target.files[0];

      setAllowSelectImage(false);

      await dispatch(saveImage(image));
      await dispatch(getAllImages());

      setAllowSelectImage(true);
    }
  }

  const handlerDeletePicture = async (id) => {
    await dispatch(deleteImageById(id));
    await dispatch(getAllImages());
  }

  return(
    <Main title="Gallery Page">
      <Row>
        <Column>
          <Card>
            <Row>
              <FileInput title="Upload an Image" onChange={onSelectedImage} disabled={!allowSelectImage}/>
            </Row>
            <Row>
              {images.map((image, key) => (
                <Column key={key} sm="2" md="2" lg="2">
                  <Image alt={`image_${image.id}`} src={image.imgURL}/>
                  <Button onClick={() => handlerDeletePicture(image.id)}>Eliminar</Button>
                </Column>
              ))}
            </Row>
          </Card>
        </Column>
      </Row>
    </Main>
  )
}

const mapStateToProps = (state) => {
  return { images: state.gallery.images }
}

export default connect(mapStateToProps)(GalleryPage);
