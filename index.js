//
// DO NOT EDIT! GENERATED FILE!
//

const Fetch = require('fetch')
const { default: Amplify } = require('aws-amplify')

const fetch = new Fetch({
  root: 'https://api.dev.imgpress.io',
  auth: Amplify.Auth
})

const api = module.exports = {}

const validators = {}

validators['baseline_bake'] = async ({ path, method, body }) => {
  const data = {
    instanceId: body.instanceId,
    imageName: body.imageName,
    imageId: body.imageId,
    region: body.region,
    noop: body.noop || false,
    arn: body.public,
    eid: body.private
  }

  if (!data.imageName) {
    return { err: { imageName: 'Property required' } }
  }

  if (!data.instanceId) {
    return { err: { instanceId: 'Property required' } }
  }

  if (!data.imageId) {
    return { err: { imageId: 'Property required' } }
  }

  if (!data.region) {
    return { err: { region: 'Property required' } }
  }

  if (!data.arn) {
    return { err: { public: 'Property required' } }
  }

  if (!data.eid) {
    return { err: { private: 'Property required' } }
  }

  return { data }
}

validators['baseline_complete'] = async ({ path, method, body }) => {
  const data = {
    noop: body.noop || false,
    arn: body.public,
    eid: body.private,
    status: body.status,
    instanceId: body.instanceId,
    region: body.region,
    name: body.name,
    id: body.id
  }

  if (!data.arn) {
    return { err: { public: 'Property required' } }
  }

  if (!data.eid) {
    return { err: { private: 'Property required' } }
  }

  if (!data.status) {
    return { err: { status: 'Property required' } }
  }

  if (!data.instanceId) {
    return { err: { instanceId: 'Property required' } }
  }

  if (!data.region) {
    return { err: { region: 'Property required' } }
  }

  if (!data.name) {
    return { err: { name: 'Property required' } }
  }

  if (!data.id) {
    return { err: { id: 'Property required' } }
  }

  return { data }
}

validators['baseline_launch'] = async ({ path, method, body }) => {
  const data = {
    name: body.name,
    cloudcredentialid: body.cloudCredentialId,
    reposList: body.repos,
    subnetId: body.subnetId,
    imageId: body.imageId,
    region: body.region,
    assignIp: body.assignIp || true,
    platform: body.platform,
    deviceName: body.deviceName || '/dev/xvda',
    // these next ones we aren't exposing to users "yet" but we might later so making it easier for later implementation on the UI
    instanceType: body.instanceType || 't2.medium',
    volumeSize: body.volumeSize || 50,
    volumeType: body.volumeType || 'gp2',
    // refreshToken: body.refreshToken,
    tags: body.tags
  }

  if (!data.name) {
    return { err: { name: 'Property required' } }
  }

  if (!data.reposList) {
    return { err: { repos: 'Property required' } }
  }

  if (!data.subnetId) {
    return { err: { subnetId: 'Property required' } }
  }

  if (!data.imageId) {
    return { err: { imageId: 'Property required' } }
  }

  if (!data.region) {
    return { err: { region: 'Property required' } }
  }

  if (!data.cloudcredentialid) {
    return { err: { cloudCredentialId: 'Property required' } }
  }

  if (data.tags && !Array.isArray(data.tags)) {
    return { err: { tags: 'Property malformed. Must be an array.' } }
  }

  // if (!opts.refreshToken) {
  //   return res(401, '"refreshToken" property required')
  // }

  return { data }
}

validators['baseline_list'] = async ({ path, method, body }) => {
  return { data: body }
}

validators['baseline_bake_status'] = async ({ path, method, body }) => {
  const data = {
    imageId: body.imageId,
    region: body.region,
    arn: body.public || body.arn,
    eid: body.private || body.eid,
    id: body.id,
    userid: body.userid,
    noop: body.noop // do not send an sqs messages
  }
  const debug = Debug.extend(body.userid)
  if (!data.id) {
    debug('request without "id" made')
    return { err: { id: 'Property required' } }
  }

  if (!data.arn) {
    debug('request without "public" made')
    return { err: { public: 'Property required' } }
  }

  if (!data.eid) {
    debug('request without "eid" made')
    return { err: { private: 'Property required' } }
  }

  if (!data.region) {
    debug('request without "region" made')
    return { err: { region: 'Property required' } }
  }

  if (!data.imageId) {
    debug('request without "imageId" made')
    return { err: { imageId: 'Property required' } }
  }

  return { data }
}

