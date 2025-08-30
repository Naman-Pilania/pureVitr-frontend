const CORS_URL = 'https://cors-anywhere.herokuapp.com/';
const BASE_URL = `https://apistg-indiaai.dl6.in/`;
const NLB_URL = `https://global-nlb-70a6410694abcbab.elb.ap-south-1.amazonaws.com:3006/`;
const SELF_CARE_URL = `https://selfcare-indiaai.dl6.in/`;

export const environment = {
  webUrl: 'https://webstg-indiaai.dl6.in',
  production: false,
  landingBaseHref: '/',
  baseHref: '/web/',
  userBaseUrl: `${BASE_URL}user/idp/api/v1/`,
  datasetBaseUrl: `${BASE_URL}dataset/idp/api/v1/`,
  datasetBaseUrlV2: `${BASE_URL}dataset/idp/api/v2/`,
  authBaseUrl: `${BASE_URL}auth/idp/api/v1/`,
  modelBaseUrl: `${BASE_URL}model/idp/api/v1/`,
  modelBaseUrlV2: `${BASE_URL}model/idp/api/v2/`,
  usecaseBaseUrl: `${BASE_URL}usecase/idp/api/v1/`,
  adminBaseUrl: `${BASE_URL}ad/idp/api/v1/`,
  adminBaseUrlV2: `${BASE_URL}ad/idp/api/v2/`,
  adminUploadBaseUrl: `${BASE_URL}ad/idp/api/upload/`,
  masterBaseUrl: `${BASE_URL}ad/idp/api/v1/master/`,
  searchBaseUrl: `${BASE_URL}search/idp/api/v1/`,
  datasetUploadUrl: `${BASE_URL}du/idp/api/v1/`,
  datasetUploadUrlV2: `${BASE_URL}du/idp/api/v2/`,
  selfcareDatasetUploadUrl: `${SELF_CARE_URL}du/idp/api/v1/`,
  digilockerMeriPehchanUrl: 'https://digilocker.meripehchaan.gov.in/',
  adminNlbUrl: `${NLB_URL}ad/idp/api/v1/`,
  adminNlbUploadUrl: `${NLB_URL}ad/idp/api/upload/`,
  aiKoshPublicBaseUrl: `${BASE_URL}akp/idp/api/v1/`,
  selfCareUrl: {
    model: `${SELF_CARE_URL}model/idp/api/v1/`,
    dataset: `${SELF_CARE_URL}ad/idp/api/v1/`,
    datasetV2: `${SELF_CARE_URL}ad/idp/api/v2/`,
    datasetUpload: `${SELF_CARE_URL}ad/idp/api/upload/`,
    datasetChunkUpload: `${SELF_CARE_URL}du/idp/api/`,
  },
  // nlbUrl: {
  //   datasetUpload: `${NLB_URL}ad/idp/api/upload/`,
  //   dataset :  `${NLB_URL}ad/idp/api/v1/`
  // },
  ostBaseUrl: `${BASE_URL}ad/idp/api/v1/osticket`,
  x_api_key: 'W7BbQGVfVD6crtWJhO2Ri4f0B7zISM0F1LSopy0J',
  googleSiteVerification: 'eGsJCFqFsru56bkb5JkxP653aiprbdkcOergbAEOirA',
};
