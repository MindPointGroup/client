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
    status: { type: 'String', required: true },
    instanceId: { type: 'String', required: true },
    region: { type: 'String', required: true },
    name: { type: 'String', required: true },
    id: { type: 'String', required: true } // baseline id
  }

  return validateProps(props, body, mock)
}

validators['baseline_launch'] = async ({ path, method, body, mock }) => {
  const props = {
    id: { type: 'String', required: false },
    name: { type: 'String', required: false },
    cloudcredentialid: { type: 'String', required: true },
    reposList: { type: 'Array', default: [] },
    subnetId: { type: 'String', required: true },
    imageId: { type: 'String', required: true },
    region: { type: 'String', required: true },
    assignIp: { type: 'Boolean', default: true },
    platform: { type: 'String' },
    deviceName: { type: 'String', default: '/dev/xvda' },
    tags: { type: 'Array', default: [] },
    //
    // these next ones we aren't exposing to users "yet" but we might
    // later so making it easier for later implementation on the UI.
    //
    instanceType: { type: 'String', default: 't2.medium' },
    volumeSize: { type: 'Number', default: 50 },
    volumeType: { type: 'String', default: 'gp2' }
  }

  const r = validateProps(props, body, mock)

  if (mock) return r

  if (!r.name && !r.id) {
    return { err: { 'name, id': 'One is required' } }
  }
  if (r.name && r.id) {
    return { err: { 'name, id': 'Both supplied. Only one is allowed.' } }
  }
  if (r.reposList.length > 0) {
    r.reposList.map((repo, index) => {
      if (!repo.branch) {
        return { err: { [`reposList[${index}].branch`]: 'Property required' } }
      }
      if (!repo.endpoint) {
        return { err: { [`reposList[${index}].endpoint`]: 'Property required' } }
      }
      if (!repo.scripts) {
        return { err: { [`reposList[${index}].scripts`]: 'Property required' } }
      }
      if (!repo.id) { // ref id of repo object
        return { err: { [`reposList[${index}].id`]: 'Property required' } }
      }
      if (!Array.isArray(repo.scripts)) {
        return { err: { [`reposList[${index}].scripts`]: 'Expected an array' } }
      }
      repo.scripts.map((script, sIndex) => {
        if (!script.path) {
          return { err: { [`reposList[${index}].scripts[${sIndex}.path]`]: 'Property required' } }
        }
        if (!script.exec) {
          return { err: { [`reposList[${index}].scripts[${sIndex}.exec]`]: 'Property required' } }
        }
      })
    })
  }
  return r
}

validators['baseline_list'] = async ({ path, method, body, mock }) => {
  return validateProps({}, body, mock)
}

validators['baseline_bake_status'] = async ({ path, method, body, mock }) => {
  const props = {
    imageId: { type: 'String', required: true },
    region: { type: 'String', required: true },
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
    sourceImage: { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['baseline_distro_status'] = async ({ path, method, body, mock }) => {
  const props = {
    imageId: { type: 'String', required: true },
    region: { type: 'String', required: true },
    id: { type: 'String', required: true }
  }

  return validateProps(props, body, mock)
}

validators['baseline_delete'] = async ({ path, method, body, mock }) => {
  if (!method === 'DELETE') {
    return { err: { method: 'Must be DELETE' } }
  }

  const props = {}

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

  const props = {}

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

  const props = {}

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
    id: { type: 'String', required: true } // cred ref id
  }

  return validateProps(props, body, mock)
}

validators['bucket_objects'] = async ({ path, method, body, mock }) => {
  const props = {
    bucket: { type: 'String', required: true },
    region: { type: 'String', required: true },
    id: { type: 'String', required: true } // cred ref id
  }

  return validateProps(props, body, mock)
}

validators['bucket_region'] = async ({ path, method, body, mock }) => {
  const props = {
    bucket: { type: 'String', required: true },
    id: { type: 'String', required: true } // cred ref id
  }

  return validateProps(props, body, mock)
}

validators['bucket_regions'] = async ({ path, method, body, mock }) => {
  const props = {
    id: { type: 'String', required: true } // cred ref id
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
  }

  if (path.includes('/git')) {
    if (body.key && body.password) {
      return { err: new Error('An ssh key and password were supplied, only one is allowed') }
    }
    if (body.key) {
      props.key = { type: 'String', required: false }
    } else {
      props.username = { type: 'String', required: true }
      props.password = { type: 'String', required: true }
    }
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
  }

  if (path.includes('/git')) {
    if (body.key && body.password) {
      return { err: new Error('An ssh key and password were supplied, only one is allowed') }
    }
    if (body.key) {
      props.key = { type: 'String', required: false }
    } else {
      props.username = { type: 'String', required: true }
      props.password = { type: 'String', required: true }
    }
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
    cloudcredentialid: { type: 'String', required: true },
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
    id: { type: 'String', required: true }, // repo ref id
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
    id: { type: 'String', required: true }
  }

  if (method === 'POST') {
    props.status = { type: 'String', required: false }
  }

  if (method === 'POST' && body.status !== 'failed') {
    props.noWorker = { type: 'Boolean', default: false }
    if (!body.id) {
      props.name = { type: 'String', required: true }
      props.url = { type: 'String', required: true }
      props.branch = { type: 'String', required: true }
      props.fileList = { type: 'Array', required: true }
      props.url = { type: 'String', required: true }
      props.cloudcredentialid = { type: 'String', required: true }
      props.gitcredentialid = { type: 'String', required: false }
      props.assignIp = { type: 'Boolean', default: false }
      props.subnetId = { type: 'String', required: true }
    }
  }

  return validateProps(props, body, mock)
}

validators['repo'] = async ({ path, method, body, mock }) => {
  const props = {
    id: { type: 'String', required: true }
  }

  if (method === 'POST') {
    props.status = { type: 'String', required: false }
  }

  if (method === 'POST' && body.status !== 'failed') {
    props.noWorker = { type: 'Boolean', default: false }
    if (!body.id) {
      props.name = { type: 'String', required: true }
      props.url = { type: 'String', required: true }
      props.branch = { type: 'String', required: true }
      props.fileList = { type: 'Array', required: true }
      props.url = { type: 'String', required: true }
      props.cloudcredentialid = { type: 'String', required: true }
      props.gitcredentialid = { type: 'String', required: false }
      props.assignIp = { type: 'Boolean', default: false }
      props.subnetId = { type: 'String', required: true }
    }
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
    cloudcredentialid: { type: 'String', required: true },
    region: { type: 'String' },
    imageId: { type: 'String' },
    tags: { type: 'Array', default: [] },
    accounts: { type: 'Array', default: [] },
    type: { type: 'String', required: true, match: /s3|ami/ },
    description: { type: 'String' },
    provider: { type: 'String' },
    makePublic: { type: 'Boolean', default: false }
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

  if (mock) return r

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
    id: { type: 'String', required: true },
    accounts: { type: 'Array', default: [] },
    makePublic: { type: 'Boolean', default: false },
    tags: { type: 'Array', default: [] }
  }

  const r = validateProps(props, body, mock)

  if (mock) return r

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
    id: { type: 'String', required: true } // ref id of source
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
