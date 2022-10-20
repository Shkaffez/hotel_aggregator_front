import { useInput } from '../hooks/useInput';
import { Button, FloatingLabel, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import PreviewPhoto from "../components/PreviewPhoto";

export const Admin = observer((props) => {

  const loadFile = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      let url = URL.createObjectURL(e.target.files[i]);
      setPreviews(previews => [...previews, url])
      setImages(e.target.files)
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
    console.log(title, description, images)

  }

  return (
    <Container>
      <h2>Добавить отель</h2>
      <Form>
        {(title.isDirty && title.errors.some(el => Boolean(el))) && <div style={{ color: 'red' }}>
          {title.errors.filter(el => Boolean(el))}
        </div>}

        <FloatingLabel
          controlId="city"
          label="Город"
          className="mb-3"

        >
          <Form.Control
            placeholder="город"
            type="text"
            value={city.value}
            onChange={e => city.onChange(e)}
            onBlur={e => city.onBlur(e)}
          />
        </FloatingLabel>

        <FloatingLabel
          controlId="title"
          label="Название"
          className="mb-3"

        >
          <Form.Control
            placeholder="введите название"
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
          label="Описание"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            placeholder="введите название"
            type="text"
            style={{ height: '100px' }}
            value={description.value}
            onChange={e => description.onChange(e)}
            onBlur={e => description.onBlur(e)}
          />
        </FloatingLabel>

        <Form.Group controlId="images" className="mb-3">
          <Form.Label>Добавьте фото</Form.Label>
          <Form.Control
            type="file"
            multiple
            accept="image/*"
            files={images}
            onChange={e => loadFile(e)}
            key={inputFileKey}
          />
        </Form.Group>
        <PreviewPhoto previews={previews} />
        <div className="d-flex justify-content-around">
          <Button disabled={hasErrors} onClick={submit} variant="primary" type="submit">
            Submit
          </Button>
          <Button onClick={refresh} variant="secondary" type="submit">
            Refresh
          </Button>
        </div>
      </Form>
    </Container>
  )
});