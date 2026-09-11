import softphoneVendorHeadsets from './dist/cjs/src/library/index.js';

const { default: HeadsetService, HeadsetEvents, VendorImplementation } = softphoneVendorHeadsets;

export { HeadsetEvents, VendorImplementation };
export default HeadsetService;
