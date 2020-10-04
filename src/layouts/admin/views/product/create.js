import React, { lazy, useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CFormGroup,
  CLabel,
  CInput,
  CSelect,
  CCollapse,
  CForm,
  CTextarea
} from '@coreui/react'
import DualListBox from 'react-dual-listbox';
import TheLayout from './../../containers/TheLayout'
import 'react-dual-listbox/lib/react-dual-listbox.css';
import { withStyles } from '@material-ui/core/styles';
import { Container, Card, CardBody, Collapse, Col, Row, CardText } from 'reactstrap';
import Button from '@material-ui/core/Button';
import Styles from './styles.module.css'
import FixedTextField from '../../../../components/FixedTextField'
import TransferList from '../../../../components/TransferList'
import Autocomplete from '@material-ui/lab/Autocomplete';

const CssTextField = withStyles({
  root: {
    '& label': {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'bold',
      fontSize: '150%',
      alignItems: 'center',
      textAlign: 'center',

      color: ' #000',
      transform: 'translate(22px, 16px) scale(1)'
    },

    '& label.Mui-focused': {
      color: ' #000',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fff',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        border: '1px solid #20a8d8',
        borderRadius: '19px'
      },
      '&:hover fieldset': {
        borderColor: ' #20a8d8',
      },
      '&.Mui-focused fieldset': {
        borderColor: ' #20a8d8',
      },
    },
  },
})(FixedTextField);

// const collectionsOptions = [
//   { value: 'nancy_b_color', label: 'Nancy B Color' },
//   { value: 'nancy_b_fashion', label: 'Nancy B Fashion' },
//   { value: 'carla', label: 'Carla' }
// ]
const collectionsOptions = [
  { title: 'Nancy B Color' },
  { title: 'Nancy B Fashion' },
  { title: 'Carla' },
]

const styles = [
  { title: 'Ring1' },
  { title: 'Ring2' },
  { title: 'Pendants' },
  { title: 'Necklaces' },
  { title: 'Earring Charm' },
]

const alloy = [
  { title: 'SS Rose Vermeil' },
  { title: 'SS Yellow Vermeil' },
  { title: 'Gold Filled' },
  { title: 'Sterling Silver' },
  { title: '14KT' },
  { title: '14KT Two Tone' },
  { title: '14KT Rose Gold' },
  { title: '14KT White Gold' },
  { title: '14KT Yellow Gold' },
  { title: 'GC' },
]

const gemstones = [
  { title: 'Other Stones' },
  { title: 'Synthetic' },
  { title: 'Semi Precious' },
  { title: 'Precious' },
  { title: 'Pearl' },
  { title: 'Onyx' },
  { title: 'Opal' },
  { title: 'No Stone' },
]

const special = [
  { title: 'Hoop Earrings' },
  { title: 'Pendants' },
  { title: 'Silver' },
  { title: 'Leather' },
  { title: 'Non-Pierced Earrings' },
  { title: 'Ear Climber' },
  { title: 'Necklaces' },
  { title: 'Link Bracelets' },
  { title: 'Crosses' },
  { title: 'Stackable Ring' },
  { title: 'Drop Earring' },
  { title: 'Earring Jackets' },
  { title: 'Charms' },
  { title: 'Slip On' },
  { title: 'Hoop' },
  { title: 'Cross' },
  { title: 'Stud Earring' },
  { title: 'fvs' },
]

const promotional = [
  { title: 'Close Out' },
  { title: 'Stud Earrings' },
  { title: 'Over Stock' },
  { title: 'Drop Necklaces' },
  { title: 'Drop Earrings' },
  { title: 'Hoops!' },
  { title: 'Holiday Hoop Collection' },
  { title: 'Top Selling New Arrivals' },
  { title: 'Big' },
  { title: 'Price Points Promo' },
  { title: 'JCK 2019' },
]

const marketing = [
  { title: 'rwefds' },
  { title: 'jhgfds' },
  { title: 'dscas' },
]

const catagories = [
  { title: 'Etchings' },
  { title: 'BWC' },
  { title: 'Box Sets' },
  { title: 'Baby' },
  { title: 'Avenues Collection' },
]

const tags = [
  { title: 'Moon1' },
  { title: 'Moon2' },
  { title: 'Moon3' },
  { title: 'Moon4' },
]

const stone = [
  { title: 'Citrine' },
  { title: 'Chrysoprase' },
  { title: 'Champagne Pearl' },
  { title: 'Caribbean Blue Chalcedony' },
  { title: 'Cameo' },
  { title: 'Brown Moonstone' },
  { title: 'Bronze Pearl' },
  { title: 'Bronze Mother of Pearl' },
]

