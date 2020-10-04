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

const collectionsOptions = [
  {value: 'nancy_b_color', label: 'Nancy B Color'},
  {value: 'nancy_b_fashion', label: 'Nancy B Fashion'},
  {value: 'carla', label: 'Carla'}
]

const stylesOptions = [
  {value: 'rings', label: 'Rings'},
  {value: 'pendants', label: 'Pendants'},
  {value: 'necklaces', label: 'Necklaces'},
  {value: 'earring_charm', label: 'Earring Charm'},
  {value: 'anklets', label: 'Anklets'}
]

const alloyOptions = [
  {value: 'ss_rose_vermeil', label: 'SS Rose Vermeil'},
  {value: 'ss_yello_vermeil', label: 'SS Yellow Vermeil'},
  {value: 'gold_filled', label: 'Gold Filled'},
  {value: 'sterling_silver', label: 'Sterling Silver'},
  {value: 'kt_14', label: '14KT'},
  {value: 'kt_14_two_tone', label: '14KT Two Tone'},
  {value: 'kt_14_rose_gold', label: '14KT Rose Gold'},
  {value: 'kt_14_white_gold', label: '14KT White Gold'},
  {value: 'kt_14_yellow_gold', label: '14KT Yellow Gold'},
  {value: 'gc', label: 'GC'}
]


const gemstoneOptions = [
  {value: 'other_stones', label: 'Other Stones'},
  {value: 'synthetic', label: 'Synthetic'},
  {value: 'semi_precious', label: 'Semi Precious'},
  {value: 'precious', label: 'Precious'},
  {value: 'pearl', label: 'Pearl'},
  {value: 'onyx', label: 'Onyx'},
  {value: 'opal', label: 'Opal'},
  {value: 'no_stone', label: 'No Stone'},
]

const specialOptions = [
  {value: 'hoop_earring', label: 'Hoop Earrings'},
  {value: 'pendants', label: 'Pendants'},
  {value: 'silver', label: 'Silver'},
  {value: 'leather', label: 'Leather'},
]

const promotionalOptions = [
  {value: 'hoop_earring', label: 'Hoop Earrings'},
  {value: 'pendants', label: 'Pendants'},
  {value: 'silver', label: 'Silver'},
  {value: 'leather', label: 'Leather'},
]

const marketingOptions = [
  {value: 'hoop_earring', label: 'Hoop Earrings'},
  {value: 'pendants', label: 'Pendants'},
  {value: 'silver', label: 'Silver'},
  {value: 'leather', label: 'Leather'},
]

const categoriesOptions = [
  {value: 'hoop_earring', label: 'Hoop Earrings'},
  {value: 'pendants', label: 'Pendants'},
  {value: 'silver', label: 'Silver'},
  {value: 'leather', label: 'Leather'},
]

const tagsOptions = [
  {value: 'hoop_earring', label: 'Hoop Earrings'},
  {value: 'pendants', label: 'Pendants'},
  {value: 'silver', label: 'Silver'},
  {value: 'leather', label: 'Leather'},
]

const stoneColorOptions = [
  {value: 'hoop_earring', label: 'Hoop Earrings'},
  {value: 'pendants', label: 'Pendants'},
  {value: 'silver', label: 'Silver'},
  {value: 'leather', label: 'Leather'},
]