validators['baseline_distribute'] = async ({ path, method, body, req }) => {
  const data = {
    id: body.id, // source id
    sourceRegion: body.sourceRegion,
    regions: body.regions,
    sourceImage: body.sourceImage,
    arn: body.public,
    eid: body.private
  }

  if (data.arn) {
    return { err: { public: 'Property required' } }
  }

  if (!data.eid) {
    return { err: { private: 'Property required' } }
  }

  if (!data.id) {
    return { err: { id: 'Property required' } }
  }

  if (!data.sourceRegion) {
    return { err: { sourceRegion: 'Property required' } }
  }

  if (!Array.isArray(data.regions)) {
    return { err: { regions: 'Expected an array' } }
  }

  if (!data.sourceImage) {
    return { err: { sourceImage: 'Property required' } }
  }

  return { data }
}

validators['baseline_distro_status'] = async ({ path, method, body, req }) => {
  const data = {
    imageId: body.imageId,
    region: body.region,
    arn: body.public,
    eid: body.private
  }

  if (!data.arn) {
    return { err: { public: 'Property required' } }
  }

  if (!data.eid) {
    return { err: { private: 'Property required' } }
  }

  if (!data.imageId) {
    return { err: { imageId: 'Property required' } }
  }

  if (!data.region) {
    return { err: { region: 'Property required' } }
  }

  return { data }
}

validators['bucket_list'] = async ({ path, method, body }) => {
  const data = {
    arn: decodeURIComponent(body.public),
    eid: decodeURIComponent(body.private)
  }

  if (!data.arn) {
    return { err: { public: 'Property required' } }
  }

  if (!data.eid) {
    return { err: { private: 'Property required' } }
  }

  return { data }
}

validators['bucket_objects'] = async ({ path, method, body }) => {
  const data = {
    bucket: body.bucket,
    region: body.region,
    arn: body.public,
    eid: body.private
  }

  if (!data.arn) {
    return { err: { public: 'Property required' } }
  }

  if (!data.eid) {
    return { err: { private: 'Property required' } }
  }

  if (!data.bucket) {
    return { err: { bucket: 'Property required' } }
  }

  if (!data.region) {
    return { err: { region: 'Property required' } }
  }

  return { data }
}

validators['bucket_region'] = async ({ path, method, body }) => {
  const data = {
    bucket: body.bucket,
    arn: body.public,
    eid: body.private
  }

  if (!data.arn) {
    return { err: { public: 'Property required' } }
  }

  if (!data.eid) {
    return { err: { private: 'Property required' } }
  }

  if (!data.bucket) {
    return { err: { bucket: 'Property required' } }
  }

  return { data }
}

validators['bucket_regions'] = async ({ path, method, body }) => {
  const data = {
    arn: body.public,
    eid: body.private
  }

  if (!data.arn) {
    return { err: { public: 'Property required' } }
  }

  if (!data.eid) {
    return { err: { private: 'Property required' } }
  }

  return { data }
}

validators['credentials_delete'] = async ({ path, method, body }) => {
  const data = {
    id: body.id
  }

  if (!data.id) {
    return { err: { id: 'Property required' } }
  }

  return { data }
}

validators['credentials_list'] = async ({ path, method, body }) => {
  return { data: body }
}