const inventorystock = [
  { title: 'Enalble' },
  { title: 'Disable' },
]

const inventoryorder = [
  { title: 'Allow' },
  { title: 'Do Not Allow' },
  { title: 'Allow But Notify Customer' },
]

const inventorysold = [
  { title: 'Enalble' },
  { title: 'Disable' },
]

const shipping = [
  { title: 'No Shipping' },
  { title: 'UPS Ground' },
  { title: 'UPS 2-Day' },
  { title: 'UPS 3-Day' },
  { title: 'UPS Next Day' },
  { title: 'FedEx 2-Day' },
  { title: 'FedEx 3-Day' },
  { title: 'FedEx Overnight' },
]

const CreateProduct = () => {
  const [collapse, setCollapse] = useState(false)
  const [collapseMulti, setCollapseMulti] = useState([false, false])
  const [accordion, setAccordion] = useState(0)
  const [fade, setFade] = useState(true)
  const [selectedData, setSelectedData] = useState({})
  const [file, setFile] = React.useState("");
  const [imagePreviewUrl, setImagePreviewUrl] = React.useState("");
  const [isinformation, setInformation] = React.useState(true);
  const [iscollection, setCollection] = React.useState(false);
  const [ispricing, setPricing] = React.useState(false);
  const [isinventory, setInventory] = React.useState(false);
  const [isshipping, setShipping] = React.useState(false);

  const Edit = ({
    onSubmit,
    children,
  }) => {
    return (
      <div>
        <form onSubmit={onSubmit}>
          {/* <h1 style={{ color: '#e91e63' }}>Profile Card</h1> */}
          {children}
        </form>
      </div>
    );
  }


  const ImgUpload = ({
    onChange,
    src,
  }) => {
    return (
      <label htmlFor="photo-upload" className="custom-file-upload fas">
        <div className="img-wrap img-upload" >
          <img htmlFor="photo-upload" src={src} style={{ width: '100%', height: '100%', objectFit: 'fill' }} />
        </div>
        <input id="photo-upload" type="file" onChange={onChange} style={{ display: 'none' }} />
      </label>
    );
  }

  const photoUpload = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      setFile(file);
      setImagePreviewUrl(reader.result);
    }
    reader.readAsDataURL(file);
  }

  const onDualListChange = (type, selected) => {
    console.log(type, selected)
    const data = { ...selectedData, type: selected }
    setSelectedData(data)
  }

  return (
    <TheLayout>
      <CCard>
        <CCardHeader>
          Collapse
            <small> accordion</small>
        </CCardHeader>
        <CCardBody>
          <div id="accordion">
            <Row style={{ marginBottom: 30 }}>
              <Col xs={12} sm={12} lg={12}>
                <CCardHeader id="headingOne">
                  <CButton
                    block
                    className="text-left m-0 p-0 no-box-shadow"
                    onClick={() => { setInformation(!isinformation) }}
                  >
                    <h5 className="m-0 p-0">General Information</h5>
                  </CButton>
                </CCardHeader>
                <Collapse isOpen={isinformation}>
                  <Card>
                    <CardBody>
                      <Row>
                        <Col xs={12} sm={6} lg={6}>
                          <div className={Styles.txtcss}>Product Name</div>
                          <CssTextField
                            placeholder="Enter product name"
                            style={{ width: '100%', marginBottom: '1vh', padding: 10 }}
                          />
                        </Col>
                        <Col xs={12} sm={6} lg={6}>
                          <div className={Styles.txtcss}>Retail Price</div>
                          <CssTextField
                            placeholder="Enter retail price"
                            style={{ width: '100%', marginBottom: '1vh', padding: 10 }}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} sm={6} lg={6}>
                          <div className={Styles.txtcss}>Upload Image</div>
                          <Row>
                            <Col xs={12} sm={7} lg={7}>
                              <Edit onSubmit={(e) => this.handleSubmit(e)}>
                                <ImgUpload onChange={(e) => photoUpload(e)} src={imagePreviewUrl !== "" ? imagePreviewUrl : "https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true"} />
                              </Edit>
                            </Col>
                            <Col xs={12} sm={5} lg={5} style={{ alignSelf: 'flex-end' }}>
                              <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
                                <Button variant="contained" color="primary" style={{ backgroundColor: '#db4b31' }}>
                                  UPLOAD
                                </Button>
                              </div>
                            </Col>
                          </Row>
                        </Col>
                        <Col xs={12} sm={6} lg={6}>
                          <div className={Styles.txtcss}>Short Description</div>
                          <CssTextField
                            style={{ width: '100%', padding: 10 }}
                            multiline
                            rows={10}
                            placeholder="Enter short description"
                          />
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Collapse>
              </Col>
            </Row>
            <Row style={{ marginBottom: 30 }}>
              <Col xs={12} sm={12} lg={12}>
                <CCardHeader id="headingOne">
                  <CButton
                    block
                    className="text-left m-0 p-0 no-box-shadow"
                    onClick={() => { setCollection(!iscollection) }}
                  >
                    <h5 className="m-0 p-0">Map Collections</h5>
                  </CButton>
                </CCardHeader>
                <Collapse isOpen={iscollection}>
                  <Card>
                    <CardBody>
                      <Row style={{ marginBottom: 30 }}>
                        <Col xs={12} sm={12} lg={12}>
                          <TransferList title={"Collections"} leftItem={collectionsOptions} />
                        </Col>
                      </Row>
                      <Row style={{ marginBottom: 30 }}>
                        <Col xs={12} sm={12} lg={12}>
                          <TransferList title={"Styles"} leftItem={styles} />
                        </Col>
                      </Row>
                      <Row style={{ marginBottom: 30 }}>
                        <Col xs={12} sm={12} lg={12}>
                          <TransferList title={"Alloy/Metal"} leftItem={alloy} />
                        </Col>
                      </Row>
                      <Row style={{ marginBottom: 30 }}>
                        <Col xs={12} sm={12} lg={12}>
                          <TransferList title={"Gemstones"} leftItem={gemstones} />
                        </Col>
                      </Row>
                      <Row style={{ marginBottom: 30 }}>
                        <Col xs={12} sm={12} lg={12}>
                          <TransferList title={"Special Collection"} leftItem={special} />
                        </Col>
                      </Row>
                      <Row style={{ marginBottom: 30 }}>
                        <Col xs={12} sm={12} lg={12}>
                          <TransferList title={"Promotional"} leftItem={promotional} />
                        </Col>
                      </Row>
                      <Row style={{ marginBottom: 30 }}>
                        <Col xs={12} sm={12} lg={12}>
                          <TransferList title={"Marketing Group"} leftItem={marketing} />
                        </Col>
                      </Row>
                      <Row style={{ marginBottom: 30 }}>
                        <Col xs={12} sm={12} lg={12}>
                          <TransferList title={"Categories"} leftItem={catagories} />
                        </Col>
                      </Row>
                      <Row style={{ marginBottom: 30 }}>
                        <Col xs={12} sm={12} lg={12}>
                          <TransferList title={"Tags"} leftItem={tags} />
                        </Col>
                      </Row>
                      <Row style={{ marginBottom: 30 }}>
                        <Col xs={12} sm={12} lg={12}>
                          <TransferList title={"Stone Color"} leftItem={stone} />
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Collapse>
              </Col>
            </Row>
            <Row style={{ marginBottom: 30 }}>
              <Col xs={12} sm={12} lg={12}>
                <CCardHeader id="headingOne">
                  <CButton
                    block
                    className="text-left m-0 p-0 no-box-shadow"
                    onClick={() => { setPricing(!ispricing) }}
                  >
                    <h5 className="m-0 p-0">Pricing</h5>
                  </CButton>
                </CCardHeader>
                <Collapse isOpen={ispricing}>
                  <Card>
                    <CardBody>
                      <Row>
                        <Col xs={12} sm={6} lg={6}>
                          <div className={Styles.txtcss}>Regular Price ($)</div>
                          <CssTextField
                            placeholder="Enter regular price"
                            style={{ width: '100%', marginBottom: '1vh', padding: 10 }}
                          />
                        </Col>
                        <Col xs={12} sm={6} lg={6}>
                          <div className={Styles.txtcss}>Sale Price</div>
                          <CssTextField
                            placeholder="Enter sale price"
                            style={{ width: '100%', marginBottom: '1vh', padding: 10 }}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} sm={6} lg={6}>
                          <div className={Styles.txtcss}>Surcharge ($)</div>
                          <CssTextField
                            placeholder="Enter surcharge"
                            style={{ width: '100%', marginBottom: '1vh', padding: 10 }}
                          />
                        </Col>
                        <Col xs={12} sm={6} lg={6}>
                          <div className={Styles.txtcss}>Base Cost ($)</div>
                          <CssTextField
                            placeholder="Enter base cost"
                            style={{ width: '100%', marginBottom: '1vh', padding: 10 }}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} sm={6} lg={6}>
                          <div className={Styles.txtcss}>Base Increment ($)</div>
                          <CssTextField
                            placeholder="Enter base increment"
                            style={{ width: '100%', marginBottom: '1vh', padding: 10 }}
                          />
                        </Col>
                        <Col xs={12} sm={6} lg={6}>
                          <div className={Styles.txtcss}>Current Gold Price ($)</div>
                          <CssTextField
                            placeholder="Enter current gold price"
                            style={{ width: '100%', marginBottom: '1vh', padding: 10 }}
                          />
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Collapse>
              </Col>
            </Row>

            <Row style={{ marginBottom: 30 }}>
              <Col xs={12} sm={12} lg={12}>
                <CCardHeader id="headingOne">
                  <CButton
                    block
                    className="text-left m-0 p-0 no-box-shadow"
                    onClick={() => { setInventory(!isinventory) }}
                  >
                    <h5 className="m-0 p-0">Inventory</h5>
                  </CButton>
                </CCardHeader>
                <Collapse isOpen={isinventory}>
                  <Card>
                    <CardBody>
                      <Row>
                        <Col xs={12} sm={6} lg={6}>
                          <div className={Styles.txtcss}>Mange Stock</div>
                          <Autocomplete
                            options={inventorystock}
                            getOptionLabel={(option) => option.title}
                            style={{ width: '100%', padding: 10 }}
                            renderInput={(params) => <CssTextField {...params} />}
                          />
                        </Col>
                        <Col xs={12} sm={6} lg={6}>
                          <div className={Styles.txtcss}>Stock Quantity</div>
                          <CssTextField
                            placeholder="Enter stock quantity"
                            style={{ width: '100%', marginBottom: '1vh', padding: 10 }}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} sm={6} lg={6}>
                          <div className={Styles.txtcss}>Allow Back Orders</div>
                          <Autocomplete
                            options={inventoryorder}
                            getOptionLabel={(option) => option.title}
                            style={{ width: '100%', padding: 10 }}
                            renderInput={(params) => <CssTextField {...params} />}
                          />
                        </Col>
                        <Col xs={12} sm={6} lg={6}>
                          <div className={Styles.txtcss}>Sold Individually</div>
                          <Autocomplete
                            options={inventorysold}
                            getOptionLabel={(option) => option.title}
                            style={{ width: '100%', padding: 10 }}
                            renderInput={(params) => <CssTextField {...params} />}
                          />
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Collapse>
              </Col>
            </Row>
            <Row style={{ marginBottom: 30 }}>
              <Col xs={12} sm={12} lg={12}>
                <CCardHeader id="headingOne">
                  <CButton
                    block
                    className="text-left m-0 p-0 no-box-shadow"
                    onClick={() => { setShipping(!isshipping) }}
                  >
                    <h5 className="m-0 p-0">Shipping</h5>
                  </CButton>
                </CCardHeader>
                <Collapse isOpen={isshipping}>
                  <Card>
                    <CardBody>
                      <Row>
                        <Col xs={12} sm={6} lg={6}>
                          <div className={Styles.txtcss}>Weight (oz)</div>
                          <CssTextField
                            placeholder="Enter weight"
                            style={{ width: '100%', marginBottom: '1vh', padding: 10 }}
                          />
                        </Col>
                        <Col xs={12} sm={6} lg={6}>
                          <div className={Styles.txtcss}>Length (in)</div>
                          <CssTextField
                            placeholder="Enter length"
                            style={{ width: '100%', marginBottom: '1vh', padding: 10 }}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} sm={6} lg={6}>
                          <div className={Styles.txtcss}>width (in)</div>
                          <CssTextField
                            placeholder="Enter width"
                            style={{ width: '100%', marginBottom: '1vh', padding: 10 }}
                          />
                        </Col>
                        <Col xs={12} sm={6} lg={6}>
                          <div className={Styles.txtcss}>Height (in)</div>
                          <CssTextField
                            placeholder="Enter height"
                            style={{ width: '100%', marginBottom: '1vh', padding: 10 }}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} sm={6} lg={6}>
                          <div className={Styles.txtcss}>Shipping Class</div>
                          <Autocomplete
                            options={shipping}
                            getOptionLabel={(option) => option.title}
                            style={{ width: '100%', padding: 10 }}
                            renderInput={(params) => <CssTextField {...params} />}
                          />
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>
                </Collapse>
              </Col>
            </Row>
            <Row>
              <Col xs={12} style={{ textAlign: 'center', marginBottom: 30, marginTop: 30 }}>
                <Button variant="contained" color="primary" style={{ backgroundColor: '#db4b31' }}>
                  SUBMIT
                </Button>
              </Col>
            </Row>
          </div>
        </CCardBody>
      </CCard>
    </TheLayout>
  )
}

export default CreateProduct