const CreateProduct = () => {
  const [collapse, setCollapse] = useState(false)
  const [collapseMulti, setCollapseMulti] = useState([false, false])
  const [accordion, setAccordion] = useState(0)
  const [fade, setFade] = useState(true)
  const [selectedData, setSelectedData] = useState({})

  // const toggle = (e) => {
  //   setCollapse(!collapse)
  //   e.preventDefault()
  // }

  // const toggleMulti = (type) => {
  //   let newCollapse = collapseMulti.slice()
  //   switch (type) {
  //     case "left":
  //       newCollapse[0] = !collapseMulti[0];
  //       break;
  //     case "right":
  //       newCollapse[1] = !collapseMulti[1];
  //       break;
  //     case "both":
  //       newCollapse[0] = !collapseMulti[0];
  //       newCollapse[1] = !collapseMulti[1];
  //       break;
  //     default:
  //   }
  //   setCollapseMulti(newCollapse)
  // }

  // const toggleFade = () => {
  //   setFade(!fade)
  // }

  const onDualListChange = (type, selected) => {
    console.log(type, selected)
    const data = {...selectedData, type: selected}
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
              <CCard className="mb-0">
                <CCardHeader id="headingOne">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0 no-box-shadow" 
                    onClick={() => setAccordion(accordion === 0 ? null : 0)}
                  >
                    <h5 className="m-0 p-0">General Information</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 0}>
                  <CCardBody>
                    <CRow>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="product_name">Product Name</CLabel>
                          <CInput id="product_name" placeholder="Enter product name" required />
                        </CFormGroup>
                      </CCol>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="retail_name">Retail Price</CLabel>
                          <CInput type='number' id="retail_price" placeholder="Enter retail price" required />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="sku">SKU</CLabel>
                          <CInput id="sku" placeholder="Enter product sku" required />
                        </CFormGroup>
                      </CCol>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="upload_image">Upload Image</CLabel>
                          <input type='file' id="upload_image" required style={{display: 'block'}}/>
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="description">Short Description</CLabel>
                          <CTextarea id="description" placeholder="Enter product short description" minLength={5} required />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol xs='12' className='text-right'>
                        <CButton color='primary'>Upload</CButton>
                      </CCol>
                    </CRow>
                  </CCardBody>
                </CCollapse>
              </CCard>
              <CCard className="mb-0">
                <CCardHeader id="headingTwo">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0 no-box-shadow" 
                    onClick={() => setAccordion(accordion === 1 ? null : 1)}
                  >
                    <h5 className="m-0 p-0">Map Collections</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 1}>
                  <CCardBody>
                    <CCardHeader>
                      Collections
                    </CCardHeader>
                    <CRow>
                      <CCol xs={12}>
                        <CFormGroup>
                        <DualListBox
                          options={collectionsOptions}
                          selected={selectedData['collections']}
                          onChange={(selected)=>onDualListChange('collections', selected)}
                        />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CCardHeader>
                      Styles
                    </CCardHeader>
                    <CRow>
                      <CCol xs={12}>
                        <CFormGroup>
                        <DualListBox
                          options={stylesOptions}
                          selected={selectedData['styles']}
                          onChange={(selected)=>onDualListChange('styles', selected)}
                        />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CCardHeader>
                      Alloy/Metal
                    </CCardHeader>
                    <CRow>
                      <CCol xs={12}>
                        <CFormGroup>
                        <DualListBox
                          options={alloyOptions}
                          selected={selectedData['alloy']}
                          onChange={(selected)=>onDualListChange('alloy', selected)}
                        />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CCardHeader>
                      Gemstones
                    </CCardHeader>
                    <CRow>
                      <CCol xs={12}>
                        <CFormGroup>
                        <DualListBox
                          options={gemstoneOptions}
                          selected={selectedData['gemstone']}
                          onChange={(selected)=>onDualListChange('gemstone', selected)}
                        />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CCardHeader>
                      Special Collections
                    </CCardHeader>
                    <CRow>
                      <CCol xs={12}>
                        <CFormGroup>
                        <DualListBox
                          options={specialOptions}
                          selected={selectedData['special_collection']}
                          onChange={(selected)=>onDualListChange('special_collection', selected)}
                        />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CCardHeader>
                      Promotional
                    </CCardHeader>
                    <CRow>
                      <CCol xs={12}>
                        <CFormGroup>
                        <DualListBox
                          options={promotionalOptions}
                          selected={selectedData['promotional']}
                          onChange={(selected)=>onDualListChange('promotional', selected)}
                        />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CCardHeader>
                      Marketing Group
                    </CCardHeader>
                    <CRow>
                      <CCol xs={12}>
                        <CFormGroup>
                        <DualListBox
                          options={marketingOptions}
                          selected={selectedData['marketing']}
                          onChange={(selected)=>onDualListChange('marketing', selected)}
                        />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CCardHeader>
                      Categories
                    </CCardHeader>
                    <CRow>
                      <CCol xs={12}>
                        <CFormGroup>
                        <DualListBox
                          options={categoriesOptions}
                          selected={selectedData['categories']}
                          onChange={(selected)=>onDualListChange('categories', selected)}
                        />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CCardHeader>
                      Tags
                    </CCardHeader>
                    <CRow>
                      <CCol xs={12}>
                        <CFormGroup>
                        <DualListBox
                          options={tagsOptions}
                          selected={selectedData['tags']}
                          onChange={(selected)=>onDualListChange('tags', selected)}
                        />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CCardHeader>
                      Stone Color
                    </CCardHeader>
                    <CRow>
                      <CCol xs={12}>
                        <CFormGroup>
                        <DualListBox
                          options={stoneColorOptions}
                          selected={selectedData['stoneColor']}
                          onChange={(selected)=>onDualListChange('stoneColor', selected)}
                        />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                  </CCardBody>
                </CCollapse>
              </CCard>
              <CCard className="mb-0">
                <CCardHeader id="headingThree">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0 no-box-shadow" 
                    onClick={() => setAccordion(accordion === 2 ? null : 2)}
                  >
                    <h5 className="m-0 p-0">Pricing</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 2}>
                  <CCardBody>
                    <CRow>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="regular_price">Regular Price ($)</CLabel>
                          <CInput type='number' id="regular_price" placeholder="Enter regular price" required />
                        </CFormGroup>
                      </CCol>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="sale_price">Sale Price</CLabel>
                          <CInput type='number' id="sale_price" placeholder="Enter sale price" required />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="surcharge">Surcharge ($)</CLabel>
                          <CInput type='number' id="surcharge" placeholder="Enter surcharge" required />
                        </CFormGroup>
                      </CCol>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="best_cost">Base Cost ($)</CLabel>
                          <CInput type='number' id="best_cost" placeholder="Enter base cost" required />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="base_increment">Base Increment ($)</CLabel>
                          <CInput type='number' id="base_increment" placeholder="Enter base increment" required />
                        </CFormGroup>
                      </CCol>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="current_gold_price">Current Gold Price ($)</CLabel>
                          <CInput type='number' id="current_gold_price" placeholder="Enter current gold price" required />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                  </CCardBody>
                </CCollapse>
              </CCard>
              <CCard className="mb-0">
                <CCardHeader id="headingThree">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0 no-box-shadow" 
                    onClick={() => setAccordion(accordion === 3 ? null : 3)}
                  >
                    <h5 className="m-0 p-0">Inventory</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 3}>
                  <CCardBody>
                    <CRow>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="mange_stock">Manage Stock</CLabel>
                          <CSelect id="manage_stock" required>
                            <option value='enable'>Enable</option>
                            <option value='disable'>Disable</option>
                          </CSelect>
                          
                        </CFormGroup>
                      </CCol>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="stock_quantity">Stock Quantity</CLabel>
                          <CInput type='number' id="stock_quantity" placeholder="Enter stock quantity" required />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="allow_back_orders">Allow Back Orders</CLabel>
                          <CSelect id="allow_back_orders" required>
                            <option value=''>Select</option>
                            <option value='allow'>Allow</option>
                            <option value='not_allow'>Do Not allow</option>
                            <option value='conditional_allow'>Allow But Notify Customer</option>
                          </CSelect>
                          
                        </CFormGroup>
                      </CCol>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="sold_individually">Sold Individually</CLabel>
                          <CSelect id="sold_individually" required>
                            <option value='enable'>Enable</option>
                            <option value='disable'>Disable</option>
                          </CSelect>
                        </CFormGroup>
                      </CCol>
                    </CRow>
                  </CCardBody>
                </CCollapse>
              </CCard>
              <CCard className="mb-0">
                <CCardHeader id="headingThree">
                  <CButton 
                    block 
                    color="link" 
                    className="text-left m-0 p-0 no-box-shadow" 
                    onClick={() => setAccordion(accordion === 4 ? null : 4)}
                  >
                    <h5 className="m-0 p-0">Shipping</h5>
                  </CButton>
                </CCardHeader>
                <CCollapse show={accordion === 4}>
                  <CCardBody>
                    <CRow>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="weight">Weight (oz)</CLabel>
                          <CInput type='number' id="weight" placeholder="Enter weight" required />
                        </CFormGroup>
                      </CCol>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="length">Length (in)</CLabel>
                          <CInput type='number' id="length" placeholder="Enter length" required />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="width">Width (in)</CLabel>
                          <CInput type='number' id="width" placeholder="Enter width" required />
                        </CFormGroup>
                      </CCol>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="height">Height (in)</CLabel>
                          <CInput type='number' id="height" placeholder="Enter height" required />
                        </CFormGroup>
                      </CCol>
                    </CRow>
                    <CRow>
                      <CCol md={6} xs={12}>
                        <CFormGroup>
                          <CLabel htmlFor="shipping_class">Shipping Class</CLabel>
                          <CSelect id="sold_individually" required>
                            <option value='no_shipping'>No Shipping</option>
                            <option value='ups_ground'>UPS Ground</option>
                            <option value='ups_ground_2'>UPS 2-Day</option>
                            <option value='ups_ground_3'>UPS 3-Day</option>
                            <option value='ups_ground_next'>UPS Next Day</option>
                            <option value='ups_ground_next'>UPS Next Day</option>
                            <option value='fed_ex_2'>FedEX 2-Day</option>
                            <option value='fed_ex_3'>FedEX 3-Day</option>
                            <option value='fed_ex_overnight'>FedEX Overnight</option>
                          </CSelect>
                        </CFormGroup>
                      </CCol>
                    </CRow>
                  </CCardBody>
                </CCollapse>
              </CCard>
            </div>
          </CCardBody>

          <CRow>
            <CCol xs={12} className='text-center'>
              <CButton color='primary' className='m-4'>Submit</CButton>
            </CCol>
          </CRow>
        </CCard>
    </TheLayout>
  )
}

export default CreateProduct