validators['credentials_save'] = async ({ path, method, body }) => {
  const data = {}

  if (!['aws', 'git'].includes(body.type)) {
    return { err: { type: 'Property malformed' } }
  }

  data.type = body.type

  if (body.type === 'aws') {
    data.eid = body.eid
    data.arn = body.arn

    if (!data.arn) return { err: { arn: 'Property required' } }
    if (!data.subnetId) return { err: { subnetId: 'Property required' } }

    data['trust-policy'] = body['trust-policy']
    data['access-policy'] = body['access-policy']

    if (!body['trust-policy']) {
      return { err: { 'trust-policy': 'Property required' } }
    }

    if (!body['access-policy']) {
      return { err: { 'access-policy': 'Property required' } }
    }

    try {
      const statement = data['trust-policy'].Statement[0]
      data.eid = statement.Condition.StringEquals['sts:ExternalId']
    } catch (err) {
      return { err: { eid: 'Unable to parse eid from trust-policy' } }
    }

    data.subnetId = body.subnetId
    data.assignIp = body.assignIp
  }

  if (body.type === 'git') {
    data.key = body.key
    data.username = body.username

    if (!data.key) return { err: { key: 'Property required' } }
    if (!data.username) return { err: { username: 'Property required' } }

    data.keypassword = body.keypassword
    data.password = body.password
  }

  if (!body.name) {
    return { err: { name: 'Property required' } }
  }

  data.name = body.name

  return { data }
}

validators['credentials_verify'] = async ({ path, method, body }) => {
  const data = {
    arn: body.public,
    eid: body.private
  }

  if (!data.arn) {
    return { err: { public: 'Property required' } }
  }

  if (!data.eid) {
    return { err: { private: 'Property required' } }
  }

  return { data }
}

validators['image'] = async ({ path, method, body, req }) => {
  const data = {
    id: body.id,
    arn: body.public,
    eid: body.private
  }

  if (!data.arn) {
    return { err: { public: 'Property required' } }
  }

  if (!data.eid) {
    return { err: { private: 'Property required' } }
  }

  if (method === 'POST') {
    data.props = {}
    data.props.name = body.name
    data.props.description = body.description
    data.props.tags = body.tags

    if (!data.props.name) {
      return { err: { 'props.name': 'Property required' } }
    }

    if (!data.props.description) {
      return { err: { 'props.description': 'Property required' } }
    }

    if (!data.props.tags) {
      return { err: { 'props.tags': 'Property required' } }
    }
  }

  return { data }
}

validators['image_attrs'] = async ({ path, method, body, req }) => {
  const data = {
    imageId: body.imageId,
    makePublic: body.makePublic,
    arn: body.public,
    eid: body.private
  }

  if (!data.arn) {
    return { err: { public: 'Property required' } }
  }

  if (!data.eid) {
    return { err: { private: 'Property required' } }
  }

  if (!data.imageId) {
    return { err: { imageId: 'property required' } }
  }

  return { data }
}

validators['image_tagger'] = async ({ path, method, body, req }) => {
  const data = {
    arn: body.public,
    eid: body.private,
    region: body.region,
    imageId: body.imageId,
    tags: body.tags
  }

  if (!data.arn) {
    return { err: { public: 'Property required' } }
  }

  if (!data.eid) {
    return { err: { private: 'Property required' } }
  }

  if (!data.region) {
    return { err: { region: 'Property required' } }
  }

  if (!data.imageId) {
    return { err: { imageId: 'Property required' } }
  }

  if (!data.tags || !Array.isArray(data.tags)) {
    return { err: { tags: 'Expected an array' } }
  }

  if (body.tags) {
    let i = data.tags.length
    data.tags = []

    while (i--) {
      const tag = body.tags[i]

      if (!tag.key) {
        return { err: { [`tags.${i}.key`]: 'Property required' } }
      }

      if (!tag.value) {
        return { err: { [`tags.${i}.value`]: 'Property required' } }
      }

      data.tags.push(tag)
    }
  }

  return { data }
}

validators['image_verify'] = async ({ path, method, body, req }) => {
  const data = {
    id: body.id,
    arn: body.public,
    eid: body.private,
    region: body.region
  }

  if (!data.arn) {
    return { err: { public: 'Property required' } }
  }

  if (!data.eid) {
    return { err: { private: 'Property required' } }
  }

  if (!data.id) {
    return { err: { id: 'Property required' } }
  }

  if (!data.region) {
    return { err: { region: 'Property required' } }
  }

  return { data }
}

