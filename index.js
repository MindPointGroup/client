//
// DO NOT EDIT! GENERATED FILE!
//
const fetch = require('fetch')
const api = module.exports = {}
api.imagepress = {
  'v0': {}
}
api.imagepress.v0.postBaselineBake = body => {
  const params = {
    method: 'post',
    body
  }

  return fetch.request('/baseline/bake', params)
}

api.imagepress.v0.postBaselineComplete = body => {
  const params = {
    method: 'post',
    body
  }

  return fetch.request('/baseline/complete', params)
}

api.imagepress.v0.postBaselineLaunch = body => {
  const params = {
    method: 'post',
    body
  }

  return fetch.request('/baseline/launch', params)
}

api.imagepress.v0.getBaselineList = body => {
  const params = {
    method: 'get',
    body
  }

  return fetch.request('/baseline/list', params)
}

api.imagepress.v0.getBaselineStatus = body => {
  const params = {
    method: 'get',
    body
  }

  return fetch.request('/baseline/status', params)
}

api.imagepress.v0.getBucketList = body => {
  const params = {
    method: 'get',
    body
  }

  return fetch.request('/bucket/list', params)
}

api.imagepress.v0.getBucketObjects = body => {
  const params = {
    method: 'get',
    body
  }

  return fetch.request('/bucket/objects', params)
}

api.imagepress.v0.getBucketRegion = body => {
  const params = {
    method: 'get',
    body
  }

  return fetch.request('/bucket/region', params)
}

api.imagepress.v0.getBucketRegions = body => {
  const params = {
    method: 'get',
    body
  }

  return fetch.request('/bucket/regions', params)
}

api.imagepress.v0.deleteCredentials = body => {
  const params = {
    method: 'delete',
    body
  }

  return fetch.request('/credentials', params)
}

api.imagepress.v0.getCredentials = body => {
  const params = {
    method: 'get',
    body
  }

  return fetch.request('/credentials', params)
}

api.imagepress.v0.postCredentials = body => {
  const params = {
    method: 'post',
    body
  }

  return fetch.request('/credentials', params)
}

api.imagepress.v0.postCredentialsVerify = body => {
  const params = {
    method: 'post',
    body
  }

  return fetch.request('/credentials/verify', params)
}

api.imagepress.v0.getImage = body => {
  const params = {
    method: 'get',
    body
  }

  return fetch.request('/image', params)
}

api.imagepress.v0.postImage = body => {
  const params = {
    method: 'post',
    body
  }

  return fetch.request('/image', params)
}

api.imagepress.v0.deleteImage = body => {
  const params = {
    method: 'delete',
    body
  }

  return fetch.request('/image', params)
}

api.imagepress.v0.postImageAttrs = body => {
  const params = {
    method: 'post',
    body
  }

  return fetch.request('/image/attrs', params)
}

api.imagepress.v0.postImageCopy = body => {
  const params = {
    method: 'post',
    body
  }

  return fetch.request('/image/copy', params)
}

api.imagepress.v0.getImageCopyStatus = body => {
  const params = {
    method: 'get',
    body
  }

  return fetch.request('/image/copy/status', params)
}

api.imagepress.v0.postImageImport = body => {
  const params = {
    method: 'post',
    body
  }

  return fetch.request('/image/import', params)
}

api.imagepress.v0.postImageImportStatus = body => {
  const params = {
    method: 'post',
    body
  }

  return fetch.request('/image/import/status', params)
}

api.imagepress.v0.postImageTagger = body => {
  const params = {
    method: 'post',
    body
  }

  return fetch.request('/image/tagger', params)
}

api.imagepress.v0.getImageVerify = body => {
  const params = {
    method: 'get',
    body
  }

  return fetch.request('/image/verify', params)
}

api.imagepress.v0.getRepoDownload = body => {
  const params = {
    method: 'get',
    body
  }

  return fetch.request('/repo/download', params)
}

api.imagepress.v0.postRepoUpload = body => {
  const params = {
    method: 'post',
    body
  }

  return fetch.request('/repo/upload', params)
}

api.imagepress.v0.postRepoWorker = body => {
  const params = {
    method: 'post',
    body
  }

  return fetch.request('/repo/worker', params)
}

api.imagepress.v0.getRepo = body => {
  const params = {
    method: 'get',
    body
  }

  return fetch.request('/repo', params)
}

api.imagepress.v0.postRepo = body => {
  const params = {
    method: 'post',
    body
  }

  return fetch.request('/repo', params)
}
