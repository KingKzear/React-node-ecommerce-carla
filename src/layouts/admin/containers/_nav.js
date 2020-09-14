import React from 'react'
import CIcon from '@coreui/icons-react'

export default [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/admin/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Theme']
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Colors',
  //   to: '/theme/colors',
  //   icon: 'cil-drop',
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Typography',
  //   to: '/theme/typography',
  //   icon: 'cil-pencil',
  // },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Components']
  // },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Users',
    route: '/users',
    icon: <CIcon name="cil-people" customClasses="c-sidebar-nav-icon"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Create User',
        to: '/admin/user/create',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'All Users',
        to: '/admin/user/all',
      },      
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Products',
    route: '/products',
    icon: <CIcon name="cil-list" customClasses="c-sidebar-nav-icon"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Create Product',
        to: '/admin/product/create',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'All Products',
        to: '/admin/product/all',
      }, 
      {
        _tag: 'CSidebarNavItem',
        name: 'Styles',
        to: '/admin/product/styles',
      },     
      {
        _tag: 'CSidebarNavItem',
        name: 'Collections',
        to: '/admin/product/collections',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Alloy / Metals',
        to: '/admin/product/alloy-metals',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Gemstones',
        to: '/admin/product/gemstones',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Special Collections',
        to: '/admin/product/special-collections',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Promotional',
        to: '/admin/product/promotional',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Marketing Groups',
        to: '/admin/product/marketing-groups',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Categories',
        to: '/admin/product/categories',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Stone Color',
        to: '/admin/product/stone-color',
      },     
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Stores',
    route: '/stores',
    icon: <CIcon name="cil-home" customClasses="c-sidebar-nav-icon"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Create Store',
        to: '/admin/store/create',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'All Stores',
        to: '/admin/store/all',
      },     
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Orders',
    route: '/orders',
    icon: <CIcon name="cil-book" customClasses="c-sidebar-nav-icon"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Create Order',
        to: '/admin/order/create',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'All Orders',
        to: '/admin/order/all',
      },     
    ],
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Utility',
    route: '/utility',
    icon: <CIcon name="cil-apps" customClasses="c-sidebar-nav-icon"/>,
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Box Packing',
        to: '/admin/utility/box-packing',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Media',
        to: '/admin/utility/media',
      },      
      {
        _tag: 'CSidebarNavItem',
        name: 'Bulk Upload',
        to: '/admin/utility/bulk-upload',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Customize Website',
        to: '/admin/utility/customize-site',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Export',
        to: '/admin/utility/export',
      },     
    ],
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Payments',
    route: '/admin/payments',
    icon: <CIcon name="cil-dollar" customClasses="c-sidebar-nav-icon"/>
  }
]