validators['repo_download'] = async ({ path, method, body, req }) => {
  const {
    repoUrl,
    isTarball,
    public: arn,
    private: eid,
    region
  } = body

  if (!method === 'GET') {
    return { err: { method: 'Must be GET' } }
  }

  if (!repoUrl) {
    return { err: { repoUrl: 'Property required' } }
  }

  if (!region) {
    return { err: { region: 'Property required' } }
  } else {
    const validRegions = [
      'ap-south-1', 'eu-west-3', 'eu-west-2',
      'eu-west-1', 'ap-northeast-2', 'ap-northeast-1',
      'sa-east-1', 'ca-central-1', 'ap-southeast-1',
      'ap-southeast-2', 'eu-central-1', 'us-east-1',
      'us-east-2', 'us-west-1', 'us-west-2'
    ]

    if (!validRegions.includes(region)) {
      return { err: { region: `Must be one of ${validRegions.join(', ')}` } }
    }
  }

  if (!arn) {
    return { err: { public: 'Property required' } }
  }

  if (!eid) {
    return { err: { private: 'Property required' } }
  }

  const data = {
    arn,
    eid,
    name: body.repoUrl.split(/[^\w\s]/gi).join(''),
    isTarball: isTarball !== undefined
  }

  return { data }
}

validators['repo_upload'] = async ({ path, method, body }) => {
  const {
    repoUrl,
    public: arn,
    private: eid,
    region,
    tarArchive,
    zipArchive,
    repoBranch
  } = body

  if (!method === 'POST') {
    return { err: { method: 'Must be POST' } }
  }

  if (!repoBranch) {
    return { err: { repoBranch: 'Property required' } }
  }

  if (!tarArchive) {
    return { err: { tarArchive: 'Property required' } }
  }

  if (!zipArchive) {
    return { err: { zipArchive: 'Property required' } }
  }

  if (!repoUrl) {
    return { err: { repoUrl: 'Property required' } }
  }

  if (!region) {
    return { err: { region: 'Property required' } }
  } else {
    const validRegions = [
      'ap-south-1', 'eu-west-3', 'eu-west-2',
      'eu-west-1', 'ap-northeast-2', 'ap-northeast-1',
      'sa-east-1', 'ca-central-1', 'ap-southeast-1',
      'ap-southeast-2', 'eu-central-1', 'us-east-1',
      'us-east-2', 'us-west-1', 'us-west-2'
    ]

    if (!validRegions.includes(region)) {
      return { err: { region: `Must be one of ${validRegions.join(', ')}` } }
    }
  }

  if (!arn) {
    return { err: { public: 'Property required' } }
  }

  if (!eid) {
    return { err: { private: 'Property required' } }
  }

  return { data: {
    arn,
    eid,
    region,
    tarArchive,
    zipArchive,
    name: body.repoUrl.split(/[^\w\s]/gi).join('')
  }}
}

validators['repo_worker'] = async ({ path, method, body, req }) => {
  if (typeof body !== 'object') {
    return { err: 'Expected object in body' }
  }

  const data = {
    arn: body.public,
    eid: body.private,
    repoData: body.repoData,
    name: body.name,
    repoBranch: body.repoBranch,
    token: req.headers.Authorization,
    subnetId: body.subnetId,
    assignIp: body.assignIp,
    tags: body.tags,
    region: body.region
  }

  if (!data.region) {
    return { err: { region: 'Property required' } }
  }

  if (!data.arn) {
    return { err: { public: 'Property required' } }
  }

  if (!data.eid) {
    return { err: { private: 'Property required' } }
  }

  if (!data.name) {
    return { err: { name: 'Property required' } }
  }

  if (!data.repoData) {
    return { err: { repoData: 'Property required' } }
  }

  if (typeof data.repoData !== 'object') {
    return { err: { repoData: 'Expected an object' } }
  }

  if (!data.repoData.endpoint) {
    return { err: { 'repoData.endpoint': 'Property required' } }
  }

  // not enforcing repoData.username or repoData.secret
  // because of possiblity that the repo targeted is
  // public.

  if (!data.subnetId) {
    return { err: { subnetId: 'Property required' } }
  }

  if (!data.assignIp) {
    return { err: { assignIp: 'Property required' } }
  }

  if (data.tags && !Array.isArray(data.tags)) {
    return { err: { tags: 'Property malformed' } }
  }

  return { data }
}

