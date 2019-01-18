//
// DO NOT EDIT! GENERATED FILE!
//

const validateProps = require('./validate-props')

let fetch = null
const api = {}

module.exports = fn => {
  fetch = fn
  return api
}

const validators = {}

validators['baseline_complete'] = async ({ path, method, body, mock }) => {
  const props = {
    noop: { type: 'Boolean', default: false },
    public: { type: 'String', required: true },
    private: { type: 'String', required: true },
    status: { type: 'String', required: true },
    instanceId: { type: 'String', required: true },
    region: { type: 'String', required: true },
    name: { type: 'String', required: true },
    id: { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['baseline_launch'] = async ({ path, method, body, mock }) => {
  const props = {
    name: { type: 'String', required: true },
    cloudcredentialid: { type: 'String', required: true },
    reposList: { type: 'String', required: true },
    subnetId: { type: 'String', required: true },
    imageId: { type: 'String', required: true },
    region: { type: 'String', required: true },
    assignIp: { type: 'Boolean', default: true },
    platform: { type: 'String' },
    deviceName: { type: 'String', default: '/dev/xvda' },

    //
    // these next ones we aren't exposing to users "yet" but we might
    // later so making it easier for later implementation on the UI.
    //
    instanceType: { type: 'String', default: 't2.medium' },
    volumeSize: { type: 'Number', default: 50 },
    volumeType: { type: 'String', default: 'gp2' },
    tags: { type: 'Array' }
  }

  return validateProps(props, body, mock)
}

validators['baseline_list'] = async ({ path, method, body, mock }) => {
  return validateProps({}, body, mock)
}

validators['baseline_bake_status'] = async ({ path, method, body, mock }) => {
  const props = {
    imageId: { type: 'String', required: true },
    region: { type: 'String', required: true },
    public: { type: 'String', required: true },
    private: { type: 'String', required: true },
    id: { type: 'String', required: true },
    noop: { type: 'Boolean', required: false },
    instanceId: { type: 'String', required: false }
  }

  return validateProps(props, body, mock)
}

validators['baseline_distribute'] = async ({ path, method, body, mock }) => {
  const props = {
    id: { type: 'String', required: true },
    sourceRegion: { type: 'String', required: true },
    regions: { type: 'Array', default: [] },
    sourceImage: { type: 'String', required: true },
    public: { type: 'String', required: true },
    private: { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['baseline_distro_status'] = async ({ path, method, body, mock }) => {
  const props = {
    imageId: { type: 'String', required: true },
    region: { type: 'String', required: true },
    public: { type: 'String', required: true },
    private: { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['baseline_delete'] = async ({ path, method, body, mock }) => {
  if (!method === 'DELETE') {
    return { err: { method: 'Must be DELETE' } }
  }

  const props = {
    public: { type: 'String', required: true },
    private: { type: 'String', required: true }
  }

  if (path.includes('copy')) {
    props.region = { type: 'String', required: true }
    props.imageId = { type: 'String', required: true }
  } else if (path.includes('copies')) {
    // expects [{ region, imageId }, ...]
    props.copies = { type: 'Array', required: true }
  } else {
    props.id = { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['baseline_delete'] = async ({ path, method, body, mock }) => {
  if (!method === 'DELETE') {
    return { err: { method: 'Must be DELETE' } }
  }

  const props = {
    public: { type: 'String', required: true },
    private: { type: 'String', required: true }
  }

  if (path.includes('copy')) {
    props.region = { type: 'String', required: true }
    props.imageId = { type: 'String', required: true }
  } else if (path.includes('copies')) {
    // expects [{ region, imageId }, ...]
    props.copies = { type: 'Array', required: true }
  } else {
    props.id = { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['baseline_delete'] = async ({ path, method, body, mock }) => {
  if (!method === 'DELETE') {
    return { err: { method: 'Must be DELETE' } }
  }

  const props = {
    public: { type: 'String', required: true },
    private: { type: 'String', required: true }
  }

  if (path.includes('copy')) {
    props.region = { type: 'String', required: true }
    props.imageId = { type: 'String', required: true }
  } else if (path.includes('copies')) {
    // expects [{ region, imageId }, ...]
    props.copies = { type: 'Array', required: true }
  } else {
    props.id = { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['bucket_list'] = async ({ path, method, body, mock }) => {
  const props = {
    public: { type: 'String', required: true },
    private: { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['bucket_objects'] = async ({ path, method, body, mock }) => {
  const props = {
    bucket: { type: 'String', required: true },
    region: { type: 'String', required: true },
    public: { type: 'String', required: true },
    private: { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['bucket_region'] = async ({ path, method, body, mock }) => {
  const props = {
    bucket: { type: 'String', required: true },
    public: { type: 'String', required: true },
    private: { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['bucket_regions'] = async ({ path, method, body, mock }) => {
  const props = {
    public: { type: 'String', required: true },
    private: { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['credentials_delete'] = async ({ path, method, body, mock }) => {
  const props = {
    id: { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['credentials_list'] = async ({ path, method, body, mock }) => {
  return validateProps({}, body, mock)
}

validators['credentials_save'] = async ({ path, method, body, mock }) => {
  const props = {
    type: { type: 'String', match: /aws|git/ }
  }

  if (path.includes('/aws')) {
    props.eid = { type: 'String', required: true }
    props.arn = { type: 'String', required: true }

    props['trust-policy'] = {
      type: 'String',
      required: true
    }

    props['access-policy'] = {
      type: 'String',
      required: true
    }

    props.subnetId = { type: 'String' }
    props.assignIp = { type: 'String' }
  }

  if (path.includes('/git')) {
    // props.key = { type: 'String', required: true }
    props.username = { type: 'String', required: true }

    // props.keypassword = { type: 'String' }
    props.password = { type: 'String' }
  }

  props.name = { type: 'String', required: true }

  return validateProps({}, body, mock)
}

validators['credentials_save'] = async ({ path, method, body, mock }) => {
  const props = {
    type: { type: 'String', match: /aws|git/ }
  }

  if (path.includes('/aws')) {
    props.eid = { type: 'String', required: true }
    props.arn = { type: 'String', required: true }

    props['trust-policy'] = {
      type: 'String',
      required: true
    }

    props['access-policy'] = {
      type: 'String',
      required: true
    }

    props.subnetId = { type: 'String' }
    props.assignIp = { type: 'String' }
  }

  if (path.includes('/git')) {
    // props.key = { type: 'String', required: true }
    props.username = { type: 'String', required: true }

    // props.keypassword = { type: 'String' }
    props.password = { type: 'String' }
  }

  props.name = { type: 'String', required: true }

  return validateProps({}, body, mock)
}

validators['credentials_verify'] = async ({ path, method, body, mock }) => {
  const props = {
    public: { type: 'String', required: true },
    private: { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['image_attrs'] = async ({ path, method, body, mock }) => {
  const props = {
    imageId: { type: 'String', required: true },
    makePublic: { type: 'Boolean' },
    public: { type: 'String', required: true },
    private: { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['image_tagger'] = async ({ path, method, body, mock }) => {
  const props = {
    imageId: { type: 'String', required: true },
    tags: { type: 'Array', required: true },
    region: { type: 'String', required: true },
    public: { type: 'String', required: true },
    private: { type: 'String', required: true }
  }

  const r = validateProps(props, body, mock)

  if (r.tags) {
    let i = r.tags.length
    r.tags = []

    while (i--) {
      const tag = r.tags[i]

      if (!tag.key) {
        return { err: { [`tags.${i}.key`]: 'Property required' } }
      }

      if (!tag.value) {
        return { err: { [`tags.${i}.value`]: 'Property required' } }
      }

      r.tags.push(tag)
    }
  }

  return r
}

validators['image_verify'] = async ({ path, method, body, mock }) => {
  const props = {
    imageId: { type: 'String', required: true },
    region: { type: 'String', required: true },
    public: { type: 'String', required: true },
    private: { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['repo_download'] = async ({ path, method, body, mock }) => {
  if (!method === 'GET') {
    return { err: { method: 'Must be GET' } }
  }

  const match = new RegExp([
    'ap-south-1', 'eu-west-3', 'eu-west-2',
    'eu-west-1', 'ap-northeast-2', 'ap-northeast-1',
    'sa-east-1', 'ca-central-1', 'ap-southeast-1',
    'ap-southeast-2', 'eu-central-1', 'us-east-1',
    'us-east-2', 'us-west-1', 'us-west-2'
  ].join('|'))

  const props = {
    repoUrl: { type: 'String', required: true },
    isTarball: { type: 'Boolean', default: false },
    public: { type: 'String', required: true },
    private: { type: 'String', required: true },
    region: { type: 'String', required: true, match },
    repoBranch: { type: 'String', default: 'HEAD' }
  }

  return validateProps(props, body, mock)
}

validators['repo_upload'] = async ({ path, method, body, mock }) => {
  if (!method === 'POST') {
    return { err: { method: 'Must be POST' } }
  }

  const match = new RegExp([
    'ap-south-1', 'eu-west-3', 'eu-west-2',
    'eu-west-1', 'ap-northeast-2', 'ap-northeast-1',
    'sa-east-1', 'ca-central-1', 'ap-southeast-1',
    'ap-southeast-2', 'eu-central-1', 'us-east-1',
    'us-east-2', 'us-west-1', 'us-west-2'
  ].join('|'))

  const props = {
    repoUrl: { type: 'String', required: true },
    public: { type: 'String', required: true },
    private: { type: 'String', required: true },
    region: { type: 'String', required: true, match },
    tarArchive: { type: 'String', required: true },
    zipArchive: { type: 'String', required: true },
    repoBranch: { type: 'String', default: 'HEAD' }
  }

  return validateProps(props, body, mock)
}

validators['repo_list'] = async ({ path, method, body, mock }) => {
  return validateProps({}, body, mock)
}

validators['repo'] = async ({ path, method, body, mock }) => {
  const props = {
    public: { type: 'String', required: true },
    private: { type: 'String', required: true },
    url: { type: 'String' },
    name: { type: 'String' },
    fileList: { type: 'Array' },
    assignIp: { type: 'Boolean' },
    subnetId: { type: 'String', required: true },
    branch: { type: 'String' },
    status: { type: 'String' },
    credentialid: { type: 'String', required: true },
    noWorker: { type: 'Boolean', default: false }
  }

  if (method === 'POST') {
    props.name = { ...props.name, required: true }
    props.fileList = { ...props.fileList, required: true }
    props.status = { ...props.status, required: true }
    props.url = { ...props.url, required: true }
    props.noWorker = { type: 'Boolean' }
  }

  return validateProps(props, body, mock)
}

validators['repo'] = async ({ path, method, body, mock }) => {
  const props = {
    public: { type: 'String', required: true },
    private: { type: 'String', required: true },
    url: { type: 'String' },
    name: { type: 'String' },
    fileList: { type: 'Array' },
    assignIp: { type: 'Boolean' },
    subnetId: { type: 'String', required: true },
    branch: { type: 'String' },
    status: { type: 'String' },
    credentialid: { type: 'String', required: true },
    noWorker: { type: 'Boolean', default: false }
  }

  if (method === 'POST') {
    props.name = { ...props.name, required: true }
    props.fileList = { ...props.fileList, required: true }
    props.status = { ...props.status, required: true }
    props.url = { ...props.url, required: true }
    props.noWorker = { type: 'Boolean' }
  }

  return validateProps(props, body, mock)
}

validators['repo_delete'] = async ({ path, method, body, mock }) => {
  if (!method === 'DELETE') {
    return { err: { method: 'Must be DELETE' } }
  }

  const props = {
    id: { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['sources_list'] = async ({ path, method, body, mock }) => {
  return validateProps({}, body, mock)
}

validators['source_get'] = async ({ path, method, body, mock }) => {
  const props = {
    id: { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['source_import'] = async ({ path, method, body, mock }) => {
  const props = {
    name: { type: 'String', required: true },
    public: { type: 'String', required: true },
    private: { type: 'String', required: true },
    region: { type: 'String' },
    imageId: { type: 'String' },
    tags: { type: 'Array' },
    accounts: { type: 'Array' },
    type: { type: 'String', required: true, match: /s3|ami/ },
    description: { type: 'String' },
    provider: { type: 'String' },
    makePublic: { type: 'Boolean' }
  }

  if (body.type === 's3') {
    props.architecture = { type: 'String', required: true }
    props.platform = { type: 'String', required: true }
    props.diskContainers = {
      type: 'Array',
      required: true,
      resolve: value => value.length > 0
    }
  } else {
    props.imageId = { ...props.imageId, required: true }
  }

  const r = validateProps(props, body, mock)

  const tags = []

  if (r.tags) {
    Object.keys(r.tags).map(k => {
      tags.push({ Key: k, Value: r.tags[k] })
    })
  }

  if (r.type === 's3') { // then it _must_ be an S3 import
    let i = r.diskContainers.length

    while (i--) {
      const container = r.diskContainers[i]

      if (typeof container !== 'object') {
        return { err: { [`diskContainers[${i}]`]: 'Expected an object' } }
      }

      if (!container.Format) {
        return { err: { [`diskContainers[${i}].Format`]: 'Property Required when type is "s3"' } }
      }

      if (typeof container.UserBucket !== 'object') {
        return { err: { [`diskContainers[${i}].UserBucket`]: 'Property Required when type is "s3"' } }
      }

      if (!container.UserBucket.S3Bucket) {
        return { err: { [`diskContainers[${i}].UserBucket.S3Bucket`]: 'Property Required when type is "s3"' } }
      }

      if (!container.UserBucket.S3Key) {
        return { err: { [`diskContainers[${i}].UserBucket.S3Key`]: 'Property Required when type is "s3"' } }
      }
    }
  }

  return r
}

validators['source_delete'] = async ({ path, method, body, mock }) => {
  const props = {
    id: {
      type: 'String',
      required: true,
      resolve: value => value.length <= 128
    }
  }

  return validateProps(props, body, mock)
}

validators['source_update'] = async ({ path, method, body, mock }) => {
  const props = {
    imageTaskId: { type: 'String' },
    imageId: { type: 'String' },
    public: { type: 'String', required: true },
    private: { type: 'String', required: true }
  }

  const r = validateProps(props, body, mock)

  if (!r.imageTaskId && !r.imageId) {
    return {
      err: {
        '[imageTaskId, imageId]': 'One is required'
      }
    }
  }

  if (r.imageTaskId && r.imageId) {
    return {
      err: {
        '[imageTaskId, imageId]': 'One is required, both were supplied'
      }
    }
  }

  return r
}

validators['source_import_status'] = async ({ path, method, body, mock }) => {
  const props = {
    imageTaskId: { type: 'String' },
    imageId: { type: 'String' },
    public: { type: 'String', required: true },
    private: { type: 'String', required: true }
  }

  const r = validateProps(props, body, mock)

  if (!r.imageTaskId && !r.imageId) {
    return {
      err: {
        '[imageTaskId, imageId]': 'One is required'
      }
    }
  }

  if (r.imageTaskId && r.imageId) {
    return {
      err: {
        '[imageTaskId, imageId]': 'One is required, both were supplied'
      }
    }
  }

  return r
}

api.imagepress = {
  'v0': {}
}

api.imagepress.v0.postBaselineComplete = async body => {
  const path = 'v0/baseline/complete'

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postBaselineLaunch = async body => {
  const path = 'v0/baseline/launch'

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getBaselineList = async body => {
  const path = 'v0/baseline/list'

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getBaselineBakeStatus = async body => {
  const path = 'v0/baseline/bake/status'

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postBaselineDistribute = async body => {
  const path = 'v0/baseline/distribute'

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getBaselineDistributeStatus = async body => {
  const path = 'v0/baseline/distribute/status'

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.deleteBaselineDeleteCopy = async body => {
  const path = 'v0/baseline/delete/copy'

  // Request
  const params = {
    method: 'DELETE',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.deleteBaselineDeleteCopies = async body => {
  const path = 'v0/baseline/delete/copies'

  // Request
  const params = {
    method: 'DELETE',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.deleteBaselineDelete = async body => {
  const path = 'v0/baseline/delete'

  // Request
  const params = {
    method: 'DELETE',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getBucketList = async body => {
  const path = 'v0/bucket/list'

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getBucketObjects = async body => {
  const path = 'v0/bucket/objects'

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getBucketRegion = async body => {
  const path = 'v0/bucket/region'

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getBucketRegions = async body => {
  const path = 'v0/bucket/regions'

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.deleteCredentials = async body => {
  const path = 'v0/credentials'

  // Request
  const params = {
    method: 'DELETE',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getCredentials = async body => {
  const path = 'v0/credentials'

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postCredentialsAws = async body => {
  const path = 'v0/credentials/aws'

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postCredentialsGit = async body => {
  const path = 'v0/credentials/git'

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postCredentialsVerify = async body => {
  const path = 'v0/credentials/verify'

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postImageAttrs = async body => {
  const path = 'v0/image/attrs'

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postImageTagger = async body => {
  const path = 'v0/image/tagger'

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getImageVerify = async body => {
  const path = 'v0/image/verify'

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getRepoDownload = async body => {
  const path = 'v0/repo/download'

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postRepoUpload = async body => {
  const path = 'v0/repo/upload'

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postRepoWorker = async body => {
  const path = 'v0/repo/worker'

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getRepoList = async body => {
  const path = 'v0/repo/list'

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getRepo = async body => {
  const path = 'v0/repo'

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postRepo = async body => {
  const path = 'v0/repo'

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.deleteRepo = async body => {
  const path = 'v0/repo'

  // Request
  const params = {
    method: 'DELETE',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getSources = async body => {
  const path = 'v0/sources'

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getSource = async body => {
  const path = 'v0/source'

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postSource = async body => {
  const path = 'v0/source'

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.deleteSource = async body => {
  const path = 'v0/source'

  // Request
  const params = {
    method: 'DELETE',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.putSource = async body => {
  const path = 'v0/source'

  // Request
  const params = {
    method: 'PUT',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postSourceStatus = async body => {
  const path = 'v0/source/status'

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}
