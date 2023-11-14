{{-- This file is used for menu items by any Backpack v6 theme --}}
<li class="nav-item"><a class="nav-link" href="{{ backpack_url('dashboard') }}"><i class="la la-home nav-icon"></i> {{ trans('backpack::base.dashboard') }}</a></li>

<x-backpack::menu-item title="Categories" icon="la la-question" :link="backpack_url('category')" />
<x-backpack::menu-item title="Delivery methods" icon="la la-question" :link="backpack_url('delivery-method')" />
<x-backpack::menu-item title="Orders" icon="la la-question" :link="backpack_url('order')" />
<x-backpack::menu-item title="Order products" icon="la la-question" :link="backpack_url('order-product')" />
<x-backpack::menu-item title="Paiement methods" icon="la la-question" :link="backpack_url('paiement-method')" />
<x-backpack::menu-item title="Products" icon="la la-question" :link="backpack_url('product')" />
<x-backpack::menu-item title="Subcategories" icon="la la-question" :link="backpack_url('subcategory')" />
<x-backpack::menu-item title="Users" icon="la la-question" :link="backpack_url('user')" />