validators['repo'] = async ({ path, method, body, req }) => {
  const data = {
    arn: body.public,
    eid: body.private,
    url: body.url,
    name: body.name,
    fileList: body.fileList,
    assignIp: body.assignIp,
    subnetId: body.subnetId,
    branch: body.branch,
    status: body.status,
    credentialid: body.credentialid,
    noWorker: body.noWorker || false
  }

  if (method === 'POST') {
    if (!data.name) {
      return { err: { name: 'Property required' } }
    }

    if (data.fileList && !Array.isArray(data.fileList)) {
      return { err: { fileList: 'Expected an array' } }
    }

    if (!data.status) {
      return { err: { status: 'Property required' } }
    }

    if (!data.url) {
      return { err: { url: 'Property required' } }
    }

    if (typeof data.noWorker !== 'boolean') {
      return { err: { noWorker: `must use boolean, ${typeof data.noWorker} received` } }
    }
  }

  return { data }
}

validators['sources_list'] = async ({ path, method, body }) => {
  return {}
}

validators['source_get'] = async ({ path, method, body }) => {
  const opts = {
    id: body.id
  }

  return { data: opts }
}

validators['source_import'] = async ({ path, method, body }) => {
  const baseData = {
    name: body.name,
    arn: body.public,
    eid: body.private,
    region: body.region,
    tags: body.tags,
    accounts: body.accounts,
    type: body.type,
    description: body.description,
    provider: body.provider,
    makePublic: body.makePublic
  }

  if (!baseData.name) {
    return { err: { name: 'Property required' } }
  }

  if (!baseData.arn) {
    return { err: { public: 'Property required' } }
  }

  if (!baseData.eid) {
    return { err: { private: 'Property required' } }
  }

  if (!baseData.type) {
    return { err: { type: 'Property required' } }
  }

  if (!['s3', 'ami'].includes(baseData.type)) {
    return { err: { type: `Invalid value for type: "${baseData.type}", must be "s3" or "ami"` } }
  }

  const tags = []
  if (baseData.tags) {
    Object.keys(baseData.tags).map(k => {
      tags.push({ Key: k, Value: baseData.tags[k] })
    })
  }

  let data = { tags }

  if (data.tags && typeof data.tags !== 'object') {
    return { err: { tags: 'Expected an object' } }
  }

  if (baseData.type === 's3') { // then it _must_ be an S3 import
    data = {
      architecture: body.architecture,
      platform: body.platform,
      diskContainers: body.diskContainers,
      imageId: body.imageId,
      ...baseData
    }

    if (!data.architecture) {
      return { err: { architecture: 'Property Required when type is "s3"' } }
    }

    if (!data.platform) {
      return { err: { platform: 'Property Required when type is "s3"' } }
    }

    if (!data.diskContainers) {
      return { err: { diskContainers: 'Property Required when type is "s3"' } }
    }

    if (!Array.isArray(data.diskContainers)) {
      return { err: { diskContainers: 'Expected an array' } }
    }

    if (!data.diskContainers.length) {
      return { err: { diskContainers: 'Array is empty' } }
    }

    let i = data.diskContainers.length

    while (i--) {
      const container = data.diskContainers[i]

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
  } else {
    data = {
      ...baseData,
      imageId: body.imageId
    }

    if (!data.imageId) {
      return { err: { imageId: 'Property Required when type is "ami"' } }
    }
  }

  return { data }
}

validators['source_delete'] = async ({ path, method, body }) => {
  if (method !== 'DELETE') {
    return { err: 'Invalid HTTP Method. Must be DELETE' }
  }

  const data = {
    id: body.id
  }

  if (!data.id) {
    return { err: { id: 'Property required' } }
  }

  if (body.id.length > 128) {
    return { err: { id: 'expected a string >= 128' } }
  }

  return { data }
}

validators['source_update'] = async ({ path, method, body }) => {
  const data = {
    imageTaskIds: [body.imageTaskId],
    imageIds: [body.imageId],
    arn: body.public,
    eid: body.private
  }

  if (!data.arn) {
    return { err: { public: 'Property required' } }
  }

  if (!data.eid) {
    return { err: { private: 'Property required' } }
  }

  if (!body.imageTaskId && !body.imageId) {
    return { err: { '[imageTaskId, imageId]': 'One is required' } }
  }

  if (body.imageTaskId && body.imageId) {
    return { err: { '[imageTaskId, imageId]': 'One is required, both were supplied' } }
  }

  return { data: data }
}

validators['source_import_status'] = async ({ path, method, body }) => {
  const data = {
    imageTaskIds: [body.imageTaskId],
    imageIds: [body.imageId],
    arn: body.public,
    eid: body.private
  }

  if (!data.arn) {
    return { err: { public: 'Property required' } }
  }

  if (!data.eid) {
    return { err: { private: 'Property required' } }
  }

  if (!body.imageTaskId && !body.imageId) {
    return { err: { "['imageTaskId', 'imageId']": 'One is required' } }
  }

  if (body.imageTaskId && body.imageId) {
    return { err: { "['imageTaskId', 'imageId']": 'One is required, both were supplied' } }
  }
  return { data }
}

api.imagepress = {
  'v0': {}
}

api.imagepress.v0.postBaselineBake = async body => {
  const path = '/baseline/bake'

  // Validation
  const p = { body, path, method: 'POST' }
  const { err } = await validators['baseline_bake'](p)
  if (err) return { err }

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postBaselineComplete = async body => {
  const path = '/baseline/complete'

  // Validation
  const p = { body, path, method: 'POST' }
  const { err } = await validators['baseline_complete'](p)
  if (err) return { err }

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postBaselineLaunch = async body => {
  const path = '/baseline/launch'

  // Validation
  const p = { body, path, method: 'POST' }
  const { err } = await validators['baseline_launch'](p)
  if (err) return { err }

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getBaselineList = async body => {
  const path = '/baseline/list'

  // Validation
  const p = { body, path, method: 'GET' }
  const { err } = await validators['baseline_list'](p)
  if (err) return { err }

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getBaselineBakeStatus = async body => {
  const path = '/baseline/bake/status'

  // Validation
  const p = { body, path, method: 'GET' }
  const { err } = await validators['baseline_bake_status'](p)
  if (err) return { err }

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postBaselineDistribute = async body => {
  const path = '/baseline/distribute'

  // Validation
  const p = { body, path, method: 'POST' }
  const { err } = await validators['baseline_distribute'](p)
  if (err) return { err }

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getBaselineDistributeStatus = async body => {
  const path = '/baseline/distribute/status'

  // Validation
  const p = { body, path, method: 'GET' }
  const { err } = await validators['baseline_distro_status'](p)
  if (err) return { err }

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getBucketList = async body => {
  const path = '/bucket/list'

  // Validation
  const p = { body, path, method: 'GET' }
  const { err } = await validators['bucket_list'](p)
  if (err) return { err }

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getBucketObjects = async body => {
  const path = '/bucket/objects'

  // Validation
  const p = { body, path, method: 'GET' }
  const { err } = await validators['bucket_objects'](p)
  if (err) return { err }

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getBucketRegion = async body => {
  const path = '/bucket/region'

  // Validation
  const p = { body, path, method: 'GET' }
  const { err } = await validators['bucket_region'](p)
  if (err) return { err }

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getBucketRegions = async body => {
  const path = '/bucket/regions'

  // Validation
  const p = { body, path, method: 'GET' }
  const { err } = await validators['bucket_regions'](p)
  if (err) return { err }

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.deleteCredentials = async body => {
  const path = '/credentials'

  // Validation
  const p = { body, path, method: 'DELETE' }
  const { err } = await validators['credentials_delete'](p)
  if (err) return { err }

  // Request
  const params = {
    method: 'DELETE',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getCredentials = async body => {
  const path = '/credentials'

  // Validation
  const p = { body, path, method: 'GET' }
  const { err } = await validators['credentials_list'](p)
  if (err) return { err }

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postCredentials = async body => {
  const path = '/credentials'

  // Validation
  const p = { body, path, method: 'POST' }
  const { err } = await validators['credentials_save'](p)
  if (err) return { err }

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postCredentialsVerify = async body => {
  const path = '/credentials/verify'

  // Validation
  const p = { body, path, method: 'POST' }
  const { err } = await validators['credentials_verify'](p)
  if (err) return { err }

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getImage = async body => {
  const path = '/image'

  // Validation
  const p = { body, path, method: 'GET' }
  const { err } = await validators['image'](p)
  if (err) return { err }

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postImage = async body => {
  const path = '/image'

  // Validation
  const p = { body, path, method: 'POST' }
  const { err } = await validators['image'](p)
  if (err) return { err }

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postImageAttrs = async body => {
  const path = '/image/attrs'

  // Validation
  const p = { body, path, method: 'POST' }
  const { err } = await validators['image_attrs'](p)
  if (err) return { err }

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postImageTagger = async body => {
  const path = '/image/tagger'

  // Validation
  const p = { body, path, method: 'POST' }
  const { err } = await validators['image_tagger'](p)
  if (err) return { err }

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getImageVerify = async body => {
  const path = '/image/verify'

  // Validation
  const p = { body, path, method: 'GET' }
  const { err } = await validators['image_verify'](p)
  if (err) return { err }

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getRepoDownload = async body => {
  const path = '/repo/download'

  // Validation
  const p = { body, path, method: 'GET' }
  const { err } = await validators['repo_download'](p)
  if (err) return { err }

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postRepoUpload = async body => {
  const path = '/repo/upload'

  // Validation
  const p = { body, path, method: 'POST' }
  const { err } = await validators['repo_upload'](p)
  if (err) return { err }

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postRepoWorker = async body => {
  const path = '/repo/worker'

  // Validation
  const p = { body, path, method: 'POST' }
  const { err } = await validators['repo_worker'](p)
  if (err) return { err }

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getRepo = async body => {
  const path = '/repo'

  // Validation
  const p = { body, path, method: 'GET' }
  const { err } = await validators['repo'](p)
  if (err) return { err }

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postRepo = async body => {
  const path = '/repo'

  // Validation
  const p = { body, path, method: 'POST' }
  const { err } = await validators['repo'](p)
  if (err) return { err }

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getSources = async body => {
  const path = '/sources'

  // Validation
  const p = { body, path, method: 'GET' }
  const { err } = await validators['sources_list'](p)
  if (err) return { err }

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.getSource = async body => {
  const path = '/source'

  // Validation
  const p = { body, path, method: 'GET' }
  const { err } = await validators['source_get'](p)
  if (err) return { err }

  // Request
  const params = {
    method: 'GET',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postSource = async body => {
  const path = '/source'

  // Validation
  const p = { body, path, method: 'POST' }
  const { err } = await validators['source_import'](p)
  if (err) return { err }

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.deleteSource = async body => {
  const path = '/source'

  // Validation
  const p = { body, path, method: 'DELETE' }
  const { err } = await validators['source_delete'](p)
  if (err) return { err }

  // Request
  const params = {
    method: 'DELETE',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.putSource = async body => {
  const path = '/source'

  // Validation
  const p = { body, path, method: 'PUT' }
  const { err } = await validators['source_update'](p)
  if (err) return { err }

  // Request
  const params = {
    method: 'PUT',
    body
  }

  return fetch.request(path, params)
}

api.imagepress.v0.postSourceStatus = async body => {
  const path = '/source/status'

  // Validation
  const p = { body, path, method: 'POST' }
  const { err } = await validators['source_import_status'](p)
  if (err) return { err }

  // Request
  const params = {
    method: 'POST',
    body
  }

  return fetch.request(path, params)
}
