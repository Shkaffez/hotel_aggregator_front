import { useInput } from '../hooks/useInput';
import { Button, FloatingLabel, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import PreviewPhoto from "../components/PreviewPhoto";
import { addNewHotel } from "../http/hotelAPI";
import { useContext } from 'react';
import { Context } from '../index';

export const Admin = observer((props) => {

  const { hotelsStore } = useContext(Context);

  const loadFile = (e) => {
    setImages([...e.target.files])
    for (let i = 0; i < e.target.files.length; i++) {
      let url = URL.createObjectURL(e.target.files[i]);
      setPreviews(previews => [...previews, url])
    }
  }
  const city = useInput('', { isEmpty: true, maxLength: 50 });
  const title = useInput('', { isEmpty: true, maxLength: 50 });
  const description = useInput('', { isEmpty: true, maxLength: 250 });
  const [images, setImages] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [submitError, setSubmitError] = useState('');
  const [inputFileKey, setInputFileKey] = useState(Date.now());

  const hasErrors = city.errors.some(el => Boolean(el))
    || title.errors.some(el => Boolean(el))
    || description.errors.some(el => Boolean(el));

  const refresh = (e) => {
    e.preventDefault();
    city.setValue('');
    city.setDirty(false);
    title.setValue('');
    title.setDirty(false);
    description.setValue('');
    description.setDirty(false);
    setImages([]);
    setPreviews([]);
    setInputFileKey(Date.now());
    setSubmitError('');
  }

  const submit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('city', city.value);
      formData.append('title', title.value);
      formData.append('description', description.value);
      for (let file of images) {
        formData.append('files', file);
      };
      const data = await addNewHotel(formData);
      hotelsStore.setHotels([...hotelsStore.hotels, data]);
      console.log(hotelsStore.hotels[0].city)
      console.log(hotelsStore.hotels[0].title)
      console.log(hotelsStore.hotels[0].description)
      console.log(hotelsStore.hotels[0].images)
    } catch (error) {
      console.log(error)
      setSubmitError(error.message);
      setSubmitError(error.response.data.message);
    }
  }

  return (
    <Container>
      <h2>???????????????? ??????????</h2>
      <Form>
        {(city.isDirty && city.errors.some(el => Boolean(el))) && <div style={{ color: 'red' }}>
          {city.errors.filter(el => Boolean(el))}
        </div>}
        <FloatingLabel
          controlId="city"
          label="??????????"
          className="mb-3"
        >
          <Form.Control
            placeholder="??????????"
            type="text"
            value={city.value}
            onChange={e => city.onChange(e)}
            onBlur={e => city.onBlur(e)}
          />
        </FloatingLabel>

        {(title.isDirty && title.errors.some(el => Boolean(el))) && <div style={{ color: 'red' }}>
          {title.errors.filter(el => Boolean(el))}
        </div>}
        <FloatingLabel
          controlId="title"
          label="????????????????"
          className="mb-3"
        >
          <Form.Control
            placeholder="????????????????"
            type="text"
            value={title.value}
            onChange={e => title.onChange(e)}
            onBlur={e => title.onBlur(e)}
          />
        </FloatingLabel>

        {(description.isDirty && description.errors.some(el => Boolean(el))) && <div style={{ color: 'red' }}>
          {description.errors.filter(el => Boolean(el))}
        </div>}
        <FloatingLabel
          controlId="description"
          label="????????????????"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            placeholder="????????????????"
            type="text"
            style={{ height: '100px' }}
            value={description.value}
            onChange={e => description.onChange(e)}
            onBlur={e => description.onBlur(e)}
          />
        </FloatingLabel>

        <Form.Group controlId="images" className="mb-3">
          <Form.Label>???????????????? ????????</Form.Label>
          <Form.Control
            type="file"
            multiple
            accept="image/*"
            files={images}
            onChange={e => loadFile(e)}
            key={inputFileKey}
          />
        </Form.Group>

        <div className="d-flex justify-content-around">
          <Button disabled={hasErrors} onClick={submit} variant="primary" type="submit">
            Submit
          </Button>
          <Button onClick={refresh} variant="secondary" type="submit">
            Refresh
          </Button>
        </div>

        <PreviewPhoto previews={previews} />

      </Form>
      <div className="m-auto" style={{ color: 'red' }} >{submitError}</div>
    </Container>
  )
});