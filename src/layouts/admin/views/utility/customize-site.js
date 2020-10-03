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
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Container, Card, CardBody, Collapse, Col, Row, CardText } from 'reactstrap';
import Button from '@material-ui/core/Button';
import Styles from './styles.module.css'
import FixedTextField from '../../../../components/FixedTextField'
import TransferList from '../../../../components/TransferList'
import Autocomplete from '@material-ui/lab/Autocomplete';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const rows = [
    createData('http://35.196.33.142:8060/DownloadFileFromInstance?imageId=ZjE1lgu&type=staticImage', 'JOE', 'Joe serves as our Production Manager, scheduling how and when the styles get manufactured.'),
    createData('http://35.196.33.142:8060/DownloadFileFromInstance?imageId=ZjE1lgu&type=staticImage', 'JOE', 'Joe serves as our Production Manager, scheduling how and when the styles get manufactured.'),
    createData('http://35.196.33.142:8060/DownloadFileFromInstance?imageId=ZjE1lgu&type=staticImage', 'JOE', 'Joe serves as our Production Manager, scheduling how and when the styles get manufactured.'),
];

function createData(image, name, description) {
    return { image, name, description };
}

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
});

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
    const classes = useStyles();
    const [collapse, setCollapse] = useState(false)
    const [collapseMulti, setCollapseMulti] = useState([false, false])
    const [accordion, setAccordion] = useState(0)
    const [fade, setFade] = useState(true)
    const [selectedData, setSelectedData] = useState({})
    const [file, setFile] = React.useState("");
    const [imagePreviewUrl, setImagePreviewUrl] = React.useState("");
    const [isheaderlink, setHeaderlink] = React.useState(true);
    const [iscollection, setCollection] = React.useState(false);
    const [ispricing, setPricing] = React.useState(false);
    const [isinventory, setInventory] = React.useState(false);
    const [isshipping, setShipping] = React.useState(false);
    const [isfcarousel, setFcarousel] = React.useState(false);
    const [isscarousel, setScarousel] = React.useState(false);
    const [istcarousel, setTcarousel] = React.useState(false);
    const [isfocarousel, setFocarousel] = React.useState(false);
    const [isficarousel, setFicarousel] = React.useState(false);
    const [issimg, setSimg] = React.useState(false);
    const [ismeet, setMeet] = React.useState(false);

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
                    Customize
            <small> site</small>
                </CCardHeader>
                <CCardBody>
                    <div id="accordion">
                        <Row style={{ marginBottom: 30 }}>
                            <Col xs={12} sm={12} lg={12}>
                                <CCardHeader id="headingOne">
                                    <CButton
                                        block
                                        className="text-left m-0 p-0 no-box-shadow"
                                        onClick={() => { setHeaderlink(!isheaderlink) }}
                                    >
                                        <h5 className="m-0 p-0">Header Links</h5>
                                    </CButton>
                                </CCardHeader>
                                <Collapse isOpen={isheaderlink}>
                                    <Card>
                                        <CardBody>
                                            <Row>
                                                <Col xs={12}>
                                                    <div className={Styles.allusers}>About Us</div>
                                                </Col>
                                                <Col xs={12} sm={6} lg={6}>
                                                    <div className={Styles.txtcss}>Name</div>
                                                    <CssTextField
                                                        placeholder="Enter Name"
                                                        variant="outlined"
                                                        id="custom-css-outlined-input"
                                                        style={{ width: '100%', marginBottom: '1vh' }}
                                                    />
                                                </Col>
                                                <Col xs={12} sm={6} lg={6}>
                                                    <div className={Styles.txtcss}>Link</div>
                                                    <CssTextField
                                                        placeholder="Enter link"
                                                        variant="outlined"
                                                        id="custom-css-outlined-input"
                                                        style={{ width: '100%', marginBottom: '1vh' }}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={12} sm={6} lg={6}>
                                                    <div className={Styles.txtcss}>Name</div>
                                                    <CssTextField
                                                        placeholder="Enter Name"
                                                        variant="outlined"
                                                        id="custom-css-outlined-input"
                                                        style={{ width: '100%', marginBottom: '1vh' }}
                                                    />
                                                </Col>
                                                <Col xs={12} sm={6} lg={6}>
                                                    <div className={Styles.txtcss}>Link</div>
                                                    <CssTextField
                                                        placeholder="Enter link"
                                                        variant="outlined"
                                                        id="custom-css-outlined-input"
                                                        style={{ width: '100%', marginBottom: '1vh' }}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={12} sm={6} lg={6}>
                                                    <div className={Styles.txtcss}>Name</div>
                                                    <CssTextField
                                                        placeholder="Enter Name"
                                                        variant="outlined"
                                                        id="custom-css-outlined-input"
                                                        style={{ width: '100%', marginBottom: '1vh' }}
                                                    />
                                                </Col>
                                                <Col xs={12} sm={6} lg={6}>
                                                    <div className={Styles.txtcss}>Link</div>
                                                    <CssTextField
                                                        placeholder="Enter link"
                                                        variant="outlined"
                                                        id="custom-css-outlined-input"
                                                        style={{ width: '100%', marginBottom: '1vh' }}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={12} sm={6} lg={6}>
                                                    <div className={Styles.txtcss}>Name</div>
                                                    <CssTextField
                                                        placeholder="Enter Name"
                                                        variant="outlined"
                                                        id="custom-css-outlined-input"
                                                        style={{ width: '100%', marginBottom: '1vh' }}
                                                    />
                                                </Col>
                                                <Col xs={12} sm={6} lg={6}>
                                                    <div className={Styles.txtcss}>Link</div>
                                                    <CssTextField
                                                        placeholder="Enter link"
                                                        variant="outlined"
                                                        id="custom-css-outlined-input"
                                                        style={{ width: '100%', marginBottom: '1vh' }}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={12}>
                                                    <Button variant="contained" style={{ backgroundColor: "#db4b31", color: '#fff' }}>
                                                        SAVE
                                                    </Button>
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
                                        onClick={() => { setFcarousel(!isfcarousel) }}
                                    >
                                        <h5 className="m-0 p-0">Home Page First carousel</h5>
                                    </CButton>
                                </CCardHeader>
                                <Collapse isOpen={isfcarousel}>
                                    <Card>
                                        <CardBody>
                                            <Row>
                                                <Col xs={12} sm={6} lg={3}>
                                                    <div className={Styles.txtcss}>Upload Image</div>
                                                    <input type="file" style={{ marginTop: 10, marginBottom: 10 }} />
                                                    <CssTextField
                                                        placeholder="Enter Url For shop now Button"
                                                        id="custom-css-outlined-input"
                                                        style={{ width: '100%', marginBottom: '1vh' }}
                                                    />
                                                </Col>
                                                <Col xs={12} sm={6} lg={3}>
                                                    <div className={Styles.txtcss}>Upload Image</div>
                                                    <input type="file" style={{ marginTop: 10, marginBottom: 10 }} />
                                                    <CssTextField
                                                        placeholder="Enter Url For shop now Button"
                                                        id="custom-css-outlined-input"
                                                        style={{ width: '100%', marginBottom: '1vh' }}
                                                    />
                                                </Col>
                                                <Col xs={12} sm={6} lg={3}>
                                                    <div className={Styles.txtcss}>Upload Image</div>
                                                    <input type="file" style={{ marginTop: 10, marginBottom: 10 }} />
                                                    <CssTextField
                                                        placeholder="Enter Url For shop now Button"
                                                        id="custom-css-outlined-input"
                                                        style={{ width: '100%', marginBottom: '1vh' }}
                                                    />
                                                </Col>
                                                <Col xs={12} sm={6} lg={3}>
                                                    <Button variant="contained" style={{ backgroundColor: "#db4b31", color: '#fff' }}>
                                                        UPLOAD
                                                    </Button>
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
                                        onClick={() => { setScarousel(!isscarousel) }}
                                    >
                                        <h5 className="m-0 p-0">Home Page Second Image And carousel</h5>
                                    </CButton>
                                </CCardHeader>
                                <Collapse isOpen={isscarousel}>
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
                                        onClick={() => { setTcarousel(!istcarousel) }}
                                    >
                                        <h5 className="m-0 p-0">Home Page Third carousel</h5>
                                    </CButton>
                                </CCardHeader>
                                <Collapse isOpen={istcarousel}>
                                    <Card>
                                        <CardBody>
                                            <Row>
                                                <Col xs={12} sm={6} lg={3}>
                                                    <div className={Styles.txtcss}>Upload Image</div>
                                                    <input type="file" style={{ marginTop: 10, marginBottom: 10 }} />
                                                    <CssTextField
                                                        placeholder="Enter Url For shop now Button"
                                                        id="custom-css-outlined-input"
                                                        style={{ width: '100%', marginBottom: '1vh' }}
                                                    />
                                                </Col>
                                                <Col xs={12} sm={6} lg={3}>
                                                    <div className={Styles.txtcss}>Upload Image</div>
                                                    <input type="file" style={{ marginTop: 10, marginBottom: 10 }} />
                                                    <CssTextField
                                                        placeholder="Enter Url For shop now Button"
                                                        id="custom-css-outlined-input"
                                                        style={{ width: '100%', marginBottom: '1vh' }}
                                                    />
                                                </Col>
                                                <Col xs={12} sm={6} lg={3}>
                                                    <div className={Styles.txtcss}>Upload Image</div>
                                                    <input type="file" style={{ marginTop: 10, marginBottom: 10 }} />
                                                    <CssTextField
                                                        placeholder="Enter Url For shop now Button"
                                                        id="custom-css-outlined-input"
                                                        style={{ width: '100%', marginBottom: '1vh' }}
                                                    />
                                                </Col>
                                                <Col xs={12} sm={6} lg={3}>
                                                    <Button variant="contained" style={{ backgroundColor: "#db4b31", color: '#fff' }}>
                                                        UPLOAD
                                                </Button>
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
                                        onClick={() => { setFocarousel(!isfocarousel) }}
                                    >
                                        <h5 className="m-0 p-0">Home Page Fourth</h5>
                                    </CButton>
                                </CCardHeader>
                                <Collapse isOpen={isfocarousel}>
                                    <Card>
                                        <CardBody>
                                            <Row>
                                                <Col xs={12} sm={6} lg={3}>
                                                    <div className={Styles.txtcss}>Upload Image</div>
                                                    <input type="file" style={{ marginTop: 10, marginBottom: 10 }} />
                                                    <CssTextField
                                                        placeholder="Enter Url For shop now Button"
                                                        id="custom-css-outlined-input"
                                                        style={{ width: '100%', marginBottom: '1vh' }}
                                                    />
                                                </Col>
                                                <Col xs={12} sm={6} lg={3}>
                                                    <div className={Styles.txtcss}>Upload Image</div>
                                                    <input type="file" style={{ marginTop: 10, marginBottom: 10 }} />
                                                    <CssTextField
                                                        placeholder="Enter Url For shop now Button"
                                                        id="custom-css-outlined-input"
                                                        style={{ width: '100%', marginBottom: '1vh' }}
                                                    />
                                                </Col>
                                                <Col xs={12} sm={6} lg={3}>
                                                    <div className={Styles.txtcss}>Upload Image</div>
                                                    <input type="file" style={{ marginTop: 10, marginBottom: 10 }} />
                                                    <CssTextField
                                                        placeholder="Enter Url For shop now Button"
                                                        id="custom-css-outlined-input"
                                                        style={{ width: '100%', marginBottom: '1vh' }}
                                                    />
                                                </Col>
                                                <Col xs={12} sm={6} lg={3}>
                                                    <Button variant="contained" style={{ backgroundColor: "#db4b31", color: '#fff' }}>
                                                        UPLOAD
                                                    </Button>
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
                                        onClick={() => { setFicarousel(!isficarousel) }}
                                    >
                                        <h5 className="m-0 p-0">Home Page Fifth Carousel</h5>
                                    </CButton>
                                </CCardHeader>
                                <Collapse isOpen={isficarousel}>
                                    <Card>
                                        <CardBody>
                                            <Row>
                                                <Col xs={12} sm={6} lg={3}>
                                                    <div className={Styles.txtcss}>Upload Image</div>
                                                    <input type="file" style={{ marginTop: 10, marginBottom: 10 }} />
                                                    <CssTextField
                                                        placeholder="Enter Url For shop now Button"
                                                        id="custom-css-outlined-input"
                                                        style={{ width: '100%', marginBottom: '1vh' }}
                                                    />
                                                </Col>
                                                <Col xs={12} sm={6} lg={3}>
                                                    <div className={Styles.txtcss}>Upload Image</div>
                                                    <input type="file" style={{ marginTop: 10, marginBottom: 10 }} />
                                                    <CssTextField
                                                        placeholder="Enter Url For shop now Button"
                                                        id="custom-css-outlined-input"
                                                        style={{ width: '100%', marginBottom: '1vh' }}
                                                    />
                                                </Col>
                                                <Col xs={12} sm={6} lg={3}>
                                                    <div className={Styles.txtcss}>Upload Image</div>
                                                    <input type="file" style={{ marginTop: 10, marginBottom: 10 }} />
                                                    <CssTextField
                                                        placeholder="Enter Url For shop now Button"
                                                        id="custom-css-outlined-input"
                                                        style={{ width: '100%', marginBottom: '1vh' }}
                                                    />
                                                </Col>
                                                <Col xs={12} sm={6} lg={3}>
                                                    <div className={Styles.txtcss}>Upload Image</div>
                                                    <input type="file" style={{ marginTop: 10, marginBottom: 10 }} />
                                                    <CssTextField
                                                        placeholder="Enter Url For shop now Button"
                                                        id="custom-css-outlined-input"
                                                        style={{ width: '100%', marginBottom: '1vh' }}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={12} sm={6} lg={3}>
                                                    <div className={Styles.txtcss}>Upload Image</div>
                                                    <input type="file" style={{ marginTop: 10, marginBottom: 10 }} />
                                                    <CssTextField
                                                        placeholder="Enter Url For shop now Button"
                                                        id="custom-css-outlined-input"
                                                        style={{ width: '100%', marginBottom: '1vh' }}
                                                    />
                                                </Col>
                                                <Col xs={12} sm={6} lg={3}>
                                                    <div className={Styles.txtcss}>Upload Image</div>
                                                    <input type="file" style={{ marginTop: 10, marginBottom: 10 }} />
                                                    <CssTextField
                                                        placeholder="Enter Url For shop now Button"
                                                        id="custom-css-outlined-input"
                                                        style={{ width: '100%', marginBottom: '1vh' }}
                                                    />
                                                </Col>
                                                <Col xs={12} sm={6} lg={3}>
                                                    <div className={Styles.txtcss}>Upload Image</div>
                                                    <input type="file" style={{ marginTop: 10, marginBottom: 10 }} />
                                                    <CssTextField
                                                        placeholder="Enter Url For shop now Button"
                                                        id="custom-css-outlined-input"
                                                        style={{ width: '100%', marginBottom: '1vh' }}
                                                    />
                                                </Col>
                                                <Col xs={12} sm={6} lg={3}>
                                                    <div className={Styles.txtcss}>Upload Image</div>
                                                    <input type="file" style={{ marginTop: 10, marginBottom: 10 }} />
                                                    <CssTextField
                                                        placeholder="Enter Url For shop now Button"
                                                        id="custom-css-outlined-input"
                                                        style={{ width: '100%', marginBottom: '1vh' }}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={12} sm={6} lg={3}>
                                                    <div className={Styles.txtcss}>Upload Image</div>
                                                    <input type="file" style={{ marginTop: 10, marginBottom: 10 }} />
                                                    <CssTextField
                                                        placeholder="Enter Url For shop now Button"
                                                        id="custom-css-outlined-input"
                                                        style={{ width: '100%', marginBottom: '1vh' }}
                                                    />
                                                </Col>
                                                <Col xs={12} sm={6} lg={3}>
                                                    <div className={Styles.txtcss}>Upload Image</div>
                                                    <input type="file" style={{ marginTop: 10, marginBottom: 10 }} />
                                                    <CssTextField
                                                        placeholder="Enter Url For shop now Button"
                                                        id="custom-css-outlined-input"
                                                        style={{ width: '100%', marginBottom: '1vh' }}
                                                    />
                                                </Col>
                                                <Col xs={12} sm={6} lg={3}>
                                                    <div className={Styles.txtcss}>Upload Image</div>
                                                    <input type="file" style={{ marginTop: 10, marginBottom: 10 }} />
                                                    <CssTextField
                                                        placeholder="Enter Url For shop now Button"
                                                        id="custom-css-outlined-input"
                                                        style={{ width: '100%', marginBottom: '1vh' }}
                                                    />
                                                </Col>
                                                <Col xs={12} sm={6} lg={3}>
                                                    <div className={Styles.txtcss}>Upload Image</div>
                                                    <input type="file" style={{ marginTop: 10, marginBottom: 10 }} />
                                                    <CssTextField
                                                        placeholder="Enter Url For shop now Button"
                                                        id="custom-css-outlined-input"
                                                        style={{ width: '100%', marginBottom: '1vh' }}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={12}>
                                                    <Col xs={12} sm={6} lg={3}>
                                                        <Button variant="contained" style={{ backgroundColor: "#db4b31", color: '#fff' }}>
                                                            UPLOAD
                      </Button>
                                                    </Col>z
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
                                        onClick={() => { setSimg(!issimg) }}
                                    >
                                        <h5 className="m-0 p-0">Home Page Second Image And carousel</h5>
                                    </CButton>
                                </CCardHeader>
                                <Collapse isOpen={issimg}>
                                    <Card>
                                        <CardBody>
                                            <Row>
                                                <Col xs={12} sm={6} lg={3}>
                                                    <div className={Styles.txtcss}>Upload Image</div>
                                                    <input type="file" style={{ marginTop: 10, marginBottom: 10 }} />
                                                    <CssTextField
                                                        placeholder="Enter Url For shop now Button"
                                                        id="custom-css-outlined-input"
                                                        style={{ width: '100%', marginBottom: '1vh' }}
                                                    />
                                                </Col>
                                                <Col xs={12} sm={6} lg={3}>
                                                    <div className={Styles.txtcss}>Upload Image</div>
                                                    <input type="file" style={{ marginTop: 10, marginBottom: 10 }} />
                                                    <CssTextField
                                                        placeholder="Enter Url For shop now Button"
                                                        id="custom-css-outlined-input"
                                                        style={{ width: '100%', marginBottom: '1vh' }}
                                                    />
                                                </Col>
                                                <Col xs={12} sm={6} lg={3}>
                                                    <div className={Styles.txtcss}>Upload Image</div>
                                                    <input type="file" style={{ marginTop: 10, marginBottom: 10 }} />
                                                    <CssTextField
                                                        placeholder="Enter Url For shop now Button"
                                                        id="custom-css-outlined-input"
                                                        style={{ width: '100%', marginBottom: '1vh' }}
                                                    />
                                                </Col>
                                                <Col xs={12} sm={6} lg={3}>
                                                    <div className={Styles.txtcss}>Upload Image</div>
                                                    <input type="file" style={{ marginTop: 10, marginBottom: 10 }} />
                                                    <CssTextField
                                                        placeholder="Enter Url For shop now Button"
                                                        id="custom-css-outlined-input"
                                                        style={{ width: '100%', marginBottom: '1vh' }}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={12}>
                                                    <Button variant="contained" style={{ backgroundColor: "#db4b31", color: '#fff' }}>
                                                        UPLOAD
                    </Button>
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
                                        onClick={() => { setMeet(!ismeet) }}
                                    >
                                        <h5 className="m-0 p-0">Meet Makers</h5>
                                    </CButton>
                                </CCardHeader>
                                <Collapse isOpen={ismeet}>
                                    <Card>
                                        <CardBody>
                                            <Row>
                                                <Col xs={12}>
                                                    <TableContainer component={Paper}>
                                                        <Table className={classes.table} aria-label="customized table">
                                                            <TableHead>
                                                                <TableRow>
                                                                    <StyledTableCell align="center">IMAGE</StyledTableCell>
                                                                    <StyledTableCell align="center">NAME</StyledTableCell>
                                                                    <StyledTableCell align="center">DESCRIPTION</StyledTableCell>
                                                                </TableRow>
                                                            </TableHead>
                                                            <TableBody>
                                                                {rows.map((row) => (
                                                                    <StyledTableRow key={row.name}>
                                                                        <StyledTableCell align="center">{row.image}</StyledTableCell>
                                                                        <StyledTableCell align="center">{row.name}</StyledTableCell>
                                                                        <StyledTableCell align="center">{row.description}</StyledTableCell>
                                                                    </StyledTableRow>
                                                                ))}
                                                            </TableBody>
                                                        </Table>
                                                    </TableContainer>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={12} sm={12} lg={12}>
                                                    <input type="file" style={{ marginTop: 10, marginBottom: 10 }} />
                                                    <CssTextField
                                                        placeholder="heading"
                                                        id="custom-css-outlined-input"
                                                        style={{ width: '100%', marginBottom: '1vh' }}
                                                    />
                                                    <CssTextField
                                                        placeholder="description"
                                                        id="custom-css-outlined-input"
                                                        style={{ width: '100%', marginBottom: '1vh' }}
                                                    />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col xs={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                                    < Button variant="contained" style={{ backgroundColor: "#db4b31", color: '#fff' }}>
                                                        UPLOAD
                                                    </Button>
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
        </TheLayout >
    )
}

export default CreateProduct